import Navbar from '../../component/Navbar'
import { 
  Flex,
  Box,
  Img,
  Text,
  Button,
  IconButton,
  Divider
} from "@chakra-ui/react"

import { useState } from 'react'

import { SmallAddIcon, MinusIcon } from '@chakra-ui/icons'

//import EmptyCart from '../../component/EmptyCart'

//import shirt from './images/imaget-shirt.svg'

export default function Cart() {
  const productSession = JSON.parse(sessionStorage.getItem('itens'))

  const [price, setPrice] = useState(productSession)

  const priceTotal = price.reduce( (acc, current) => acc + current.price, 0)
  const removeItem = (itens) => {
    const filter = price.filter(cartItem => price.indexOf(cartItem) !== itens);
    setPrice(filter);
  }

    return (
      <>
        <Navbar/>
        {productSession.map((itens, index) => (
                  <Flex margin='auto' w='70%' marginBottom='25px' key={index}>
                  <Img alt='t-shirt' paddingRight='25px'/>
                  <Box>
                    <Text fontSize='34px'>{itens.description}</Text>
                    <Text as='em' textTransform='uppercase' fontSize='20px'>r$ {itens.price}</Text>
                        <Flex flexDirection='row'>
                            <Button color='#DD3434' variant='ghost' onClick={() => {removeItem(itens)}}>Excluir </Button>
                            <Button color='#00DDA5' variant='ghost'>Favoritar</Button>
                        </Flex>
                    <Box>
                        <IconButton color='#DD3434' icon={<MinusIcon />} />
                        <IconButton color='#00DDA5' icon={<SmallAddIcon />} />
                    </Box>
                    <Text>{itens.longDescription}</Text>
                    <Divider />
                </Box>
            </Flex>
        ))}
    <Flex justifyContent='flex-end' margin='auto' w='80%'>
        <Text fontSize='34px'>Preço total R${priceTotal.toFixed(2)}</Text>
        <Divider />
        <Button
            bg='#00AD81'
            color='white'
            w='283px'
            h='53px'
            boxShadow='3px 3px 5px gray'>
            Finalizar compra
        </Button>
        </Flex>
      </>
    )
}