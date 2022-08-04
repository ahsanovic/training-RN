import { View, Text } from 'react-native';
import React from 'react';

const FlexBox = () => {
  // const ColumnBox = () => {
  //   return (
  //     <View style={{ height: 300, flexDirection: 'row' }}>
  //       <View style={{ backgroundColor: 'red', height: 100, flex: 1 }} />
  //       <View style={{ backgroundColor: 'green', height: 100, flex: 2 }} />
  //       <View style={{ backgroundColor: 'blue', height: 100, flex: 3 }} />
  //     </View>
  //   )
  // }

  const AlignItems = () => {
    return (
      <View
        style={{ 
          flex: 1, 
          flexDirection: 'row', 
          height: 300, 
          alignItems: 'center',
          backgroundColor: 'yellow'
        }}
      >
        <View style={{ backgroundColor: 'black', height: 50, flex: 1 }} />
        <View style={{ backgroundColor: 'red', height: 100, flex: 2 }} />
        <View style={{ backgroundColor: 'green', height: 150, flex: 2 }} />
        <View style={{ backgroundColor: 'blue', height: 200, flex: 1 }} />
      </View>
    )
  }

  const AlignContent = () => {
    return (
      <View
        style={{ 
          flex: 1, 
          flexDirection: 'column', 
          flexWrap: 'wrap',
          alignContent: 'space-around',
          backgroundColor: 'yellow'
        }}
      >
        <View style={{ backgroundColor: 'black', height: 150, width: 50 }} />
        <View style={{ backgroundColor: 'red', height: 100, width: 50 }} />
        <View style={{ backgroundColor: 'green', height: 150, width: 50 }} />
        <View style={{ backgroundColor: 'blue', height: 200, width: 50 }} />
        <View style={{ backgroundColor: 'pink', height: 200, width: 50 }} />
        <View style={{ backgroundColor: 'gray', height: 200, width: 50 }} />
      </View>
    )
  }

  return (
    // <ColumnBox />
    // <AlignItems />
    <AlignContent />
  )
}

export default FlexBox