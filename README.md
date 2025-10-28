<h1 align="center">DHKTPM18C_Nhom08_WebsiteBanMyPhamTrucTuyen</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-007396?style=flat&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot-3.5.7-6DB33F?style=flat&logo=spring-boot&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/License-Educational-blue?style=flat" />
</p>



A modern e-commerce platform for cosmetic products built as a team project for university coursework. BeautyBox provides a seamless shopping experience with comprehensive product management and order processing capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Authors](#authors)
- [License](#license)

## ✨ Features

- 🛍️ Product catalog with search and filtering
- 👤 User authentication and profile management
- 🛒 Shopping cart and wishlist
- 💳 Order processing and tracking
- 📦 Admin dashboard for inventory management
- 📱 Responsive design for all devices

## 🛠️ Tech Stack

**Frontend:** React 19, TypeScript, Vite  
**Backend:** Spring Boot 3.5.7, Spring Data JPA, Java 21  
**Database:** MS SQL Server  
**Tools:** Maven, Git

## 📁 Project Structure

```
cosmetic-ecommerce/
├── backend/          # Spring Boot backend application
│   ├── src/
│   │   ├── main/     # Java source code & resources
│   │   └── test/     # Unit and integration tests
│   └── pom.xml       # Maven dependencies
│
├── frontend/         # React frontend application
│   ├── src/          # TypeScript source code
│   ├── public/       # Static assets
│   └── package.json  # NPM dependencies
│
└── README.md         # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Java JDK 21+
- Maven 3.8+
- MS SQL Server
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ntanloi/BeautyBox.git
   cd BeautyBox
   ```

2. Configure the database
   ```bash
   # Edit backend/src/main/resources/application.properties
   # Update database connection settings
   ```

3. Install dependencies
   ```bash
   # Backend
   cd backend
   ./mvnw clean install

   # Frontend
   cd ../frontend
   npm install
   ```

### Running the Application

Start the backend:
```bash
cd backend
./mvnw spring-boot:run
```

Start the frontend:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8080`

## 💻 Development

### Backend
```bash
./mvnw test              # Run tests
./mvnw clean package     # Build for production
```

### Frontend
```bash
npm run dev              # Development server
npm run build            # Build for production
npm run lint             # Lint code
```

## 👥 Authors

- **Nguyen Tan Loi** - [ntanloi](https://github.com/ntanloi)
- **Nguyen Ho Thanh Minh** - [ThanhMinh2104](https://github.com/ThanhMinh2104)
- **Nguyen Hoang Nguyen Vu** - [iamnguyenvu](https://github.com/iamnguyenvu)

## 📄 License

This project is developed for educational purposes as part of university coursework at Industrial University of Ho Chi Minh City (IUH).

---

**Repository:** [https://github.com/ntanloi/BeautyBox](https://github.com/ntanloi/BeautyBox)
