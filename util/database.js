const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    //'mongodb+srv://divyanshudeo1301:Divyanshu97@ecartwebsite.t1egsr1.mongodb.net/shop?retryWrites=true&w=majority'
    "mongodb+srv://divyanshudeo1301:Divyanshu97@ecartwebsite.t1egsr1.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log("error in mongodb connection");
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'No database connected'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



