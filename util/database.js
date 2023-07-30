
/**
 * mongo
 *
 * event handling for mongo db
 */

const mongoose = require('mongoose'),
  dbURI = constants.mongo.uri;

mongoose.set('bufferCommands', false);

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  autoReconnect: true,
  reconnectTries: constants.mongo.connRetries,
  reconnectInterval: constants.mongo.connRetriesInterval,
  auth: {
    user: constants.mongo.user,
    password: constants.mongo.password
  }
});

mongoose.connection.on('connected', function () {
  LogService.access('mongo', 'onConnected', null, 'Connected to mongodb');
});

mongoose.connection.on('error', function (err) {
  ErrorService.connectionError(err);
});

mongoose.connection.on('disconnected', function () {
  ErrorService.connectionError();
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    process.exit(0);
  });
});

require('./../models');
























// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback => {
//   MongoClient.connect(
//     'mongodb+srv://divyanshudeo1301:Divyanshu97@ecommerce.kp9m4pp.mongodb.net/shop?retryWrites=true&w=majority'
//   )
//     .then(client => {
//       console.log('Connected!');
//       _db = client.db();
//       callback();
//     })
//     .catch(err => {
//       console.log("error in mongodb connection");
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if(_db){
//     return _db;
//   }
//   throw 'No database connected'
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
