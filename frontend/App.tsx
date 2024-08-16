import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Login from "./src/pages/Login/index";
import QuemVc from "./src/pages/QuemVc";
import Register from './src/pages/Register';
import Confirmacao from "./src/pages/Confirmacao";
import DetalhesJogos from "./src/pages/DetalhesJogos";
import Endereco from "./src/pages/Endereco";
import NovosProdutos from './src/pages/NovosProdutos';
import CadastroProduto from './src/pages/CadastroProduto';

import Route from './src/routes';
import Carrinho from './src/pages/Carrinho';
import Splash from './src/pages/Splash.tsx';

export default function App() {
  return (
    <Route/>
  );
}
