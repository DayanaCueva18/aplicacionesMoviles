import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'PantallaScreen'>{};

const persona1={
    id:1,
    name:'Dayana'
}

const persona2={
    id:2,
    name:'Michael',

}


export const PantallaScreen = ({navigation}: Props) => {
    //console.log(props)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pantalla 1 Screen</Text>
        <Button title='Ir a pantalla 2'
        onPress={()=>navigation.navigate('Pantalla2Screen' )}/>
        <Text>Navegar con argumentos</Text>

<View style={{flexDirection:'row'}}>
         <TouchableOpacity style={
            styles.buttonPerson
         }
        onPress={()=>navigation.navigate('PersonaScreen', persona1)}>
        <Text style={styles.buttonPersonText}>Dayana</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonPerson}
        onPress={()=>navigation.navigate('PersonaScreen', persona2)}>
        <Text style={styles.buttonPersonText}>Michael</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
