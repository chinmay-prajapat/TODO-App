import React from "react";
import SearchBar from "./SearchBar";
import Task from "./Task";
import FinishedTask from "./FinishedTask";
import "../style.css";
class App extends React.Component {
  state = { task: [], done: [] };
  onSubmitTerm = (term) => {
    if (this.state.task.includes(term)) {
      alert("already exists");
    } else {
      this.setState((prevState) => ({
        task: [...prevState.task, term],
      }));
    }
  };
  checkedTask = (term) => {
    this.setState((prevState) => ({
      done: [...prevState.done, term],
    }));
  };
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="content">
            <h4>TODO </h4>
            <SearchBar onSubmit={this.onSubmitTerm} />
            <div>
              <Task task={this.state.task} checkedTask={this.checkedTask} />
            </div>
            <hr className="app-hr" />
            <div>
              <FinishedTask task={this.state.done} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
