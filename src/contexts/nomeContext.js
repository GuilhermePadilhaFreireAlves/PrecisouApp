import React, { useState, createContext, useEffect } from 'react'
import database from '@react-native-firebase/database'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'

export const NomeContext = createContext({})

function NomeProvider ({ children }) {
  const [nomepa, setNomepa] = useState('carregando...')

  useEffect(() => {
    async function Nomedados () {
      const user = auth().currentUser
      if (user) {
        database().ref(`usuarios/${user.uid}/nome`).once('value', (snapshot) => {
          setNomepa(snapshot.val())
        })
      }
    }
    Nomedados()
  }, [])

  return (
    <NomeContext.Provider value={{ nomepa }}>
      {children}
    </NomeContext.Provider>
  )
}

NomeProvider.propTypes = {
  children: PropTypes.node
}

export default NomeProvider
