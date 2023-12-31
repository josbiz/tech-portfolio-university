import { extendTheme } from '@chakra-ui/react'

import '@fontsource/raleway/100.css'
import '@fontsource/raleway/200.css'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/800.css'
import '@fontsource/raleway/900.css'

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

export default theme