import mongoose from "mongoose"

const farmSchema = new mongoose.Schema({
    name: String,
    product
})

export default mongoose.model("Farm", farmSchema)