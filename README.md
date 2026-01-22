# 🚀 DocSwitch

DocSwitch is a powerful, web-based **file conversion platform** built using the **MERN stack** and modern **DevOps practices**. It allows users to convert documents and images across multiple formats with a clean **drag-and-drop interface**, secure temporary storage, and production-grade scalability.

---

## 🌟 Overview

DocSwitch is designed to be fast, secure, and highly scalable. It integrates industry-grade APIs like **Adobe PDF Services** and **CloudConvert**, supports automated cleanup of temporary files, and uses **token-based downloads** to ensure security.

Whether you’re converting a single document or handling multi-page outputs, DocSwitch provides a smooth and reliable experience.

---

## ✨ Key Features

### 📄 Document Conversions

* PDF ↔ Word
* Word → PDF
* PowerPoint → PDF
* PDF → PowerPoint
* Excel (XLS / XLSX / CSV / XLSM) → CSV
* PDF → Excel
* Split, Compress, Merge, Create, OCR, Secure & Unlock PDF

### 🖼️ Image Conversions

* PDF ↔ Image (JPG, PNG)
* Word (DOC / DOCX) → Image
* PowerPoint (PPT / PPTX) → Image
* Excel (XLS / XLSX / CSV / XLSM) → Image
* BMP ↔ JPG / PNG
* PNG ↔ JPG

### 🚀 Unique Capabilities

* **AI Question Generator** – Uses the Gemini API to generate questions from document context
* **Multi-Page Handling** – Automatically bundles multiple outputs into a ZIP archive
* **Secure Temporary Storage** – Files stored in MongoDB and served via expiring download tokens
* **Auto Cleanup** – Converted files are automatically deleted after expiration
* **Scalable APIs** – Powered by Adobe PDF Services and CloudConvert
* **Responsive UI** – Modern React interface with progress indicators

---

## 🛠️ Tech Stack

### Full Stack Development

* **Frontend:** React, Bootstrap, React Router, CSS
* **Backend:** Node.js, Express, MongoDB, Mongoose
* **File Conversion APIs:** Adobe PDF Services, CloudConvert

### DevOps & Infrastructure

* **Version Control:** Git & GitHub (branching strategy like `ds-feax` for safe integration)
* **Containerization:** Docker (multi-stage builds for lightweight production images)
* **Web Server:** Nginx (serves React build & handles routing)
* **CI/CD:** Jenkins (automated pipelines for build & deployment)
* **Container Registry:** Docker Hub
* **Deployment Platform:** Render (container-based web services)
* **Database:** MongoDB

---

## 🚢 DevOps Architecture & Deployment

DocSwitch follows a fully automated **CI/CD pipeline** ensuring zero-downtime deployments.

### 🔄 CI/CD Workflow

1. **Code Commit** – Changes pushed to GitHub (e.g., `ds-feax` branch)
2. **Jenkins Trigger** – Pipeline automatically starts
3. **Build Phase**

   * Pull latest code
   * Build separate Docker images for frontend (Nginx) & backend (Node.js)
   * Inject production environment variables via build args
4. **Push to Docker Hub** – Images are versioned and published
5. **Deployment** – Jenkins triggers Render webhook to pull and deploy the latest images

---

## ⚙️ Installation & Setup (Local Development)

### 📥 Clone Repository

```bash
git clone https://github.com/Gopi-Kumar18/DocSwitch.git
cd DocSwitch
```

### 🔐 Environment Variables

Copy `.env.example` to `.env` and configure the following:

* `MONGODB_URI`
* `ADOBE_PDF_CLIENT_ID`
* `ADOBE_PDF_CLIENT_SECRET`
* `CLOUDCONVERT_API_KEY`
* `JWT_SECRET`

### 🧩 Backend Setup

```bash
cd backend
npm install
nodemon server.js
```

### 🎨 Frontend Setup

```bash
cd DocSwitch
npm install
npm run dev
```

### 🌐 Access the Application

* **Frontend:** [http://localhost:5173](http://localhost:5173)
* **Backend:** [http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 Usage Guide

1. Navigate to **All Tools** (`/other-img-tools` or `/other-pdf-tools`)
2. Select a conversion tool (e.g., PDF to Image)
3. Upload your file via drag & drop or file picker
4. Choose output format
5. Click **Convert**
6. Download the converted file or ZIP archive

---

## 📸 Live Project Demo

### 1️⃣ Sign Up Page

![Signup](https://github.com/user-attachments/assets/23842e84-ad68-4e6d-8686-49be1ff84671)

### 2️⃣ Login Page

![Login](https://github.com/user-attachments/assets/be9fd3ef-05e3-4688-b2b8-4528ae223617)

### 3️⃣ Home Page

![Home](https://github.com/user-attachments/assets/a93b6226-9e43-4cfd-b91d-f321591fc72c)

### 4️⃣ Conversion Page

![Conversion](https://github.com/user-attachments/assets/43d18d43-7219-455e-b9d9-8bf2b64fe4c6)

### 5️⃣ Download Page

![Download](https://github.com/user-attachments/assets/dfbb584d-9d2e-4955-90b2-efc9522efe92)

### 6️⃣ AI Question Generator

![AI Generator](https://github.com/user-attachments/assets/ab05db5b-84d5-4e87-ad93-6c10aa1eb804)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add feature"
   ```
4. Push to GitHub

   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## 📄 License

Built with ❤️ by **Gopi-Kumar18**
