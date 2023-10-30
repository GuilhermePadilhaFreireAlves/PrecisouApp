import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/loginScreen'
import LoginScreen2 from '../screens/loginScreen2'
import CadastroUsuario from '../screens/cadastroUsuario'
const { Navigator, Screen } = createNativeStackNavigator()
export function AuthRoutes () {
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

      </Navigator>
  )
}
