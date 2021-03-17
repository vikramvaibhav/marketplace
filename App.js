import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'


import AccountsScreen from './app/screens/AccountsScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import MessageScreen from './app/screens/MessageScreen'
import TestScreen from './app/screens/TestScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'

const App = () => {
  return (
    // <AccountsScreen />
    // <ListingDetailsScreen />
    // <ListingEditScreen />

    // Home
    // <ListingsScreen />

    // <LoginScreen />
    // <MessageScreen />
    // <ViewImageScreen />
    // <WelcomeScreen />
    // <TestScreen />
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
export default App
































// import React, { Component, useState } from 'react'
// import {
//   View,
//   ImageBackground,
//   Image,
//   Text,
// } from 'react-native'

// import AppButton from './app/components/AppButton'
// import AppCard from './app/components/AppCard'
// import AppPicker from './app/components/AppPicker'
// import AppText from './app/components/AppText'
// import AppTextInput from './app/components/AppTextInput'
// import Icon from './app/components/Icon'
// import ListItem from './app/components/ListItem'
// import Screen from './app/components/Screen'

// import AccountsScreen from './app/screens/AccountsScreen'
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
// import ListingEditScreen from './app/screens/ListingEditScreen'
// import ListingsScreen from './app/screens/ListingsScreen'
// import LoginScreen from './app/screens/LoginScreen'
// import MessageScreen from './app/screens/MessageScreen'
// import ViewImageScreen from './app/screens/ViewImageScreen'
// import WelcomeScreen from './app/screens/WelcomeScreen'

// const catagories = [
//   {
//     value: 1,
//     label: "Furniture"
//   },
//   {
//     value: 2,
//     label: "Electronics"
//   },
//   {
//     value: 3,
//     label: "Musical Instruments"
//   }
// ]

// const App = () => {
//   const [catagory, setCatagory] = useState('')
//   return (

//     //Picker Component
//     // <Screen>
//     //   <AppPicker
//     //     selectedItem={catagory}
//     //     onSelectItem={item => setCatagory(item)}
//     //     icon="th"
//     //     placeholder="Catagory"
//     //     items={catagories}
//     //   />
//     //   <AppTextInput icon="envelope" placeholder="Email" />
//     // </Screen>

//     // <AccountsScreen />
//     // <ListingDetailsScreen />
//     // <ListingEditScreen />
//     // <ListingsScreen />
//     // <LoginScreen />
//     // <MessageScreen />
//     // <ViewImageScreen />
//     <WelcomeScreen />

//     // <Screen>
//     //   <ListItem
//     //     title="Title"
//     //     // subTitle="Sub Title"
//     //     IconComponent={<Icon name="envelope" />} />
//     // </Screen>

//     // <View
//     //   style={{
//     //     flex: 1,
//     //     justifyContent: "center",
//     //     alignItems: "center"
//     //   }}
//     // >
//     //   <AppText>
//     //     Here comes the sun do, do, do
//     //     Here comes the sun
//     //     And I say it's all right
//     //     Little darling, it's been a long cold lonely winter
//     //     Little darling, it seems like years since it's been here
//     //     </AppText>
//     //   <AppButton title="Login" onPress={() => console.log('Tapped')} />
//     // </View >

//     // <View style={{
//     //   backgroundColor: "#f8f4f4",
//     //   padding: 20,
//     //   paddingTop: 100
//     // }}>
//     //   <AppCard
//     //     title="Haro BMX"
//     //     subTitle="$500"
//     //     image={require("./app/assets/bmx.jpg")}
//     //   />
//     // </View>
//   )
// }
// export default App