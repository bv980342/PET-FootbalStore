import React from 'react'
import ProductCard from '../ProductCard'
import data from '../../data/mainPage.json'
import { Link } from 'react-router-dom'

const SecondHomeBlock = () => {
	return (
		<>
			<div className='container'>
				<h1 className='text-center text-6xl font-josefin font-bold my-10 first-letter:text-blue'>
					Most popular
				</h1>
				<div className='container grid grid-cols-3'>
					{data.map(product => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
				<div className='underline text-right font-josefin text-xl'>
					<Link to='qatar '>see more...</Link>
				</div>
			</div>
		</>
	)
}

export default SecondHomeBlock
