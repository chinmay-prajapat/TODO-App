import React from "react";
class SearchBar extends React.Component {
  state = { term: null };
  onChangeHandle = (e) => {
    // e.preventDefault();
    this.setState({ term: e.target.value });
    // console.log(e);
  };
  onSubmitHandle = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  resetValue = () => {};
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitHandle}>
          <input
            className="ui search"
            type="text"
            onChange={this.onChangeHandle}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
