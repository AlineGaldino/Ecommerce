import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export function Product({description, longDescription, price}) {
    return (
        <Box>
            <Text>{description}</Text>
            <Text>{longDescription}</Text>
            <Text>{price}</Text>
        </Box>
    )
}