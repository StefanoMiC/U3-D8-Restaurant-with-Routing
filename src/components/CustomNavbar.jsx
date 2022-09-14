// import { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Link renders a special anchor tag, it will not refresh the browser!
// it's able to navigate without trigger a refresh

// We'd like to highlight the current link we clicked in the navigation menu, and add an "active" class on the element
// for doing that we need to figure out the pathname of the page that's active right now, to highlight the corresponding element
// How can we make our CustomNavbar aware of the current Route's path?....

const CustomNavbar = ({ title }) => {
  const location = useLocation(); // returns {}
  console.log("LOCATION pathname", location.pathname);

  const navigate = useNavigate(); // returns f()

  const goHome = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/");
  //   }, 2000);

  //   return () => clearTimeout(timer); //componentWillUnmount
  // }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>{title}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          {/*Nav.Link renders: <a href="/" className="nav-link">{props.children}</a> */}

          <Link
            to="/form"
            className={location.pathname === "/form" ? "nav-link active" : "nav-link"}
          >
            Book you table
          </Link>
          <Link
            to="/reservations"
            className={location.pathname === "/reservations" ? "nav-link active" : "nav-link"}
          >
            Reservation list
          </Link>
          <Link
            to="/menu"
            className={location.pathname === "/menu" ? "nav-link active" : "nav-link"}
          >
            Menu
          </Link>
          <Button variant="dark" onClick={goHome} className="ml-3">
            Go to Home
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
