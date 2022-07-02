import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    //using this lifecycle method, because we need to fetch a user as soon as this component is rendered.
    this.props.fetchUser(this.props.userId);
  }
  render() {
    return <div>UserHeader</div>;
  }
}

export default connect(null, { fetchUser: fetchUser })(UserHeader); //null because we haven't defined a Reducer yet, or the mapStateToProps yet
