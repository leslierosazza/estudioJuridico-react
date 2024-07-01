import {Space, Flex} from 'antd';
import {Copyright, Ul, P1, Fila, P2, LogoFooter} from '../components/Layout/Layout.styles';
import facebook from '../pages/images/facebook.png';
import instagram from '../pages/images/instagram.png';
import youtube from '../pages/images/youtube.png';
import telefono from '../pages/images/llamada-telefonica.png';
import correo from '../pages/images/sobre.png';
import ubicacion from '../pages/images/marcador.png';
import { MdArrowRight } from "react-icons/md";
import {Col, Container, Row} from 'react-bootstrap';

const redesSociales = {
    width:40, 
    height:40,
    marginRight: 5,
};

const divStyle = {
    fontSize: 12,
    fontFamily: "Arial",
    textAlign: "center",
  };

const color = {
    backgroundColor: '#d9d9d9',
    alignItems: "stretch",
    display: Flex,
    justifyContent: "space-evenly",
    padding: 20,
};

const estilos = {
    displey: Flex,
};

const pt10 = {
    paddingTop: 10,
};

const cajaFooter = {
    width: 1140,
    height: "auto",
};

const columnGap = {
    columnGap: 50,
};

const Footer = () => {
  return (
    <div>
        <Container style={cajaFooter}> 
            <Row style={color}>
                <Col>
                    <div>
                    <LogoFooter></LogoFooter>
                    </div>
                </Col>
                <Col>
                    <p style={divStyle}>Síguenos en:</p>
                    <Space direction="horizontal" style={columnGap}>
                        <div>
                            <a href="#"><img src={facebook} alt="Facebook" style={redesSociales}/></a>
                        </div>
                        <div>
                            <a href="#"><img src={instagram} alt="instagram" style={redesSociales}/></a>
                        </div>
                        <div>
                            <a href="#"><img src={youtube} alt="youtube" style={redesSociales}/></a>
                        </div>
                    </Space>
                </Col>   
                <Col>
                <P1>Especialidades</P1>
                <Space direction="vertical">
                    <Row>
                        <Ul>
                            <li><a href="#"><MdArrowRight />Derecho Penal</a></li>
                            <li><a href="#"><MdArrowRight />Derecho Civil</a></li>
                        </Ul>
                    </Row>
                </Space>
                </Col>
                <Col>
                    <Row>
                        <P1>Contáctanos</P1>
                        
                        <Fila style={estilos}>
                            <div style={estilos}>
                                <img src={telefono} alt="Telefono" style={redesSociales}/> 
                            </div>
                            <div>
                                <P2>Fijo: 6079495 <br />
                                    Movistar: 996715720 Claro: 984796362
                                </P2>
                            </div>
                        </Fila>
                                                
                        <Fila>
                            <div style={estilos}>
                                <img src={correo} alt="Correo" style={redesSociales}/>
                            </div>
                            <div style={pt10}>
                                <P2>ejcordovapintado@hotmail.com</P2>
                            </div>
                        </Fila>

                        <Fila>
                            <div style={estilos}>
                                <img src={ubicacion} alt="Ubicacion" style={redesSociales}/>
                            </div>
                            <div>
                                <P2>Calle Los Progresistas Mz. ZZ-4 Lote 15 <br />
                                Urb. Pro – Los Olivos</P2>
                            </div>
                        </Fila>

                    </Row>
                </Col>   
            </Row>
            <Row>
                <Copyright>
                <p>© 2024 Estudio Jurídico Córdova Pintado Leyva & Asociados</p>
                </Copyright>
            </Row>
        </Container>
    </div>
  );
};

export default Footer;
