import './header.css'
import logoImg from './../../img/icons/logo.svg'

const Header = () => {
    return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<nav className='header__nav'>
						<ul>
							<li>
								<ul className='nav'>
									<li>
										<a href='#!'>Что нового</a>
									</li>
									<li>
										<a href='#!'>Цвет</a>
									</li>
									<li>
										<a href='#!'>Заказать</a>
									</li>
								</ul>
							</li>
							<li>
								<a className='logo' href='#!'>
									<img src={logoImg} alt='logo' />
								</a>
							</li>
							<li>
								<div className='number'>+38 050-456-56-56</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
 
export default Header;