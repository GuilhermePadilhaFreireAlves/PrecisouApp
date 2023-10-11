/* import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
export function ContaScreen () {
  return (
    <SafeAreaView>
      <View style = {styles.container}>
        <View style = {styles.containerTopo}>
          <Image
            source = {require('../../assets/imagens/usuario.png')} style = {styles.imageUsuarioPrin}
          />

          <View style = {styles.containeritensTopo}>
            <View style = {styles.conatinerestrelaeNome}>
              <Text style = {styles.Usuariotext}>
                Guilherme Pontes
              </Text>
              <View style = {styles.containerEstrelaUsu}>
              <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
              />
              <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
              />
              <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
              />
              <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
              />
              <Image
                source = {require('../../assets/imagens/star.png')} style = {styles.imageestrelaUsu}
              />
              </View>
            </View>
          </View>
        </View>
        <View style= {styles.viewBotoes}>
          <TouchableOpacity style={styles.btnAjuda}>

            <AntDesign
             name='questioncircleo'
             size={30}
             color='black'
             />
              <Text style={styles.textbtn}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAjuda}>
            <AntDesign
             name='questioncircleo'
             size={30}
             color='black'
             />
              <Text style={styles.textbtn}>aa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'

  },
  containerTopo: {
    backgroundColor: '#ADD9FF',
    width: 366,
    height: 121,
    borderRadius: 23,
    flexDirection: 'row'

  },
  imageUsuarioPrin: {
    width: 65,
    height: 64,
    marginTop: 30,
    marginLeft: 15

  },
  containerEstrelaUsu: {
    backgroundColor: '#FFFFFF',
    width: 154,
    height: 24,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5

  },
  imageestrelaUsu: {
    width: 20,
    height: 20,
    marginLeft: 8

  },
  Usuariotext: {

    fontSize: 24,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 5,
    marginBottom: 2

  },
  containeritensTopo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginBottom: 5
  },
  conatinerestrelaeNome: {
    marginTop: 15
  },
  btnAjuda: {
    width: 91,
    height: 71,
    borderRadius: 14,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textbtn: {
    color: '#000000',
    fontFamily: 'Neucha',
    fontSize: 20
  },
  viewBotoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }

})

export default ContaScreen
*/
import React, { } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import UsuarioComponent from '../components/UsuarioComponent'
import Barrabotoes from '../components/BarradosBotoes'
import { Estrelas } from '../components/Estrelas'

export function aaaa (props) {
  this.setState = {

    nome: [
      'Joao Henrique',
      'Marcos Pedro',
      'Guilherme Pontes',
      'Valdir Bisse',
      'Fernando dos Santos'
    ],
    descricaoavaliacao: [
      'Bom trabalho, recomendo muito, chegou no horário muito simpático',
      'Otimo trabalho, recomendo muito, chegou no horário muito simpático',
      'Medio trabalho, recomendo muito, chegou no horário muito simpático',
      'Maravilhoso trabalho, recomendo muito, chegou no horário muito simpático',
      'Mais ou menos viu, trabalho, recomendo muito, chegou no horário muito simpático'

    ]
  }

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

                <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.containerAvaliacoestexto}>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[1]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[1]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[2]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[2]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[3]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[3]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[4]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[4]}
                    </Text>
                  </View>
                  <View >
                    <Text style = {styles.nomeAvaliacao}>
                      {this.state.nome[1]}
                    </Text>
                    <Estrelas/>
                    <Text style = {styles.descAvaliacao}>
                      {this.state.descricaoavaliacao[1]}
                    </Text>
                  </View>
                </View>
                </ScrollView>
            </View>
            <Barrabotoes />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    flex: 1
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
  nomeAvaliacao: {
    fontSize: 20,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginTop: 10,
    marginRight: 17,
    textAlign: 'justify'
  },
  descAvaliacao: {
    fontSize: 17,
    fontFamily: 'Neucha',
    color: '#000000',
    marginLeft: 17,
    marginRight: 17,
    textAlign: 'justify'
  }

})
export default aaaa
