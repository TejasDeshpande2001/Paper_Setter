import React, { useState } from "react";

const AddQuestionForm = ({ addQuestion }) => {
  const [question, setQuestion] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && marks) {
      addQuestion({ question, marks: parseInt(marks) });
      setQuestion("");
      setMarks("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4 max-w-md mx-auto"
    >
      <h2 className="text-lg font-bold mb-2">Add Question</h2>
      <div className="mb-2">
        <label className="block mb-1 font-medium">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your question"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-medium">Marks</label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter marks (e.g., 4, 6, 8)"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Question
      </button>
    </form>
  );
};

export default AddQuestionForm;





