import { Col, Container, Row } from 'react-bootstrap';
import {Card, H1, ImageCard, Grid, P} from '../components/Layout/Layout.styles';
const styleImg2 = {
    width:235, 
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", 
    borderRadius: 20,
};
const widthContainer = {
    width: 1140,
};
const About = () => {
    return (
        <Container style={widthContainer}>
            <Grid>
            <Card>
                <ImageCard></ImageCard>
                <H1>Misión</H1>
                <P>Coadyuvar con la justicia. La justicia respete los derechos de las personas, vale decir, ofrecer una buena defensa a las personas que acuden a nosotros, de ante mano entendemos su caso y tratamos de que los jueces y los fiscales respeten esa problemática y les brinden tutela jurisdiccional efectiva.</P>
            </Card>
            <Card>
                <ImageCard></ImageCard>
                <H1>Visión</H1>
                <P>Nuestros casos penales llevan un rumbo, una codificación, una clasificación y un ordenamiento; en cambio el aspecto civil lleva otro ordenamiento, se basa en otra codificación y tiene otra sistematización.  </P>
            </Card>
            <Card>
                <ImageCard></ImageCard>
                <H1>Objetivo</H1>
                <P>Brindar justicia a todos los que acuden a nosotros y buscar que se 
aplique una verdadera justicia con igualdad de condiciones a todos.</P>
            </Card>
            <Card>
                <ImageCard></ImageCard>
                <H1>Virtudes</H1>
                <P>Haber sido elegido como presidente del consejo de ética del Ilustre Colegio 
de Abogados de Lima.</P>
            </Card>
            </Grid>
            <Row>
                <H1>Conócenos</H1>
                <Col>
                    <div>
                        <img src="src/pages/images/Imagen_2.jpeg" style={styleImg2} />
                    </div>
                </Col>
                <Col>
                    <ul>
                        <li>Catedrático de la Facultad de Derecho de la Universidad Las Américas, Oficiales y Sub Oficiales PNP.</li>
                        <li>Ex-Catedrático de la Facultad de Derecho de la UIGV.</li>
                        <li>Abogado de la Asociación Pro Viviendo la Estrella, El barquero, ect.</li>
                        <li>Ex-Abogado del Parque Industrial Villa El Salvador.</li>
                        <li>Post-Grado en Derecho Penal.</li>
                        <li>Actual Profesor de Diplomados en Derecho Penal del Ilustre Colegio de Abogados de Lima.</li>
                        <li>Abogado actual en Procesos contra Oficiales y Sub Oficiales PNP.</li>
                        <li>Ex-Presidente Asociaciones de Abogados de Lima Norte.</li>
                        <li>Ex-Consejero de Ética del Ilustre Colegio de Abogados de Lima.</li>
                        <li>Ex-Presidente de la Comisión de Derecho Procesal Penal Colegio de Abogados de Lima.</li>
                        <li>Ex-integrante de la Comisión de Derecho Penal y Derecho Procesal Penal del Ilustre Colegio de Abogados de Lima.</li>
                        <li>Actual Apoderado Judicial de las empresas del grupo ORELLANA.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        
    );
};

export default About;                                                                       