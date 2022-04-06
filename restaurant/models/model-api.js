// are used to hold the data from server to client vice versa
// this is envelop
module.exports=class Restaurant{
    constructor(
    id,name,website,ip
    ){
        this.id=id;
        this.name=name;
        this.website=website;
        this.ip=ip;
       
    }
}