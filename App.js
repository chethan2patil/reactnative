// // //This is an example code to pass values between two screens using React Navigator// 
// // import React, { Component } from 'react';
// // //import react in our code. 
// // //For react-navigation 3.0+
// // //import { createAppContainer, createStackNavigator } from 'react-navigation';
// // //For react-navigation 4.0+
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator} from 'react-navigation-stack';

// // import FirstPage from './pages/FirstPage';
// // import SecondPage from './pages/SecondPage';
// // //import all the screens we are going to switch 
// // const App = createStackNavigator({
// //   //Constant which holds all the screens like index of any book 
// //     FirstPage: { screen: FirstPage }, 
// //     //First entry by default be our first screen 
// //     //if we do not define initialRouteName
// //     SecondPage: { screen: SecondPage }, 
// //   },
// //   {
// //     initialRouteName: 'FirstPage',
// //   }
// // );
// // export default createAppContainer(App);


// //This is an example code to pass values between two screens using React Navigator
// import React, { Component } from 'react';
// //import react in our code. 
// //For react-navigation 3.0+
// //import { createAppContainer, createStackNavigator } from 'react-navigation';
// //For react-navigation 4.0+
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
// import screen from 'react-native-screens'

// import login from './Login_dashboard/login.js';
// import dashboard from './Login_dashboard/dashboard.js';
// //import all the screens we are going to switch 
// const App = createStackNavigator({
//   //Constant which holds all the screens like index of any book 
//     login: { screen: login }, 
//     //First entry by default be our first screen 
//     //if we do not define initialRouteName
//     dashboard: { screen: dashboard }, 
//   },
//   {
//     initialRouteName: 'login',
//   }
// );
// export default createAppContainer(App);
// --------------------------------------------------------------------------------
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}