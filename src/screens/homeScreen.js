import React from 'react'
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'

const HomeScreen = () => {
  const data = [
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

      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.stars}>Stars: {item.stars}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.tabItem}>Inicio</Text>
        <Text style={styles.tabItem}>Servicos</Text>
        <Text style={styles.tabItem}>Contas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ADD9FF'
  },
  topContainer: {
    backgroundColor: 'white',
    padding: 20
  },
  textInput: {
    backgroundColor: '#4FACFE',
    padding: 10,
    borderRadius: 8

  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#4FACFE'

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
    backgroundColor: '#4FACFE',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    marginTop: 200
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
  }
})

export default HomeScreen
