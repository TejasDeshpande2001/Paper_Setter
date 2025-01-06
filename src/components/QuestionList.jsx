import React, { useState } from "react";

const QuestionList = ({ questions, updateQuestion, deleteQuestion }) => {
  const [sortedQuestions, setSortedQuestions] = useState([...questions]);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" for ascending, "desc" for descending
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({ question: "", marks: "" });

  // Sort questions by marks
  const handleSort = () => {
    const sorted = [...questions].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.marks - b.marks;
      } else {
        return b.marks - a.marks;
      }
    });
    setSortedQuestions(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  React.useEffect(() => {
    setSortedQuestions([...questions]);
  }, [questions]);

  // Handle edit
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData({ ...questions[index] });
  };

  const handleSave = () => {
    updateQuestion(editingIndex, editData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditData({ question: "", marks: "" });
  };

  // Handle delete
  const handleDelete = (index) => {
    deleteQuestion(index);
  };

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4 max-w-fit mx-auto">
      <h2 className="text-lg font-bold mb-2">Saved Questions</h2>
      <button
        onClick={handleSort}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Sort by Marks ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      {sortedQuestions.length === 0 ? (
        <p className="text-gray-500">No questions added yet.</p>
      ) : (
        <ol className="list-decimal pl-5">
          {sortedQuestions.map((q, index) => (
            <li key={index} className="mb-4">
              {editingIndex === index ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="question"
                    value={editData.question}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Edit question"
                  />
                  <input
                    type="number"
                    name="marks"
                    value={editData.marks}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Edit marks"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <span>
                    {q.question} <strong>[{q.marks} Marks]</strong>
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default QuestionList;




