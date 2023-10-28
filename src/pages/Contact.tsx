import React from 'react';
import { NextSeo } from 'next-seo';


type Props = {}

const Contact = (props: Props) => {
  return (
    <main>
      <NextSeo title='🚀 Contact'/>
      <div className="flex h-screen p-5 md:p-10" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg')" }}>
    <div className="w-2/5 md:w-40">
      <h1 className="bg-clip-text bg-cover text-9xl font-oswald leading-none tracking-tighter text-white">
        I LOVE
        <br />
        COFFEE
        <br />
        CHAT ☕️
      </h1>
    </div>
    <div className="w-3/5 md:w-60 ml-5 md:ml-10">
      <h3 className="text-2.2xl font-oswald tracking-tighter opacity-80">I AM ALWAYS INTERESTED ABOUT</h3>
      <div className="flex flex-wrap gap-4">
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Frontend Development</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">React</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Backend Development</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Blockchain Technology</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Web3.0</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">DEFi</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Startups</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">New Opportunities</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Coffee</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Space</p>
        <p className="text-1.5xl py-2 px-4 rounded-full border border-black font-orbit">Pizza</p>
      </div>
      <hr className="border-t-0.5 border-gray-300 w-full my-6" />
      <h3 className="text-2.2xl font-oswald tracking-tighter opacity-80">
        MINDING A PROJECT?
        <span>
          <a href="dehamiltonglobal@gmail.com" className="text-red-600">cOnTaCt mE</a>
        </span>
      </h3>
      <hr className="border-t-0.5 border-gray-300 w-full my-6" />
      <div className="flex gap-8">
        <a href="https://github.com/UIHamilton995" target="_blank" rel="noreferrer" className=" text-white">GITHUB</a>
        <a href="https://www.linkedin.com/in/hamilton-ude-07744a16a/" target="_blank" rel="noreferrer" className="text-blue-600">LINKEDIN</a>
        <a href="https://twitter.com/UI_Hamilton" target="_blank" rel="noreferrer" className="text-blue-600">TWITTER</a>
      </div>
    </div>
  </div>
    </main>
  )
}

export default Contact