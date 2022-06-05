import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

export default function Header() {
  return (
    <header className='header py-8'>
      <Scroll to="top" smooth={true} className="text-5xl mx-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Portofolio Library</Scroll>
      <nav>
        <ul>
          <li className='lg:text-2xl md:text-xl text-md'>
            <Link to="/" >Home</Link>
          </li>  
          <li className='lg:text-2xl md:text-xl text-md'>
            <Link to="/language" >Language</Link>
          </li>  
          <li className='lg:text-2xl md:text-xl text-md'>
            <Link to="/framework" >Framework</Link>
          </li>
          <li className='lg:text-2xl md:text-xl text-md'>
            <Link to="/library" >Library</Link>
          </li>
          <li className='lg:text-2xl md:text-xl text-md'>
            <Scroll to="pf" smooth={true} >Potofolio</Scroll>
          </li>
        </ul>
      </nav>
    </header>
  )
}
