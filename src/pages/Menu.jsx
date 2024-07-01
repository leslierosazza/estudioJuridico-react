import { Col, Container, NavDropdown, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logo, Nav } from "../components/Layout/Layout.styles";
import 'bootstrap/dist/css/bootstrap.css';
const widthContainer = {
    width: 1140,
};

const rowEstilo = {
    displey: "Flex",
    alignItems: "center",
};
const Menu = () => {
    return (
        <div>
            <Container style={widthContainer}>
            <Row style={rowEstilo}>
                <Col>
                    <Logo></Logo>
                </Col>

                <Col>
                <Navbar bg="white" expand="lg">
                    <Container fluid>
                        
                            <Navbar.Collapse id="navbar-dark-example">
                                <Link to="/"><Navbar.Brand>Inicio</Navbar.Brand></Link>
                                <Link to="/nuestra-firma"><Navbar.Brand>Nuestra Firma</Navbar.Brand></Link>
                                <Nav>
                                    
                                    <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Especialidades"
                                    menuVariant="dark"
                                    >
                                    <Link to="/especialidad-civil"><NavDropdown.Item>Derecho Civil</NavDropdown.Item></Link>
                                    <Link to="/especialidad-penal"><NavDropdown.Item>Derecho Penal</NavDropdown.Item></Link>
                                    </NavDropdown>
                                    <Link to="/clientes"><Navbar.Brand>Clientes</Navbar.Brand></Link>
                                    <Link to="/galeria"><Navbar.Brand>Galería</Navbar.Brand></Link>
                                    <Link to="/formulario"><Navbar.Brand>Formulario en Línea</Navbar.Brand></Link>
                                    <Link to="/contacto"><Navbar.Brand>Contáctenos</Navbar.Brand></Link>
                                </Nav>
                                
                            </Navbar.Collapse>
                    </Container>
                </Navbar>

                    {/* <Nav>
                    <Ul>
                        <li>
                        <Link to="/">Inicio</Link>
                        </li>
                        <li>
                        <Link to="/nuestra-firma">Nuestra Firma</Link>
                        </li>
                        <li className="dropdown-item">
                        <Link to="/especialidades">Especialidades</Link>
                        <li><NavDropdown.Item href="#">Derecho Civil</NavDropdown.Item></li>
                        <li><NavDropdown.Item href="#">Derecho Penal</NavDropdown.Item></li>
                        <li><Link to="/especialidad-civil">Derecho Civil</Link></li>
                        <li><Link to="/especialidad-penal">Derecho Penal</Link></li> 
                        </li>
                        <li>
                        <Link to="/clientes">Clientes</Link>
                        </li>
                        <li>
                        <Link to="/galeria">Galería</Link>
                        </li>
                        <li>
                        <Link to="/formulario">Formulario en Línea</Link>
                        </li>
                        <li>
                        <Link to="/contacto">Contáctenos</Link>
                        </li>
                    </Ul>
                    </Nav> */}
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Menu;