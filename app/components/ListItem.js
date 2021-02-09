import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'

import Swipeable from 'react-native-gesture-handler/Swipeable'
import { FontAwesome5 } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        {title && <AppText style={styles.title} numberOfLines={1}>
                            {title}
                        </AppText>}
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <FontAwesome5 color={colors.medium} name="chevron-right" size={15} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem
