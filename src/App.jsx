import "./index.css";

function App() {
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
  let current = 0;

  return (
    <div>
      <div className="card-wrapper">
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            Question {current + 1} / <span>{quizquestions.length}</span>
          </div>
          <div className="question-text">{quizquestions[current].question}</div>
        </div>
        <div className="answer-section">
          {quizquestions[current].options.map((options) => (
            <button>{options.answer}</button>
          ))}
        </div>
      </div>
      <button onClick={}>Next</button>
      </div>
    </div>
  );
}

export default App;
