// creating a server using express 
const expressServer=require('express');
// body parser
const parser=require('body-parser');
const CORS=require('cors');
// creating a server
const server=expressServer();
const PORT=4000;

// connect database here
const mongodb=require('./config/mongodb');
mongodb.connect();
server.use(CORS());
server.listen(PORT);
// geting all the request
// importing routes
server.use(parser.json());
const RestaurantRoutes=require('./restaurant/routes/route-api');
server.use('/Admin/Restaurant',RestaurantRoutes);
server.get('/',(req,res)=>{
    res.send(`server is running on ${PORT}` );
})
console.log(`express server is running of ${PORT}`);
