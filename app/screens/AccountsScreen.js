import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Icon from '../components/Icon'
import routes from '../navigation/routes'

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "list",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "envelope",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES
    }
]

const AccountsScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Vikram Vaibhav"
                    subTitle="vikramvaibhav@outlook.com"
                    image={require('../assets/bmx.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="sign-out" backgroundColor={colors.medium} />} />
        </Screen>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }

})

export default AccountsScreen
