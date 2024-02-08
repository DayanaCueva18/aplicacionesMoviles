import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function Arreglo8() {
  return (
    
        <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxRed}></View> 
    
    </View>
    )
    }
    const styles=StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#F8C471',
       
        
        flexDirection:'row',
        
    

    },
    boxPurple:{
        width:100,
        height:'97%',
        backgroundColor:'#C39BD3',
        borderWidth:10,
        borderColor:'white',
        margin:10,
     
    
    },
    boxOrange:{
        width:'110%',
        height:'97%',    backgroundColor:'#5499C7',
        borderWidth:10,
        borderColor:'white',
        
        margin:10,
        left:20
    },
    boxRed:{
        width:'110%',
        height:'97%',
        backgroundColor:'#C0392B',
        borderWidth:10,
        borderColor:'white',
        
        margin:10,
        left:40
    },
    
    
    
    })
    
     