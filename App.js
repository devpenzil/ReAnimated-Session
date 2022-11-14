import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/Home/Home';
import AnimationOne from './app/AnimationOne/AnimationOne';
import AnimationTwo from './app/AnimationTwo/AnimationTwo';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="animationOne" component={AnimationOne} />
        <Stack.Screen name="animationTwo" component={AnimationTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
