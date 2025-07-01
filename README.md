README – Quiz App 
# 🎉 Quiz App – Vanilla JS Game

An interactive quiz game built with **HTML, CSS, and Vanilla JavaScript**.  
Questions are fetched from a **Postman Mock Server**, with a backup in a local `quiz.json` file.  
The app randomly displays questions, gives instant visual feedback, and tracks your score using `localStorage`.

---

## ⚙️ Features

- 🚀 Fetches 30 questions from a Postman Mock Server using `fetch`
- 🔄 Random question order with no repeats
- ⏱ 30-second timer per question with automatic skip
- ✅ Highlights correct answers in green, incorrect ones in red
- 💾 Stores score using `localStorage` for the session
- 🔁 “Start Again” button for instant replay
- 🧼 Lightweight, fast, and framework-free

---

## 🛠 Tech Stack

- **HTML5 + CSS3**
- **JavaScript (ES6)** – DOM API, `fetch`, and `localStorage`
- **Postman Mock Server** – to simulate REST API responses
- `quiz.json` – backup of questions stored locally

---

## 🚀 Getting Started

1. 📥 Clone the repo:

   ```bash
   git clone https://github.com/iRezaAkhlaghi/vanilla-js-quiz-app.git
   cd vanilla-js-quiz-app
   ```

2. 🌐 Open `index.html` directly in your browser  
   or use a local static server:

   ```bash
   npx serve .
   ```

3. ⚙️ (Optional) Replace the Postman mock server URL:

   In `main.js`, update the following line:

   ```js
   fetch("https://737dbaa1-f044-48ce-96d1-3633ac721681.mock.pstmn.io/")
   ```

---

## ✍️ Editing the Questions

Questions are stored in **`quiz.json`** and follow this structure:

```json
{
  "questions": [
    {
      "id": 1,
      "question": "Which language runs in a web browser?",
      "options": ["Java", "C", "Python", "JavaScript"],
      "answer": "JavaScript"
    }
  ]
}
```

You can update this list and redeploy your mock server as needed.

---

## 🗂 Project Structure

```
├── index.html
├── style.css
├── main.js
└── quiz.json
```

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first.

---


