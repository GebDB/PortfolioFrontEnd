import './Projects.css';

function Projects() {
    return (
      <div className="projects">
      <h1><span>Projects</span></h1>

      <div className="projectlist">
      <div className="project">
        <div className="iframeContainer">
          <iframe
            src="https://www.youtube.com/embed/vuv-lLifQI0" 
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
            src="https://www.youtube.com/embed/mRjDBOq1GYk">
          </iframe>
        </div>
          <div className = "links">
            <a href="https://github.com/GebDB/DNARenderer" target="_blank">
            View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
export default Projects;