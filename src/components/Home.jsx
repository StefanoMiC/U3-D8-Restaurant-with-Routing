import { useState } from "react";
import PastaReviews from "./PastaReviews";
import { Carousel, Badge } from "react-bootstrap";

import arrayOfPastas from "../data/menu.json"; /* this creates a variable that we can use: arrayOfPastas */
const Home = () => {
  const [selectedPasta, setSelectedPasta] = useState(null);

  return (
    <>
      <Carousel className="mt-5">
        {/* The map method takes an array and returns a piece of JSX, REMEMBER to assign a unique key prop to the immediate element you are returning */}
        {arrayOfPastas.map((pasta, index) => (
          <Carousel.Item
            key={`dish-${index}`}
            className={selectedPasta?.id === pasta.id && "selectedState"}
          >
            <img
              className="d-block w-100"
              src={pasta.image}
              alt="First slide"
              onClick={() => {
                console.log("you clicked an image!");

                setSelectedPasta(pasta);
              }}
            />
            {selectedPasta && selectedPasta.id === pasta.id && (
              <Badge pill variant="success" style={{ position: "absolute", top: 10, right: 15 }}>
                Selected
              </Badge>
            )}
            <Carousel.Caption>
              <h3>{pasta.name}</h3>
              <p>{pasta.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <PastaReviews selectedPasta={selectedPasta} />
    </>
  );
};

export default Home;
