import React from 'react'
import {
  Box,
  Flex,
  Img,
  Input,
  Stack,
  Link,
  InputGroup,
  InputRightElement 
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import {AiOutlineShoppingCart, AiOutlineHistory} from 'react-icons/ai'

import B2RISE_small from '../images/B2RISE_small.svg'

export default function Navbar() {
  return (
    <Flex 
      justifyContent='space-around'
      bg='#170063'
      padding='5px'>
      <Link href='/'>
      <Img
        src={B2RISE_small}
        alt='small logo B2RISE'/>
      </Link>
      <Box>
        <Stack 
          spacing={4}>
            <InputGroup>
                <InputRightElement
                pointerEvents='none'
                children={<SearchIcon color='#170063' />}
                />
                <Input
                  type='text'
                  placeholder='Pesquisar por produtos...'
                  w='808px'
                  h='45px'
                  bg='white'/>
            </InputGroup>
        </Stack>
        </Box>
        <Flex
        gap={5}
        >
        <AiOutlineShoppingCart
            size={40}
            color='white'/>
          <AiOutlineHistory
            size={40}
            color='white'/>
        </Flex>
    </Flex>
  )
}