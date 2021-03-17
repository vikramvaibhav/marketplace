import asyncHandler from 'express-async-handler'
import Listing from '../models/listingModel.js'

import listingMapper from "../mappers/listings.js"

// @desc      Fetch all Listings
// @route     GET /api/listings
// @access    Public

const getListings = asyncHandler(async (req, res) => {
    const listings = await Listing.find({}).lean()
    const resources = listings.map(listingMapper)
    // console.log(resources[0])
    res.send(resources)
    // res.json(listings)
})

// @desc      Fetch Single Listing
// @route     GET /api/listings/:id
// @access    Public
const getListingById = asyncHandler(async (req, res) => {
    const listing = await Listing.findById(req.params.id).lean()
    const resource = listingMapper(listing)
    // console.log(resources)
    if (listing) {
        // res.json(listing)
        res.send(resource)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc        Create a Listing
// @route       POST /api/listings
// @access      Private/User/Admin
const createListing = (req, res) => {
    console.log(req.body.firstName)
}

export { getListings, getListingById, createListing }