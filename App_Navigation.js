// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import  React  from "react";
import { StyleSheet, Text, View } from 'react-native';
// import Expo from 'expo';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends React.Component{
    static NavigationOptions={
        title:'Home',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style = {styles.container}>
                <Text 
                onPress={()=>navigate('Profile')}>navigate to Profile
                </Text>
            </View>
        );
    }
}

class ProfileScreen extends React.Component{
    static NavigationOptions={
        title:'Profile',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style = {styles.container}>
                <Text 
                onPress={()=>navigate('Home')}>navigate to Home
                </Text>
            </View>
        );
    }
}

const NavigationApp = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen},
}, { 
    NavigationOptions: {
        headerStyle: {
            marginTop: Expo.Constants.statusBarHeight
        }
    }
});

export default class App extends React.Component {
    render() {
        return <NavigationApp />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
});
