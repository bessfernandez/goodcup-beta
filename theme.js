import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E0E8F9',
    },
    secondary: {
      main: '#E1FCF8',
    },
    error: {
      main: '#FFBDBD',
    },
    background: {
      default: '#F5F7FA',
    },
  },
})

export default theme
