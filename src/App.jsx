import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import questionsData from "./questionsData";
import Navbar from "./components/Navbar";
import AddQuestionForm from "./components/AddQuestionForm";
import QuestionList from "./components/QuestionList";
import QuestionSelector from "./components/QuestionSelector";
import GeneratedPaper from "./components/GeneratedPaper";

const App = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [generatedPaper, setGeneratedPaper] = useState([]);

  const addQuestion = (newQuestion) => {
    const updatedQuestions = [...questions, { ...newQuestion, id: Date.now() }];
    setQuestions(updatedQuestions);
  };

  const generatePaper = (selection) => {
    const paper = [];
    Object.keys(selection).forEach((marks) => {
      const filteredQuestions = questions.filter(
        (q) => q.marks === parseInt(marks)
      );
      const randomQuestions = [];
      for (let i = 0; i < selection[marks]; i++) {
        const randomIndex = Math.floor(
          Math.random() * filteredQuestions.length
        );
        randomQuestions.push(filteredQuestions[randomIndex]);
        filteredQuestions.splice(randomIndex, 1); // Avoid duplicates
      }
      paper.push(...randomQuestions);
    });
    setGeneratedPaper(paper);
  };




const updateQuestion = (index, updatedData) => {
  const updatedQuestions = [...questions];
  updatedQuestions[index] = updatedData;
  setQuestions(updatedQuestions);
  // Save changes to JSON file if needed
};
const deleteQuestion = (index) => {
  const updatedQuestions = questions.filter((_, i) => i !== index);
  setQuestions(updatedQuestions);
  // Save changes to JSON file if needed
};






  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={<AddQuestionForm addQuestion={addQuestion} />}
            />
            <Route
              path="/saved-questions"
              // element={<QuestionList questions={questions} />}
              element={<QuestionList
  questions={questions}
  updateQuestion={updateQuestion}
  deleteQuestion={deleteQuestion}

 />}
            />
            <Route
              path="/select-questions"
              element={<QuestionSelector generatePaper={generatePaper} />}
            />
            <Route
              path="/generate-paper"
              element={<GeneratedPaper questions={generatedPaper} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;




