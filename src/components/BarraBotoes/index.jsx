import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native'

import { styles } from './styles'

const Barrabotoes = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.botaoview}>
          <TouchableOpacity style={styles.btnBotoes}>
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
          <TouchableOpacity style={styles.btnBotoes}>
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
          <TouchableOpacity style={styles.btnBotoes}>
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

export default Barrabotoes
