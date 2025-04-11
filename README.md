# 🎓 Student Job Tracker – Fullstack Project

This repository consists of both the **Frontend** and **Backend** for the **Student Job Tracker** project.

---

## 🚀 Live Demo

- **Frontend (Vercel):** [Click to Open](https://student-job-tracker-client.vercel.app/)
- **Backend (Render):** [Click to Open](https://student-job-tracker-server1.onrender.com)

---

## 📂 Project Structure

```
student-job-tracker/
├── frontend/          # React (Vite) + TailwindCSS
└── backend/           # Express.js + MongoDB
```

---

## 🧩 Frontend

### Tech Stack

- React.js
- Vite
- TailwindCSS
- Axios
- Vercel (Deployment)

### Installation & Setup

```bash
git clone https://github.com/your-username/student-job-tracker-client.git
cd student-job-tracker-client
npm install
```

### Environment Setup

Create a `.env` file and add:

```env
VITE_API_BASE_URL=https://student-job-tracker-server-hnpb.onrender.com/api
```

### Start Development Server

```bash
npm run dev
```

### Folder Structure

```
src/
├── components/      # Reusable components
├── pages/           # Home, AddJob, EditJob
├── services/        # Axios API services
├── App.jsx          # Routing
└── main.jsx         # App entry
```

---

## 🛠 Backend

### Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Render (Deployment)
- Dotenv, CORS, Mongoose

### Installation & Setup

```bash
git clone https://github.com/your-username/student-job-tracker-server.git
cd student-job-tracker-server
npm install
```

### Environment Setup

Create a `.env` file:

```env
PORT=5000
MONGO_DB=your-mongodb-connection-uri
```

### Start the Server

```bash
node index.js
```

### API Routes

```
GET    /api/jobs        # Get all jobs
POST   /api/jobs        # Add new job
PUT    /api/jobs/:id    # Update job
DELETE /api/jobs/:id    # Delete job
```

---

## 📽 Video Walkthrough

**Duration:** 10–15 minutes\
**Platform Used:** Loom / Zoom / Google Meet

### 🎥 Topics Covered:

- Feature walkthrough
- Folder/code structure explanation
- Approach and thought process
- Any AI tools used (e.g. ChatGPT)

📺 [Watch the Video Walkthrough](https://your-video-link)

---

## 🤖 AI Tools & LLMs Used

### Tools Used

- **ChatGPT** – For debugging deployment, generating README, code suggestions

### Prompt Examples

- "Fix MongooseServerSelectionError in Render deployment"
- "Generate README for React and Express project"
- "CORS error in Vite and Express"

### Manual Edits

- Refined backend routes
- Adjusted frontend API URL with `.env`
- Customized README format

---


## 🙌 Contributors

- **Madhumitha K** – Developer

---

## 📃 License

This project is licensed

