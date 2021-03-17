import express from 'express'
const router = express.Router()

import { getListings, getListingById, createListing } from '../controllers/listingController.js'

router.route('/').get(getListings).post(createListing)
router.route('/:id').get(getListingById)

export default router