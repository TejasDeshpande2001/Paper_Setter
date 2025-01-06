import React, { useState } from "react";

const QuestionSelector = ({ generatePaper }) => {
  const [selection, setSelection] = useState({ 4: 0, 6: 0, 8: 0 });

  const handleChange = (e, marks) => {
    setSelection({ ...selection, [marks]: parseInt(e.target.value) });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    generatePaper(selection);
  };

  return (
    <form
      onSubmit={handleGenerate}
      className="bg-white p-4 rounded shadow mb-4 max-w-md mx-auto"
    >
      <h2 className="text-lg font-bold mb-2">Select Questions</h2>
      {["4", "6", "8"].map((marks) => (
        <div key={marks} className="mb-2">
          <label className="block mb-1 font-medium">
            {marks} Marks Questions
          </label>
          <input
            type="number"
            value={selection[marks]}
            onChange={(e) => handleChange(e, marks)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter number of ${marks} marks questions`}
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Generate Question Paper
      </button>
    </form>
  );
};

export default QuestionSelector;

