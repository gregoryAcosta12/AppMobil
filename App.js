import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'; // Asegúrate de que esto sea el archivo correcto
import Characters from './components/Characters'; // Asegúrate de que el archivo Characters.js existe
import Moments from './components/Moments';
import About from './components/About';
import InMyLife from './components/InMyLife';
import ContactMe from './components/ContactMe';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="inicio" component={Home} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Moments" component={Moments} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="InMyLife" component={InMyLife} />
        <Stack.Screen name="ContactMe" component={ContactMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
