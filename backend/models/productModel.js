import mongoose from 'mongoose';

//Création de schéma
const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    brand: { type: String, required: true},
    price: { type: Number, default: 0, required: true},
    category: { type: String, required: true},
    countInStock: { type: Number, default: 0, required: true},
    description: { type: String, required: true},
    rating: { type: Number, default: 0, required: true},
    numReviews: { type: Number,  default: 0, required: true},

});

//Création de model "Product(table)"
const productModel = mongoose.model("Product", productSchema);

export default productModel;
