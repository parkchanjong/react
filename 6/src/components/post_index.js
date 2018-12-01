import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router";

class PostsIndex extends Comment {
  componentWilMount() {
    //console.log("포스트 액션 생성자 호출타이밍");
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            add a post
          </Link>
        </div>
        list of blog posts
      </div>
    );
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}*/

export default connect(
  null,
  { fetchPosts } //=fetchPosts:fetchPosts
)(PostsIndex);
