import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    Button
} from 'react-native';
import bgImage from './images/indexlogo.jpg'
import logo from './images/nms-logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')//returns the current screen dimension
export default class Loginsignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: true,
            press: false,
            username: '',
            password: '',
            text: ''
        };
        this._postData = this._postData.bind(this)
    }
    showPassword = () => {
        if (this.state.press == false) {
            this.setState({ showPassword: false, press: true })
        } else {
            this.setState({ showPassword: true, press: false })
        }
    }
    static navigationOptions = {
        //Setting the header of the screen
        title: 'Login',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>KPO</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'

                        value={this.state.username}
                        onChangeText={username => this.setState({ username })}

                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPassword}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'

                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPassword.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'}
                            size={26} color={'rgba(255,255,255,0.7)'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text
                        style={styles.text}
                        onPress={() =>
                            this._postData()
                        }

                    >Login{this.state.text}</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
    _postData = async () => {
        const { navigate } = this.props.navigation;
        let collections = {}
        if (this.state.username.trim() === "") {
            alert("USername required")
        } else if (this.state.password.trim() === "") {
            alert("Password required")
        } else {
            try {
                collections.userName = this.state.username,
                    collections.password = this.state.password
                console.log(collections)
                this.setState({ text: 'Clicked' })
                fetch('http://outsource-management.aranyaa-construction.com/api/auth/admin-login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(collections)
                })
                    .then(res => res.json())
                    .catch(error => console.error('Error :', error))
                    .then(response => {
                        console.log('Success:', response);
                        if (response.responseStatus) {
                            alert("authenticated successfully!!!");
                            navigate('dashboard', {
                                JSON_ListView_Clicked_Item: response.loginToken
                            })
                        } else {
                            alert("authenticated Unsuccessfully!!!");
                        }
                    });
            } catch (e) {
                console.log(e)
            }
        }
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    inputContainer: {
        marginTop: 10
    },
    btnEye: {
        position: "absolute",
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
    }
});