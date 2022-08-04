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
      .get('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=England')
      .then(res => {
        setDataTeam(res.data.teams)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const detailTeam = () => {
    navigation.navigate(strings.screen.Detail)
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
              <List onPress={() => detailTeam()} urlImage={item.item.strTeamBadge} title={item.item.strTeam} subtitle={item.item.strStadium} />
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