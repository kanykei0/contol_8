import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

interface Props {
  id: string;
  category: string;
  author: string;
  text: string;
  onDelete: () => void;
}

const QuoteItem: React.FC<Props> = ({
  id,
  category,
  author,
  text,
  onDelete,
}) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{text}</Card.Text>
          <Link to={`quotes/${id}/edit`} className="btn btn-success me-3">
            Edit
          </Link>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuoteItem;
