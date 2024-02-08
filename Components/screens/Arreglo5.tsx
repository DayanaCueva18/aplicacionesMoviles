import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function Arreglo5() {
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
    justifyContent:'center',
    alignItems:'center',
    
    flexDirection:'row',
    
   

},
boxPurple:{
    width:'100%',
    height:'13%',
    backgroundColor:'#C39BD3',
    borderWidth:10,
    borderColor:'white',
    
    right:40
    

},
boxOrange:{
    width:'110%',
    height:'13%',    
    backgroundColor:'#5499C7',
    borderWidth:10,
    borderColor:'white',
    marginLeft:20,
    
    bottom:-100,
    
},
boxRed:{
    width:'110%',
    height:'13%',
    backgroundColor:'#C0392B',
    borderWidth:10,
    borderColor:'white',
    top:-120,
    left:40
    
},



})

 