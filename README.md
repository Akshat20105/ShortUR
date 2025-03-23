# URL Shortener - Local Setup Guide

## 📌 Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js (LTS)](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use **MongoDB Atlas**)
- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/) (Recommended)

---

## 1. Clone the Repository
```
git clone https://github.com/Akshat20105/ShortUR.git
cd ShortUR
```

---

## 2. Setup Backend
### 🔹 Navigate to the Backend Folder & Install Dependencies
```
cd backend
npm install
```
### 🔹 Create a `.env` File for Environment Variables
Inside the `backend/` folder, create a `.env` file and add:
```
MONGO_URI=mongodb://localhost:27017/<urlshortenerdb>  # Change this if using MongoDB Atlas
PORT=5000
```
### 🔹 Start the Backend Server
```
npm run dev  # Uses Nodemon for live reload
```
The backend should now be running at **`http://localhost:5000`**.

---

## 3. Setup Frontend
### 🔹 Navigate to the Frontend Folder & Install Dependencies
```
cd ../frontend
npm install
```
### 🔹 Update API URL in Frontend
Edit `src/.env` and set the local backend URL:
```
VITE_SERVER_URL:http://localhost:5000/api; 
```
### 🔹 Start the Frontend Server
```
npm run dev
```
The frontend should now be running at **`http://localhost:5173`** (or another port).

---

### 4. **Verify in the Frontend**:
   - Open `http://localhost:5173` and try shortening a URL.

---
