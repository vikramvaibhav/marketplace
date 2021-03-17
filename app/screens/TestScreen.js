import React from 'react'
import { View, Text, Button } from 'react-native'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FontAwesome5 } from '@expo/vector-icons'

import Screen from '../components/Screen'

const Link = () => {
    const navigation = useNavigation()
    return (
        <Button title="Details Link" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
    )
}

const Account = () => (
    <Screen>
        <Text>Account Screen</Text>
    </Screen>
)

const Tweets = ({ navigation }) => (
    <Screen >
        <Text>Tweets</Text>
        <Button title="Tweets Details" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
        <Link />
    </Screen >
)

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Details Screen {route.params.id}</Text>
    </Screen>
)

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Tweet"
        screenOptions={{
            headerStyle: { backgroundColor: "skyblue" },
            headerTintColor: "white"
        }}
    >
        <Stack.Screen
            name="Tweet"
            component={Tweets}
            options={{
                headerStyle: { backgroundColor: "skyblue" },
                headerTintColor: "white",
                headerShown: false
            }}
        />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={({ route }) => ({ title: route.params.id })}
        />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black",
        }}
    >
        <Tab.Screen
            name="Feed"
            component={StackNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <FontAwesome5 name="home" size={size} color={color} />
            }}
        />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
)

const TestScreen = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default TestScreen
