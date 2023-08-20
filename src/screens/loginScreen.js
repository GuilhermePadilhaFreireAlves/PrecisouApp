import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const LoginScreen = () => {
  return (

    <View style={styles.container}>
      <View style = {styles.container2}>
      <Image
      source = {require('../../assets/imagens/logo.png')} style = {styles.imageLayout}
      />
      <Image
      source = {require('../../assets/imagens/textologo.png')} style = {styles.textoimagem}
      />

      </View>

      <View style = {styles.container3}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'

  },
  container2: {
    flex: 2,
    marginTop: 30
  },
  container3: {
    flex: 3,
    marginTop: 300
  },
  title: {
    fontSize: 80,
    marginTop: 50,
    color: '#289AFF'

  },
  loginButton: {
    backgroundColor: '#fff',
    width: 242,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#289AFF'
  },
  signupButton: {
    backgroundColor: '#ffff',
    width: 242,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#289AFF'
  },
  buttonText: {
    color: '#289AFF',
    fontSize: 20,
    fontFamily: 'Neucha'

  },
  imageLayout: {
    height: 250,
    width: 300

  },
  textoimagem: {
    height: 110,
    width: 300,
    marginLeft: 0
  }
})

export default LoginScreen
