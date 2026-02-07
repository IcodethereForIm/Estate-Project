# Estate-Project
A simple Node.js + Vanilla JavaScript project that serves a static website and implements a custom REST API without any frameworks.

🚀 Features

📄 Static frontend (HTML, CSS, JavaScript)

⚙️ Node.js HTTP server (no Express)

📝 Add reviews using a POST API

📤 Fetch and display reviews using a GET API

👀 Reviews section toggle (show/hide on click)

💾 Reviews stored in a local JSON file

🔄 Auto-load reviews after submission

Tech Stack

Backend: Node.js (native http, fs, path)

Frontend: HTML, CSS, Vanilla JavaScript

Data Storage: JSON file (no database)


🗂 Project Structure


Estate-Project/
│
├── server.js               → Main Node.js HTTP server
├── review.json             → Stores user reviews
│
├── utils/
│   ├── controllers/        → API controllers
│   │   ├── getReview.js
│   │   ├── postReview.js
│   │   └── reviewController.js
│   │
│   ├── getContType.js      → Determines Content-Type for static files
│   ├── sendRes.js          → Sends HTTP responses
│   └── staticServer.js     → Serves frontend files
│
└── Realestate/
    └── properties/         → Frontend Client Application
        ├── index.html       → Home page
        ├── index.js         → Main frontend logic
        ├── default.js       → Shared UI logic
        ├── signin.html      → Sign-in page
        ├── signin.js        → Sign-in logic
        ├── review.js        → Review form & fetch logic
        └── styles.css       → Global styles

📌 Architecture Notes

- Backend logic is written using pure Node.js (no Express).
- All API-related logic is organized inside `utils/controllers/`.
- Static file handling and response utilities live directly inside `utils/`.
- Frontend files are located inside `Realestate/properties/`, which acts as the client-side application.
- Folder names are custom but clearly documented to explain their purpose.


▶️ How to Run the Project

1️⃣ Clone the repository
git clone https://github.com/IcodethereForIm/Estate-Project.git

cd Estate-Project


2️⃣ Start the server
node BackEnd/server.js


(or)

nodemon BackEnd/server.js

3️⃣ Open in browser
http://localhost:8000

🔌 API Endpoints
➤ Get all reviews
GET /review


Returns:

[
  {
    "reviewerName": "John",
    "review": "Great service!",
    "date": "2026-02-07T10:30:00.000Z"
  }
]

➤ Add a review
POST /review


Body:

{
  "reviewerName": "Jane",
  "review": "Very professional experience"
}

🎯 How Reviews Work

Reviews are saved in review.json

Reviews are fetched only when the “Show Reviews” button is clicked

UI updates automatically after adding a review

No page refresh needed

🧠 What I Learned From This Project

How to build a REST API using Node.js without Express

Handling GET and POST requests manually

Serving static files using Node

Working with async/await and JSON files

Frontend ↔ backend communication using Fetch API

📌 Future Improvements

Add validation and error handling

Connect to a real database (MongoDB / PostgreSQL)

Add user authentication

Improve UI animations

Deploy to Render / Railway / Vercel

👤 Author
Souvik Ghosh
GitHub: https://github.com/IcodethereForIm
