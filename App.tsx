import React from 'react'
import { HolaMundo } from './src/screens/HolaMundo';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectScreen } from './src/screens/BoxObjectScreen';
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';



export const App = () => {
  return (
    <SafeAreaView style={
      {flex:1}
    }>
  {/* <HolaMundo/>; */}
  {/* <ContadorScreen/> */}

  {/* <BoxObjectScreen/> */}
  {/* <DimensionesScreen/> */}
  {/* <PositionScreen/> */}
  <FlexScreen/>

  
  </SafeAreaView>
  )
}
