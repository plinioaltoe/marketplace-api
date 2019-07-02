# NodeJS - bootcamp5 - RocketSeat (A marketplace API REST - use mongodb)

1. Install dependencies: `yarn` or `npm install`
2. Run: `yarn start` or `npm start`
3. Start a mongodb database (I started it in docker). `docker run --name mongonode -p 27017:27017 -d -t mongo`
4. I used insomnia to access these routes with GET, POST, PUT, DELETE:
   # `Create Users: http://localhost:3100/users`
   # `Create Session: http://localhost:3100/session`
   # `Ads (Show one, Show all, Create, Update, Delete) http://localhost3100/ads`
   # `Purchase (Sell, Show all, Send message) http://localhost3100/purchases`

"dependencies": {
"@sentry/node": "^4.6.4",
"bcryptjs": "^2.4.3",
"dotenv": "^6.2.0",
"express": "^4.16.4",
"express-async-handler": "^1.1.4",
"express-handlebars": "^3.0.2",
"express-validation": "^1.0.2",
"joi": "^14.3.1",
"jsonwebtoken": "^8.5.0",
"kue": "^0.11.6",
"mongoose": "^5.4.16",
"mongoose-paginate": "^5.0.3",
"nodemailer": "^5.1.1",
"nodemailer-express-handlebars": "^3.0.0",
"require-dir": "^1.2.0",
"youch": "^2.0.10"
},
