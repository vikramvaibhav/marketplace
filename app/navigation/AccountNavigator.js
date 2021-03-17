import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AccountsScreen from '../screens/AccountsScreen'
import MessageScreen from '../screens/MessageScreen'

const Stack = createStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountsScreen} />
        <Stack.Screen name="Messages" component={MessageScreen} />
    </Stack.Navigator>
)

export default AccountNavigator