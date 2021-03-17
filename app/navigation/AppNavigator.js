import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{ style: { paddingHorizontal: 50 } }}
    >
        <Tab.Screen
            name="Feed"
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} />
            }}
        />
        <Tab.Screen
            name="ListingEdit"
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />
            })}
        />
        <Tab.Screen
            name="Account"
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" color={color} size={size} />
            }}
        />
    </Tab.Navigator >
)

export default AppNavigator