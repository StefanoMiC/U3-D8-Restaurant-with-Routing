import { ListGroup } from "react-bootstrap";
const PastaReviews = ({ selectedPasta }) => (
  <>
    {selectedPasta ? (
      <>
        <h3 className="mt-3">Reviews for {selectedPasta.name}</h3>
        <ListGroup variant="flush">
          {selectedPasta.comments.map((review, i) => (
            <ListGroup.Item key={`review-${i}`}>
              {review.author} — {review.comment}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    ) : (
      <p>
        No Reviews to be shown yet! <br /> Click on an image to see them
      </p>
    )}
  </>
);

export default PastaReviews;
