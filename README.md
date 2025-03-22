# ShortUR (pronounced as short-er) - Local Setup Guide

## 📌 Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js (LTS)](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use **MongoDB Atlas**)
- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/) (Recommended)

---

## 1️⃣ Clone the Repository
```
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

---

## 2️⃣ Setup Backend
### 🔹 Navigate to the Backend Folder & Install Dependencies
```
cd backend
npm install
```
### 🔹 Create a `.env` File for Environment Variables
Inside the `backend/` folder, create a `.env` file and add:
```
MONGO_URI=mongodb://localhost:27017/urlshortener  # Change this if using MongoDB Atlas
PORT=5000
```
### 🔹 Start the Backend Server
```
npm run dev  # Uses Nodemon for live reload
```
✅ The backend should now be running at **`http://localhost:5000`**.

---

## 3️⃣ Setup Frontend
### 🔹 Navigate to the Frontend Folder & Install Dependencies
```
cd ../frontend
npm install
```
### 🔹 Update API URL in Frontend
Edit `src/Helpers/Constant.ts` and set the local backend URL:
```
export const serverUrl = "http://localhost:5000"; 
```
### 🔹 Start the Frontend Server
```
npm run dev
```
✅ The frontend should now be running at **`http://localhost:5173`** (or another port).

---

## 🎯 Testing the Local Setup
1. Open **Postman** or your browser.
2. **Backend Health Check**:
   - Visit `http://localhost:5000/api/health` → Should return `{ status: "OK" }`
3. **Shorten a URL**:
   - Use Postman to send a `POST` request to `http://localhost:5000/api/shorturl` with:
   ```
   {
     "fullUrl": "https://example.com"
   }
   ```
4. **Verify in the Frontend**:
   - Open `http://localhost:5173` and try shortening a URL.

---
