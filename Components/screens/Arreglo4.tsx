import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function arreglo4() {
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
    
},
boxPurple:{
    width:'600%',
    height:'800%',
    backgroundColor:'#C39BD3',
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
   
    right:0,
    
    bottom: 100
   

},
boxOrange:{
    width:'800%',
    height:'400%',    backgroundColor:'#5499C7',
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
    right:0,
    
    bottom:20
   
},
boxRed:{
    width:'600%',
    height:'200%',
    backgroundColor:'#C0392B',
    borderWidth:10,
    borderColor:'white',
    
    position:'absolute',
    right:0,
    
},



})

 

