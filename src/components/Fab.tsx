import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

//documentacion forzada de componente fab
interface Props{
    title:string;

    position?:'bl'|'br';
    onPress:()=>void;
}

export const Fab = ({title,position='bl', onPress}:Props) => {
    //console.log(title)
  return (
    <TouchableOpacity 
      style={
    [styles.fablocation, position=='br'
     ? styles.left
     : styles.right]} 
      onPress={onPress}>
      <View style={styles.fab}>
      <Text style={styles.fabText}>{title} </Text>
      </View>
      </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    fab:{

        backgroundColor:'#DE3163',
        width:70,
        height:70,
        borderRadius:100,
        justifyContent:'center'
       },
       fabText:{
    
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
       },

       fablocation:{
        position:'absolute',
        bottom:20,
        
    
       }, right:{
        right:10

       },left:{
        left: 10
       }
      
       
       
})
