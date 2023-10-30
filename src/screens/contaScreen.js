import React, { useContext } from 'react'
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Barrabotoes from '../components/BarradosBotoes'
import PropTypes from 'prop-types'
import { NomeContext } from '../contexts/nomeContext'
export function ContaScreen ({ navigation }) {
  const { nomepa } = useContext(NomeContext)
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
                {nomepa}
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
            <MaterialCommunityIcons
             name='room-service-outline'
             size={30}
             color='black'
             />
              <Text style={styles.textbtn}>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAjuda}>
            <MaterialIcons
             name='payment'
             size={30}
             color='black'
             />
              <Text style={styles.textbtn}>Pagamento</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity style={styles.btnPrestadorServ}
          onPress={() => navigation.navigate('cadastroprestadorp')}
          >
          <Image
                source={require('../../assets/imagens/suitcase.png')}
                style={styles.imgwork}
              />
             <View style={styles.viewtxtprestserv} >
              <Text style={styles.txtbtnprestserv}>Ganhe dinheiro como um prestador de serviços</Text>
             </View>
          </TouchableOpacity>
        <View style={styles.viewbtnjuntos}>
          <TouchableOpacity style={styles.btnconfig}>
          <Image
                source={require('../../assets/imagens/config.png')}
                style={styles.imgbtnconfig}
              />
              <Text style={styles.textbtn}>Configurações    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnconfig}>
            <Image
                source={require('../../assets/imagens/coracao.png')}
                style={styles.imgbtnconfig}
              />
              <Text style={styles.textbtn}>Serviços favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnconfig}>
            <Image
                source={require('../../assets/imagens/message.png')}
                style={styles.imgbtnconfig}
              />
              <Text style={styles.textbtn}>Mensagens        </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnconfig}>
            <Image
                source={require('../../assets/imagens/usuario.png')}
                style={styles.imgbtnconfig}
              />
              <Text style={styles.textbtn}>Gerenciar conta  </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnconfig}>
            <Image
                source={require('../../assets/imagens/ter.png')}
                style={styles.imgbtnconfig}
              />
              <Text style={styles.textbtn}>Termos e serviço  </Text>
            </TouchableOpacity>
          </View>
          <Barrabotoes />
      </View>
    </SafeAreaView>
  )
}
ContaScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTopo: {
    backgroundColor: '#ADD9FF',
    width: 366,
    height: 121,
    borderRadius: 23,
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center'

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
    backgroundColor: '#E9E9E9',
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
    justifyContent: 'space-around',
    marginTop: 20,
    marginLeft: 10

  },
  viewbtnprestserv: {
    width: 366,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnPrestadorServ: {
    width: 366,
    height: 112,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD9FF',
    borderRadius: 14,
    flexDirection: 'row-reverse',
    marginTop: 100
  },
  txtbtnprestserv: {
    color: '#000000',
    fontFamily: 'Neucha',
    fontSize: 24
  },
  viewtxtprestserv: {
    width: 214,
    height: 60,
    marginRight: 10
  },
  imgwork: {
    width: 77,
    height: 77
  },

  btnconfig: {
    width: 366,
    height: 44,
    backgroundColor: '#E9E9E9',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  viewbtnjuntos: {
    marginTop: 20,
    height: 300,
    justifyContent: 'space-between'
  },
  imgbtnconfig: {
    width: 29,
    height: 29,
    marginRight: 10
  }
})

export default ContaScreen
