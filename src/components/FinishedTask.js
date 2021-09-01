import React from "react";
import "../style.css";
const FinishedTask = ({ task }) => {
  console.log(task);
  const renderedList = task.map((task) => {
    return (
      <div>
        <strike className="strike">{task}</strike>
      </div>
    );
  });
  return <div>{renderedList}</div>;
};
export default FinishedTask;
