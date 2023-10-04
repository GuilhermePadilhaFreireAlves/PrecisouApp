import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './tab.routes'

export function Routes () {
  return (
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
  )
}
