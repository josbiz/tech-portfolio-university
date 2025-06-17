import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { Raleway } from 'next/font/google'
import theme from '@/styles/theme'

import Layout from '@/components/Layout'
import '../styles/globals.css'

const system = createSystem(defaultConfig, theme)

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning className={raleway.className}>
        <ChakraProvider value={system}>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ChakraProvider>
    </div>
  )
}
