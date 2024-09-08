import React from 'react';

function JenkinsCICD() {
  return (
    <section>
      <h2>Jenkins CI/CD Pipeline Repository</h2>
      <p>
        This repository contains Jenkins pipelines for automating build, test, and deployment processes. The pipeline configuration ensures that code changes are automatically tested and deployed.
      </p>
      <p>
        <strong>Repository Link:</strong> <a href="https://github.com/your-username/jenkins-ci-cd" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
      <p>
        <strong>Key Files:</strong>
        <ul>
          <li><code>Jenkinsfile</code> - Defines the pipeline stages and steps for CI/CD.</li>
          <li><code>config.xml</code> - Jenkins configuration for setting up jobs and pipelines.</li>
        </ul>
      </p>
    </section>
  );
}

export default JenkinsCICD;
