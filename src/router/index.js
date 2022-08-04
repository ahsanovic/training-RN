import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Detail, Home, Login, SplashScreen, Register } from '../pages'
import { strings } from '../utils'

const Router = () => {
  const Stack = createNativeStackNavigator()
  
  return (
    <Stack.Navigator initialRouteName={strings.screen.Splash} screenOptions={{headerShown: false}}>
      <Stack.Screen name={strings.screen.Splash} component={SplashScreen} />
      <Stack.Screen name={strings.screen.Login} component={Login} />
      <Stack.Screen name={strings.screen.Home} component={Home} />
      <Stack.Screen name={strings.screen.Detail} component={Detail} />
      <Stack.Screen name={strings.screen.Register} component={Register} />
    </Stack.Navigator>
  )
}

export default Router