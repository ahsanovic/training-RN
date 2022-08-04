import { View, Text, StyleSheet, Image, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap, Line } from '../../components'
import { colors, fonts, strings } from '../../utils'
import axios from 'axios'

const Detail = ({ route }) => {
  const { strTeam, strTeamBadge } = route.params
  const [season, setSeason] = useState()

  useEffect(() => {
    onLoadSeason()
  }, [])

  const onLoadSeason = () => {
    axios
      .get(`${strings.url.base}search_all_seasons.php?id=4849`)
      .then(res => {
        setSeason(res.data.seasons)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getItem = (data, index) => ({
    id: data[index].strSeason,
    title: data[index].strSeason
  });
  
  const getItemCount = (data) => data.length
  
  return (
    <View style={styles.container}>
      <Gap top={20} />
      {/* header */}
      <View style={styles.header}>
        <Image source={{ uri: strTeamBadge }} style={styles.logo} />
        <Text>{strTeam}</Text>
      </View>
      <Gap top={20} />
      {/* season */}
      <Text style={styles.title}>Season</Text>
      {season && (
        <VirtualizedList
          data={season}
          initialNumToRender={10}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={{marginHorizontal: 10}}>{item.title}</Text>
                <Line height={1} lineColor={colors.secondary} />
                <Gap top={10} />
              </View>
            )
          }}
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      )}
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    alignItems: 'center'
  },
  logo: {
    width: 96,
    height: 96
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginLeft: 10
  }
})