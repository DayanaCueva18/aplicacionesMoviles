import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla2Screen = () => {

  //hook navegacion 
  const navigation=useNavigation();
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pantalla 2 Screen</Text>

        <Button title='Ir a pantalla 3 '
        onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Pantalla3Screen'}))}/>
    </View>
  )
}
