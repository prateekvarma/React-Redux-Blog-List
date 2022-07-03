import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    //using this lifecycle method, because we need to fetch a user as soon as this component is rendered.
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props; //destructuring out just the 'user' returned from mapStateToProps

    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

//Below, the 2nd argument ownProps is the ref of props sent from the parent comp
//Below the 2st argument state is a reference from the reducers.
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
