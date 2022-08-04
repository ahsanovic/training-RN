import { View, Text } from 'react-native'
import React from 'react'

const Line = ({height, lineColor}) => {
  return (
    <View 
      style={{
        borderColor: lineColor,
        height: height,
        borderBottomWidth: 1,
        marginHorizontal: 10
      }} />
  )
}

export default Line