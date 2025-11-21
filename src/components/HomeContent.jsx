import Typewriter from 'typewriter-effect';
import './HomeContent.css';
import intropic from '../assets/intropic.png';
import { Link } from 'react-router-dom';

function HomeContent() {
  const texts = ["Software Developer", "Graphics", "Armored Core Enjoyer"];

  return (
    <div className="homecontent">
      <div className="picContainer"><img className="intropic" src={intropic}/></div>
      <h1 className="intro">Hey, I'm Daniel!</h1>
      <h1 className="texts">
        <Typewriter
            options={{
            strings: texts,
            autoStart: true,
            loop: true,
         }}
        />
      </h1>
      <div className = "introSummary">
      <p>
        I'm a software developer with an interest in web, mobile, and game development. 
        In 2022, I discovered programming when I automated a work task at my healthcare job using Python. 
        Since then, software development has become my passion.
      </p>
      </div>
      <button className= "getInTouch">
      <Link className="contactme" to="/#contactme">Get in Touch</Link>
      </button>
    </div>
  );
}

export default HomeContent;
