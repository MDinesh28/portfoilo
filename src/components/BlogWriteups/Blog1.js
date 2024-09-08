import React from 'react';

function Blog1() {
  return (
    <section>
      <h2>Setting Up CI/CD with Jenkins</h2>
      <p>
        <strong>Overview:</strong> In this blog post, I walk you through setting up a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins. This pipeline automates the build, test, and deployment process for a web application.
      </p>
      <p>
        <strong>Prerequisites:</strong>
        <ul>
          <li>Jenkins installed and configured</li>
          <li>GitHub repository with your application code</li>
          <li>Maven for building Java applications</li>
          <li>Tomcat server for deployment</li>
        </ul>
      </p>
      <p>
        <strong>Steps:</strong>
        <ol>
          <li><strong>Configure Jenkins:</strong> Install Jenkins and necessary plugins. Set up credentials for GitHub and Maven.</li>
          <li><strong>Create a Jenkins Pipeline:</strong> Define the pipeline script in a Jenkinsfile to automate the checkout, build, test, and deploy stages.</li>
          <li><strong>Automate Deployment:</strong> Use Ansible or custom scripts to deploy the built .war file to Tomcat.</li>
          <li><strong>Testing and Validation:</strong> Ensure the pipeline is triggered on code commits and verify that all stages work correctly.</li>
        </ol>
      </p>
      <p>
        <strong>Conclusion:</strong> By setting up a Jenkins pipeline, you streamline the application lifecycle, making releases faster and more reliable.
      </p>
    </section>
  );
}

export default Blog1;
