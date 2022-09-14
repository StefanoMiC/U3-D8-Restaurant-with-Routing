import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Details from "./components/Details";
import ClassComponentExample from "./components/ClassComponentExample";

const App = () => {
  return (
    <div className="App">
      {/* BorwserRouter is just a virtual routing wrapper */}
      {/* It will allow inner components to benefit from the router logic */}
      <BrowserRouter>
        <CustomNavbar title="Epic Restaurant" />
        {/* CustomNavbar should ALWAYS be loaded and visible at the top of the page */}
        {/* So we WON'T put it in <Routes>, since <Routes> delimits the components that are going to be shown when a specific URL is active*/}

        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Routes>
                {/* a Routes component can contain just Route children */}
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<ReservationList />} />
                <Route path="/form" element={<ReservationForm />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                  path="/classrouterprops"
                  element={<ClassComponentExample myCustomProp="Epicode" />}
                />
                <Route path="/details/:pastaId" element={<Details />} />
                {/* This is called DYNAMIC ROUTE, will just take care of loading Details when the path starts with /details, 
                and the :pastaId will be found inside the parameters of the router */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
