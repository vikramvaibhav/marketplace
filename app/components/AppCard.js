import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import colors from '../config/colors'
import AppText from './AppText'

const AppCard = ({ title, subTitle, imageUrl, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginBottom: 20
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
})

export default AppCard
