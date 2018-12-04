import React, { Component, propsTypes } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { Link } from "react-router";

class PostsNew extends Component {
  static contextType = {
    router: propsTypes.object
  };

  render() {
    const {
      fields: { title, categories, content }, //const title = this.props.fields.title
      handleSubmit
    } = this.props; //this.props.handleSubmit es6

    return (
      //오브젝트 디스트럭팅
      //폼안지키면 블로킹됨
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div
          className={`form-group ${
            title.touched && title.invalid ? "has - danger" : ""
          }`}
        >
          <label>Tiele</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{title.touched ? title.errors : ""}</div>
        </div>

        <div
          className={`form-group ${
            categories.touched && categories.invalid ? "has - danger" : ""
          }`}
        >
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.errors : ""}
          </div>
        </div>

        <div
          className={`form-group ${
            content.touched && content.invalid ? "has - danger" : ""
          }`}
        >
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.errors : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!validate.title) {
    errors.title = "Enter a username";
  }
  if (!validate.categories) {
    errors.categories = "Enter categories";
  }
  if (!validate.content) {
    errors.content = "Enter some content";
  }

  return errors;
}
//reduxForm 1.config 2. mapstatetoprops3. madispatchtoprops

export default reduxForm(
  {
    form: "PostsNewForm",
    fields: ["title", "categories", "content"],
    validate
  },
  null,
  { createPost }
)(PostsNew);
