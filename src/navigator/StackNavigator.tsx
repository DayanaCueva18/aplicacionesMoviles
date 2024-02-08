import { createStackNavigator } from '@react-navigation/stack';
import { PantallaScreen } from '../screens/PantallaScreen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export  type RootStackParamList={
    PantallaScreen: undefined,
    Pantalla2Screen: undefined,
    Pantalla3Screen:undefined,
    PersonaScreen: {id: number, name: string}
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{
            backgroundColor:'#DEAEFA',
            elevation:0
        },
        cardStyle:{
            backgroundColor:'white'
        }
    }}>
    
      <Stack.Screen name="PantallaScreen" options={{title:'Pantala 1'}} component={PantallaScreen} />
      <Stack.Screen name="Pantalla2Screen" options={{title:'Pantala 2'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3Screen" options={{title:'Pantala 3'}} component={Pantalla3Screen} />
      <Stack.Screen name="PersonaScreen" options={{title:'Persona'}} component={PersonaScreen} />
      
    </Stack.Navigator>
  );
}