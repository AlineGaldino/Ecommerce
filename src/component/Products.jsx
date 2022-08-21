import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react'
import { 
  Flex,
  Img,
  Checkbox,
  Text,
  Button,
  Divider
} from "@chakra-ui/react"

import shirt from '../images/imaget-shirt.svg'

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ((async () => {
      const res = await fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status === 200) {
        const data = await res.json();
        setProducts(data);
      } else {
        console.error(res.status);
      }

    }))();
  }, [])

  const [cart, setCart] = useState([])

  const addCart = (id, description, longDescription, price) => {

      const cartProducts = {id, description, longDescription, price}
      setCart([...cart, cartProducts])
      sessionStorage.setItem('itens', JSON.stringify([...cart, cartProducts]))
  }

  return (
    <Box>
      {products.map((product, index) => (
            <Flex margin='auto' w='70%' marginBottom='25px' key={index}>
            <Checkbox
            paddingRight='25px'/>
            <Img src={shirt} alt='t-shirt' paddingRight='25px'/>
            <Box>
                <Text fontSize='34px'>{product.description}</Text>
                <Text>{product.longDescription}</Text>
                <Text as='em' textTransform='uppercase'>r$ {product.price}/1 un</Text>
                <Divider />
            </Box>
            <Flex alignItems='center'>
                <Button
                onClick={() => addCart(product.id, product.description, product.longDescription, product.price)}
                bg='#170063'
                w='150px'
                h='53px'
                color='white'
                boxShadow='3px 3px 5px gray'>
                + Carrinho
                </Button>
            </Flex>
        </Flex>
      ))}
    </Box>
  )
}
