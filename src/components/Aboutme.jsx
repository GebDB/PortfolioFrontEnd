import './Aboutme.css';
import cplusplus from '../assets/c-plusplus.svg';
import css from '../assets/css-3.svg'
import git from '../assets/git-icon.svg';
import html from '../assets/html-5.svg';
import java from '../assets/java.svg';
import javascript from '../assets/javascript.svg';
import mysql from '../assets/mysql-icon.svg';
import nodejs from '../assets/node-js.svg';
import opengl from '../assets/opengl.svg';
import python from '../assets/python.svg';
import reacticon from '../assets/react.svg';
import twcss from '../assets/tailwindcss-icon.svg';

function Aboutme() {
  return (
    <div className="aboutme">
      <div className="aboutmeText">
      <h1><span>About Me</span></h1>
        <p>
        As a person coming from a unique educational background, 
        holding two Bachelor degrees,
        I believe in the idea of continuous learning. Thanks to this
        core philosophy, I gained a passion in software development
        and continue to learn new libraries and frameworks in the spaces I enter. 
        I have become well-aversed in various frameworks and libraries like React, 
        MySQL, Tailwind CSS, and more.
        When I'm not coding, I love to spend my time reading manhwa, watching anime,
        and playing video games.
        </p>
      </div>
      <div className="techstack">
        <div className="techcard">
          <img src={cplusplus}>
          </img>
        </div>
        <div className="techcard">
          <img src={css}>
          </img>
        </div>
        <div className="techcard">
          <img src={git}>
          </img>
        </div>

        <div className="techcard">
          <img src={html}>
          </img>
        </div>

        <div className="techcard">
          <img src={java}>
          </img>
        </div>

        <div className="techcard">
          <img src={javascript}>
          </img>
        </div>

        <div className="techcard">
          <img src={mysql}>
          </img>
        </div>

        <div className="techcard">
          <img src={nodejs}>
          </img>
        </div>

        <div className="techcard">
          <img src={opengl}>
          </img>
        </div>

        <div className="techcard">
          <img src={python}>
          </img>
        </div>

        <div className="techcard">
          <img src={reacticon}>
          </img>
        </div>

        <div className="techcard">
          <img src={twcss}>
          </img>
        </div>
      </div>
  </div>
  );
}

export default Aboutme;