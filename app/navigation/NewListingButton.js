import React from 'react'
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import colors from '../config/colors'

const NewListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.button}>
                    <View>
                        <FontAwesome5 name="plus-circle" size={40} color={colors.white} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 5,
        bottom: Platform.OS === 'ios' ? 20 : 40,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
})

export default NewListingButton