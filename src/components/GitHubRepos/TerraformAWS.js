import React from 'react';

function TerraformAWS() {
  return (
    <section>
      <h2>Terraform AWS Infrastructure Repository</h2>
      <p>
        This repository contains Terraform configurations for automating AWS infrastructure. The configurations include provisioning of VPC, subnets, and EC2 instances.
      </p>
      <p>
        <strong>Repository Link:</strong> <a href="https://github.com/your-username/terraform-aws-infra" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
      <p>
        <strong>Key Files:</strong>
        <ul>
          <li><code>main.tf</code> - Defines AWS resources like VPC, subnets, and EC2 instances.</li>
          <li><code>variables.tf</code> - Contains input variables for configuration.</li>
          <li><code>outputs.tf</code> - Specifies output values for use in other configurations.</li>
        </ul>
      </p>
    </section>
  );
}

export default TerraformAWS;
