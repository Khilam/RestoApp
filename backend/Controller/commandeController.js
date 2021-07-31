const commande = require ('../Model/commandeModel') 
    
module.exports = {
    //get all orders
     getAllCommande: async (req, res) => {
         try {
             const Command = await commande.find();
             res.json(Command);
         }
         catch (error) {
             console.error(error.message);
             res.status(500).send("server error");

           }
     },
     //get an order
     getOneCommande: async (req, res) => {
         try {
            const Command = await commande.findById(req.params.id)
            res.json(Command)
         }
         catch (error) {
             console.error(error.message);
             res.status(500).send("server error");
           }
     },
     //add an order
     addCommande: async (req, res) => {
         const {idProduct,idUser,quantity,prix} = req.body;

         try {
           Command = new commande ({
             idProduct,
             idUser,
             quantity,
             prix
             
           })
           await Command.save();
           res.json(Command);
         } catch (error) {
           console.error(error.message);
           res.status(500).send("server error");
         }
     },
     //delete an order
     deleteCommande: async (req,res)=>{
         try {
           const Command = await commande.findByIdAndDelete(req.params.id)
           res.json(Command)
         }
         catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
     },
     //update an order
     updateCommande: async (req,res)=>{
         try {
           const Command = await commande.findByIdAndUpdate(req.params.id,req.body, {new:true})
             res.json(Command)
         }
         catch (error) {
           console.error(error.message);
           res.status(500).send("server error")
         }
       }
     }
    
