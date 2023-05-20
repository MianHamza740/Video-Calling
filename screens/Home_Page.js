import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging'
export default class buttun extends Component { 
  constructor(props) {

    super(props)

    this.state = {
     
      token: '',
    
    }
  }


  componentDidMount = async () => {

  const settings = await messaging().requestPermission();

  if (settings) {
    await messaging().registerDeviceForRemoteMessages();


    messaging().getToken().then((currentToken) => {
      if (currentToken) {
        this.setState({ token: currentToken })
     
        console.log('currentToken of device  ', currentToken)
      } else {
        alert("no token");
      }
    }).catch((err) => {
      console.log(err)
    });
    console.log('Permission settings: ok', settings);
  } else {
    console.log('Permission settings: not ok', settings);

  }

}
  render() {

    return(
       <View style={styles.container}>
          <Text style={{color:'black'}}>Token</Text>
          <Text style={{color:'black',padding:10}}>{this.state.token}</Text>
        

       </View>
    )

  }}    

  const styles = StyleSheet.create({
    container:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
  }) 