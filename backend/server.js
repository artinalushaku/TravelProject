require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const sequelize = require('./db');

const app = express();

const allowedOrigin = "http://localhost:3000";

const originWhitelistMiddleware = (req, res, next) => {
  const origin = req.headers.origin;

  if (origin === allowedOrigin) {
    next(); // Allow the request
  } else {
    res.status(403).json({ error: "Forbidden: Invalid origin" });
  }
};

app.use(originWhitelistMiddleware);

// Configure session middleware with secure settings
app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Configure Helmet  extra security headers
app.use(helmet());

// Configure rate limiting for DDoS protection


app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true 
}));
app.use(bodyParser.json());

















// Initialize server and ensure database and table creation
const initializeDatabase = async () => {
  try {
    await sequelize.sync();
    app.listen(process.env.PORT, () => {
      console.log(`Serveri po punon në portin ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Gabim gjatë inicializimit të databazës:', error);
  }
};

initializeDatabase();
