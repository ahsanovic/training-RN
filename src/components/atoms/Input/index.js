import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../../utils'

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  placeholder,
  textColor,
  loginInput
}) => {
  const [border, setBorder] = useState(colors.primary)
  const onFocusForm = () => {
    if (loginInput) {
      setBorder(colors.primary)
    } else {
      setBorder(colors.tertiary)
    }
  }

  const onBlurForm = () => {
    if (loginInput) {
      setBorder(colors.primary)
    } else {
      setBorder(colors.secondary)
    }
  }

  const [hidePassword, setHidePassword] = useState(true)
  const passwordVisibility = () => {
    setHidePassword(!hidePassword)
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border, textColor)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  icon: dimensOs => ({
    position: 'absolute',
    right: 16,
    top: dimensOs
  }),
  input: (border, textColor) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
    color: textColor ?? 'black'
  }),
  label: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 2,
    fontFamily: fonts.primary[400]
  }
})