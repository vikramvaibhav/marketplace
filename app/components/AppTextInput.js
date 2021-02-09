import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <FontAwesome5
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
            />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={[defaultStyles.text, styles.textInput]}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        flex: 1
    }
})

export default AppTextInput
