import { FC } from 'react'
import { IProduct } from '../../../types/product.interface' 
import styles from './ProductItem.module.scss'
import { Link } from 'react-router-dom'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<Link to={`/product/${product.id}`}>
				<div
					style={{
						backgroundImage: `url(${product.images[0]})`,
					}}
					className={styles.image}
				></div>
			</Link>
			<div className={styles.heading}>{product.title}</div>
			<div className={styles.price}>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0,
				}).format(product.price)}
			</div>
		</div>
	)
}

export default ProductItem