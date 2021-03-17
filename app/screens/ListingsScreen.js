import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Platform } from 'react-native'

import AppCard from '../components/AppCard'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import listingsApi from '../api/listingsApi'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'


const ListingsScreen = ({ navigation }) => {

    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

    // when we want to call multiple api's in single component 
    // we can't add multiple variables for error & loading
    // in that case we don't use object destructuring

    // call
    // const getListingsApi = useApi(listingsApi.getListings)

    // access
    // getListingsApi.request()
    // getListingsApi.error



    useEffect(() => {
        loadListings()
    }, [])

    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't retrieve the listings.</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>
            }
            <ActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={listings => listings._id.toString()}
                renderItem={({ item }) => (
                    <AppCard
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: Platform.OS === 'ios' ? 20 : 10,
        backgroundColor: colors.light
    }
})

export default ListingsScreen
