import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FullQuote } from "../../type";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";

const QuoteForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState<FullQuote>({
    category: "",
    author: "",
    text: "",
  });

  const changeField = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setField((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.post("quotes.json", field);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  let form = (
    <Form className="shadow rounded p-4" onSubmit={onFormSubmit}>
      <select
        className="form-select"
        name="category"
        onChange={changeField}
        required
      >
        <option value="">Select category</option>
        <option value="star-wars">Star Wars</option>
        <option value="famous-people">Famous people</option>
        <option value="saying">Saying</option>
        <option value="humour">Humour</option>
        <option value="motivational">Motivational</option>
      </select>
      <Form.Group className="mb-3 mt-4">
        <Form.Label>Author</Form.Label>
        <input
          className="form-control"
          name="author"
          type="text"
          placeholder="..."
          onChange={changeField}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 mt-4">
        <Form.Label>Quote text</Form.Label>
        <textarea
          className="form-control"
          name="text"
          placeholder="..."
          required
          onChange={changeField}
          rows={4}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-4">
        Add
      </Button>
    </Form>
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className="col-6 mx-auto mt-5">
      <h3 className="pt-4">Add new quote</h3>
      {form}
    </div>
  );
};

export default QuoteForm;
