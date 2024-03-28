import Card from '../Card/Card';
import './color.css'
import imgSil from './../../img/colors/silver.jfif'
import imgPur from './../../img/colors/purple.jfif'
import imgGol from './../../img/colors/gold.jfif'
import imgBla from './../../img/colors/black.jfif'

const Color = () => {
    return (
			<section className='color'>
				<div className='container'>
					<div className='color__header'>
						<h2 className='color__title'>ВЫБЕРИ СВОЙ ЦВЕТ</h2>
					</div>
					<div className='color__cards'>
						<Card title='Silver' img={imgSil} />
						<Card title='Deep purple' img={imgPur} />
						<Card title='Gold' img={imgGol} />
						<Card title='Space Black' img={imgBla} />
					</div>
				</div>
			</section>
		)
}
 
export default Color;