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

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(state) {
  return { post: state.posts.all };
}

export default connect(
  mapDispatchToProps,
  { fetchPosts } //=fetchPosts:fetchPosts
)(PostsIndex);

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}*/
