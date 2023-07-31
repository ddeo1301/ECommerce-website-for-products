const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://divyanshudeo:Divyanshu97@cluster0.47pbebr.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("connected");
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



