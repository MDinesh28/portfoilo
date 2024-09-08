import React from 'react';

function TerraformInfra() {
  return (
    <section>
      <h2>Terraform Infrastructure Automation</h2>
      <p>
        <strong>Project Overview:</strong> Automated the provisioning of AWS infrastructure using Terraform. The project included creating a Virtual Private Cloud (VPC), subnets, Internet Gateways, security groups, and EC2 instances in the AWS region <code>ap-south-1</code>.
      </p>
      <p>
        <strong>Key Technologies:</strong> Terraform, AWS EC2, VPC, Subnets, Internet Gateway, Route Tables.
      </p>
      <p>
        <strong>Steps Involved:</strong>
        <ol>
          <li>Define the infrastructure as code using Terraform configuration files.</li>
          <li>Deploy the resources such as VPC, EC2 instances, and security groups.</li>
          <li>Configure the infrastructure to allow traffic, assign appropriate roles and permissions.</li>
          <li>Ensure proper state management with Terraform state files stored in a remote backend (S3).</li>
        </ol>
      </p>
      <p>
        <strong>Outcome:</strong> Successfully automated infrastructure deployment with reusability and scalability, significantly reducing manual provisioning time.
      </p>
    </section>
  );
}

export default TerraformInfra;
