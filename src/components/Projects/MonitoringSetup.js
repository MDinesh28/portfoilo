import React from 'react';

function MonitoringSetup() {
  return (
    <section>
      <h2>Monitoring Setup with Prometheus and Grafana</h2>
      <p>
        <strong>Project Overview:</strong> Implemented a monitoring and alerting solution using Prometheus and Grafana. The project involved monitoring application performance, system metrics, and creating custom dashboards for visualization.
      </p>
      <p>
        <strong>Key Technologies:</strong> Prometheus, Grafana, Node Exporter, Prometheus AlertManager, Docker.
      </p>
      <p>
        <strong>Steps Involved:</strong>
        <ol>
          <li><strong>Prometheus Setup:</strong> Configured Prometheus for scraping metrics from application endpoints and Node Exporter for system-level metrics.</li>
          <li><strong>Grafana Integration:</strong> Connected Grafana to Prometheus and created custom dashboards to visualize key performance indicators (KPIs).</li>
          <li><strong>Alerts Configuration:</strong> Defined alert rules in Prometheus, and set up Prometheus AlertManager to send alerts to Slack when thresholds were breached (e.g., high CPU usage).</li>
          <li><strong>Containerization:</strong> Deployed the entire monitoring stack using Docker, ensuring portability and ease of deployment.</li>
        </ol>
      </p>
      <p>
        <strong>Outcome:</strong> Achieved real-time monitoring and proactive alerting, reducing system downtime and enabling faster response to incidents.
      </p>
    </section>
  );
}

export default MonitoringSetup;
