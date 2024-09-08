import React from 'react';

function AnsibleConfig() {
  return (
    <section>
      <h2>Ansible Server Configuration Repository</h2>
      <p>
        This repository contains Ansible playbooks and roles for configuring servers. It includes tasks for installing software, configuring services, and managing configurations across multiple servers.
      </p>
      <p>
        <strong>Repository Link:</strong> <a href="https://github.com/your-username/ansible-server-config" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
      <p>
        <strong>Key Files:</strong>
        <ul>
          <li><code>playbook.yml</code> - Main playbook for running tasks on target servers.</li>
          <li><code>roles/</code> - Directory containing Ansible roles for different configurations.</li>
          <li><code>inventory</code> - Inventory file listing target servers for Ansible.</li>
        </ul>
      </p>
    </section>
  );
}

export default AnsibleConfig;
