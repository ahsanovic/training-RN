import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {IllustrationAssessment} from '../../../assets'

const List = ({urlImage, title, subtitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image source={{uri: urlImage}} style={styles.image} />
      <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({  
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 8
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 6
  }
})