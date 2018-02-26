const express = require('express');
const config = require('./config');
const http = require('http');
const routes = require('./routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const passportFacebook = require('passport-facebook').Strategy;
const session = require('express-session');
const models = require('./models');

let app = express();
app.use(bodyParser.json());
app.use(session({secret: config.api.secret}));
app.use(passport.initialize());
app.use(passport.session());

let oauthStrategy = (accessToken, refreshToken, profile, done) => {
  models.users.findOne({email: profile.emails[0].value}).then(user => {
    if(user){
      if(profile.provider == 'facebook' && user.providers.facebook){
        return done(null, user);
      } else if(profile.provider == 'facebook'){
        user.providers.facebook = profile.id;
        user.save();
        return done(null, user);
      } else{
        console.log('kati pige strava me to login');
        return done(err, null);
      }
    } else{
      let temp_user = new models.users({
        firstname: profile.name.givenName,
        lastname: profile.name.familyName,
        email: profile.emails[0].value,
        providers: {
          facebook: profile.id
        }
      });
      temp_user.save();
      return done(null, user);
    }
  }).catch(err => {
    console.log('kati pige strava me to login');
    return done(err, null);
  });
}

passport.use(new passportFacebook(config.api.providers.facebook, oauthStrategy));
passport.use(new passportLocal(models.users.authenticate()));
passport.serializeUser(models.users.serializeUser());
passport.deserializeUser(models.users.deserializeUser());

// app.use('/', routes.index);

app.use(express.static('public'));
app.use(express.static('portal/dist'));
// app.use(express.static('node_modules/socket.io-client/dist'));

app.use('/dogs', routes.dogs);
app.use('/authentication', routes.authentication);

let server = http.createServer(app);
server.listen(config.api.port);
server.on('error', err => {
  console.log(err);
})
server.on('listening', () => {
  console.log('Server started');
});

let ioServer = http.createServer(app);

var io = require('socket.io')(ioServer);

io.on('connection', (socket) => {
  console.log('sundethikes io');
  socket.emit('notification', {title: 'geiaaa', message: 'mathe na les geia kale'});
});

ioServer.listen(config.api.ioPort);

module.exports = app;
