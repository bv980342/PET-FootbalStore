import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import cart from '../../assets/cart.svg'
import CartMenu from './CartMenu'

const CartMain = () => {
	let [rightCart, setRightCart] = useState('-101%')

	const cartOpenHandler = () => {
		setRightCart((rightCart = '0%'))
	}
	const cartCloseHandler = () => {
		setRightCart((rightCart = '-101%'))
	}

	const items = useSelector(state => state.cart.itemsInCart)
	const Price = items.reduce(
		(accumulator, product) => (accumulator += product.cost),
		0
	)

	let CartStyleHandler = {
		width: '25%',
		background: 'rgb(0,0,0,0.9)',
		padding: 10,
		right: rightCart,
	}

	return (
		<>
			<div
				className='cart flex  cursor-pointer w-[50px] h-[30px]'
				onClick={cartOpenHandler}
			>
				<img
					className=' hover:opacity-50 w-[30px] h-[30px]'
					src={cart}
					alt=''
				/>
				{items.length !== 0 ? (
					<p className='relative right-3 top-[-5px] w-[20px] h-[20px] z-10 bg-red text-[12px] flex justify-center font-chivo items-center font-bold text-white rounded-[100%]'>
						{items.length}
					</p>
				) : (
					<></>
				)}
			</div>

			<div
				className='fixed top-0 h-screen right-0 z-50  transition-all duration-300'
				style={CartStyleHandler}
			>
				<div
					onClick={cartCloseHandler}
					className='absolute left-0 top-0 text-3xl font-bold font-josefin text-red m-2 transition-all duration-300 cursor-pointer rounded-xl flex justify-between items-center hover:text-4xl'
				>
					<p className='p-2'>X</p>
				</div>

				{items.length > 0 ? (
					<div className='mt-20 h-[70%] overflow-x-hidden overflow-y-auto block_with_scroll'>
						{items.map(item => (
							<CartMenu key={item.id} {...item} />
						))}
					</div>
				) : (
					<></>
				)}
				<div className='absolute bottom-7 p-[20px] mx-auto w-full font-chivo items-center'>
					<p className='text-white w-full font-josefin text-2xl tracking-[3px] mb-3 py-2 font-bold text-center rounded-lg'>
						Total: {Price} USD
					</p>
					<button className='bg-qatar text-white w-full  py-2 rounded-lg hover:opacity-50'>
						Checkout
					</button>
				</div>
			</div>
		</>
	)
}

export default CartMain
