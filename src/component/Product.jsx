import { 
    Flex,
    Box,
    Img,
    Checkbox,
    Text,
    Button,
    Divider
} from "@chakra-ui/react"

import { useState } from "react"

import shirt from '../images/imaget-shirt.svg'

export function Product({description, longDescription, price}) {

    const [cart, setCart] = useState({})

    const addCart = (description, longDescription, price) => {

        const cartProducts = {description, longDescription, price}
        setCart([...cart, cartProducts])
        console.log([...cart, cartProducts])
        //sessionStorage.setItem('itens', JSON.stringify([...cart, cartProducts]))
    }
    return (
    <Flex margin='auto' w='70%' marginBottom='25px'>
        <Checkbox
        paddingRight='25px'/>
        <Img src={shirt} alt='t-shirt' paddingRight='25px'/>
        <Box>
            <Text fontSize='34px'>{description}</Text>
            <Text>{longDescription}</Text>
            <Text as='em' textTransform='uppercase'>r$ {price}/1 un</Text>
            <Divider />
        </Box>
        <Flex alignItems='center'>
            <Button
            onClick={() => addCart(description, longDescription, price)}
            bg='#170063'
            w='150px'
            h='53px'
            color='white'
            boxShadow='3px 3px 5px gray'>
            + Carrinho
            </Button>
        </Flex>
    </Flex>
    )
}