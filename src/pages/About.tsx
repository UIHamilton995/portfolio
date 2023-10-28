import React from 'react';
import Image from 'next/image';
import ReduxIcon from './assets/redux.png';
import HTML from './assets/html.png';
import ReactIcon from './assets/react.png';
import JavaScript from './assets/javascript.png';
import CSS from './assets/css.png';
import Sass from './assets/sass.png';
import BootStrap from './assets/bootstrap.png';
import NextJS from './assets/next.webp';
import PostGres from './assets/postgres.png';
import GitLogo from './assets/git.png';
import GitHublogo from './assets/github.png';
import JEST from './assets/jest.png';
import VSCode from './assets/vscode.png';
import PostMan from './assets/postman.png';
import NPMlogo from './assets/npm.png';
import Canva from './assets/canva.png';
import Figma from './assets/figma.png';
import Slack from './assets/slack.png';
import SkypeLogo from './assets/skype.png';
import GMeet from './assets/meet.png';
import Zoomlogo from './assets/zoom.webp';
import { NextSeo } from 'next-seo';

const About: React.FC = () => (
  <section className="about" id="about">
    <NextSeo title='🚀 About'/>
    <div className="about-me">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        My journey in the world of programming began in 2022 when I ventured into a contract with Reboth Finance and afterward an Associate Software Engineer position at Decagon in April 2023. Since then, I have had the opportunity to work on a wide range of projects, honing my skills and expanding my knowledge along the way. I have worked with various clients, both independently and as part of a team, to deliver innovative and user-friendly websites and mobile responsive applications.
      </p>
      <a
        href={`${process.env.PUBLIC_URL}../../public/pdfs/Hamilton Ude Ikedi (1) (2).pdf`}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get My CV
      </a>
    </div>

    <div className="about-skills">
      <h2 className="text-2xl font-bold mb-4">Front-End</h2>
      <div className="flex flex-wrap gap-4">
        <div className="skill">
          <Image src={ReactIcon} alt="React" />
          <p className="mt-2">React</p>
        </div>
        <div className="skill">
          <Image src={JavaScript} alt="JavaScript" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="skill">
          <Image src={ReduxIcon} alt="Redux" />
          <p className="mt-2">Redux</p>
        </div>
        <div className="skill">
          <Image src={HTML} alt="HTML5" />
          <p className="mt-2">HTML5</p>
        </div>
        <div className="skill">
          <Image src={CSS} alt="CSS3" />
          <p className="mt-2">CSS3</p>
        </div>
        <div className="skill">
          <Image src={Sass} alt="SASS" />
          <p className="mt-2">SASS</p>
        </div>
        <div className="skill">
          <Image src={BootStrap} alt="Bootstrap" />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="skill">
          <Image src={NextJS} alt="Next.js" />
          <p className="mt-2">Next.js</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Back-End</h2>
      <div className="flex flex-wrap gap-4">
        <div className="skill">
          <Image src={PostGres} alt="PostgreSQL" />
          <p className="mt-2">PostgreSQL</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Mobile</h2>
      <div className="flex flex-wrap gap-4">
        <div className="skill">
          <Image src={ReactIcon} alt="React Native" />
          <p className="mt-2">React Native</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Tools</h2>
      <div className="flex flex-wrap gap-4">
        <div className="skill">
          <Image src={GitLogo} alt="Git" />
          <p className="mt-2">Git</p>
        </div>
        <div className="skill">
          <Image src={GitHublogo} alt="GitHub" />
          <p className="mt-2">GitHub</p>
        </div>
        <div className="skill">
          <Image src={JEST} alt="JEST" />
          <p className="mt-2">JEST</p>
        </div>
        <div className="skill">
          <Image src={VSCode} alt="VS Code" />
          <p className="mt-2">VS Code</p>
        </div>
        <div className="skill">
          <Image src={PostMan} alt="Postman" />
          <p className="mt-2">Postman</p>
        </div>
        <div className="skill">
          <Image src={NPMlogo} alt="npm" />
          <p className="mt-2">npm</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Design</h2>
      <div className="flex flex-wrap gap-4">
        <div className="skill">
          <Image src={Canva} alt="Canva" />
          <p className="mt-2">Canva</p>
        </div>
        <div className="skill">
          <Image src={Figma} alt="Figma" />
          <p className="mt-2">Figma</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Communication</h2>
      <div className="flex flex-wrap gap-4">
        <div className="skill">
          <Image src={Slack} alt="Slack" />
          <p className="mt-2">Slack</p>
        </div>
        <div className="skill">
          <Image src={SkypeLogo} alt="Skype" />
          <p className="mt-2">Skype</p>
        </div>
        <div className="skill">
          <Image src={GMeet} alt="Google Meet" />
          <p className="mt-2">Google Meet</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
