import './desc.css'
import DescImg from './../../img/main/desc.png'

const Desc = () => {
    return (
			<section className='desc'>
				<div className='container'>
					<div className='desc__wrapper'>
						<h2 className='desc__title'>ЧТО НОВОГО</h2>
						<div className='desc__content'>
							<div className='desc__text-block'>
								<div className='text-flex'>
									<p>
										Все модели оснащены однокристальной системой A16 Bionic,
										48-мегапиксельной основной камерой и экранами ProMotion с
										защитой Ceramic Shield и частотным диапазоном 1 — 120 Гц, а
										также ускоренной памятью LPDDR5. Дизайн линейки обновлен, на
										фронтальной панели смартфонов два выреза
									</p>
									<p>
										Все iPhone 14 в США будут продаваться без лотка для
										SIM-карт: производитель заявляет, что улучшенная технология
										eSIM позволит перенести старые электронные сим-карты на
										новые смартфоны.
									</p>
									<p>
										Обновлены фронтальная камера (она снабжена автофокусом и
										быстрее распознает пользователя в условиях недостаточной
										освещенности) и сенсор основной камеры.
									</p>
									<p>
										<strong>
											iPhone 14 Pro вышел в новом дизайне — без фирменной
											«челки». Также в ассортименте появился новый цвет. В
											смартфоне, в отличие от «обычных» 14-х айфонов, установлен
											процессор A16 Bionic, который может за секунду производить
											4 трлн операций с фото.
										</strong>
									</p>
								</div>
							</div>
							<div className='desc__img'>
								<img src={DescImg} alt='desc' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}
 
export default Desc;