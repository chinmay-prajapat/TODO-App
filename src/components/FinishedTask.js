import React from "react";
import "../style.css";
const FinishedTask = ({ task }) => {
  console.log(task);
  const renderedList = task.map((task, i) => {
    return (
      <div key={i}>
        <strike className="strike">{task}</strike>
      </div>
    );
  });
  return <div>{renderedList}</div>;
};
export default FinishedTask;
