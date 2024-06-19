import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product_service'
import Button from '../../ui/button/Button'

const Product: FC = () => {
  const params = useParams()

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', params.id],
    queryFn: () => ProductService.getProductById(params.id || ''),
  })

  return <Layout>
    {isLoading && <div>Loading...</div>}

    {product?.title}

    <Button>Add to cart</Button>
  </Layout>
}

export default Product