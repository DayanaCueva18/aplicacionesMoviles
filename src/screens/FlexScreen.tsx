import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        //padding:20,
        backgroundColor:'#17A589',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        flexWrap:'wrap'
       
    }, 
    box1:{
        //flex:1,

        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',
        textAlign:'center',
        //alignSelf:'center'

    },
    box2:{
        //flex:2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',
        textAlign:'center',
        //alignSelf:'flex-start'
    },
        box3:{
            //flex:5,
            borderWidth:2,
            borderColor:'white',
            fontSize:30,
            color:'white',
            textAlign:'center',
            //alignSelf:'flex-end',

        },
})
