import  {Product} from './Product'
import products from '../products.json'
import { Box } from '@chakra-ui/react'

export function Products() {
  return (
    <Box>
      {products.map((product) => {
        return (
          <Product 
          description={product.description} 
          longDescription={product.longDescription} 
          price={product.price} />
        )
      })}
    </Box>
  )
}

/*
export function Products() {
  return (
    <Box>
      {products.map((product) => {
        return <Product description={product.description} longDescription={product.longDescription} price={product.price}/>;
      })}
    </Box>
  )
}

*/