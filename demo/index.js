import mongoose from "mongoose"
import Farm from "./models/farm.js"
import product from "./models/product.js"

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`)
        await Farm.deleteMany({})
        console.log("Sucessfully connected to the database!")
    } catch (e) {
        console.log("Failed to connect to the database :(")
    }
}

await connectDB()

const apple = new product({name: "apple", cost: 50})
const peach = new product({name: "peach", cost: 50})
await apple.save()
await peach.save()

const farm = await Farm.findOne({name: "Eickman Farms"})
farm.products.push(apple, peach)
farm.save()
