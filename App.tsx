import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
//import { LoginScreen } from './src/components/screens/LoginScreen';
import { StackNavigator } from './src/navigator/StackNavigator';

const App=()=>{
  return(
    
      <NavigationContainer>
      {/* <LoginScreen/> */}
      <StackNavigator/>
      </NavigationContainer>
  
  )
}

export default App;