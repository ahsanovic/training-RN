import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { fonts } from '../../utils'
import { IllustrationAssessment } from '../../assets'

const SplashScreen = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('LoginScreen')
  }

  useEffect(() => {
    setTimeout(() => {
     navigation.navigate('LoginScreen') 
    }, 2000)
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image source={IllustrationAssessment} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.text}>BKD</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
  },
  logo: {
    height: 80,
    width: 80,
  }
})

export default SplashScreen