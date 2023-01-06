const router = require("express").Router();
const Product = require("../Models/Product");

router.post("/",async(req,res)=>{
    const product = new Product(req.body);

    try{
        const saved = await product.save();
        res.status(200).json(saved);
    }catch(err){
        res.status(400).json(err)
    }
    
});

router.get("/",async(req,res)=>{
    try{
        const procust = await Product.find();
        res.status(200).json(procust);
    }catch(err){
        res.status(400).json(err);
    }
});

router.put("/:id",async(req,res)=>{
    try{
        const update = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new:true} 
        )
        res.status(200).json(update);
    }catch(err){
        res.status(400).json(err);
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const deleteproduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("delete success");
    }catch(err){
        res.status(400).json(err);
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(400),json(err)
    }
    
})

module.exports = router;