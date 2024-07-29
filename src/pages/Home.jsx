import React from 'react';
import Projects from '../components/Projects';
import Aboutme from '../components/Aboutme';
import HomeContent from '../components/HomeContent';
import Contact from '../components/Contact';
import './Home.css'; 

function Home() {
  return (
    <div className = "home">

      <div className = "homecontent" id="home"><HomeContent/></div>

      <div className = "aboutme" id="aboutme"><Aboutme /></div>

      <div className = "projects" id="projects"><Projects/></div>

      <div className = "contactme" id="contactme"><Contact/></div>

    </div>
  );
}
  
export default Home;