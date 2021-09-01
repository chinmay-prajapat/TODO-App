import React from "react";
import "../style.css";
const FinishedTask = ({ task }) => {
  const renderedList = task.map((task, i) => {
    return (
      <div key={i} className="task-items">
        <strike className="strike">
          {task.slice(0, 1).toUpperCase() + task.slice(1)}
        </strike>
        <hr />
      </div>
    );
  });
  return <div className="tasks finish">{renderedList}</div>;
};
export default FinishedTask;
