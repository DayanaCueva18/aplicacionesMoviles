import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponents } from './TitleComponents'
import { PRIMARY_COLOR } from './constantsColor'
import { BodyComponents } from './BodyComponents'
import {InputComponent} from '../InputComponent'
import { ButtonComponent } from '../ButtonComponent'


interface LoginForm{
  username:string;
  password:string;
}

export const LoginScreen = () => {

  const [form,setForm]=useState<LoginForm>({
    username:'',
    password:'',
  });

  const [hiddenPassword, sethiddenPassword] = useState(true);

  const handlerChangeText=(name: string, value:string)=>{
    // console.log(key);
    // console.log(value);
     setForm(prevState=>({
      ...prevState,
      [name]:value
     }))
  }


  const handlerSendInfo=()=>{
    console.log(form)
  }
  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponents title='Iniciar Sesión'/>
        <BodyComponents>
          
          <Text style={style.textWelcoom}>BIENVENIDO DE NUEVO!!!</Text>
          <Text style={style.textDescription}>Realiza tus compras de manera rapida y segura</Text>
        
          <InputComponent placeholder='Usuario' name={'username'} onChangeText={handlerChangeText}/>
          <View style={style.containerforms}> 
          <InputComponent placeholder='Contraseña' name={'password'}
           onChangeText={handlerChangeText} 
           isPassword={hiddenPassword} hasIcon={true} accionIcon={()=>sethiddenPassword(!hiddenPassword)}/>
          
          </View>
          <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
        </BodyComponents>
        

    </View>
  )
}
 
const style=StyleSheet. create({
  textWelcoom:{
    fontSize:17,
    fontWeight:'bold',
    color:'black'
  },
  textDescription:{
    fontSize:15,
    marginTop:15,
    marginVertical:20
  
  },
  containerforms:{
    marginVertical:10,

  }

}
)