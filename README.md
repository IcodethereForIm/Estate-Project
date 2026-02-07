# Estate-Project
A simple Node.js + Vanilla JavaScript project that serves a static website and allows users to add and view reviews using a custom REST API (no frameworks).

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


Project/
│
├── BackEnd/ → Backend (Node.js HTTP server & API logic)
│ ├── server.js → Main server file
│ └── utils/ → Controllers, static server, helpers
│
└── Realestate/ → Frontend (HTML, CSS, JS)
├── index.html → Main UI
├── review.js → Handles review form & fetch logic
└── styles.css

▶️ How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/your-username/real-estate-reviews.git

cd real-estate-reviews

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

GitHub: https://github.com/your-username
