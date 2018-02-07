//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{

   if (err) {
    return console.log('unable to connect to server');
   }
   console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //
  //   _id: new ObjectID('5a7887ef6b32f012df375b63')
  // },{
  //    $set:{
  //
  //      completed:true
  //    }
  // },{
  //   returnOriginal:false
  // }).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({

    _id: new ObjectID('5a788c7af2876114b42f2e2f')
  },{
     $set:{

       name: 'Micael'
     },
     $inc:{
       age: 1
     }
  },{
    returnOriginal:false
  }).then((result)=> {
    console.log(result);
  });


   //db.close();
});
