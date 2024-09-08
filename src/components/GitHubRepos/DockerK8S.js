import React from 'react';

function DockerK8S() {
  return (
    <section>
      <h2>Docker and Kubernetes Repository</h2>
      <p>
        This repository contains Docker configurations and Kubernetes manifests for containerizing and orchestrating applications. It includes Dockerfiles and Kubernetes deployment configurations.
      </p>
      <p>
        <strong>Repository Link:</strong> <a href="https://github.com/your-username/docker-k8s" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
      <p>
        <strong>Key Files:</strong>
        <ul>
          <li><code>Dockerfile</code> - Defines the Docker image and its dependencies.</li>
          <li><code>deployment.yaml</code> - Kubernetes deployment configuration.</li>
          <li><code>service.yaml</code> - Kubernetes service configuration for exposing the application.</li>
        </ul>
      </p>
    </section>
  );
}

export default DockerK8S;
