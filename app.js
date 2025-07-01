let Question = document.querySelector("#question");
let Options = document.querySelector("#options");
let StartBtn = document.querySelector("#start-btn");
let QuizCon = document.querySelector("#quiz-container");
let Result = document.querySelector("#result");


let usedIds = [];
let data = [];
let questionTimer = null;

StartBtn.addEventListener("click", () => {
    fetch("https://737dbaa1-f044-48ce-96d1-3633ac721681.mock.pstmn.io/")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Http Error! with status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            data = jsonData;
            NextQuestion();
        })
        .catch(error => {
            console.error('Failed to fetch post:', error);
        });
    localStorage.setItem("FinalScore", 0)
    QuizCon.style.display = "block"
    StartBtn.style.display = "none"


})


function NextQuestion() {
    clearTimeout(questionTimer);


    Options.innerHTML = "";

    if (usedIds.length === data.questions.length) {
        Question.textContent = "THE END";
        StartBtn.style.display = "block"
        StartBtn.textContent = "Start Again"
        Result.textContent = `You Answer ${parseInt(localStorage.getItem("FinalScore")) || 0} Of 30 Questions`
        return;
    }

    let rand;
    do {
        rand = Math.floor(Math.random() * data.questions.length);
    } while (usedIds.includes(rand));
    usedIds.push(rand);

    const Q = data.questions[rand];

    Question.textContent = Q.question;

    Q.options.forEach(option => {
        const li = document.createElement("li");
        li.classList = "test"
        li.textContent = option;
        li.style.cursor = "pointer";

        li.addEventListener("click", (e) => {
            clearTimeout(questionTimer);
            showAnswer(e.target, Q.answer);
            CountScore(e.target.textContent, Q.answer)
            setTimeout(NextQuestion, 5000);
        });

        Options.appendChild(li);
    });


    questionTimer = setTimeout(() => {
        NextQuestion();
    }, 30000);
}

function showAnswer(selectedLi, correctAnswer) {
    const allOptions = Options.querySelectorAll("li");
    allOptions.forEach(li => {
        li.style.pointerEvents = "none";
        if (li.textContent === correctAnswer) {
            li.style.backgroundColor = "green";
            li.style.color = "white";
        } else if (li === selectedLi) {
            li.style.backgroundColor = "red";
            li.style.color = "white";

        }
    });


}


function CountScore(selectedLi, correctAnswer) {
    let count = parseInt(localStorage.getItem("FinalScore")) || 0;
    if (selectedLi === correctAnswer) {
        count++;
        localStorage.setItem("FinalScore", count)
    }


}



