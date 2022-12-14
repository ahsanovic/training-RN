import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Gap, Line, List } from '../../components'
import { colors, fonts, strings } from '../../utils'

const Home = ({navigation}) => {
  const [dataTeam, setDataTeam] = useState([])

  useEffect(() => {
    onLoadData()
  }, [])

  const onLoadData = () => {
    axios
      .get(`${strings.url.base}search_all_teams.php?s=Soccer&c=England`)
      .then(res => {
        setDataTeam(res.data.teams)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const detailTeam = item => {
    navigation.navigate(strings.screen.Detail, {
      strTeam: item.strTeam,
      strTeamBadge: item.strTeamBadge,
      idLeague: item.idLeague
    })
  }

  return (
    <View style={styles.container}>
      <Gap top={10} />
      <Text style={styles.title}>Daftar Klub</Text>
      <FlatList
        data={dataTeam}
        renderItem={item => {
          return (
            <View>
              <List onPress={() => detailTeam(item.item)} urlImage={item.item.strTeamBadge} title={item.item.strTeam} subtitle={item.item.strStadium} />
              <Gap top={3} />
              <Line height={1} lineColor={colors.secondary} />
            </View>
          )
        } 
        }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontFamily: fonts.primary[600],
    marginLeft: 10
  },
})