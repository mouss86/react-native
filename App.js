import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homepage} from './homepage';
import {blueBackground} from './fondBleu';
import {BlueBiggerText} from './fondBleuTextgrandcaratere'


export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='homepage' component={homepage}/>
      <Stack.Screen name='fondBleu' component={blueBackground}/>
      <Stack.Screen name='fondBleuTextgrandcaratere' component={BlueBiggerText}/>
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}


