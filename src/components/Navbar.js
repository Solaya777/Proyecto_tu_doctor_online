import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Adminpanel() {
  return (
    <Navbar expand={false} className="bg-dark navbar-dark mb-3">
      <Container fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
        <Navbar.Brand href="#">Bienvenido: Bro</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Opciones
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Registro" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/RegistrarUsuario">Registrar Usuario</NavDropdown.Item>
                <NavDropdown.Item href="/action4">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Reportes" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="SeePersons">Ver usuarios</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>


            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}