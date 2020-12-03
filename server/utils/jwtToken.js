//Denne metoden kalles når brukeren logger inn i auth.js
export const sendToken = (user, res) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE_TIME * 24* 60 * 60* 1000 //utgjør en dag 24 timer * 60 min *60 sec * 1000 milisec
        ),
        httpOnly: true,
        samesite: true,
    };

    //Betyr at når vi er i produksjon så skal options kun gjelde i SSL
    if(process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.status(200).cookie('token', token, options).json({
        success: true,
        token, 
        user: {
            email: user.email,
            role: user.role,
        },
    });
}; 