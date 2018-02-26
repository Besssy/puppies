let api = {}
api.domain = 'darknik.tk';
api.port = 3000;
api.ioPort = 3030;
api.secret = 'geiaaaaaaa';

api.providers = {};

api.providers.facebook = {};
api.providers.facebook.clientID = '1543923425642773';
api.providers.facebook.clientSecret = '14c822d40c70769705065e685ce196fd';
api.providers.facebook.callbackURL = 'http://' + api.domain + ':' + api.port + '/authentication/facebook/success';
api.providers.facebook.profileFields = ['id', 'emails', 'name'];

let db = {}
db.host = '127.0.0.1';
db.port = 27017;
db.database = 'dogsDB';

module.exports = {
  api,
  db
};
