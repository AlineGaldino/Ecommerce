import Navbar from '../../component/Navbar'
import {Products} from '../../component/Products'
import { Flex, Button } from '@chakra-ui/react'

export default function Preview() {
  return (
    <>
    <Navbar/>
      <Flex
        padding='20px'
        flexDirection='row'
        justifyContent='center'>
        <Button
          variant='ghost'
          color='#170063'
          w='235px'
          h='53px'>
          Selecionar todos
        </Button>
        <Button
          bg='#170063'
          color='white'
          w='235px'
          h='53px'
          boxShadow='3px 3px 5px gray'>
          Adicionar selecionados
        </Button>
      </Flex>
    <Products/>
    </>
  )
}
