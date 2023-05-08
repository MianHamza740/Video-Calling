import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
   
export default class buttun extends Component { 

  render() {

    return(
       <View style={styles.container}>
          <Text style={{color:'black'}}>Home Page</Text>
          <Text style={{color:'black'}}>Log: My first value after uploading the project on git</Text>
          <Text style={{color:'black'}}>Log: My Second value after uploading the project on git</Text>
          <Text style={{color:'black'}}>log1: this is my first value after uploading the app on git from log</Text>

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