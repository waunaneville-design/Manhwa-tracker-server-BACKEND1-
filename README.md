# 📚 Manhwa Tracker Backend

This is the backend server for the **Manhwa Tracker** project. It’s built with **Node.js** and **Express**, providing RESTful APIs to manage and track manga/manhwa reading progress, favorites, and stats.

---

## 🚀 Features
- Health check endpoint (`/api/health`)
- List all manga (`/api/manga`)
- Get single manga by ID (`/api/manga/:id`)
- Update progress (`/api/manga/:id/progress`)
- Toggle favorite (`/api/manga/:id/favorite`)
- Get stats (`/api/stats`)
- Configurable **PORT** via environment variable (`process.env.PORT`)

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/waunaneville-design/Manhwa-tracker-server-BACKEND1-.git
   cd Manhwa-tracker-server-BACKEND1-
