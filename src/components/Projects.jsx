import './Projects.css';
import wip from '../assets/WIP.jpg';

function Projects() {
    return (
      <div className="projects">
        <h1><span>Projects</span></h1>
          <div className="projectlist">

            <h2> OpenGL and Vulkan Projects! </h2>
            <h3>A Educational DNA Renderer made in C++, OpenGL and GLSL</h3>
            <div className="project">
              <div className="iframeContainer">
                <iframe
                  src="https://www.youtube.com/embed/XGsWwzsNfao" 
                  allowfullscreen="allowfullscreen">
                </iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/DNARenderer" target="_blank">
                  View on GitHub
                  </a>
                </div>
              </div>

            <h3>A Procedural Water Shader with an Environment using GLSL, OpenGL, and C++</h3>  
            <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/nS41gys4xNs" 
                      allowfullscreen="allowfullscreen"
                      title="Procedural Water"></iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/Procedural-Water" target="_blank">
                  View on GitHub
                  </a>
                </div>
            </div>

{/*
           <h3>A Unity Snow Particle System + Shader Graph</h3>
            <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/GIdMFwDQ72s" 
                      allowfullscreen="allowfullscreen"
                      title="Snow Particle System"></iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/SnowParticleSystem" target="_blank">
                  View on GitHub
                  </a>
                </div>
            </div>
*/}
        <h2>Game Development!</h2>
        <h3>WaxHeart, a 3D Horror Platformer Game</h3>  
            <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/HzQJ0a0jpXg" allowfullscreen="allowfullscreen" title="WaxHeart"></iframe>
              </div>
                <div className = "links">
                  <a href="https://waxheart.info/" target="_blank">
                  WaxHeart Team
                  </a>
                </div>
            </div> 
            
            <h3>Project : Dreamscape, a 3D Action Rogue-like</h3>  
            <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/uyIlUd1mpPE" allowfullscreen="allowfullscreen" title="PROJECT : DREAMSCAPE Contributions"></iframe>
              </div>
                <div className = "links">
                  <a href="https://store.steampowered.com/app/3569570/Project__DreamScape/" target="_blank">
                  View on Steam
                  </a>
                </div>
            </div>

        <h3>Digital Hopper (SJSU Global Game Jam Winner for Most Creative Concept)</h3>
        <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/MmDgKEkkMc4" allowfullscreen="allowfullscreen" title="2025 GLOBAL GAME JAM"></iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/DigitalHopper" target="_blank">
                  View on GitHub
                  </a>
                </div>
            </div>
        <h3>A Vampire-Survivors inspired Unity game (work in progress)</h3>  
        <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/UUzgchCMkNI?si=Sg9IM5Xigj2dXD0L" allowfullscreen="allowfullscreen" title="Unnamed Game Project"></iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/Unnamed-Game" target="_blank">
                  View on GitHub
                  </a>
                </div>
            </div>

        <h2>Software Development</h2>

        <h3>An anime trivia website developed with React</h3>  
      <div className="project">
        <div className="iframeContainer">
          <iframe
            src="https://www.youtube.com/embed/vuv-lLifQI0" 
            allowfullscreen="allowfullscreen"
            title="Guess the Anime Theme Demo" >
          </iframe>
        </div>
          <div className = "links">
            <a href="https://gebdb.github.io/GuessTheAnimeTheme/" target="_blank">
            Live App
            </a>
            <a href="https://github.com/GebDB/GuessTheAnimeTheme" target="_blank">
            View on GitHub
            </a>
          </div>
          </div>

          <h3>A simple timer developed with Java and JavaFX</h3>  
          <div className="project">
            <div className="iframeContainer">
              <iframe
                src="https://www.youtube.com/embed/mRjDBOq1GYk"
                allowfullscreen="allowfullscreen"
                title="Timer" >
              </iframe>
              </div>
              <div className = "links">
                <a href="https://github.com/GebDB/CPSC2710" target="_blank">
                View on GitHub
                </a>
              </div>
          </div>
        </div>
    </div>
    );
  }
  
export default Projects;