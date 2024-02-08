import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { INPUT_COLOR, PRIMARY_COLOR } from './screens/constantsColor'
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputProps{
    placeholder:string;
    name:string;
    isPassword?:boolean;
    hasIcon?:boolean;

    // metodo que captura el valor dle input
    onChangeText:(name: string, value:string)=>void;
    accionIcon?:()=>void,

}

export const InputComponent = ({placeholder, name, 
    onChangeText, isPassword=false,hasIcon=false, accionIcon=()=>{}}:InputProps) => {
  return (
    <View>
        {
            (hasIcon)
            ?<Icon style={styles.icon}
            name='visibility' size={20} color={PRIMARY_COLOR}
            onPress={accionIcon}/>:null
}
    
    <TextInput
    placeholder={placeholder}
    keyboardType={'default'}
    style={styles.inputtext}
    onChangeText={(value: string)=> onChangeText(name, value)}
    secureTextEntry={isPassword}/>
    </View>
  )
}

const styles=StyleSheet.create({
    icon:{
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:15,
        

    },
    inputtext:{
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10,



    }
})
