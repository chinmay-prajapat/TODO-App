import React from "react";

const Task = ({ task, checkedTask }) => {
  const onInputChange = (e) => {
    e.preventDefault();
    let index = task.indexOf(e.target.value);

    task.splice(index, 1);

    if (e.target.checked) return checkedTask(e.target.value);
  };

  const renderList = task.map((task, i) => {
    return (
      <div key={i} className="task-items">
        <input type="checkbox" value={task} checked={false} />
        <label htmlFor={task}>
          {" "}
          {task.slice(0, 1).toUpperCase() + task.slice(1)}
        </label>{" "}
        <br />
        <hr />
      </div>
    );
  });

  return (
    <div className="tasks" onChange={onInputChange}>
      {renderList}
    </div>
  );
};
export default Task;
