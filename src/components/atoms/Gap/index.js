import { View, Text } from 'react-native'
import React from 'react'

const Gap = ({top, bottom}) => {
  return (
    <View style={{ 
        marginTop: top, 
        marginBottom: bottom,
      }}
    />
  )
}

export default Gap