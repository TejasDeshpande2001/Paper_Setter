import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Ensure you import it like this

const GeneratedPaper = ({ questions }) => {
  const [formData, setFormData] = useState({
    examination: "Mid Semester Examinations (MSE)",
    semester: "III",
    academicYear: "2023-24",
    prn: "____________________",
    totalQuestions: "____",
    set: "SET-B",
    class: "S. Y. M.C.A.",
    department: "MASTER OF COMPUTER APPLICATIONS",
    subjectCode: "MCA222104",
    subjectName: "PPMOB (Pattern 2022)",
    duration: "1 Hour",
    maxMarks: "20 Marks",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("JSPM's", 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text(
      "Rajarshi Shahu College of Engineering, Tathawade, Pune-411033",
      105,
      27,
      { align: "center" }
    );
    doc.setFontSize(12);
    doc.text(`Examination: ${formData.examination}`, 105, 34, {
      align: "center",
    });
    doc.text(`Semester: ${formData.semester}`, 105, 41, { align: "center" });
    doc.text(`Academic Year: ${formData.academicYear}`, 105, 48, {
      align: "center",
    });

    // Metadata
    doc.text(`PRN No.: ${formData.prn}`, 14, 60);
    doc.text(`Total No. of Questions: ${formData.totalQuestions}`, 120, 60);
    doc.text(formData.set, 180, 60);

    // Subject Details
    doc.text(`Class: ${formData.class}`, 14, 70);
    doc.text(`Department: ${formData.department}`, 14, 77);
    doc.text(`Subject Code: ${formData.subjectCode}`, 14, 84);
    doc.text(`Subject Name and Pattern: ${formData.subjectName}`, 14, 91);
    doc.text(`Duration: ${formData.duration}`, 14, 98);
    doc.text(`Max. Marks: ${formData.maxMarks}`, 140, 98);

    // Instructions
    doc.setFontSize(10);
    doc.text("Instructions to the Candidates:", 14, 108);
    doc.text("1. Solve Q.1 or Q.2, Q.3 or Q.4 and Q.5 or Q.6", 14, 115);
    doc.text(
      "2. Assume suitable and necessary data wherever required.",
      14,
      120
    );

    // Questions table
    const tableData = questions.map((q, index) => [
      index + 1,
      q.question,
      q.marks,
    ]);
    doc.autoTable({
      startY: 130,
      head: [["Q.No", "Question", "Marks"]],
      body: tableData,
    });

    doc.save("generated-paper.pdf");
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-bold mb-2">Customize Question Paper</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="examination" className="block font-semibold">
            Examination
          </label>
          <input
            type="text"
            id="examination"
            name="examination"
            value={formData.examination}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="semester" className="block font-semibold">
            Semester
          </label>
          <input
            type="text"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="academicYear" className="block font-semibold">
            Academic Year
          </label>
          <input
            type="text"
            id="academicYear"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="prn" className="block font-semibold">
            PRN No.
          </label>
          <input
            type="text"
            id="prn"
            name="prn"
            value={formData.prn}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="totalQuestions" className="block font-semibold">
            Total No. of Questions
          </label>
          <input
            type="text"
            id="totalQuestions"
            name="totalQuestions"
            value={formData.totalQuestions}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="set" className="block font-semibold">
            Set
          </label>
          <input
            type="text"
            id="set"
            name="set"
            value={formData.set}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="class" className="block font-semibold">
            Class
          </label>
          <input
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="department" className="block font-semibold">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subjectCode" className="block font-semibold">
            Subject Code
          </label>
          <input
            type="text"
            id="subjectCode"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subjectName" className="block font-semibold">
            Subject Name and Pattern
          </label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block font-semibold">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="maxMarks" className="block font-semibold">
            Max. Marks
          </label>
          <input
            type="text"
            id="maxMarks"
            name="maxMarks"
            value={formData.maxMarks}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      <button
        onClick={generatePDF}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default GeneratedPaper;
