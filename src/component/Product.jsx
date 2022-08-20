import { 
    Flex,
    Box,
    Img,
    Checkbox,
    Text,
    Button,
    Divider
} from "@chakra-ui/react"

import shirt from '../images/imaget-shirt.svg'

export function Product({description, longDescription, price}) {
    return (
    <Flex margin='0px 400px 0px 400px' marginBottom='25px'>
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