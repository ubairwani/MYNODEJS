// here we cummnicate with our database
// all monogo db configration will be here 
// first step import mongodb
const mongodb=require('mongodb');
const url="mongodb+srv://ubairwani:com.sourceCode.ubee@cluster0.mf72x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongodbClient=mongodb.MongoClient;
var connectedClient;
exports.connect=()=>{
    mongodbClient.connect(url)
    .then((client)=>{
        connectedClient=client;
        console.log('DB is connected successfully!!!!! ');
    })
    .catch((err)=>{
        console.log("an error errored check details>> "+ err);
    })

}
exports.getCollection=(nameOfCollection)=>{
    return connectedClient.db('myFirstDatabase').collection(nameOfCollection);

};