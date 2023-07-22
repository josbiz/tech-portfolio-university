import { Box } from '@chakra-ui/react'

function Container({ variant, children }) {
  return (
    <>
      <Box
        mx={['20px', '50px', '100px', '200px']}
        my={['10px', '20px', '30px', '40px']}
        px={10}
        py={variant === 'normal' ? 10 : 0}
      >
        {children}
      </Box>
    </>
  )
}

export default Container
