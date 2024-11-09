import { useState, useEffect } from "react";
import { Container, Form, Button, ListGroup, Row, Col } from "react-bootstrap";

import Headpiece from '../components/headpiece';
import PowerRanker from '../utils/power';

export default function () {
  const [fields, setFields] = useState([{ id: 1, item1: "", item2: "" }]);
  const [submittedFields, setSubmittedFields] = useState([]);
  const [rankings, setRankings] = useState([]);

  // Load from local storage on component mount
  useEffect(() => {
    const storedFields = JSON.parse(localStorage.getItem("submittedFields")) || [];
    setSubmittedFields(storedFields);
  }, []);

  // Save to local storage whenever submittedFields changes
  useEffect(() => {
    localStorage.setItem("submittedFields", JSON.stringify(submittedFields));
  }, [submittedFields]);

  // Handle input change for dynamic fields
  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newSubmittedFields = [...submittedFields, ...fields];
    setSubmittedFields(newSubmittedFields);

    // Reset fields and add a new pair
    setFields([{ id: fields.length + 1, item1: "", item2: "" }]);
  };

  // Handle reset of local storage and submitted fields
  const handleDelete = () => {
    localStorage.removeItem("submittedFields");
    setSubmittedFields(submittedFields.slice(0, -1));
  };

  // Handle running the power ranker
  const handleRanking = () => {
    const items = new Set([...submittedFields.map(field => field.item1), ...submittedFields.map(field => field.item2)]);
    const preferences = submittedFields.map(field => ({ alpha: field.item1, beta: field.item2, preference: 1 }));
    const powerRanker = new PowerRanker(items, preferences);
    const newRankings = powerRanker.run(0.9);

    const sortedRankings = Array.from(newRankings)
      .map(([name, value]) => ({name, value}))
      .sort((a, b) => b.value - a.value);

    setRankings(sortedRankings);
  };

  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col>
          <Headpiece
            mainText="Power Ranker"
            subText="Revealing The Concealed"
            icon="⚙️"
            color="green"
          />
        </Col>
        <Col />
      </Row>

      <Row className="accent-green p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5 className="text-center">Inputs</h5>
          <ListGroup>
          {submittedFields.map((field, index) => (
            <ListGroup.Item key={index}>
              {field.item2} → {field.item1}
            </ListGroup.Item>
            ))}
          </ListGroup>

          <br></br>

          <Form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
            <Row key={field.id} className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  name="item2"
                  placeholder="Less preferred"
                  value={field.item2}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="item1"
                  placeholder="More preferred"
                  value={field.item1}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </Col>
              </Row>
            ))}
            <div className="d-flex justify-content-center gap-2">
              <Button variant="primary" type="submit">Submit Pair</Button>
              <Button variant="danger" onClick={handleDelete}>Delete Pair</Button>
              <Button variant="success" onClick={handleRanking}>Get Ranking</Button>
            </div>
          </Form>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5 className="text-center">Ranking</h5>
          <p className="text-center">
            <b>{rankings.map(ranking => ranking.name).join(" ")}</b>
          </p>
          <ListGroup>
            {rankings.map((ranking, index) => (
              <ListGroup.Item key={index} className="text-center">
                {index + 1}: <b>{ranking.name}</b> ({ranking.value.toFixed(2)})
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
