import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product_service'
import Button from '../../ui/button/Button'
import Gallery from './gallery/Gallery'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Product: FC = () => {
  const params = useParams()

	const productId = params.id

  const { data: product, isLoading } = useQuery({
		queryKey: ['product', productId],
		queryFn: () => ProductService.getProductById(productId || ''),
	})

	const { items } = useTypedSelector(state => state.cart)
	const {removeFromCart, addToCart} = useActions()

  if(!product) return <Layout><div>Product not found!</div></Layout>

	const isInCart = items.some((item: { id: number }) => item.id === Number(productId))

  return (
		<Layout>
			{isLoading && <div>Loading...</div>}
			<Gallery images={product.images} />

			<h1 className='text-2xl font-semibold mb-1.5 mt-4'>{product.title}</h1>

			<div className='text-lg'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0,
				}).format(product.price)}
			</div>

			<Button onClick={() => isInCart ? removeFromCart(Number(productId)) : addToCart(product)}>
				{isInCart ? 'This product already in cart' : 'Add to cart'}Add to cart
			</Button>
		</Layout>
	)
}

export default Product