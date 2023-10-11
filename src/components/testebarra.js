import React from 'react'
import { View, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TabRoutes = () => {
  const navigation = useNavigation()

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigateToScreen('cadastroUsuariop')}>
          <View style={styles.icon}>
            <Image
              source={require('../../assets/imagens/casa2.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigateToScreen('cadastroUsuariop')}>
          <View style={styles.icon}>
            <Image
              source={require('../../assets/imagens/servico.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigateToScreen('cadastroUsuariop')}>
          <View style={styles.icon}>
            <Image
              source={require('../../assets/imagens/usuario.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#509DAD',
    width: 385,
    height: 65,
    borderRadius: 23,
    marginTop: 445,
    flexDirection: 'row'
  },
  image: {
    width: 38,
    height: 38
  },
  btn: {
    flexDirection: 'column',
    width: 125,
    height: 90
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 13
  }
})

export default TabRoutes
