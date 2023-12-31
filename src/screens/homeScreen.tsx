import React from 'react'
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from '../components/header'
import Barrabotoes from '../components/BarradosBotoes'
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

export function HomeScreen() {
  const navigation = useNavigation()

  const data = [
    {
      name: 'Guilherme Pontes',
      stars: '5',
      description: 'Excelente trabalho, recomendo muito, chegou no horário muito simpático'
    },
    {
      name: 'Guilherme Pontes',
      stars: '5',
      description: 'Excelente trabalho, recomendo muito, chegou no horário muito simpático'
    },
    {
      name: 'Guilherme Pontes',
      stars: '5',
      description: 'Excelente trabalho, recomendo muito, chegou no horário muito simpático'
    },
    {
      name: 'Guilherme Pontes',
      stars: '5',
      description: 'Excelente trabalho, recomendo muito, chegou no horário muito simpático'
    },
    {
      name: 'Guilherme Pontes',
      stars: '5',
      description: 'Excelente trabalho, recomendo muito, chegou no horário muito simpático'
    }
  ]

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <TextInput style={styles.textInput} placeholder="O que deseja?" />
      </View>
      <Header />

      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
              <Text style={styles.stars}>Stars: {item.stars}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <Barrabotoes />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD9FF'
  },
  topContainer: {
    backgroundColor: 'white',
    padding: 20
  },
  textInput: {
    backgroundColor: '#ADD9FF',
    padding: 10,
    borderRadius: 8

  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ADD9FF'

  },
  tabItem: {
    color: 'white',
    fontSize: 16
  },
  flatListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'

  },
  listItem: {
    backgroundColor: '#ADD9FF',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    marginTop: 20
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  stars: {
    fontSize: 25

  },
  description: {
    fontSize: 14,
    marginTop: 5
  },
  btnBotoes: {
    backgroundColor: 'black'
  },
  botaoview: {
    backgroundColor: 'yellow'
  }

})

export default HomeScreen
