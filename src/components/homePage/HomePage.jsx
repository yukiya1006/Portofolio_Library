import React from 'react'
import './HomePage.css'
import rubyImage from "../../images/ruby.png";
import tailwindImage from "../../images/tailwind.png";
import reactImage from "../../images/react.png";
import trentalGif from "../../images/trental.gif";
import healingGif from "../../images/healing.gif";
import searchGif from "../../images/search.gif";
import questionGif from "../../images/question.gif";
import githubImage from "../../images/github.png";
import { Link } from 'react-router-dom';
import Header from '../header/Header';



export default function HomePage() {
  return (
    <div className="home-container text-center" id='top'>

      <section className="hero-sec">
        <h1 className='w-screen h-screen top-0 left-0 z-10 text-gray-100 flex items-center   justify-center'>YAMA CODO.</h1>
      </section>

      <div className="cursor"></div>
      <div className="circles relative h-screen w-screen">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>
        <div className="circle circle7"></div>
      <div className="content">Thank you for coming.</div>
      </div>

      <div className='about-bg'></div>
      
      <section className="about-sec py-32">
        <h2 className='text-9xl text-shadow-xl mb-16'>About</h2>
        <p>未経験での転職を考えDMMにてプログラミングの学習をスタートしました。HTML/CSSの基礎を学び、その後Ruby on Railsを中心とした学習を進めPFを完成させました。現在はJavaScriptのライブラリであるReact.js/Node.jsなどを学んでいます。</p>
      </section>

      <div className='skill-bg'></div>

      <section className='skill-sec py-32'>
        <h2 className="text-5xl text-shadow-xl mb-16">My Skill</h2>
        <div className="grid grid-cols-1 text-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-20">
            <div class="">
              <Link to="/language">
                <img src={rubyImage} className="skill-img"/>
              </Link>
              <h4>Language</h4>
            </div>
            <div class="">
              <Link to="/framework">
                <img src={tailwindImage} className="skill-img"/>
              </Link>
              <h4>Framework</h4>
            </div>
            <div class="">
              <Link to="library">
                <img src={reactImage} className="skill-img"/>
              </Link>
              <h4>Library</h4>
            </div>
          </div>
        </div>
      </section>

      <div className='pf-bg'></div>

      <section class="pf-sec py-32" id='pf'>
        <h1 class="text-5xl text-shadow-xl mb-16">Potofolio</h1>
        <div className="grid grid-cols-1 text-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20 mx-auto">
            <div class="btnshine">
              <img src={trentalGif} className="pf-img"/>
              <h4>Trental</h4>
            </div>
            <div class="btnshine">
              <img src={healingGif} className="pf-img"/>
              <h4>Healing App</h4>
            </div>  
            <div class="btnshine">
              <img src={searchGif} className="pf-img"/>
              <h4>Ansplash Searching App</h4>
            </div>
            <div class="btnshine">
                <img src={questionGif} className="pf-img"/>
              <h4>Question Game</h4>
            </div>
          </div>
          <div className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4    hover:border-transparent rounded transition ease-in-out delay-150 duration-300 w-68 h-16 mx-auto my-auto mt-20'>
            <a href="https://github.com/yukiya1006" className='flex justify-center items-center my-auto'>
              <h2 className="text-3xl">View More</h2>
              <img src={githubImage} className="h-12 w-12 object-fit ml-4"/>
            </a>
          </div>
        </div>
      </section>
  </div>
);
};
