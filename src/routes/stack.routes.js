import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ServicoScreen from '../screens/ServicoScreen'
import ContaScreen from '../screens/contaScreen'
import Barrabotoes from '../components/BarradosBotoes'
const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes () {
  return (
        <Navigator screenOptions={{ headerShown: false }}>

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
