# Cloud Application with Kubernetes and Docker

This project aims to design and build a cloud application that meets the needs of a growing technology firm's expanding user base. The application needs to be flexible, reliable, and resilient, and able to handle future growth and changes in demand. To achieve this, we will be leveraging Kubernetes and Docker technologies to deliver the required levels of scalability, availability, and fault-tolerance. 

In addition to this, we will also develop dashboards to monitor the performance of the application and identify any issues that may arise.

## Technologies Used

To achieve the goals of this project, we will be leveraging the following technologies:

- Docker for containerization and deployment
- EKS to quickly deploy containerised applications on Kubernetes
- Prometheus to monitor the health of our application and infrastructure
- Grafana to create interactive and customizable dashboards for monitoring and analyzing data
- EC2(Elastic Compute Cloud) provided by AWS to provide flexible, scalable and cost effective way to run our application.

## Working of the project
1. **Design the Application** - The first step would be to design the cloud application that can handle the needs of the Company's rapidly expanding user base. To keep the logic less comples, we have used a simple express app for this project.
2. **Containerize the Application** - The next step would be to containerize the application using Docker. This involves creating a Dockerfile that specifies the application's dependencies and how it should be built into a container. Later, we have deployed the Docker image to a public registry which is DockerHub.
3. **Orchestrate the containers with Kubernetes** - Once the application is containerized, we can use Kubernetes to orchestrate the containers. Kubernetes allows us to manage the containers, including scaling them up or down, based on demand. It also provides features like automatic container restarts, load balancing, and service discovery. We have used AWS EKS for the kubernetes cluster.
4. **Monitor the performance** - To ensure that the application is running smoothly, we will need to monitor its performance continuously. We have used Prometheus for the monitoring. It is an open source project which increases the projects creadibility. Prometheus scrapes metrics from the `/metrics` endpoint and stores it in it's time series database.
5. **Creating Monitoring Dashboards** - We have used Grafana, which is another open source project to create dashboards. Grafana takes the data from prometheus and later show us the data in beautiful dashboards.

## Team Members
1. Rakshit Gondwal
2. Manish Sharma
3. Raghav Goel
4. Sanchit khatkar
