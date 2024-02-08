import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function Arreglo6() {
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
    
    alignItems:'center',
    
},
boxPurple:{
    width:100,
    height:100,
    backgroundColor:'#C39BD3',
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
    
    
    top:350,
    
    bottom: 300
    

},
boxOrange:{
    width:100,
    height:100,    backgroundColor:'#5499C7',
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
   
    top:450,
},
boxRed:{
    width:100,
    height:100,
    backgroundColor:'#C0392B',
    borderWidth:10,
    borderColor:'white',
   
    position:'absolute',
   
    bottom:500,
    
},



})

 