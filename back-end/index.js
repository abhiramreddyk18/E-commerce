const connectDB = require('./mongoose');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
connectDB();



const cart_schema = new mongoose.Schema({
            product_id: { type: String, required: true },
            name: { type: String, required: true },
            image: { type: String, required: true },
            description:{type:String,required:true},
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
            total:{type:Number,required:true}
    
    
});


const Cart = mongoose.model('cart', cart_schema);







// add to cart

app.post('/add_to_cart', async (req, res) => {
    try {
        const { product_id, name,image,description,quantity, price,total} = req.body;

        const newcart=new Cart({ product_id, name,image,description, quantity, price,total });
        await newcart.save();
        res.status(200).json({ message: 'Cart updated successfully', Cart });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: 'Error updating cart', error: error.message });
    }
});


// fetching products

app.get('/get_products', async (req, res) => {
  try{
        const cart = await Cart.find();

        if(!cart.length){
            return res.status(404).json({ message: "Cart is empty" });
        }


        console.log(cart);

        res.json(cart);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});




// port

app.listen(1234, () => {
    console.log("Server is running on port 1234");
});
