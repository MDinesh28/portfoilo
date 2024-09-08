import React from 'react';

function DockerOrch() {
  return (
    <section>
      <h2>Docker and Kubernetes Orchestration</h2>
      <p>
        <strong>Project Overview:</strong> Containerized a multi-tier web application using Docker and deployed it on a Kubernetes cluster for orchestration. Managed container scaling, load balancing, and high availability.
      </p>
      <p>
        <strong>Key Technologies:</strong> Docker, Docker Compose, Kubernetes, Helm, Kubernetes Dashboard.
      </p>
      <p>
        <strong>Steps Involved:</strong>
        <ol>
          <li><strong>Containerization:</strong> Created Dockerfiles for each service (web, API, database), and built container images.</li>
          <li><strong>Docker Compose:</strong> Defined and tested multi-container environments locally using Docker Compose.</li>
          <li><strong>Kubernetes Deployment:</strong> Created Kubernetes manifests for deployment, services, and ingress configurations. Managed deployments with Helm.</li>
          <li><strong>Scaling:</strong> Used Kubernetes Horizontal Pod Autoscaler to automatically scale containers based on CPU utilization.</li>
          <li><strong>Monitoring:</strong> Integrated Prometheus and Grafana to monitor container health and performance.</li>
        </ol>
      </p>
      <p>
        <strong>Outcome:</strong> Achieved scalable, highly available, and resilient application deployment using Kubernetes, significantly improving resource utilization and uptime.
      </p>
    </section>
  );
}

export default DockerOrch;
