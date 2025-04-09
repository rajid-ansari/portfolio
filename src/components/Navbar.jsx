import React from 'react'
// import rajidResume from '../assets/rajid_resume.pdf'

const Navbar = () => {

	return (
		<nav className='py-4 font-moranga flex items-center justify-between px-4 md:px-12'>
			<div id='logo'>
				<h1 className='text-gray-100 uppercase text-xl md:text-[2.5vw] leading-none font-bold cursor-pointer selection:hidden hover:text-gray-300'>
					Rajid <br /> Ansari
				</h1>
			</div>
			<div id='tabs' className='flex gap-4 md:gap-9 text-gray-100 font-bold '>
				<button className='resume-btn border-blue-500 border h-10 w-24 rounded-full gradient-border-mask bg-transparent overflow-hidden hover:before:w-24'>
				<a 
				className=''
				href="https://ik.imagekit.io/vx7u9slhq/assets/rajid_resume.pdf?updatedAt=1744104665183" target='_blank' rel='noopener noreferrer'
				>Resume
				</a>
				</button>

			</div>
		</nav>
	)
}

export default Navbar
