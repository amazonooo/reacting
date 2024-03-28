import './choice.css'
import mainImg from './../../img/main/main.png'

const Choice = () => {
    return (
			<section className='choice'>
				<div className='choice__content'>
					<h1 className='choice__title'>IPHONE 14 PRO</h1>
					<div className='choice__img'>
						<img src={mainImg} alt='' />
					</div>
					<a className='choice__btn' href='#!'>ВЫБРАТЬ</a>
				</div>
			</section>
		)
}
 
export default Choice;