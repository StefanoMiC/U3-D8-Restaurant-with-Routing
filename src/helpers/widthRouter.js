import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;

// withRouter is a function you can export a class component with
// if you export a component using withRouter, your component will receive EXTRA PROPS, additional ones!
// this component will get an extra prop called router, which will contain "location, "navigate and "params"

// a Component coming through a function that enriches its prop is called: a Higher Order Component, or HOC for short
