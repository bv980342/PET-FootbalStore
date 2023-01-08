import React from 'react'
import { useDispatch } from 'react-redux'
import DeleteImg from '../../assets/delete.svg'
import { removeItemInCart } from '../../redux/cart/reducer'

let totalPrice

const CartMenu = item => {
	const dispatch = useDispatch()
	const handlerClick = () => {
		dispatch(removeItemInCart(item.id))
	}
	return (
		<>
			<div className='my-7 '>
				<div className='bg-[#ffffff2c] text-white mx-4 py-4 px-2 rounded-lg flex items-baseline justify-between font-chivo '>
					<div>{item.title}</div>
					<div className='flex items-center relative'>
						<div className='text-xl'>
							{item.cost} <span className='text-xs ml-[-7px]'>USD</span>
						</div>
						<div className='w-[1px] h-10 bg-red mr-2 ml-6'></div>
						<img
							onClick={handlerClick}
							className='h-[25px] w-[25px] cursor-pointer   hover:opacity-30 hover:transition-all'
							src={DeleteImg}
							alt=''
						/>
					</div>
				</div>
			</div>
		</>
	)
}
export default CartMenu
export { totalPrice }
