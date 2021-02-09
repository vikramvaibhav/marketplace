import React from 'react'
import { SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}>
                <FontAwesome5 name="times" size={30} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <FontAwesome5 name="trash" size={30} color="white" />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/background.jpg')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen
