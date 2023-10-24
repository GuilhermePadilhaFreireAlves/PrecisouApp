import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ServicoScreen from '../screens/ServicoScreen'
import ContaScreen from '../screens/contaScreen'
import Barrabotoes from '../components/BarradosBotoes'
import HomeScreen from '../screens/homeScreen'
import ServicoPrincipal from '../screens/ServicoPrincipal'
const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes () {
  return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
            name = 'homep'
            component={HomeScreen}
            />
              <Screen
            name = 'servicop'
            component={ServicoScreen}
            />
             <Screen
            name = 'servicoprincipalp'
            component={ServicoPrincipal}
            />
            <Screen
            name = 'contap'
            component={ContaScreen}
            />
                <Screen
            name = 'barrabtnp'
            component={Barrabotoes}
            />

        </Navigator>
  )
}
