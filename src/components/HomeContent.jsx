import Typewriter from 'typewriter-effect';
import './HomeContent.css';
import intropic from '../assets/intropic.png';
import { Link } from 'react-router-dom';

function HomeContent() {
  const texts = ["Full-Stack Developer", "Graphics Enthusiast", "Science Nerd", "Blog Writer"];

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
        I'm a graduate holding a bachelor's degree in Biology, and I am pursuing a bachelor's degree in Computer Science. 
        With my experience in healthcare and software development, I provide excellent communication and 
        analytical skills proven to be useful in any project I tackle.
      </p>
      </div>
      <button className= "getInTouch">
      <Link className="contactme" to="/#contactme">Get in Touch</Link>
      </button>
    </div>
  );
}

export default HomeContent;
