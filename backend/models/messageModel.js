import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    listingID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Listing'
    },
    content: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    }
})

const Message = mongoose.model('Message', messageSchema)

export default Message