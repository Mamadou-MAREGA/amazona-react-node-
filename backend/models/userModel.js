import mongoose from 'mongoose';

//Création de schéma
const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true, dropDups: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, required: true, default: false}
});

//Création de model "User(table)"
const userModel = mongoose.model("User", userSchema);

export default userModel;
