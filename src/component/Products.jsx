import { useState, useEffect } from 'react';
import { Product } from './Product'
import { Box } from '@chakra-ui/react'

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

  return (
    <Box>
      {products.map((product, index) => (
        <Product
          key={index}
          description={product.description}
          longDescription={product.longDescription}
          price={product.price} />
      ))}
    </Box>
  )
}
