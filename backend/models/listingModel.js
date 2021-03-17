import mongoose from 'mongoose'

const listingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    images: [
        {
            fileName: {
                type: String,
                required: true
            }
        }
    ],
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'Category'
    },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    }
})

const Listing = mongoose.model('Listing', listingSchema)

export default Listing