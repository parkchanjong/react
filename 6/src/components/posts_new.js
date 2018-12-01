import React, { Component } from "react";
import { reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    const {
      fields: { title, categories, content }, //const title = this.props.fields.title
      handleSubmit
    } = this.props; //this.props.handleSubmit es6

    return (
      //오브젝트 디스트럭팅
      //폼안지키면 블로킹됨
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Tiele</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"]
})(PostsNew);
