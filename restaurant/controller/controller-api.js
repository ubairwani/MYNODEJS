// controllers folder controls all the requests 
// adding restaurant here
const Restaurant = require("../models/model-api");
const repo=require('../respositories/repo-api');

const url=require('url');
const { param } = require("../routes/route-api");
exports.addRestaurant=(req,res)=>{
    console.log(req.body);
    const newRestaurant=new Restaurant(null,req.body.name,req.body.website,req.body.ip);
    repo.add(newRestaurant,()=>{
        return res.send('data is added successfully');
        
    });
    
}
// getting all the data from collections

exports.getAllCollections=(req,res)=>{
    repo.getAll((Restaurant)=>{
        res.send(Restaurant);
    })
}

exports.getById=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    repo.getRestaurantbyID(id,(Restaurant)=>{
        res.send(Restaurant)
    })
}

exports.getWebsite=(req,res)=>{
    const www=req.params.website;
    console.log("in controller"+ www);
    repo.getWebsiteByName(www,(Restaurant)=>{
        res.send(Restaurant);
    })
}

exports.updateById=(req,res)=>{
    console.log(req.body);
    const restaurantToUpdate=new Restaurant(req.body.name,req.body.website,req.body.ip);
    console.log("in controller at 40: "+ restaurantToUpdate.website);
    repo.updateRestaurant(restaurantToUpdate,()=>{
        console.log('data is updated successfully');
        repo.getWebsiteByName(restaurantToUpdate.website,(Restaurant)=>{
            res.send(Restaurant)
        })
    });
    console.log('successfully retrived');
}

exports.deleteById=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    repo.deleteRestaurantById(id,()=>{
        res.send(`Restaurant at id: ${id} is deleted permantly`);
    })
}

exports.searchRestaurant=(req,res)=>{
    const key=req.params.key;
    console.log(key);
    repo.searchRestaurantByKey(key,(Restaurant)=>{
        res.send(Restaurant);
    })
}

exports.filterRestaurant=(req,res)=>{
    const params=url.parse(req.url,true).query;
    console.log(params);
    repo.filter(params.name,params.website,(Restaurant)=>{
        res.send(Restaurant);
    })
}