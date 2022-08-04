import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IllustrationAssessment, IllustrationButton } from '../../assets'
import { Gap, Input } from '../../components'
import { fonts, strings, useForm, showError, showSuccess } from '../../utils'

const Login = ({navigation}) => {
  const [formData, setFormData] = useForm({
    email: '',
    password: ''
  })

  const loginHandler = () => {
    // navigation.navigate(strings.screen.Home)
    showSuccess('login berhasil')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={IllustrationAssessment} style={styles.logo} />
        <Text style={styles.text}>BKD</Text>
      </View>
      <Gap top={10} bottom={10} />
      <Text style={[(styles.text(fonts.primary.regular), 18), {marginLeft: 25}]}>Silahkan Masuk</Text>
      <Gap top={20} />
      <View style={styles.formContainer}>
        {/* <Text style={styles.text(fonts.primary[500], 14)}>Email Address</Text>
        <TextInput style={styles.input} placeholder='email address' /> */}
        <Input label={'Email Address'} textColor={'red'} onChangeText={(value) => setFormData('email', value)} />
        <Gap top={5} bottom={5} />
        {/* <Text style={styles.text(fonts.primary[500], 14)}>Password</Text>
        <TextInput style={styles.input} placeholder='password' /> */}
        <Input label={'Password'} onChangeText={(value) => setFormData('password', value)} />
      </View>
      <Gap top={20} />
      {/* Button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => loginHandler()}>
        <Image source={IllustrationButton} style={styles.button} />
      </TouchableOpacity>
      {/* Registrasi */}
      <View style={styles.registration}>
        <Text>Belum punya akun? </Text>
        <TouchableOpacity>
          <Text style={styles.linkRegistration}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    marginTop: 20,
    height: 80,
    width: 80,
  },
  text: (fontFamily, fontSize) => ({
    fontFamily: fontFamily,
    fontSize: fontSize,
  }),
  /* label: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
  }, */
  formContainer: {
    marginHorizontal: 25
  },
  input: {
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    width: 50,
    height: 50
  },
  registration: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.primary[400]
  },
  linkRegistration: {
    color: 'red'
  }
})

export default Login