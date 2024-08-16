import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Products from '../pages/Products';
import QuemVc from '../pages/QuemVc';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DetalhesJogos from '../pages/DetalhesJogos';
import Confirmacao from '../pages/Confirmacao';
import Coupons from '../pages/Coupons';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="QuemVc" component={QuemVc} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="DetalhesJogos" component={DetalhesJogos} />
        <Stack.Screen name="Coupons" component={Coupons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;