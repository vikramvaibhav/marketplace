import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import AppCard from '../components/AppCard'
import Screen from '../components/Screen'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Haro Interstate',
        subTitle: '539.99',
        image: require('../assets/bmx.jpg')
    },
    {
        id: 2,
        title: 'Hyper Jet Fuel',
        subTitle: '900',
        image: require('../assets/bmx.jpg')
    }
]

const ListingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) => (
                    <AppCard
                        title={item.title}
                        subTitle={"$" + item.subTitle}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen
