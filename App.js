import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router'

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <SplashScreen /> */}
    </NavigationContainer>
  )
}

export default App