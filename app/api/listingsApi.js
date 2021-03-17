import listings from '../../backend/data/listings'
import apiClient from './client'

import FormData from 'form-data'

const endpoint = '/api/listings'

const getListings = () => apiClient.get(endpoint)
const getListingDetail = (id) => apiClient.get(`${endpoint}/${id}`)

const addListing = listing => {
    // if data is sent using FormData then api sauce/axios will internally
    // set content-type to multipart/form-data
    // const data = new FormData()
    // data.append('title', listing.title)
    // data.append('price', listing.price)
    // data.append('category', listing.category.value)
    // data.append('description', listing.description)

    // listing.images.forEach((image, index) =>
    //     data.append('images', {
    //         fileName: 'image' + index,
    //         type: 'image/jpeg',
    //         uri: image
    //     })
    // )

    // console.log(data)

    // if (listing.location) {
    //     data.append('location', listing.location)
    // }

    // return apiClient.post(endpoint, data)


    // #########Mein########

    console.log(listing.title)

    const data = new FormData()

    data.append('title', listing.title)

    console.log(data)

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }

    return apiClient.post(endpoint, { firstName: 'Fred' })

}

export default {
    getListings,
    getListingDetail,
    addListing
}