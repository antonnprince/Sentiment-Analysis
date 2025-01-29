# MERN App (React Vite + Node.js)

This is a full-stack MERN application with a **React Vite frontend** and a **Node.js backend**.

## 📁 Folder Structure
```
project-root/
│── backend/
|   ├── gemini.js  # Gemini api call
│   ├── server.js # Main backend file
|   ├── vercel.json # Deployment settings
│── frontend/     # React Vite frontend
│   ├── src/      # React source files
│   ├── index.html
│   ├── package.json
│── README.md
│── .gitignore
```

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd project-root
```

### 2️⃣ Backend Setup (Node.js)
```sh
cd backend
npm install  # Install dependencies
```

#### 🏃 Run Backend Server
```sh
node server.js  # Start the backend
```
The server runs on `http://localhost:3000`.

---

### 3️⃣ Frontend Setup (React Vite)
```sh
cd ../frontend
npm install  # Install dependencies
```

#### 🏃 Run Frontend
```sh
npm run dev  # Start the frontend
```
By default, the frontend runs on `http://localhost:5173`.

---

## 🔗 API Routes (Backend)
- `POST /get_comments` - Fetches comments based on the provided YouTube URL.
- `GET /analysis` - Returns the analyzed results.

---

## ⚡ Technologies Used
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** (Optional: MongoDB if needed)
- **API Handling:** Axios

---

## 📌 Notes
- Ensure the `.env` files are set up correctly for API keys.
- Use `cors` in `server.js` to allow frontend-backend communication.

---

### 🎯 Future Improvements
- Add MongoDB for data persistence.
- Improve UI/UX.
- Optimize API calls.


👨‍💻 Happy Coding! 🚀

