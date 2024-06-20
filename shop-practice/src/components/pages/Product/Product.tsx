import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product_service'
import Button from '../../ui/button/Button'
import Gallery from './gallery/Gallery'

const Product: FC = () => {
  const params = useParams()

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', params.id],
    queryFn: () => ProductService.getProductById(params.id || ''),
  })

  if(!product) return <Layout><div>Product not found!</div></Layout>

  return (
		<Layout>
			{isLoading && <div>Loading...</div>}
			<Gallery images={product.images} />

			<h1 className='text-2xl font-semibold mb-1.5 mt-4' >{product.title}</h1>

			<div className='text-lg' >
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0,
				}).format(product.price)}
			</div>

			<Button>Add to cart</Button>
		</Layout>
	)
}

export default Product