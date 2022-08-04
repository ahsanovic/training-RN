import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Router />
      {/* <SplashScreen /> */}
    </NavigationContainer>
    <FlashMessage position={'top'} />
    </>
  )
}

export default App