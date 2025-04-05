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
import hlsl from '../assets/hlsl.svg';
import blender from '../assets/blender.png';
import cs from '../assets/Cs.png';
import unity from '../assets/unity.svg';
import ue from '../assets/unrealengine.svg';
import htmlcss from '../assets/htmlcss.svg';

function Aboutme() {
  return (
    <div className="aboutme">
      <div className="aboutmeText">
      <h1><span>About Me</span></h1>
        <p>
        With a double Bachelors degree, I strongly believe in continuous learning. 
        This core philosophy has enabled me to develop significant knowledge in programming 
        and cross-disciplinary fields. Check out all the cool things I've worked on!
        </p>
      </div>
      <div className="techstack">
        <div className="techcard">
          <img src={cplusplus}>
          </img>
        </div>
        <div className="techcard">
          <img src={cs}>
          </img>
        </div>
        <div className="techcard">
          <img src={python}>
          </img>
        </div>

        <div className="techcard">
          <img src={htmlcss}>
          </img>
        </div>

        <div className="techcard">
          <img src={mysql}>
          </img>
        </div>

        <div className="techcard">
          <img src={javascript}>
          </img>
        </div>

        <div className="techcard">
          <img src={java}>
          </img>
        </div>

        <div className="techcard">
          <img src={git}>
          </img>
        </div>

        <div className="techcard">
          <img src={twcss}>
          </img>
        </div>

        <div className="techcard">
          <img src={nodejs}>
          </img>
        </div>

        <div className="techcard">
          <img src={ue}>
          </img>
        </div>

        <div className="techcard">
          <img src={unity}>
          </img>
        </div>
      </div>
  </div>
  );
}

export default Aboutme;