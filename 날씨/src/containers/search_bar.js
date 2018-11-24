import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this); //  this->SearchBar
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  } //바닐라 자바스크립트에서 이벤트함수- event

  onFormSubmit(event) {
    event.preventDefault(); //브라우저가 폼제출안하게함

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="어느도시 날씨를 알고 싶소"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar); //mapDispatchToProps가 두번깨 요소 여서 null
