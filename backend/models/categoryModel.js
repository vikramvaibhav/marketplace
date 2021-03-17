import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true
    },
    backgroundColor: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const Category = mongoose.model('Category', categorySchema)

export default Category