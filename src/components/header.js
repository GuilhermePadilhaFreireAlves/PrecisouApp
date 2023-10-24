import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
export function Header () {
  function handleSignOut () {
    auth().signOut()
  }

  return (

    <TouchableOpacity onPress={handleSignOut}>
      <Text style={styles.textInput}>
        Logout
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: 'ADD9FF',
    height: 30
  }
})
