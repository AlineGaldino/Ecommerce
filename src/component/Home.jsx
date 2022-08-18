import React from 'react'
import {
  Box,
  Flex,
  Input,
  Button,
  Img 
} from '@chakra-ui/react'

import logo from '../images/logo.svg'

export default function Home() {
  return (
    <Box 
      margin='auto'>
    <Flex 
      flexDirection='column'
      justifyContent='center'
      h='100vh'
      alignItems='center'
      gap={5} py='20px'>
        <Img
          src={logo}
          alt='logo B2RISE'/>
        <Input
          type='text'
          placeholder='Pesquisar por produtos...'
          w='836px'
          h='55px'/>
        <Flex
          color='white'
          gap={5}>
          <Button
            bg='#170063'
            w='283px'
            h='53px'
            boxShadow='3px 3px 5px gray'>
            Carrinho
          </Button>
          <Button
            bg='#00AD81'
            w='283px'
            h='53px'
            boxShadow='3px 3px 5px gray'>
            Pesquisar
            </Button>
        </Flex>
    </Flex>
    </Box>
  )
}
