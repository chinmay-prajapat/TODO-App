import React from "react";
import "../style.css";
class SearchBar extends React.Component {
  state = { term: null };
  onChangeHandle = (e) => {
    this.setState({ term: e.target.value });
  };
  onSubmitHandle = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    e.target.reset();
  };

  render() {
    return (
      <div className="searchBar">
        <div className="ui segment ">
          <form className="ui form" onSubmit={this.onSubmitHandle}>
            <input
              className="search"
              type="text"
              onChange={this.onChangeHandle}
              id="input"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
