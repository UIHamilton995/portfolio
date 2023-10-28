/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ScrollLink from './components/ScrollLink';
import Imu from './assets/imu.png'
import NavBar from './components/NavBar';
import { NextSeo } from 'next-seo';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NextSeo title='🚀UI Hamilton'/>
    <div><NavBar /></div>
    <div className="hero" id="home">
      <div className="hero-overlay">
      <div className="description w-3/4 md:w-2/3">
        <h2 className="title text-5xl text-white font-cursive">hELLO. i aM HAMILTON UDE IKEDI</h2>
        <h3 className="tagline text-1.5xl text-orange-600">Breaking keyboards and pushing codes and contributions since 2022</h3>
        <p className="paragraph text-1.2xl text-white opacity-80 leading-6 mt-8">
          🚀 Crafting exceptional digital experiences is my passion. With a keyboard as my paintbrush and lines of code as my canvas, I breathe life into ideas in the virtual realm.

          💡 Together, we can turn your digital dreams into reality. Let's embark on this thrilling journey of creation and innovation. Get in touch, and let's make it happen!
        </p>
        <div className="hero-btns mt-10 flex gap-4">
          <button className="hire-me text-white border border-orange-600 py-2 px-6 rounded-lg">
            GET MY CV
          </button>
          <button className="lets-talk">
            <ScrollLink spy smooth offset={50} duration={500} to="contact" className="text-white border border-orange-600 py-2 px-6 rounded-lg">
              LET'S TALK
            </ScrollLink>
          </button>
        </div>
      </div>
      <Image src={Imu} alt="HAMILTON" className="hero-image w-1/3 md:w-2/5 animation-float" />
    </div>
    <div className="social-icons mt-10 flex justify-center">
      <a href="https://github.com/UIHamilton995" target="_blank" rel="noreferrer" className="text-white mx-4">
        <i className="fab fa-github text-2xl hover:scale-125"></i>
      </a>
      <a href="https://www.linkedin.com/in/hamilton-ude-07744a16a/" target="_blank" rel="noreferrer" className="text-white mx-4">
        <i className="fab fa-linkedin-in text-2xl hover:scale-125"></i>
      </a>
      <a href="https://twitter.com/UI_Hamilton" target="_blank" rel="noreferrer" className="text-white mx-4">
        <i className="fab fa-twitter text-2xl hover:scale-125"></i>
      </a>
    </div>
      </div>
    </>
  )
}
