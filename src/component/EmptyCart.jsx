import { Flex, Text, Img } from "@chakra-ui/react"

import emptycar from '../images/emptycart.svg'

export default function EmptyCart() {
  return (
    <Flex
    justifyContent='center'
    flexDirection='column'
    alignItems='center'
    h='90vh'>
        <Text
        fontSize='50px'
        paddingBottom='35px'>
            O carrinho está vazio
        </Text>
        <Img
        src={emptycar}
        alt='emptycar'/>
    </Flex>
  )
}
