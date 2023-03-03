import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }, 
    age: {
        type: String,
        required: true
    },
    dateE: {
        type: Date,
        default: Date.now()
    },
    dateA: {
        type: Date,
        deafult: null
    }

})

export default mongoose.model("Dog", dogSchema)
//creates the model