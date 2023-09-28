const express = require('express');
const app = express();
const morgan = require('morgan');
const users = require('./routes/usersRoutes');
const educations = require('./routes/educationsRoutes');
const experiences = require('./routes/experiencesRoutes');
const login = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const AppError = require('./utils/appError');
const passport = require('passport');
const session = require('express-session');
const globalErrorHandler = require('./controllers/errorController');
const cors = require('cors');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Passport config
require('./config/passport-setup')(passport);

// Session
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/auth', login);
app.use('/profile', profileRoutes);
app.use('/users', users);
app.use('/educations', educations);
app.use('/experiences', experiences);

// Create home route
app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
