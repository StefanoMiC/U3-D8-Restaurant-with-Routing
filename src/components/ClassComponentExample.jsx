import { Component } from "react";
import withRouter from "../helpers/widthRouter";

class ClassComponentExample extends Component {
  render() {
    console.log("MY PROPS ARE", this.props);
    return (
      <div>
        <h2>Class Component HERE</h2>
        <p>let's see if I receive extra props...</p>
        <p>My location is {this.props.router.location.pathname} </p>
      </div>
    );
  }
}

export default withRouter(ClassComponentExample);
