import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const { width, height}=Dimensions.get('window');


export const DimensionesScreen = () => {
    //hook dimensions
    useWindowDimensions
    const {width, height}=useWindowDimensions();
  return (<View>
    <View style={styles.container}>
        <View style={{...styles.boxpurple, 
            width:width*0.50}}></View>
        <View style={styles.boxOrange}></View>
    </View>
    <Text style={styles.title}>W: {width} H: {height}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:600,
        backgroundColor:'red'
    },

    boxpurple:{
        backgroundColor:'purple',
        //width:'50%',
        height:'50%'
    },
    boxOrange:{
        backgroundColor:'orange'
    },
    title:{
        fontSize:25,

    }

})