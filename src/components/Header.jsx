import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import CartMain from './Cart/CartMain'

const Header = () => {
	// let state = store.getState().cart.itemsInCart
	// let counter = useSelector(state => state.cart.itemsInCart)
	// const totalPrice = counter.reduce(
	// 	(accumulator, product) => (accumulator += product.cost),
	// 	0
	// )

	return (
		<header className=' p-3 border-b-2 fixed w-full top-0 left-0 bg-white z-40'>
			<div className='container flex justify-between items-center '>
				<Link to='/'>
					<div className='flex justify-between items-center'>
						<img className=' mr-4' src={logo} alt='' />
						<p className='text-xl font-chivo'>Footbal-store</p>
					</div>
				</Link>
				<nav>
					<Link
						className="mx-4 relative font-chivo before:content-[''] before:absolute before:w-0 before:hover:w-full link rounded-lg before:bg-black before:h-0.5 before:bottom-[-3px] before:left-0"
						to='qatar'
					>
						World Cup 22 Qatar
					</Link>
					<Link
						className="mx-4 relative font-chivo before:content-[''] before:absolute before:w-0 before:hover:w-full link rounded-lg before:bg-black before:h-0.5 before:bottom-[-3px] before:left-0"
						to='rpl'
					>
						Russian Premier League
					</Link>
				</nav>
				<CartMain />
			</div>
		</header>
	)
}

export default Header
