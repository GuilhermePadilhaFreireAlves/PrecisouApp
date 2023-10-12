import React, { useState } from 'react'
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet

} from 'react-native'
import auth from '@react-native-firebase/auth'

export function AccountForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewAccount () {
    setIsLoading(true)

    auth().createUserWithEmailAndPassword(email, password, nome)
      .then(() => Alert.alert('Conta', 'cadastrada com sucesso!'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }
  return (

      <View style={styles.container}>
            <TextInput
          style={styles.input}
          placeholder="Nome:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={setNome}
        />
    <TextInput
          style={styles.inputsenha}
          placeholder="email:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.inputsenha}
          placeholder="Senha:"
          underlineColorAndroid="rgb(79, 172, 254)"
          secureTextEntry onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.Loginbotao}
          isLoading={isLoading}
          onPress={handleNewAccount}
          >
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  input: {
    height: 50,
    width: 300,
    marginTop: 100,
    fontSize: 20,
    fontFamily: 'Neucha'
  },
  inputsenha: {
    height: 50,
    width: 300,
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Neucha'
  },
  Loginbotao: {
    backgroundColor: '#289AFF',

    width: 242,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 50
  },
  buttonText: {
    fontSize: 25,
    color: '#ffff',
    fontFamily: 'Neucha'
  },
  botaocadastro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonTextLog: {
    fontSize: 20,
    color: '#289AFF',
    fontFamily: 'Neucha'
  }
})
