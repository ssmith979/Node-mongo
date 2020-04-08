const MongoClient = require('mongodb').MongoClient;

// Conneciton url
const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db){

    if(err){
        return console.dir(err);
    
    }
    console.log('Connected to mongodb');
  
    /*
    InsertDocument(db, function(){
        db.close();
    });
    */
  
    /*
   InsertDocuments(db, function(){
    db.close();
    */
  
   /* 
   FindDocuments(db, function(){
    db.close();
    });
    */
  
    /*
  QueryDocuments(db, function(){
    db.close();
    });
    */

    /*
   UpdateDocument(db, function(){
    db.close();
    });
    */

   RemoveDocument(db, function(){
    db.close();
    });
 
    //After removing or updating, use FindDocuments to make sure it was updated
});

//Insert Single Doc
const InsertDocument = function(db, callback){
    // Get Collection
    const collection = db.collection('users')
    // Insert Docs
    collection.insert({
        name: 'Brad Travery',
        email: 'brad@test.com'
    }, function (err, result){
        if(err){
            return console.dir(err);
        
        }
    
        console.log('Inserted Document');
        console.log(result);
        callback(result);
       
    });
}

// Insert Multiple Documents
const InsertDocuments = function(db, callback){
     // Get Collection
     const collection = db.collection('users');
     collection.insertMany([
         {
             name: 'John Doe',
             email: 'John@test.com'
         },
         {
            name: 'Sam Smith',
            email: 'Sam@test.com'
        },
        {
            name: 'Jose Gomez',
            email: 'Jose@test.com'
        },
     ],
     function(err, result){
        console.log('Inserted '+ result.ops.length+' documents');
        callback(result);
     });
}

// Finding Documents from the db
const findDocuments = function(db, callback){
// Get Collection
const collection = db.collection('users');

    collection.find({}).toArray(function(err, docs){
            if(err){
                return console.dir(err);
            
            }
        console.log('Found the Following Records')
        console.log(docs);
        callback(docs);
    });
}

// Query Documents (find individual document)
const QueryDocuments = function(db, callback){
    //Get Collection
    const collection = db.collection('users');

    collection.find({'name': 'John Doe'}).toArray(function(err,docs){
        
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
}

// Update Document
const UpdateDocument = function(cd, callback){
    //Get Collection
    const collection = db.collection('users');

    collection.updateOne({'name': 'John Doe'}, 
    {$set: {email:'John@something.com'}}, function(err, result){
        if(err){
            return console.dir(err);
        
        }
        console.log('Update Document');
        callback(result);
    });
}

// Remove Document
const RemoveDocument = function(db, callback){
    //Get Collection
    const collection = db.collection('users');

    collection.deleteOne({'name': 'John Doe'}, function(err, result){
        if(err){
            return console.dir(err);
        
        }
        console.log('Removed');
        console.log(result);
        callback(result);
    })

}