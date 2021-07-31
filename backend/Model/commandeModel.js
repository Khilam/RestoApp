const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commandeSchema = new Schema({

   idProduct: 
     {
       type: String, required: true 
     },
   
    idUser:{
      type:String,
      required : true
    },
    quantity: { type: String, required: true }
    ,
    prix:{
      type:String,
      reauired:true
    }


    }
  // {timestamps :true}
);








  //{
    //items: [
    //  {
     //   item: { type: Object, required: true },
      //  quantity: { type: Number, required: true },
     // },
   // ],
   // status: {
     // type: String,
      //required: true,
      //enum: [
        //"Placed",
        //"Cancelled",
        //"Accepted",
        //"Completed",
        //"Out For Delivery",
      //],
    //},
    //user: {
      //email: {
        //type: String,
        //required: true,
      //},
      //address: {
        //type: Object,
        //required: true,
      //},
      //name: {
        //type: String,
        //required: true,
      //},
      //userId: {
        //type: Schema.Types.ObjectId,
        //required: true,
        //ref: "User",
      //},
    //}
//}
//);
   


module.exports = commande = mongoose.model("commande", commandeSchema);