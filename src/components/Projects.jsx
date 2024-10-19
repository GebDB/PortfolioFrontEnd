import './Projects.css';

function Projects() {
    return (
      <div className="projects">
      <h1><span>Projects</span></h1>
      <div className="projectlist">
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

      <div className="project">
        <div className="iframeContainer">
          <iframe
            src="https://www.youtube.com/embed/XGsWwzsNfao" 
            allowfullscreen="allowfullscreen"
            title="DNA Simulator demo" >
          </iframe>
          </div>
          <div className = "links">
            <a href="https://github.com/GebDB/CPSC2710" target="_blank">
            View on GitHub
            </a>
          </div>
      </div>

      <div className="project">
        <div className="iframeContainer">
          <iframe
            src="https://www.youtube.com/embed/mRjDBOq1GYk"
            allowfullscreen="allowfullscreen">
          </iframe>
        </div>
          <div className = "links">
            <a href="https://github.com/GebDB/DNARenderer" target="_blank">
            View on GitHub
            </a>
          </div>
        </div>
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
      </div>
    </div>
    );
  }
  
export default Projects;