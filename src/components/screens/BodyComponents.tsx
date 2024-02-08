import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { BODY_COLOR } from './constantsColor';

export const BodyComponents = (props:any) => {

    const {height}=useWindowDimensions();

  return (
    <View style={{
        height:height*0.88,
        ...styles.container}}>
        {props.children}
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:BODY_COLOR,
        borderTopLeftRadius:20,
        borderTopRightRadius:30,
        paddingVertical:30,
        paddingHorizontal:30

    }
})