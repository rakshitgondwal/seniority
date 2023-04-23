# Cloud Application with Kubernetes and Docker

This project aims to design and build a cloud application that meets the needs of a growing technology firm's expanding user base. The application needs to be flexible, reliable, and resilient, and able to handle future growth and changes in demand. To achieve this, we will be leveraging Kubernetes and Docker technologies to deliver the required levels of scalability, availability, and fault-tolerance. 

In addition to this, we will also develop dashboards to monitor the performance of the application and identify any issues that may arise. We will consider the cloud provider's capabilities and limitations and use efficient algorithms and data structures to reduce the complexity of the application. We will optimize the dashboards to ensure they are lightweight and do not add significant overhead to the application.

## Technologies Used

To achieve the goals of this project, we will be leveraging the following technologies:

- Docker for containerization and deployment
- EKS to quickly deploy containerised applications on Kubernetes
- Prometheus to monitor the health of our application and infrastructure
- Grafana to create interactive and customizable dashboards for monitoring and analyzing data
- EC2(Elastic Compute Cloud) provided by AWS to provide flexible, scalable and cost effective way to run our application

## Working of the project
1. **Design the Application** - The first step would be to design the cloud application that can handle the needs of the Company's rapidly expanding user base. The application should be flexible enough to handle future growth and changes in demand while being reliable and resilient to ensure a smooth user experience.
2. **Containerize the Application** - The next step would be to containerize the application using Docker. This involves creating a Dockerfile that specifies the application's dependencies and how it should be built into a container.
3. **Orchestrate the containers with Kubernetes** - Once the application is containerized, we can use Kubernetes to orchestrate the containers. Kubernetes allows us to manage the containers, including scaling them up or down, based on demand. It also provides features like automatic container restarts, load balancing, and service discovery.
4. **Monitor the performance** - To ensure that the application is running smoothly, we will need to monitor its performance continuously. We will develop dashboards to monitor the application's performance and identify any issues that may arise. These dashboards should be optimized to ensure they are lightweight and do not add significant overhead to the application.
5. **Consider additional factors** - During the development process, we will need to consider additional factors, including the cloud provider's capabilities and limitations and using efficient algorithms and data structures to reduce the complexity of the application.
6. **Deploy the Application** - Once the application is containerized, orchestrated, and monitored, we can deploy it to the cloud provider. The application should be able to handle the Company's expanding user base, be flexible enough to handle future growth and changes in demand, and be reliable and resilient to ensure a smooth user experience.

## Team Members
1. Rakshit Gondwal
2. Manish Sharma
3. Raghav Goel
4. Sanchit khatkar

kubectl port-forward express-app-7bbdfc857f-4s8fj 5000:5000
