import {H1, P} from '../components/Layout/Layout.styles';
import { Col, Container, Row } from 'react-bootstrap';
const styleImg = {
    width:570, 
    height:320, 
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", 
    borderRadius: 20,
};

const bannercitos = {
    width:"100%", 
    height:"auto", 
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", 
    borderRadius: 20,
    transition: "filter 0.3s ease-in-out",
    cursor: "pointer",
};

const styleCuerpo = {
    width: 1140,
    paddingTop: 20,
    paddingBottom: 80,
    paddinRight: 0,
    paddinLeft: 0,
};

const paddingBottom = {
    paddingBottom: 20,
};

const tituloBanner = {
    color: "white",
    textAlign: "center",
    //transform: "translate(-50%, -50%)",
};

const leftdp = {
    position: "absolute",
    left: "16%",
    top: "180%",
};

const leftdc = {
    position: "absolute",
    left: "58%",
    top: "180%",
};

const textAlign = {
    textAlign: "center",
};

const Home = () => {
    return (
            <div>
                <Container style={styleCuerpo}>
                <H1>Estudio Jurídico Córdova Pintado Leyva & Asociados</H1>
                    <Row style={paddingBottom}>
                        <Col>
                            <P>
                                Nuestro Estudio de abogados se dedica a la defensa de causas penales y de causas civiles. Dentro de ese objeto social nosotros vemos toda la problemática que tienen las personas que acuden a nuestro Estudio a efectos de que se les reconozcan sus derechos a una tutela jurisdiccional, que significa esto, de que en la Constitución Política en el artículo 139 inciso 16 el Estado brinda a las personas una garantía de que tengan acceso con la justicia. En tal virtud los profesionales del Derecho nos hemos especializado en brindar un adecuado servicio.
                            </P>
                            <P>
                                En primer lugar, ofrecemos el servicio de defensa penal asesoría a nuestros clientes en delitos de falsificación de documentos, delitos de cohecho, delitos de robo, delitos de homicidio, delitos de usurpación, delito de estafa genérica, es decir, un sin número de aspectos penales que es la base principal de nuestro Estudio.
                            </P>
                            <P>
                                En segundo lugar ofrecemos también el servicio de defensa civil al ciudadano que acuda a nuestro Estudio a buscar tutela jurisdiccional esto es por ejemplo vemos hipotecas, vemos como datos, vemos cartas notariales, vemos reclamaciones de propiedades, vemos también interdicto de recobrar de retener, vemos una serie de aspectos como por ejemplo también colaterales que están inversos dentro del código civil como por ejemplo la persona que tiene derecho a un nombre, a un domicilio, la persona que reclama una herencia y esto en forma secuencial a muchos otros derechos ese es en sí la sintonía y lo que ofrece el Estudio.
                            </P>
                        </Col>
                        <Col>
                            <Row>
                                <img src="src/pages/images/Imagen_1.jpg" style={styleImg} />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                    <H1 style={textAlign}>Áreas de Especialización</H1>
                    <P>Estos son los servicios que ofrecemos:</P>
                    <Col>
                        <Row>
                            <img src="src/pages/images/dp.jpg" style={bannercitos} />
                            <div style={tituloBanner}>
                                <h1 style={leftdp}>Derecho Penal</h1>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <img src="src/pages/images/dc.jpg" style={bannercitos} />
                            <div style={tituloBanner}> 
                                <h1 style={leftdc}>Derecho Civil</h1>
                            </div>
                        </Row>
                    </Col>    
                    </Row>
                </Container>
        </div>
    
    );
};

export default Home;