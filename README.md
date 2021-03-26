# ITF31619-Webapplikasjoner
#### Eksamen i webapplikasjoner 2020

## For å få applikasjonen vår i gang:
Trenger å ha lastet ned yarn, mongodb og mongodbCompass (hvis det er preferert) og det er viktig at node verjonen er under 15 
(grunnet toaster biblotek som ikke er kompatibel med nyeste node versjon som kom ut i oktober 2020). 
Må sette NODE_ENV til development for å kunne lage admin bruker og superadmin bruker
fra postman. Eventuelt sette NODE_ENV til production hvis dere skal teste sikkerhets implementasjonen 
(limiter er på, med 100 requests, så hvis dere vil teste sikkerheten på den, kan denne settes ned)
Prosjektet benytter seg av react 17.0.1 så vesjon burde være dette for å sikre at
alt funker.

Åpne prosjektet i Visual Studio Code.
Bruk to terminaler, en hvor du bruker cd client for å gå til client mappen, og en cd server for å 
gå til server-mappen.
Kjør "yarn" i begge terminalene så alle dependencies blir installert.
Kjør "yarn dev" i begge mappene så prosjektet kjører.

### Start MongoDb fra Compass eller terminal

#### I MongoDB Compass:
 - Koble deg på Hostname: localhost og Port: 27017. Refresh Compass og se at lgror-databasen har kommet opp.
 - Gå til "localhost:3000" i nettleseren.
#### I terminalen
- Naviger deg til bin mappen til mongodb. Eks på dette: C:\Program Files\MongoDB\Server\4.4\bin. 
- Fra bin mappa kjør "mongo" i terminalen.
- Gå til "localhost:3000" i nettleseren.

Om dette går fint så skal nettsiden kunne benyttes. 


### Server .env variabler:
- BASEURL=/api/v1
- NODE_ENV=development
- PORT=5000
- DATABASE_LOCAL=mongodb://localhost:27017/lgror
- JWT_SECRET=detvarengangenhemmelighet
- JWT_EXPIRES_TIME=7d
- COOKIE_EXPIRE_TIME=7
- EMAIL_HOST= smtp.mailtrap.io
- EMAIL_PORT=2525
- EMAIL_USER=fe0f5f04909d5c
- EMAIL_PASSWORD=70ff19a8703ee7
- EMAIL_FROM=noreply@lg@lgror.no
- EMAIL_FROM_NAME=LGROR

### Client.env variabler:
- BASE_URL=http://localhost:5000/
- API_VERSION=/api/v1
- NODE_ENV=development


# Steder man har lånt kode eller kopiert kode
 
 ## TATT FRA EGEN OBLIG
#### Fil: client/styles/GlobalStyle - Hentet fra egen oblig, siste oblig (Inpsirert av: [Stackoverflow.com](https://stackoverflow.com/questions/46760861/styled-components-how-to-set-styles-on-html-or-body-tag))

 ### GJENBRUK/INSPIRERT FRA FORELESERS EKSEMPLER:
 # BACKEND:

 #### Fil: server/utils/apiFilters: ApiFilters klassen, filter funksjon ,searchByQuery funksjon, pagination funksjon, linje 43-50 - GJENBRUK OG TILPASSET

#### Fil: server/utils/errorHandler - ErrorHandler klassen - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/utils/validation.js - hele filen er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/utils/jwtToken.js - hele filen er GJENBRUK AV FORELESERS EKSEMPEL utenom: egne meldinger i resultat

#### Fil: server/utils/sendEmail.js - hele filen er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/utils/sendEmailAdmin.js - hele filen er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/services/article.js
- funksjon getArticleById, linje 9-10 - INSPIRASJON FRA FORELESERS EKSEMPEL
- funksjon listArticles, linje 18-35 -  GJENBRUK OG TILPASSET AV FORELESERS EKSEMPEL
- funksjon createArticle, linje 4    -  INSPIRASJON
- funksjon updateArticle, linje 48-53 - INSPIRASJON FRA FORELESERS EKSEMPEL
- funksjon removeArticle, line 60-63 -  INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/services/author.js - funksjon getAuthorById, funksjon listAuthors, funksjon createAuthor - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/services/category.js - funksjon getAuthorById, funksjon listAuthors, funksjon createAuthor, linje 18 - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/services/image.js - funksjon uploadImage, funksjon getImageById, linje 23 - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/services/user.js - funksjon getUserById, funksjon getUserByEmail, funksjon createUser, linje 26 - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/services/mail.js - funksjon listMails, funksjon getMailById, funksjon createMail - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/services/index.js (Måten å exportere servicer fra samme sted basert på det vi har lært av foreleser)

#### Fil: server/routes/image.js - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/routes/category.js - INSPIRERT FORELESERS EKSEMPEL

#### Fil: server/routes/author.js - INSPIRERT FORELESERS EKSEMPEL

#### Fil: server/routes/auth.js - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/routes/article.js - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/models/user.js:
- UserSchema - linje 9-37 - INSPIRASJON FRA FORELESERS EKSEMPEL
- UserSchema prehook - linje 40-43 - GJENBRUK AV FORELESERS EKSEMPEL
- UserSchema comparePassword - linje 53-57 - GJENBRUK AV FORELESERS EKSEMPEL
- UserSchema virtual - linje 60-65 - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/models/image.js:
- ImageSchema - linje 6-25 - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/models/article.js:
- index - linje 62-64 - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/middleware/image.js:
- fileFilter - linje 9-18 - GJENBRUK AV FORELESERS EKSEMPEL
- storate - linje 27-34 - GJENBRUK AV FORELESERS EKSEMPEL (lagt til customvalue i filnavn)
- upload - linje 40-44 - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/middleware/errors.js: - hele filen er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/middleware/validate.js: - hele filen er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/middleware/catchAsync.js: - hele filen er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/middleware/auth.js: - hele filen er GJENBRUK AV FORELESERS EKSEMPEL
- isAuthenticated - linje 13-34 - GJENBRUK AV FORELESERS EKSEMPEL
- isAuthorized - linje 42-50 - GJENBRUK AV FORELESERS EKSEMPEL, men utvidet

#### Fil: server/controllers/image.js: - get funksjon - linje 12-28, create funksjon- linje 36-51 - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/controllers/index.js - (Måten å eksportere controllere fra samme fil er inspirert av foreleser)

#### Fil: server/controllers/mail.js:
- sendUserMail funksjon - linje 16-18, 22-24 - GJENBRUK AV FORELESERS EKSEMPEL
- senAdminMail funksjon - linje 85-88, 91-92 - GJENBRUK AV FORELESERS EKSEMPEL
- get funksjon - linje 125-131 - INSPIRASJON FRA FORELESERS EKSEMPEL
- list funksjon - linje 139-147 - INSPIRASJON FRA FORELESERS EKSEMPEL
- create funksjon - linje 154-157 - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/controllers/category.js - get funskjon, list funskjon, create funskjon  - 33-36 - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/controllers/author.js - get funskjon, list funskjon, create funskjon - 31-34 - INSPIRASJON FRA FORELESERS EKSEMPEL

 #### Fil: server/controllers/auth.js - alt i fil er gjenbruk
 
 ##### Fil: server/controllers/article.js: - get funksjon,listAllArticles funksjon, create funksjon, update funksjon, remove funksjon  - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: server/constants/index.js - hele fil er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/config/db.js - hele fil er GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: server/schemas/user.js - hele fil er GJENBRUK AV FORELESERS EKSEMPEL med mindre endringer i valideringen

#### WEBPACK OPPSETT: GJENBRUK AV FORELESERS EKSEMPEL
#### Fil: server/server.js - alt som er brukt i server er GJENBRUK AV FORELESERS EKSEMPEL

# FRONTEND:

## FRA PENSUM (FORELESERS EKSEMPLER)

#### Fil: client/utils/registerService.js - funksjon registerPost - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: client/utils/mailService.js - funksjoner: sendMailToUser, sendMailToAdmin, ListInbox - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: client/utils/loginService.js - funksjoner: getCsrfToken, getCurrentUser, loginPost, logoutPost - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: client/utils/imageService.js - funksjoner: uploadImage, downloadImage - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: client/utils/http.js - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: client/utils/categoryService.js -funksjoner: listCategories, getCategoryById, createCategory - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: client/utils/authorService.js - funksjoner: listAuthors, getAuthorById - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: client/utils/articleService.js - funksjoner: list, listArticleStats, get, create, updateArticle, deleteArticle - INSPIRASJON FRA FORELESERS EKSEMPEL  

#### Fil: client/layouts/MainLayout.jsx - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: client/components/NoMatch.jsx - GJENBRUK AV FORELESERS EKSEMPEL

#### Fil: client/components/Nav.jx - INSPIRASJON FRA FORELESERS EKSEMPEL

#### Fil: client/components/ArticleDetails/ArticleDetails.jsx - 131-135 - INSPIRERT AV FORELESERS EKSEMPLER

#### Fil: client/components/FagArtikler/ArticleItem.jsx - linje 74-77 - INSPIRERT AV FORELESERS EKSEMPLER

#### Fil: client/components/FagArtikler/FagArtikler.jsx - linje 88 - INSPIRERT AV FORELESERS EKSEMPLER

#### Fil: client/components/FagArtikler/NewArticle.jsx - linje 124, funksjon updateValue - GJENBRUK FRA FORELESERS EKSEMPLER

#### Fil: client/components/FagArtikler/UpdateFagArticle.jsx - linje 145, funksjon updateValue - GJENBRUK FRA FORELESERS EKSEMPLER

#### Fil: client/components/Inbox/Inbox.jsx - linje 76 - INSPIRERT AV FORELESERS EKSEMPLER

#### Fil: client/components/Login/LoginForm.jsx - linje 56 og funksjonen updateValue - GJENBRUK / INSPIRASJON FRA FORELESERS EKSEMPLER

#### Fil: client/components/SignUp/SignUpForm.jsx - linje 55, 65 - GJENBRUKT / INSPIRERT AV FORELESERS EKSEMPLER

#### Fil: client/components/Statistics/Statistic.jsx - linje 54 - INSPIRERT AV FORELESERS DOKUMENTER

#### Fil: client/components/ContactForm.jsx - linje 81 - INSPIRERT AV FORELESERS EKSEMPLER

### Fil: client/components/RightNav.jsx - INSPIRASJON FRA FORELESERS EKSEMPLER

### ModalCategory og DeleteModal - INSPIRASJON FRA OPPGAVE LEKSJON 6
- Fil: client/components/ArticleDetails/DeleteModal.jsx
- Fil: client/components/FagArtikler/ModalCategory

## FRA EKSTERNE KILDER

#### GJENBRUK FOR EXPORT KOMPONENTEN HENTET FRA : [https://technicaaadda.blogspot.com](https://technicaaadda.blogspot.com/2020/11/export-data-to-excel-using-react.html)
- Fil: client/components/Statistics/ExportToExcel.jsx - GJENBRUKT EXPORT LOGIKK

#### Lånt fra [https://dev.to/otamnitram/](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)
- Fil: client/components/Statistics/Statistic.jsx - linje 61-62, 64, 78-79

#### Lånt fra [https://dev.to/otamnitram/](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)
- Fil: client/components/Inbox/Inbox.jsx - linje 84-85, 87, 104-105

#### Lånt fra [https://dev.to/otamnitram/](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)
- Fil: client/components/FagArtikler/FagArtikler.jsx - linje 100-101, 103, 119, 134-135

#### Generert kode fra [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction/#the-playground)
- Fil: client/components/ContactForm.jsx - funksjonen notifyCreationSucess, <ToastContainer />

#### Generert kode fra [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction/#the-playground)
- Fil: client/components/SignUp/SignUpForm.jsx - funksjonen notifyCreationSucess, <ToastContainer />

#### Generert kode fra [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction/#the-playground)
- Fil: client/components/Login/LoginForm.jsx - funksjonen notifyCreationSucess, <ToastContainer />

#### Generert kode fra [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction/#the-playground)
- Fil: client/components/FagArtikler/UpdateFagArticle.jsx - funksjonen notifyCreationSucess, <ToastContainer />

#### Generert kode fra [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction/#the-playground)
- Fil: client/components/FagArtikler/NewArticle.jsx - funksjonen notifyCreationSucess, <ToastContainer />

#### Generert kode fra [https://fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction/#the-playground)
- Fil: client/components/ArticleDetails/ArticleDetails.jsx - linje 95-107, 193-203

#### Styling lånt fra [https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
- Fil: client/components/Inbox/Inbox.jsx - linje 42-43

#### Inspirasjon fra [https://blog.cloudboost.io/](https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778)
- Fil: client/components/Inbox/Inbox.jsx - funksjon createPageLinks

#### Inspirasjon fra [https://blog.cloudboost.io/](https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778)
- Fil: client/components/FagArtikler/FagArtikler.jsx - funksjon createPageLinks, linje 146-158

#### LÅNT KODE FRA: [https://goshakkk.name/](https://goshakkk.name/instant-form-fields-validation-react/)
- Fil: client/components/FagArtikler/UpdateFagArticle.jsx -linje 161-167, 187-193, 196, 342-344, 355-357, 368-370, 385-387, 406-408 og funksjon isValid

#### LÅNT KODE FRA: [https://goshakkk.name/](https://goshakkk.name/instant-form-fields-validation-react/)
- Fil: client/components/FagArtikler/NewArticle.jsx -linje 139-145, 165-171, 174, 306-308, 319-321, 332-334, 349-351, 370-372 og funksjon isValid

#### INSPIRASJON FRA VIDEO FOR Å LAGE HAMBURGER MENY: [https://www.youtube.com/](https://www.youtube.com/watch?v=GGkBwpxV7AI&ab_channel=FullStackMastery)
- Fil: client/components/FagArtikler/HamburgerMeny.jsx - Inspirert av ovennevnte video for å lage hamburger meny



