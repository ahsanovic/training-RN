import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap, Input } from '../../components'
import { colors, fonts, useForm, strings, showSuccess } from '../../utils'
import axios from 'axios'

const Register = ({ navigation }) => {
  const [formData, setFormData] = useForm({
    email: '',
    password: ''
  })

  const registerHandler = () => {
    axios
      .post(`${strings.url.basePost}users/${strings.url.keyPost}`, {
        'username': formData.email,
        'password': formData.password
      })
      .then(res => {
        let data = res.data
        if (data.status == 'success') {
          showSuccess('registrasi berhasil')
          navigation.goBack()
        } 
      })
  }

  return (
    <View style={styles.container}>
      <Gap top={50} />
      <View style={styles.formContainer}>
        <Input label={'Email Address'} textColor={'red'} onChangeText={(value) => setFormData('email', value)} />
        <Gap top={5} bottom={5} />
        <Input label={'Password'} onChangeText={(value) => setFormData('password', value)} />
      </View>
      <Gap top={20} />
      {/* Button */}
      <TouchableOpacity style={styles.linkContainer} onPress={registerHandler.bind(this)}>
        <Text style={styles.linkRegistration}>Daftar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  formContainer: {
    marginHorizontal: 25
  },
  linkContainer: {
    alignItems: 'center'
  },
  linkRegistration: {
    color: fonts.primary[500],
    fontSize: 16,
    color: colors.primary
  }
})