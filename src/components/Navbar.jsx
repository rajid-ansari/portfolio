import React from 'react'
import rajidResume from '../assets/rajid_resume.pdf'

const Navbar = () => {
	return (
		<nav className='py-4 font-moranga flex items-center justify-between px-4 md:px-12'>
			<div id='logo'>
				<h1 className='text-gray-100 uppercase text-xl md:text-[2.5vw] leading-none font-bold cursor-pointer selection:hidden hover:text-gray-300'>
					Rajid <br /> Ansari
				</h1>
			</div>
			<div id='tabs' className='flex gap-4 md:gap-9 text-gray-100 font-bold '>
				{/* <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-gray-400' : ''}>Projects</NavLink>
				<NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-gray-400' : ''}>About</NavLink> */}
				<a 
				className='border-blue-500 border py-2 px-6 rounded-full gradient-border-mask hover:bg-blue-500 transition-all duration-300 ease-linear delay-0 '
				href={rajidResume} target='_blank' rel='noopener noreferrer'>Resume</a>
			</div>
		</nav>
	)
}

export default Navbar
