import React, { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import HomeScreen from '../screens/homeScreen'
import { AuthRoutes } from './auth.routes'
export function Routes() {
  interface SomeProps {
    user: FirebaseAuthTypes.User;
  }
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser)
    return subscriber
  }, [])
  return (
    <NavigationContainer>
      {user ? <HomeScreen /> : <AuthRoutes />}

    </NavigationContainer>
  )
}
