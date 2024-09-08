import React from 'react';

function CICDPipeline() {
  return (
    <section>
      <h2>CI/CD Pipeline Using Jenkins</h2>
      <p>
        <strong>Project Overview:</strong> Implemented a fully automated CI/CD pipeline using Jenkins for a web application deployment on a Tomcat server. The pipeline automates the process from code push to production.
      </p>
      <p>
        <strong>Key Technologies:</strong> Jenkins, Git, GitHub, Maven, Tomcat, Nexus Repository, Ansible.
      </p>
      <p>
        <strong>Pipeline Stages:</strong>
        <ol>
          <li><strong>Code Checkout:</strong> Automatically triggers when developers push code to GitHub.</li>
          <li><strong>Build:</strong> Jenkins pulls the code, builds the project using Maven, and packages it into a .war file.</li>
          <li><strong>Testing:</strong> Unit tests are executed, and test reports are generated.</li>
          <li><strong>Artifact Storage:</strong> The built .war file is pushed to Nexus Repository for version control.</li>
          <li><strong>Deployment:</strong> The artifact is automatically deployed to the Tomcat server using Ansible.</li>
          <li><strong>Rollback:</strong> In case of failure, the pipeline automatically triggers a rollback to the last stable version.</li>
        </ol>
      </p>
      <p>
        <strong>Outcome:</strong> Achieved continuous integration and deployment with automated testing and rollback, ensuring smooth and reliable releases.
      </p>
    </section>
  );
}

export default CICDPipeline;
