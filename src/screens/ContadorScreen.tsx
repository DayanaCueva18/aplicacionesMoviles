import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Contador:{contador}

      </Text>
      <Fab title='+1'  //izquierda
      onPress={()=>setContador(contador+1)}/>


<Fab title='-1'  //derecha
position='br'
      onPress={()=>setContador(contador-1)}/>

      {/* <Button title='Enviar' onPress={()=>setContador(contador+1)} />
     
      <Button title='Bajar' onPress={()=>setContador(contador-1)} /> */}

      

      {/* <TouchableOpacity 
      style={styles.fablocationRL}
      onPress={()=>setContador(contador-1)}>
      <View style={styles.fab}>
      <Text style={styles.fabText}>-1 </Text>
      </View>
      </TouchableOpacity> */}
      

    </View>
  
  )
}


//Estilos componente
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },

  title:
  {
    textAlign: 'center',
          fontSize: 30,
          position: 'relative',
          top: -70,
  },
   

})