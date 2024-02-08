import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Box Object Model </Text>
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#CCCCFF'
    },

title:{
    //padding:50,
    paddingHorizontal:100,
    paddingVertical:30,
    //marginLeft:20,
    marginHorizontal:20,
    fontSize: 20,
    //width: 150,
   //backgroundColor:'red',
   borderWidth:10,

}

})