/**
 * load modules
 */
var express         = require('express');
var mongoose        = require('mongoose');
var passport        = require('passport');
var flash           = require('connect-flash');
var socketIo        = require('socket.io');
var socketIoClient = require('socket.io-client');

var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');
var validator       = require('express-validator');
var path            = require('path');
//var favicon = require('serve-favicon');


/**
 * app start
 */
var app         = express();


/**
 * config
 */
app.property = require('./config/properties')[app.get('env')];
app.gameConfig = require('./config/game');



/**
 * db connect
 */
mongoose.connect(app.property.mongoose);


/**
 * socket.io
 */
var io = socketIo();
app.io = io;
app.ioClient = socketIoClient.connect('http://localhost:3000');


/**
 * define model container
 */
var modelContainer = require('./support/modelFactory');
var ModelFactory = new modelContainer(mongoose, __dirname + '/models/');


/**
 * passport
 */
require('./support/passport')(passport, ModelFactory);


/**
 * view engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/**
 * set up express application
 */
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(validator());


/**
 * required for passport
 */
app.use(session({
    secret: app.property.sessionKey,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


/**
 * container
 */
var container = require('./support/container');
var Container = new container();


/**
 * service
 */
var service = require('./support/service');
Container.set('service', new service());


/**
 * events
 */
require('./events')(io, {
    models:ModelFactory,
    container:Container,
    passport:passport,
});


/**
 * routes
 */
require('./routes')(app, {
    models:ModelFactory,
    container:Container,
    passport:passport,
    socket:app.ioClient
});


/**
 * catch 404
 */
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/**
 * catch 500
 */
if (app.get('env') === 'development') {
    // development error handler
    // will print stack-trace
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    // production error handler
    // no stack-traces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


module.exports = app;