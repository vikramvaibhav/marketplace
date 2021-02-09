import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

import colors from '../config/colors'

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/bmx.jpg')}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Haro Interstate</AppText>
                <AppText style={styles.price}>$539.99</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        title="Vikram Vaibhav"
                        subTitle="5 Listings"
                        image={require('../assets/bmx.jpg')}
                    />
                </View>
            </View>
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