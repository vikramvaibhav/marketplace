import React from 'react'
import { View } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

const Icon = ({ name, size = 40, backgroundColor = "#000", iconColor = "#fff" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <FontAwesome5 name={name} size={size * 0.5} color={iconColor} />
        </View>
    )
}

export default Icon
