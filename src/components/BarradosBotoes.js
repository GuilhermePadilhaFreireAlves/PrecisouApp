import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Barrabotoes = () => {
  const navigation = useNavigation()

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.botaoview}>
          <TouchableOpacity style={styles.btnBotoes}
            onPress={() => navigateToScreen('homeofcp')}
          >
            <View style={styles.iconandname}>
              <Image
                source={require('../../assets/imagens/casa2.png')}
                style={styles.imageBtncasa}
              />

              <Text style={styles.textbtn}>Inicio</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.botaoview2}>
          <TouchableOpacity style={styles.btnBotoes}
          onPress={() => navigateToScreen('servicoprincipalp')}
          >
            <View style={styles.iconandname}>
              <Image
                source={require('../../assets/imagens/servico.png')}
                style={styles.imageBtncasa}
              />

              <Text style={styles.textbtn}>Serviços</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.botaoview2}>
          <TouchableOpacity style={styles.btnBotoes}
          onPress={() => navigateToScreen('contap')}
          >
            <View style={styles.iconandname}>
              <Image
                source={require('../../assets/imagens/usuario.png')}
                style={styles.imageBtncasa}
              />
              <Text style={styles.textbtn}>Conta</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD9FF',
    width: 379,
    height: 90,
    borderRadius: 23,
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15
  },
  imageBtncasa: {
    width: 48,
    height: 43
  },
  textbtn: {
    fontFamily: 'Neucha',
    fontSize: 15,
    color: '#000000'
  },
  btnBotoes: {
    flexDirection: 'column',
    width: 125,
    height: 90
  },
  iconandname: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 13
  }
})

export default Barrabotoes
