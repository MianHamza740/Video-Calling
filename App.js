import React, { useState, useRef, useEffect, useContext, useMemo, memo } from 'react';

import { Router, Scene,Stack } from 'react-native-router-flux';
 
import Home_Page from "./screens/Home_Page";
import messaging from '@react-native-firebase/messaging';
console.disableYellowBox = true;

export default function App() {

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
  
  // Listen for foreground notifications
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Received foreground notification:', remoteMessage);
    });
  
    return unsubscribe;
  }, []);
  
  // Request permission on component mount
  useEffect(() => {
    requestUserPermission();
  }, []);

  return(

    <Router>
   
      <Stack key="root"  >
         <Scene key="Home_Page" component={Home_Page} title="Home_Page"  hideNavBar={true} />
      </Stack>
  
    </Router>
  )
}