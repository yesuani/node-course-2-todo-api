//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user= {name: 'anilton', age:25};
// var {name}= user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

   if (err) {
    return console.log('unable to connect to server');
   }
   console.log('connected to mongodb server');

  //  db.collection('Todos').insertOne({
  //    text: 'Something to do',
  //    completed: false
  //  },(err,result) =>{
  //    if (err) {
   //
  //     console.log('unable to insert todo', err);
   //
  //    }
  //    console.log(JSON.stringify(result.ops, undefined,2));
  //  });

  //insert new doc
  //  db.collection('Users').insertOne({
  //    name: 'Anilton',
  //    age: 25,
  //    location: 'Praia'
   //
  //  },(err,result) =>{
  //    if (err) {
   //
  //     console.log('unable to insert user', err);
   //
  //    }
  //    console.log(result.ops);
  //  });

   db.close();
});
