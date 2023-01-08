import React from 'react'
import Argentina from '../../data/argentina_main.png'

const MainHomeBlock = () => {
	return (
		<div className='font-chivo pt-[90px] h-screen bg-blue'>
			<div className='container flex justify-between items-center '>
				<div className='w-1/2'>
					<h1 className='text-5xl leading-snug font-josefin text-black'>
						Argentina <br /> world cup home kit <br />
						<b className='text-qatar'>QATAR 2022</b>
					</h1>
					<button className='py-3 px-4 rounded-lg mt-5 bg-qatar text-white w-1/2 text-xl font-semibold font-josefin tracking-widest hover:bg-green hover:transition-all hover:duration-300'>
						Buy now
					</button>
				</div>
				<div className='w-6/12 h-6/12'>
					<img src={Argentina} alt='' />
				</div>
			</div>
		</div>
	)
}

export default MainHomeBlock
