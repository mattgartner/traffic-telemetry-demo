const express = require("express");
const session = require("express-session");
// const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
// const passport = require("passport");
// const flash = require("connect-flash");
// const expressValidator = require("express-validator");
// const request = require("request");
// const helpers = require("./helpers");
const errorHandlers = require("./handlers/errorHandlers");
// require("./handlers/passport");

const app = express();

// Loading Routes
const routes = require("./routes/index");

// Load environment variables
dotenv.load();

// views is directory for all template files
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.static("dist"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
// app.use(expressValidator());
// app.use(flash());
// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// app.use(
//   session({
//     secret: "secretsauce",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)) },
//     unset: 'destroy',
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection
//     })
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Checks if the user is logged in, and also passes through the current user, req.user, to every page.
// Also passes flash messages
app.use((req, res, next) => {
  // res.locals.h = helpers;
  // res.locals.flashes = req.flash();
  // res.locals.user = req.user || null;
  // res.locals.env = process.env;
  // res.locals.currentPath = req.path;
  next();
});

app.locals = {
  siteName: "Starter Template"
};

app.use("/", routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (process.env.NODE_ENV === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;