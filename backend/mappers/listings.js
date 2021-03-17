import dotenv from 'dotenv'

const mapper = listing => {
    const baseUrl = process.env.assetsBaseUrl
    const mapImage = image => ({
        url: `${baseUrl}${image.fileName}_full.jpg`,
        thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`
    })

    return {
        ...listing,
        images: listing.images.map(mapImage)
    }
}

export default mapper
