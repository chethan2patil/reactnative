import React, { Component } from 'react';
import { StyleSheet, View, Text, BackHandler, Alert, TouchableOpacity, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class SecondPage extends Component {
    constructor(props) {
        super(props)
        // this.BackHandler = this.BackHandler.bind(this)
        this.funConfirm = this.funConfirm.bind(this)
    }

    funConfirm() {
        Alert.alert(
            "KPO's says",
            'Are you sure that you want to logout ',
            [
                { text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel' },
                { text: 'YES',onPress: () => BackHandler.exitApp() },
            ]
        );
    }

    static navigationOptions = {
        //Setting the header of the screen
        title: 'DashBoard',
        headerLeft: null,
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.funConfirm);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.funConfirm);
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (

            //View to hold our multiple components
            <View style={styles.container}>

                <Text>
                    The login token is
                </Text>
                {/*Using the navigation prop we can get the value passed from the first Screen*/}

                <Text style={styles.TextStyle}>
                    {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
                </Text>

                <Text style={styles.TextStyle}>
                    {this.props.navigation.state.params.JSON_ListView_Clicked_Item_pwd}
                </Text>

                {/* <Text style={{ marginTop: 16 }}>With Check</Text> */}
                {/*If you want to check the value is passed or not, 
         you can use conditional operator.*/}
                {/* <Text style={styles.TextStyle}> */}
                {/* {this.props.navigation.state.params.JSON_ListView_Clicked_Item */}
                {/* ? this.props.navigation.state.params.JSON_ListView_Clicked_Item */}
                {/* : 'No Value Passed in USERNAME'} */}
                {/* </Text> */}
                {/* 
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item_pwd
            ? this.props.navigation.state.params.JSON_ListView_Clicked_Item_pwd
            : 'No Value Passed IN password'}
        </Text> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: 23,
        textAlign: 'center',
        color: '#f00',
    },
});