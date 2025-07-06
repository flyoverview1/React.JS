
import React, { useState } from 'react';

const Grade = () => {
  const [marks, setMarks] = useState('');
  const [grade, setGrade] = useState('');

  const calculateGrade = () => {
    const numMarks = parseInt(marks); 

    if (numMarks >= 0 && numMarks <= 100) {
      if (numMarks >= 90) {
        setGrade('A+');
      } else if (numMarks >= 80) {
        setGrade('A');
      } else if (numMarks >= 70) {
        setGrade('B+');
      } else if (numMarks >= 60) {
        setGrade('B');
      } else if (numMarks >= 50) {
        setGrade('C+');
      } else if (numMarks >= 40) {
        setGrade('C');
      } else {
        setGrade('Failed');
      }
    }
  };

  return (
    <div>
      <h2>Enter Total Marks</h2>
      <input type="number" value={marks} placeholder="Total Marks"

        onChange={(e) => setMarks(e.target.value)}

      />

      <button onClick={calculateGrade}>Submit</button>

       <h3>Grade: {grade}</h3>
    </div>
  );
};

export default Grade;












