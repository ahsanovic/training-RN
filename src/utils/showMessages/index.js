const { showMessage } = require("react-native-flash-message")
import { colors } from "../colors";

export const showError = (message) => {
  showMessage({
    message,
    type: 'default',
    backgroundColor: 'red',
    color: 'white'
  })
}

export const showSuccess = (message) => {
  showMessage({
    message,
    type: 'default',
    backgroundColor: colors.primary,
    color: 'white'
  })
}

export const showWarning = (message) => {
  showMessage({
    message,
    type: 'default',
    backgroundColor: 'blue',
    color: 'white'
  })
}