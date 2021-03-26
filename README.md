## For å få applikasjonen i gang:
Trenger å ha lastet ned yarn, mongodb og mongodbCompass (hvis det er preferert) og det er viktig at node verjonen er under 15 
(grunnet toaster biblotek som ikke er kompatibel med nyeste node versjon som kom ut i oktober 2020). 
Må sette NODE_ENV til development for å kunne lage admin bruker og superadmin bruker
fra postman. Eventuelt sette NODE_ENV til production hvis dere skal teste sikkerhets implementasjonen 
(limiter er på, med 100 requests, så hvis dere vil teste sikkerheten på den, kan denne settes ned)
Prosjektet benytter seg av react 17.0.1 så vesjon burde være dette for å sikre at
alt funker.

Åpne prosjektet i din fortruke IDE,
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
