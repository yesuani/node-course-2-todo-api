//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

   if (err) {
    return console.log('unable to connect to server');
   }
   console.log('connected to mongodb server');

  //  db.collection('Todos').find({
  //    _id: new ObjectID('5a7887ef6b32f012df375b63')
  //  }).toArray().then((docs) =>{
  //    console.log('Todos');
  //    console.log(JSON.stringify(docs, undefined, 2));
  //  },(err) => {
  //    console.log('unable to fetch todos', err);
  //  });

  //  db.collection('Todos').find().count().then((count) =>{
  //    console.log(`Todos count: ${count}`);
   //
  //  },(err) => {
  //    console.log('unable to fetch todos', err);
  //  });

  db.collection('Users').find({name: 'Jen'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  })




   //db.close();
});
