// all the database related code 
// accessin deleting updating 
// cummicates with database 
// adding data into database
// import collections
const { ObjectID } = require('bson');
const { json } = require('express/lib/response');
const mongodb=require('../../config/mongodb');
const Restaurant = require('../models/model-api');
var ObjectId = require('mongodb').ObjectID;
exports.add=(item,callback)=>{
    // get the collections of database in mongodg
    const collections=mongodb.getCollection("myFirstDatabase");
    // add your data into your collections
    collecxtions.insertOne({name:item.name,website:item.website,ip:item.ip})
    .then(()=>{
    callback();
    })
   .catch(err=>{console.log(err)})
}
// for getting all the collections from db
exports.getAll=(callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    collections.find().toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        },
        err=>{
            console.log(err);
        }
    )
}
// geting collection based on id
exports.getRestaurantbyID=(id,callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    collections.find({_id :ObjectId(id)}).toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        },
        err=>{
            console.log(err);
        }
    )
}


exports.getWebsiteByName=(website,callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    console.log("in repo"+ website);
    collections.find({website:website}).toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        },
        err=>{
            console.log(err);
        }
    )
}
exports.updateRestaurant=(Restaurant,callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    console.log(Restaurant.website);
    const filter={website:Restaurant.website};
    console.log(filter);
    const update={$set:{name:Restaurant.name,website:Restaurant.website,ip:Restaurant.ip}};
    collections.findOneAndUpdate(filter,update).then(
        ()=>{
            callback();
        }
    )
        err=>{
            console.log(err);
        }
    }
exports.deleteRestaurantById=(id,callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    collections.findOneAndDelete({_id:ObjectID(id)}).then(
        ()=>{
            callback();
        }
        
    )
    err=>{
        console.log(err);
    }
}
exports.searchRestaurantByKey=(key,callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    
    collections.find({name: {$regex:key}}).toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        }
    )
        err=>{
            console.log(err);
        }
}



exports.filter=(name,websites,callback)=>{
    const collections=mongodb.getCollection("myFirstDatabase");
    collections.find({$and:[
        {name:{$regex:name}},
        {website:websites}
        ]}).toArray().then(
        (Restaurant)=>{
            console.log(Restaurant);
            callback(Restaurant);
        },
        
        err=>{
            console.log(err)
        }
    )
    
}