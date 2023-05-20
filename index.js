// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

// Register background handler for handling background notifications
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Received background notification:', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);

