import { FC } from 'react'
import styles from './Home.module.scss'
import { ProductService } from '../../../services/product_service'
import { useQuery } from '@tanstack/react-query'

const Home: FC = () => {
  const {
    data: products,
    isLoading
  } = useQuery(['products'], () => ProductService.getProducts(), {
    select: ({ products }) => products
  })

  return (
    <div className={styles.bg}>
      <h1>
        Shop the collection
      </h1>
      {isLoading ? (
        <div className='text-blue-400 text-2xl'>Loading...</div>
      ) : products?.length ? (
        products?.map(product => <div key={product.id}>{product.title}</div>)
      ) : (
        <div>Products not found!</div>
      )}
    </div>
  )
}

export default Home