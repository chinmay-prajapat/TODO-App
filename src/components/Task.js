import React from "react";

const Task = ({ task, checkedTask }) => {
  const done = [];
  const onInputChange = (e) => {
    e.preventDefault();
    let index = task.indexOf(e.target.value);

    task.splice(index, 1);

    if (e.target.checked) return checkedTask(e.target.value);
  };
  console.log(done);
  const renderList = task.map((task, i) => {
    return (
      <div key={i}>
        <hr />
        <input type="checkbox" value={task} checked={false} />
        <label htmlFor={task}>
          {" "}
          {task.slice(0, 1).toUpperCase() + task.slice(1)}
        </label>{" "}
        <br />
      </div>
    );
  });

  return <div onChange={onInputChange}>{renderList}</div>;
};
export default Task;
