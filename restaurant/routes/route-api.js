// defines the route of api
// import controller here
// import express
 const express=require('express');
 const controller=require('../controller/controller-api');
// import router fun
const router=express.Router();
// maging the path
router.get("/filter",controller.filterRestaurant);

router.post("/",controller.addRestaurant);
router.get("/",controller.getAllCollections);
router.get("/:id",controller.getById);
router.get("/web/:website",controller.getWebsite);
router.put("/",controller.updateById);
router.delete("/:id",controller.deleteById);
router.get("/search/:key",controller.searchRestaurant);
module.exports=router;