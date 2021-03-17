import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import path from 'path'

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import listingRoutes from './routes/listingRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.urlencoded())  // To parse URL-encoded bodies

app.use(express.json()) //To parse JSON bodies

app.use('/assets', express.static('./public/assets'));

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.use('/api/listings', listingRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold))