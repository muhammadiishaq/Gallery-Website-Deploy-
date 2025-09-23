# 📸 Gallery App  

A simple **Gallery Web Application** built with **React + Firebase + TailwindCSS** where users can upload, view, and download pictures.  
The project is fully containerized with **Docker**, secured with **Trivy scanning**, and deployed on an **EC2 machine** via a Jenkins CI/CD pipeline.  

---

## 🚀 Features..
- Upload images to Firebase.
- View & download pictures.
- User authentication (Login/Logout with Firebase).
- Responsive UI with Tailwind.
- CI/CD pipeline for automated deployment.
- Security scanning of images with **Trivy**.

---

## ⚡ Run the project locally (without Docker)

### 1️⃣ Clone the repository..
```
git clone https://github.com/your-username/gallery-app.git
cd gallery-app
```
### 2️⃣ Install dependencies..
```
npm install
```
### 3️⃣ Run the development server..
```
npm run dev
```
### By default, the app runs at:.
```
http://localhost:5173
```
### 4️⃣ Build for production..
```
npm run build
```

## 🐳 Run the project with Docker...

A `Dockerfile` is already included in this repository — you can use it directly to build and run the app.

### 1️⃣ Build Docker image..
```
docker build -t gallery-app:latest .
```

### 1️⃣ Build Docker image..
```
docker run -d -p 80:80 --name gallery-app-cont gallery-app:latest
```
### Now the app is available at:...
```
http://localhost
```

## ⚙️ Jenkins Pipeline (on EC2)....

We use Jenkins to automate the entire process:..

- Clone code. 
- Build Docker image. 
- Scan image with **Trivy**.
- Push image to **DockerHub** . 
- Deploy container on **EC2**.

👉 A complete `Jenkinsfile` is already included in this repository make sure to check it out for the full pipeline configuration.  

## 🔒 Image Scanning with Trivy...

Before pushing to DockerHub, the pipeline scans the image for vulnerabilities:..
```
trivy image gallery-app:latest
```

## 📤 Push to DockerHub manually (if needed)..

🔹 In case you face any issues with the Jenkins pipeline, you can manually push the image to DockerHub:...

```
docker tag gallery-app:latest your-dockerhub-username/gallery-app:latest
docker push your-dockerhub-username/gallery-app:latest
```

## 🌍 Deploy on EC2...

🔹 Similarly, if the pipeline fails during deployment, you can manually pull and run the container on your EC2 machine:...
```
docker pull your-dockerhub-username/gallery-app:latest
docker run -d -p 80:80 --name gallery-app-cont your-dockerhub-username/gallery-app:latest
```
### ✅ Bhoooom..... Your app is now live and accessible on your EC2 public IP 🎉....

## ✅ Overall Workflow.....!

1 Develop locally → test with npm run dev.

2 Build & serve via Dockerfile (Nginx).

3 Jenkins pipeline automates:.

4 Clone → Build → Scan → Push → Deploy.

5 App runs on EC2, port 80, accessible via public IP or domain.



## 🤝 Contributing....

If you find this project useful, please consider:

- ⭐ Starring the repository  
- 🍴 Forking the project to try out your own ideas  
- 🛠️ Submitting pull requests with improvements  

Thanks for contributing to this project 💙  

---

## 🔗 Follow Me for More Content

- [GitHub](https://github.com/muhammadiishaq)  
- [LinkedIn](https://www.linkedin.com/in/muhammadishaq-khan/)
- [Mediam](https://medium.com/@muhammadishaqpak801)  


