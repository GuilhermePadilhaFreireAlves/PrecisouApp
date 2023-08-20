import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import UsuarioComponent from '../component/UsuarioComponent'
import BarraBotoes from '../component/BarraBotoes'

const ServicoScreen = () => {
  return (
    <SafeAreaView>
        <View style = {styles.container}>
            <UsuarioComponent/>

            <View style = {styles.containerDescricao}>
                <Text style = {styles.textTituloServ}>
                    Serviços
                </Text>
                <Text style = {styles.textDescricaoServ}>
                    Faço de casa, limpo os moveis, portas e janelas, adoro cachorros e gatos, mas caso sejam agressivos, por favor preendam-os. Os valores variam de caso para caso
                </Text>
                <Text style = {styles.textmoney}>
                    Valor : R$ 100 - 200
                </Text>
            </View>
            <View style = {styles.containerAvaliações}>
                <Text style = {styles.textAvaliacoes}>
                    Avaliações
                </Text>
                <View style = {styles.containerAvaliacoestexto}>
                    <Text style = {styles.textaAvaliacoestexto}>
                    Faço de casa, limpo os moveis, portas e janelas, adoro cachorros e gatos, mas caso sejam agressivos, por favor preendam-os. Os valores variam de caso para caso
                    </Text>
                </View>
            </View>
            <BarraBotoes />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center'

  },
  containerDescricao: {
    backgroundColor: '#ADD9FF',
    width: 366,
    height: 195,
    borderRadius: 23,
    marginTop: 165

  },
  textTituloServ: {
    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10

  },
  textDescricaoServ: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10,
    marginRight: 17,
    textAlign: 'justify'
  },
  textmoney: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10,
    marginRight: 17,
    textAlign: 'justify'
  },
  containerAvaliações: {
    backgroundColor: '#EFEFEF',
    width: 366,
    height: 315,
    borderRadius: 23,
    marginTop: 15
  },
  textAvaliacoes: {
    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10

  },
  textaAvaliacoestexto: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10,
    marginRight: 17,
    textAlign: 'justify'
  }

})

export default ServicoScreen
