import React from 'react'
import { View, StyleSheet } from 'react-native'
// import LoginScreen from './src/screens/loginScreen'
// import LoginScreen2 from './src/screens/loginScreen2'
// import CadastroUsuario from './src/screens/cadastroUsuario'
// import HomeScreen from './src/screens/homeScreen'
// import ServicoScreen from './src/screens/ServicoScreen'
// import ContaScreen from './src/screens/contaScreen'
// import aaaa from './src/screens/teste'
import { Routes } from './src/routes'
// import Boracai from './src/screens/teste2'

const App = () => {
  return (

    <View style={styles.container}>
    <Routes/>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1

  }
})
export default App
