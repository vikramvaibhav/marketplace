import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import AppButton from '../components/AppButton'
import routes from '../navigation/routes'

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/icon_trans.png')}
                />
                <Text style={styles.tagline}>Sell your old stuff</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: "100%",
        padding: 20
    },
    logo: {
        height: 80,
        width: 80,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: "400",
    }
})

export default WelcomeScreen
