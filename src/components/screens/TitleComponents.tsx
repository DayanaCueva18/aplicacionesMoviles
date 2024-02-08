import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'

interface TitleProps{
    title:string,

}

export const TitleComponents = ({title}:TitleProps) => {
    const{height}=useWindowDimensions();

 
    return (
    <Text style={{
        height:height*0.12,
        ...style.title
    }}>{title}</Text>
  )
}

const style=StyleSheet.create({
    title:{
        color:'black',
        fontSize:27,
        fontWeight:'bold',
        fontFamily:'arial',
        paddingHorizontal:30,
        paddingVertical:30
    },
    
})
