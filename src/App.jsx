import { useState } from "react";
import "./index.css";

function App() {
  const [questionNo, setQuestionNo] = useState(0);
  const [selectOption, setSelectOption] = useState(null);
  const [isAnswercorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const quizquestions = [
    {
      question: "What is time complexity of binary search ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: true },
        { answer: "O(nlogn)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is time complexity of linear search ?",
      options: [
        { answer: "O(n)", isCorrect: true },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is time complexity of merge sort ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: true },
        { answer: "O(1)", isCorrect: false },
      ],
    },
  ];

  const changeQuestion = () => {
    if (questionNo === quizquestions.length - 1) return;
    setQuestionNo(questionNo + 1);
    setIsAnswerCorrect(null);
    setSelectOption(null);
  };

  const questionStatus = (result, index) => {
    setSelectOption(index);
    setIsAnswerCorrect(result.isCorrect);
    if (result.isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <div className="card-wrapper">
        <div className="app">
          <div className="question-section">
            <div className="question-count">
              Question {questionNo + 1} / <span>{quizquestions.length}</span>
            </div>
            <div className="question-text">
              {quizquestions[questionNo].question}
            </div>
            <h2>Score : {score}</h2>
          </div>
          <div className="answer-section">
            {quizquestions[questionNo].options.map((options, index) => (
              <button
                style={{
                  backgroundColor:
                    selectOption === index
                      ? isAnswercorrect
                        ? "green"
                        : "red"
                      : "initial",
                }}
                disabled={selectOption != null}
                key={index}
                onClick={() => questionStatus(options, index)}
              >
                {options.answer}
              </button>
            ))}
          </div>
        </div>
        <button onClick={changeQuestion}>Next</button>
      </div>
    </div>
  );
}

export default App;
