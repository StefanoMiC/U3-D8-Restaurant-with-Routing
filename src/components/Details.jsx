import pastas from "../data/menu.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import PastaReviews from "./PastaReviews";
const Details = () => {
  // this component is loaded on every route looking like
  // /details/0
  // /details/1
  // /details/2
  // /details/3
  // /details/4
  // /details/5
  // but the number at the end, which we called :pastaId, is crucial!
  // it's telling which pasta element i should be getting to be displayed by the JSX below!
  // so this component should be aware of which value is contained in the :pastaId parameter

  // from here we need to extract the value of :pastaId
  // state = {pasta: null }

  const [pasta, setPasta] = useState(null);

  const params = useParams(); // this is always an object, and will have all the route parameters and their values inside
  console.log("PARAMS", params);
  const pastaId = params.pastaId; // this is the pasta that we loaded
  // pastaId will always come back as a string
  // now we have to use pastaId to select the correct dish form the pastas array
  useEffect(() => {
    console.log("PASTAID", typeof pastaId);
    const selectedPasta = pastas.find(dish => dish.id.toString() === pastaId);
    // console.log(selectedPasta);
    setPasta(selectedPasta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //cDM
  return (
    <>
      {pasta && (
        <>
          <h3 className="display-4 mt-3">{pasta.name}</h3>
          <img src={pasta.image} alt={pasta.name} className="img-fluid" />
          <p className="mt-3">{pasta.description}</p>
          <PastaReviews selectedPasta={pasta} />
        </>
      )}

      {!pasta && <Spinner variant="info" animation="border" />}
    </>
  );
};

export default Details;
