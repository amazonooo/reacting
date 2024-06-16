import { FC } from 'react'
import { IProduct } from '../../../types/product.interface' 
import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<img src={product.thumbnail} alt={product.title} />
			<div className={styles.heading}>{product.title}</div>
			<div>{product.price}$</div>
		</div>
	)
}

export default ProductItem