import './Projects.css';
import wip from '../assets/WIP.jpg';

function Projects() {
    return (
      <div className="projects">
        <h1><span>Projects</span></h1>
          <div className="projectlist">

            <h2> OpenGL, GLSL, and HLSL Projects! </h2>
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

            <h3>A fog post processing effect developed in HLSL, C# for Unity's URP</h3>  
            <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/6hEbv_-3Oxc?si=dkZQxEUfwk7I7OgI" 
                      allowfullscreen="allowfullscreen"
                      title="Fog Shader"></iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/AspenFogPostEffect" target="_blank">
                  View on GitHub
                  </a>
                </div>
            </div>

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
            
            <h3>A foliage shader created with Unity's shader graph</h3>  
            <div className="project">
              <div className="iframeContainer">
              <iframe src="https://www.youtube.com/embed/B6TQUSmsHK0?si=pya_RkQhW-ok34sP" 
                      allowfullscreen="allowfullscreen"
                      title="Leaves Shader"></iframe>
              </div>
                <div className = "links">
                  <a href="https://github.com/GebDB/LeavesShader" target="_blank">
                  View on GitHub
                  </a>
                </div>
              </div>

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
            <h3>A 3D action Unity game with EGD Collective's Studio Aspen</h3>  
            <div className="project">
              <div className="iframeContainer">
              <img className = "wip" src={wip}></img>
              </div>
                <div className = "links">
                  <a href="https://github.com/StudioAspen/Aspen2024-2025" target="_blank">
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