import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import categories from './data/categories.js'
import listings from './data/listings.js'
import messages from './data/messages.js'
import users from './data/users.js'

import Category from './models/categoryModel.js'
import Listing from './models/listingModel.js'
import Message from './models/messageModel.js'
import User from './models/userModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Category.deleteMany()
        await Listing.deleteMany()
        await Message.deleteMany()
        await User.deleteMany()

        const createdCategory = await Category.insertMany(categories)

        const categoryId = createdCategory.map(cat => {
            return cat._id
        })

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id
        const johnUser = createdUsers[2]._id
        const janeUser = createdUsers[3]._id

        const sampleListings = listings.map((listing, idx) => {
            return { ...listing, user: adminUser, category: categoryId[idx] }
        })

        const createdListing = await Listing.insertMany(sampleListings)

        const sampleMessage = messages.map(message => {
            return { ...message, fromUserId: johnUser, toUserId: janeUser, listingID: createdListing[0]._id }
        })

        await Message.insertMany(sampleMessage)

        console.log('Data Imported'.green.inverse)

        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Category.deleteMany()
        await Listing.deleteMany()
        await Message.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed'.red.inverse)

        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
