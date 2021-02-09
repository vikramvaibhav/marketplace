import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ListItemDeleteAction = ({ onPress }) => {
    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <FontAwesome5 name="trash" size={35} color={colors.white} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListItemDeleteAction
