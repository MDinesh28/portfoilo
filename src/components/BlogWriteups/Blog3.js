import React from 'react';

function Blog3() {
  return (
    <section>
      <h2>Setting Up Monitoring with Prometheus and Grafana</h2>
      <p>
        <strong>Overview:</strong> This blog post covers how to set up monitoring for your applications using Prometheus and Grafana. We’ll configure Prometheus to collect metrics and Grafana to visualize them.
      </p>
      <p>
        <strong>Prerequisites:</strong>
        <ul>
          <li>Docker installed</li>
          <li>Basic knowledge of Prometheus and Grafana</li>
        </ul>
      </p>
      <p>
        <strong>Steps:</strong>
        <ol>
          <li><strong>Set Up Prometheus:</strong> Create a <code>prometheus.yml</code> configuration file to define the scrape targets:
            <pre><code>
              global:
                scrape_interval: 15s

              scrape_configs:
                - job_name: 'node'
                  static_configs:
                    - targets: ['localhost:9100']
            </code></pre>
          </li>
          <li><strong>Run Prometheus:</strong> Use Docker to run Prometheus with the configuration file:
            <pre><code>
              docker run -d -p 9090:9090 -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
            </code></pre>
          </li>
          <li><strong>Set Up Grafana:</strong> Run Grafana with Docker and add Prometheus as a data source:
            <pre><code>
              docker run -d -p 3000:3000 grafana/grafana
            </code></pre>
          </li>
          <li><strong>Create Dashboards:</strong> Use Grafana to create and customize dashboards to visualize the metrics collected by Prometheus.</li>
        </ol>
      </p>
      <p>
        <strong>Conclusion:</strong> Prometheus and Grafana provide powerful monitoring and visualization capabilities, allowing you to keep track of your applications’ performance and health.
      </p>
    </section>
  );
}

export default Blog3;
