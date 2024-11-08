import { Container, Navbar } from 'react-bootstrap';

export default function () {
  return (
    <Navbar bg="light" expand="lg" style={{ padding: "10px 10px 10px 30px"}}>
      <Container fluid>
        <Navbar.Brand href="/">⚙️ Power Ranker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}
