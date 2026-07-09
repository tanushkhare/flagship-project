# Flagship Project: Infrastructure Orchestration Portal

## 🚀 Project Overview
The Flagship Portal is a modular, dynamic infrastructure monitoring platform built for enterprise-grade orchestration. It features a scalable architecture designed to support over 20 sub-projects, utilizing a centralized Global State Hub and dynamic route-nesting.

## 🛠 Tech Stack
* **Frontend:** React.js, React Router (Dynamic Routing), Context API (Global State Hub)
* **Backend:** Python (Microservices / API Gateway)
* **Architecture:** Hub-and-Spoke modular routing

## 🏗 Key Features
- **Dynamic Routing:** Implemented a single-template dynamic sub-page handler, replacing 20+ static files with modular, reusable components.
- **Global State Hub:** Built a memoized context-provider that syncs infrastructure status across all modules efficiently.
- **Scalable Grid UI:** Professional orchestration dashboard with automatic syncing and state-based rendering.
- **Asynchronous API Integration:** Robust fetch implementation with error handling and loading states.

## 📁 Project Structure
```text
flagship-project/
├── client/           # Frontend React application
│   ├── src/
│   │   ├── pages/    # Modular sub-projects (ATS, Insurance, Cloud, etc.)
│   │   ├── layouts/  # MainLayout with Global State Hub
│   │   └── components/
├── server/           # Backend Python microservices
└── .github/          # CI/CD Workflows

🚀 How to Run
Setup Client:
cd client
npm install
npm start

Setup Server:
cd server
python api_gateway.py

📈 Roadmap
[x] Cloud Module Dynamic Routing

[x] ATS Module Refactor

[x] Insurance Module Refactor

[x] Workspace Module Refactor

[x] Security Module Refactor
