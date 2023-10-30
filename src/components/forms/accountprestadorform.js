import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert

} from 'react-native'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
export function Accountprestadorform () {
  const [nomepres, setNomepres] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [endereco, setEndereco] = useState('')
  const [tiposervico, setTiposervico] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewPrestador () {
    setIsLoading(true)
    const user = auth().currentUser
    database().ref('prestadores').child(user.uid).set({
      NomeP: nomepres,
      Cpf: cpf,
      Tel: telefone,
      Nasc: nascimento,
      Tiposerv: tiposervico,
      Desc: descricao,
      Preco: preco

    })
      .then(() => Alert.alert('Cadastrado com sucesso', 'Voce foi cadastrado com sucesso'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }

  return (

      <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="Nome:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(nomepres) => setNomepres(nomepres)}
          value={nomepres}
        />
            <TextInput
          style={styles.inputsenha}
          placeholder="CPF:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(cpf) => setCpf(cpf)}
          value={cpf}
        />
    <TextInput
          style={styles.inputsenha}
          placeholder="Telefone:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(telefone) => setTelefone(telefone)}
          value={telefone}
        />

        <TextInput
          style={styles.inputsenha}
          placeholder="Data de nascimento:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(nascimento) => setNascimento(nascimento)}
          value={nascimento}

        />
                <TextInput
          style={styles.inputsenha}
          placeholder="Endereço/CEP:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(endereco) => setEndereco(endereco)}
          value={endereco}
        />
        <TextInput
          style={styles.inputsenha}
          placeholder="Tipo de serviço:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(tiposervico) => setTiposervico(tiposervico)}
          value={tiposervico}
        />
        <TextInput
          style={styles.inputsenha}
          placeholder="Descrição dos seus serviços:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(descricao) => setDescricao(descricao)}
          value={descricao}
        />
        <TextInput
          style={styles.inputsenha}
          placeholder="Preço:"
          underlineColorAndroid="rgb(79, 172, 254)"
          onChangeText={(preco) => setPreco(preco)}
          value={preco}
        />

        <TouchableOpacity
          style={styles.Loginbotao}
          isLoading={isLoading}
          onPress={handleNewPrestador}
          >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>

        </View>

  )
}
const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1
  },
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
  }

})
