import React from "react";
import SearchBar from "./SearchBar";
import Task from "./Task";
import FinishedTask from "./FinishedTask";
import "../style.css";
class App extends React.Component {
  state = { task: [], done: [] };
  onSubmitTerm = (term) => {
    // this.state.temp.push(term);
    // this.setState({ task: term });
    this.setState((prevState) => ({
      task: [...prevState.task, term],
    }));
  };
  checkedTask = (term) => {
    // this.setState({ done: task });
    this.setState((prevState) => ({
      done: [...prevState.done, term],
    }));
  };
  render() {
    console.log(this.state.task);
    return (
      <div className="header">
        <div className="container">
          <div className="content">
            <h4>TODO </h4>
            <SearchBar onSubmit={this.onSubmitTerm} />
            <div>
              {this.state.task === "" ? (
                <div>No task to show</div>
              ) : (
                <Task task={this.state.task} checkedTask={this.checkedTask} />
              )}
            </div>
            <hr />
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
