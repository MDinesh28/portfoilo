import React from 'react';
import './App.css';

// Import components
import TaskBar from './components/TaskBar/TaskBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


// Introduction Components
import AboutMe from './components/Introduction/AboutMe';
import Skills from './components/Introduction/Skills';
import Contact from './components/Introduction/Contact';

// Skills Components
import Cloud from './components/Skills/Cloud';
import CICD from './components/Skills/CICD';
import IaC from './components/Skills/IaC';
import ConfigMgmt from './components/Skills/ConfigMgmt';
import Containers from './components/Skills/Containers';
import Monitoring from './components/Skills/Monitoring';
import Scripting from './components/Skills/Scripting';

// Projects Components
import TerraformInfra from './components/Projects/TerraformInfra';
import CICDPipeline from './components/Projects/CICDPipeline';
import DockerOrch from './components/Projects/DockerOrch';
import MonitoringSetup from './components/Projects/MonitoringSetup';

// Blog Writeups
import Blog1 from './components/BlogWriteups/Blog1';
import Blog2 from './components/BlogWriteups/Blog2';
import Blog3 from './components/BlogWriteups/Blog3';

// GitHub Repositories
import TerraformAWS from './components/GitHubRepos/TerraformAWS';
import JenkinsCICD from './components/GitHubRepos/JenkinsCICD';
import DockerK8S from './components/GitHubRepos/DockerK8S';
import AnsibleConfig from './components/GitHubRepos/AnsibleConfig';

// Education
import EducationDetails from './components/Education/EducationDetails';
import Certifications from './components/Education/Certifications';

// Contact
import Email from './components/Contact/Email';
import Phone from './components/Contact/Phone';
import LinkedIn from './components/Contact/LinkedIn';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My DevOps Portfolio</h1>
        <TaskBar />
      </header>
      <section id="introduction">
        <h2>Introduction</h2>
        <AboutMe />
        <Skills />
        <Contact />
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <Cloud />
        <CICD />
        <IaC />
        <ConfigMgmt />
        <Containers />
        <Monitoring />
        <Scripting />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <TerraformInfra />
        <CICDPipeline />
        <DockerOrch />
        <MonitoringSetup />
      </section>
      <section id="blog-writeups">
        <h2>Blog Writeups</h2>
        <Blog1 />
        <Blog2 />
        <Blog3 />
      </section>
      <section id="github-repos">
        <h2>GitHub Repositories</h2>
        <TerraformAWS />
        <JenkinsCICD />
        <DockerK8S />
        <AnsibleConfig />
      </section>
      <section id="education">
        <h2>Education</h2>
        <EducationDetails />
        <Certifications />
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <Email />
        <Phone />
        <LinkedIn />
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
