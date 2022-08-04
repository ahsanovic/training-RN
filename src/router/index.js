import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Detail, Home, Login, SplashScreen } from '../pages'
import { strings } from '../utils'

const Router = () => {
  const Stack = createNativeStackNavigator()
  
  return (
    <Stack.Navigator initialRouteName={'SplashScreen'}>
      <Stack.Screen options={{ headerShown: false }} name={strings.screen.Splash} component={SplashScreen} />
      <Stack.Screen options={{ headerShown: false }} name={strings.screen.Login} component={Login} />
      <Stack.Screen name={strings.screen.Home} component={Home} />
      <Stack.Screen name={strings.screen.Detail} component={Detail} />
    </Stack.Navigator>
  )
}

export default Router