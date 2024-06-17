import { FC } from 'react'
import styles from './Home.module.scss'
import { ProductService } from '../../../services/product_service'
import { useQuery } from '@tanstack/react-query'
import ProductItem from '../../ui/productItem/ProductItem'
import Layout from '../../ui/layout/Layout'

const Home: FC = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () =>  ProductService.getProducts(),
    select: data => data.products
  })

  return (
		<Layout title='Shop the collection'>
			{isLoading ? (
				<div className='text-blue-400 text-2xl'>Loading...</div>
			) : products?.length ? (
				<div className={styles.wrapper}>
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			) : (
				<div>Products not found!</div>
			)}
		</Layout>
	)
}

export default Home