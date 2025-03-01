import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivangichaurasia1515:Shivi151515@cluster0.kijvz.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
    


}