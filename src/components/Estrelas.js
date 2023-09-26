import React from 'react'
import { View, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export function Estrelas () {
  return (
        <View style = {styles.containerEstrelaUsu}>
        <FontAwesome
        name='star'
        size={20}
        color='#F7DD69'
        />
        <FontAwesome
        name='star'
        size={20}
        color='#F7DD69'
        />
        <FontAwesome
        name='star'
        size={20}
        color='#F7DD69'
        />
        <FontAwesome
        name='star'
        size={20}
        color='#F7DD69'
        />
        <FontAwesome
        name='star'
        size={20}
        color='#F7DD69'
        />

    </View>
  )
}
const styles = StyleSheet.create({
  imageestrelaUsu: {
    width: 20,
    height: 20,
    marginLeft: 8

  },
  containerEstrelaUsu: {
    width: 154,
    height: 24,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 17
  }

})

export default Estrelas
