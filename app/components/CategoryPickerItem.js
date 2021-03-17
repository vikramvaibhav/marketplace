import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={75} />
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem
