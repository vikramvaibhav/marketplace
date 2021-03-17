import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import listingsApi from '../api/listingsApi'
import ActivityIndicator from '../components/ActivityIndicator'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

import colors from '../config/colors'
import useApi from '../hooks/useApi'

const ListingDetailsScreen = ({ route }) => {

    const listing = route.params

    // calling useApi hook with parameters.

    // const { data: listing, error, loading, request: loadListingDetail } = useApi(listingsApi.getListingDetail)

    // useEffect(() => {
    //     loadListingDetail(route.params._id)
    // }, [route.params._id])

    return (
        <View>
            {listing &&
                <>
                    <Image
                        style={styles.image}
                        source={listing.images}
                    />
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{listing.title}</AppText>
                        <AppText style={styles.price}>${listing.price}</AppText>
                        <View style={styles.userContainer}>
                            <ListItem
                                title="Vikram Vaibhav"
                                subTitle="5 Listings"
                                image={require('../assets/bmx.jpg')}
                            />
                        </View>
                    </View>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        height: 300,
        width: '100%'
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 30
    }
})

export default ListingDetailsScreen