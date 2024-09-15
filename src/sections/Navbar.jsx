import React from 'react'
import { navLinks } from '../constans'

const NavItems = () => {

  return (
    <div>
      <ul className='nav-ul'>
        {
         navLinks.map(({id, href, name}) => 
          <li key={id} className='nav-li'>
            <a href={href} className='nav-li_a' onClick={() => {} }>{name}</a>
          </li>)
        }
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen((prevIsopen) => !prevIsopen)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between py-5 mx-auto c-space'>
          <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Pakoor
          </a>
          <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Open Menu'>
            <img src={ isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu" className='w-6 h-6'></img>
          </button>
          
          <nav className='hidden sm:flex'>
            <NavItems/>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems/>
        </nav>
      </div>
    </header>
  )
}

export default Navbar