import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
  render() {
    console.log(this.props.posts)
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state) => {
  //the state object here will have properties from combineReducers
  return { posts: state.posts };
}

export default connect(mapStateToProps, {
  fetchPosts: fetchPosts,
})(PostList);
