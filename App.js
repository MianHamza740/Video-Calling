import React, { Component } from 'react';
import { Router, Scene,Stack } from 'react-native-router-flux';
 
import Home_Page from "./screens/Home_Page";

console.disableYellowBox = true;

export default function App() {

  return(

    <Router>
   
      <Stack key="root"  >
         <Scene key="Home_Page" component={Home_Page} title="Home_Page"  hideNavBar={true} />
      </Stack>
  
    </Router>
  )
}