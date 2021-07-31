const Product = require ('../Model/productModel') 

module.exports = {
    // Add Products
    addProduct:async (req, res)=>{
        
           
       const {title, description, imageUrl, price}=req.body
    //  title=req.body.title,
    //      description=req.body.description ,
    //      imageUrl=req.body.imageUrl,
    //       price=req.body.price


       try{
           product= new Product({
            title, 
            description,
             imageUrl, 
            price
           })
           await product.save()
           res.json(product)
       }  
       catch(error){console.error(error.message)}
     
    },
    getProduct:async(req, res)=>{
        try{
            const product = await Product.find();
            res.json(product)
        }
        catch(error){console.error(error.message)}
 },
deleteProduct: async (req, res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        res.json(product)
    }
    catch(error){console.error(error.message)}
},
updateProduct: async (req, res)=>{
    try{
        const product =await Product.findByIdAndUpdate(req.params.id, req.body,        
     {new :true})
     res.json(product)
}
catch(error){console.error(error.message)}
}

}