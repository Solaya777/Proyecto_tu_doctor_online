import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoctorsBackground from '../images/doctor_background-Photoroom.png';

export default function DashBoardUsuario() {
  return (
    <>
    <Navbar expand={false} className="bg-dark navbar-dark mb-3">
      <Container fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">Historial de Citas</Navbar.Brand>
        <Navbar.Brand href="#">Bienvenido: </Navbar.Brand>
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
                <NavDropdown.Item href="VerCitas">Ver Citas</NavDropdown.Item>
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
    {/* Nuevo apartado debajo del Navbar */}
    <Container className="my-5">
        <Row className="align-items-center">
          {/* Columna de la imagen a la izquierda */}
          <Col xs={12} md={6} className="text-center">
            <img
              src={DoctorsBackground}
              alt="Imagen descriptiva"
              className="img-fluid rounded"
            />
          </Col>

          {/* Columna del contenido a la derecha */}
          <Col xs={12} md={6}>
            <h2 className="mb-4 text-right" style={{ color: '#343a40', fontSize: '2rem', fontWeight: 'bold' }}><strong>¡Revisa tus citas!</strong></h2>
            <p className="text-right" style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.6' }}>
            En este apartado podrás revisar tus citas agendadas, reprogramarlas o cancelarlas. 
              Para acceder a este apartado, solo tienes que dar clic a los tres botones de la izquierda. 
              Se desplegará un menú donde podrás ver tus citas personales y manejarlas correctamente.
            </p>
          </Col>
        </Row>
      </Container>


    </>
  );
}