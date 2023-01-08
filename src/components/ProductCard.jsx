import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart, removeItemInCart } from '../redux/cart/reducer'

const ProductCard = product => {
	const styleHome = { background: product.colors.home }

	// const styleGk = { background: product.colors.gk }

	const dispatch = useDispatch()

	const items = useSelector(state => state.cart.itemsInCart)

	const isItemInCart = items.some(item => item.id === product.id)

	const handleClick = e => {
		if (isItemInCart) {
			dispatch(removeItemInCart(product.id))
		} else {
			dispatch(setItemInCart(product))
		}
	}
	return (
		<>
			<div className=' font-josefin border-solid border-black border-2 rounded-lg w-[230px] min-w-[230px]  m-10'>
				<div className='border-b '>
					<div className=' overflow-hidden h-[230px] relative'>
						<img
							className='w-[230px] h-[230px] overflow-hidden  absolute transition-all delay-300 p-3 m-auto'
							src={product.kitHome}
							alt=''
						/>
					</div>
				</div>
				<div className='p-3'>
					<h2 className='font-josefin font-bold text-xl my-1'>
						{product.title}
						<br /> in <b className='text-qatar'>QATAR 2022</b>
					</h2>

					<div className='flex  items-center justify-left mt-1'>
						<div
							style={styleHome}
							className=' w-5 h-5 mr-2 cursor-pointer hover:border-2 hover:border-black  bg-blue rounded-full'
						></div>

						{/* <div
							onClick={gkHandler}
							className='w-5 h-5 mr-2 cursor-pointer hover:border-2 hover:border-black  rounded-full'
							style={styleGk}
						></div> */}
					</div>
					<div className='flex items-baseline'>
						<div className='mt-2 text-2xl font-semibold'>{product.cost}</div>
						<div className='text-lg font-bold'>$</div>
					</div>
					<button
						onClick={handleClick}
						className={
							isItemInCart
								? `bg-red font-bold w-full mt-3 mb-2 text-white px-2 py-1 rounded-lg hover:bg-green hover:transition-all hover:duration-300`
								: `bg-qatar font-bold w-full mt-3 mb-2 text-white px-2 py-1 rounded-lg hover:bg-green hover:transition-all hover:duration-300`
						}
					>
						{isItemInCart ? 'Remove from cart' : 'Add to cart'}
					</button>
				</div>
			</div>
		</>
	)
}

export default ProductCard
