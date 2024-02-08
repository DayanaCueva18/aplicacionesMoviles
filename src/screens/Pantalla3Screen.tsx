import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'Pantalla3Screen'>{};

export const Pantalla3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pantalla 3 Screen</Text>
        <Button title='Regresar'
        onPress={()=>navigation.pop()}/>
        

<Button title='Regresar'
        onPress={()=>navigation.popToTop()}/>
    </View>
  )
}
