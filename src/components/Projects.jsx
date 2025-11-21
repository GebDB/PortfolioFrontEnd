import './Projects.css';
import wip from '../assets/WIP.jpg';

function Projects() {
    return (
      <div className="projects">
        <h1><span>Projects</span></h1>
          <div className="projectlist">

          <h3>An anime trivia website developed with React</h3>  
            <div className="project">
              <div className="iframeContainer">
                <iframe 
                  src="https://www.youtube.com/embed/vuv-lLifQI0" 
                  allowfullscreen="allowfullscreen" 
                   >
                </iframe>
              </div>
              <div className = "links">
                <a href="https://github.com/GebDB/GuessTheAnimeTheme" target="_blank">
                  View on GitHub
                </a>
                <a href="https://gebdb.github.io/GuessTheAnimeTheme/" target="_blank">
                  Live App
                </a>
              </div>
            </div>

          <h2>Software Development</h2>
            <h3>TurtleTech.Art - A Community Resource Hub for Tech Artists</h3>  
            <div className="project">
              <div className="iframeContainer">
                <iframe 
                  src="https://www.youtube.com/embed/FJi8Xewdntc" 
                  allowfullscreen="allowfullscreen" 
                   >
                </iframe>
              </div>
              <div className = "links">
                <a href="https://www.turtletech.art" target="_blank">
                  Live App
                </a>
              </div>
            </div>

            <h3>A Educational DNA Renderer made in C++, OpenGL and GLSL</h3>
            <div className="project">
              <div className="iframeContainer">
                <iframe
                  src="https://www.youtube.com/embed/XGsWwzsNfao" 
                  allowfullscreen="allowfullscreen"
                  title="DNA Renderer">
                </iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/DNARenderer" target="_blank">
                    View on GitHub
                  </a>
                </div>
              </div>

            <h3>Rivals Randomizer: IOS Mobile Application made in SwiftUI</h3>  
            <div className="project">
              <div className="iframeContainer">
                <iframe
                  src="https://www.youtube.com/embed/mOEKQkJ2C58"
                  allowfullscreen="allowfullscreen"
                  title="Rivals Randomizer (Mobile Dev 2 Final Project)">
                </iframe>
              </div>
              <div className = "links">
                <a href="https://github.com/GebDB/RivalsRandomizer" target="_blank">
                  View on GitHub
                </a>
              </div>
            </div>

              <h3>Event Organizer: PHP, Javascript, HTML/CSS</h3>  
            <div className="project">
              <div className="iframeContainer">
                <iframe
                  src="https://www.youtube.com/embed/UOFMZM2sFAA"
                  allowfullscreen="allowfullscreen"
                  title="Web Dev 2 (Final Project)">
                </iframe>
              </div>
              <div className = "links">
                <a href="https://github.com/GebDB/Event-Organizer" target="_blank">
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
      <h2>Game Development</h2>
        <h3>WaxHeart, a 3D Horror Platformer Game</h3>  
          <div className="project">
            <div className="iframeContainer">
              <iframe 
                src="https://www.youtube.com/embed/HzQJ0a0jpXg"
                allowfullscreen="allowfullscreen"
                title="WaxHeart">
              </iframe>
            </div>
            <div className = "links">
              <a href="https://waxheart.info/" target="_blank">
                WaxHeart Team
              </a>
            </div>
          </div>
            
        <h3>Project Dreamscape, a 3D Action Rogue-like</h3>  
        <div className="project">
          <div className="iframeContainer">
            <iframe 
              src="https://www.youtube.com/embed/wjpnpBFsmzs"
              allowfullscreen="allowfullscreen"
              title="PROJECT : DREAMSCAPE Contributions">
            </iframe>
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
            <iframe 
              src="https://www.youtube.com/embed/MmDgKEkkMc4"
              allowfullscreen="allowfullscreen"
              title="2025 GLOBAL GAME JAM">
            </iframe>
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
            <iframe
              src="https://www.youtube.com/embed/UUzgchCMkNI?si=Sg9IM5Xigj2dXD0L"
              allowfullscreen="allowfullscreen"
              title="Unnamed Game Project">
            </iframe>
          </div>
          <div className = "links">
            <a href="https://github.com/GebDB/Unnamed-Game" target="_blank">
              View on GitHub
            </a>
          </div>
        </div>

        <h3>A Procedural Water Shader with an Environment using GLSL, OpenGL, and C++</h3>  
          <div className="project">
            <div className="iframeContainer">
              <iframe
                src="https://www.youtube.com/embed/nS41gys4xNs"
                allowfullscreen="allowfullscreen"
                title="Procedural Water">
              </iframe>
            </div>
            <div className = "links">
              <a href="https://github.com/GebDB/Procedural-Water" target="_blank">
                  View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Projects;