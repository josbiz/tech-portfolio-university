import { defineConfig } from '@chakra-ui/react'

const theme = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-raleway)" },
        body: { value: "var(--font-raleway)" },
      },
    },
  },
});

export default theme