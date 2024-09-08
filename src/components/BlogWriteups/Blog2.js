import React from 'react';

function Blog2() {
  return (
    <section>
      <h2>Automating AWS Infrastructure with Terraform</h2>
      <p>
        <strong>Overview:</strong> This blog post demonstrates how to use Terraform to automate the provisioning of AWS infrastructure. We'll cover creating a VPC, subnets, and EC2 instances.
      </p>
      <p>
        <strong>Prerequisites:</strong>
        <ul>
          <li>Terraform installed on your local machine</li>
          <li>An AWS account with appropriate access credentials</li>
          <li>Basic understanding of Terraform and AWS services</li>
        </ul>
      </p>
      <p>
        <strong>Steps:</strong>
        <ol>
          <li><strong>Install Terraform:</strong> Download and install Terraform from the official website (<a href="https://www.terraform.io/downloads.html">Terraform Downloads</a>).</li>
          <li><strong>Define Your Infrastructure:</strong> Create a <code>main.tf</code> file in your project directory to specify the infrastructure resources. Example configuration:
            {/* <pre><code>
              # Specify the AWS provider and region
              provider "aws" {
                region = "ap-south-1"
              }

              # Create a VPC
              resource "aws_vpc" "main" {
                cidr_block = "10.0.0.0/16"
                tags = {
                  Name = "main-vpc"
                }
              }

              # Create a subnet within the VPC
              resource "aws_subnet" "main" {
                vpc_id     = aws_vpc.main.id
                cidr_block = "10.0.1.0/24"
                availability_zone = "ap-south-1a"
                tags = {
                  Name = "main-subnet"
                }
              }

              # Launch an EC2 instance
              resource "aws_instance" "web" {
                ami           = "ami-12345678"  # Replace with a valid AMI ID
                instance_type = "t2.micro"
                subnet_id     = aws_subnet.main.id
                tags = {
                  Name = "web-instance"
                }
              }
            </code></pre> */}
          </li>
          <li><strong>Initialize Terraform:</strong> Run <code>terraform init</code> in your terminal to initialize the configuration and download the necessary provider plugins.</li>
          <li><strong>Plan the Infrastructure:</strong> Use <code>terraform plan</code> to preview the changes that will be made to your AWS environment based on the configuration.</li>
          <li><strong>Apply the Configuration:</strong> Execute <code>terraform apply</code> to create the resources defined in your <code>main.tf</code> file. Confirm the action when prompted.</li>
          <li><strong>Verify Deployment:</strong> Check the AWS Management Console to ensure the VPC, subnet, and EC2 instance have been created successfully.</li>
        </ol>
      </p>
      <p>
        <strong>Conclusion:</strong> Terraform simplifies the process of managing AWS infrastructure by allowing you to define and version control your resources in code. This approach makes it easier to maintain, scale, and reproduce your infrastructure setups.
      </p>
    </section>
  );
}

export default Blog2;
