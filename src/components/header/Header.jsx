import React, { useState } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

const homeUrl = process.env.PUBLIC_URL;

export default function Header({ home }) {

  const HomeHeader = () => {
    return (
      <>
        <Link to={homeUrl} smooth={true} className="text-5xl mx-16 font-extrabold text-transparent headerTitle">YAMA CODO.</Link>
        <nav>
          <ul>
            <li className='lg:text-2xl md:text-xl text-md'>
              <Scroll to="top" smooth={true} >Home</Scroll>
            </li>
            <li className='lg:text-2xl md:text-xl text-md'>
              <Scroll to="about" smooth={true} >About</Scroll>
            </li>
            <li className='lg:text-2xl md:text-xl text-md'>
              <Scroll to="skill" smooth={true} >Skill</Scroll>
            </li>
            <li className='lg:text-2xl md:text-xl text-md'>
              <Scroll to="pf" smooth={true} >Potofolio</Scroll>
            </li>
          </ul>
        </nav>
      </>
    )
  };

  const WrongHeader = () => {
    return (
      <>
        <Link to={homeUrl} smooth={true} className="text-5xl mx-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Portofolio Library</Link>
        <nav>
          <ul>
            <li className='lg:text-2xl md:text-xl text-md'>
              <Link  to={homeUrl} smooth={true}>Home</Link>
            </li> 
          </ul>
        </nav>
      </>
    )
  };

  return (
    <div className='header py-8'>
      {home ? <HomeHeader /> : <WrongHeader />}
    </div>
  );
}
