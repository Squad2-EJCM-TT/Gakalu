import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Login from "./src/pages/Login/index";
import Register from './src/pages/Register'
import Route from './src/routes';

export default function App() {
  return (
    <Route/>
    //<Products/>
  );
}
