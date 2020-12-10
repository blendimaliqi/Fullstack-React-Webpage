/** GJENBRUK FRA FORELESERS EKSEMPLER (LAGT MED EGNE MELDINGER I RESULTAT)
 * Util funksjon som henter token fra bruker og konfigurer en cookie (expire, httpOnly
 * og sameSite) og kaster en 200(OK) sammen med cookie, token, bruker og egne meldinger
 * for registrering og login
 * @param {User} user - bruker
 * @param {*} res
 */
export const sendToken = (user, res) => {
  const token = user.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: true,
  };

  res
    .status(200)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        email: user.email,
        role: user.role,
      },
      message: `Velkommen til lg rør ${user.name}`,
      loginMessage: `Velykket innlogging, logget inn med: ${user.email}`,
    });
};
