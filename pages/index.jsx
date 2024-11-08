import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';

export default function () {
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
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}  style={{position:"relative", height:"500px"}}>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
