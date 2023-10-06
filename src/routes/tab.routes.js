import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/loginScreen'
import LoginScreen2 from '../screens/loginScreen2'
import CadastroUsuario from '../screens/cadastroUsuario'
import HomeScreen from '../screens/homeScreen'
import ServicoScreen from '../screens/ServicoScreen'
import ContaScreen from '../screens/contaScreen'
import Barrabotoes from '../components/BarradosBotoes'
const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes () {
  return (
        <Navigator screenOptions={{ headerShown: false }}>

            <Screen
            name = 'login1p'
            component={LoginScreen}
            />
              <Screen
            name = 'login2p'
            component={LoginScreen2}
            />
             <Screen
            name = 'cadastroUsuariop'
            component={CadastroUsuario}
            />
             <Screen
            name = 'homep'
            component={HomeScreen}
            />
            <Screen
            name = 'contap'
            component={ContaScreen}
            />
              <Screen
            name = 'servicop'
            component={ServicoScreen}
            />
                <Screen
            name = 'barrabtnp'
            component={Barrabotoes}
            />

        </Navigator>
  )
}
