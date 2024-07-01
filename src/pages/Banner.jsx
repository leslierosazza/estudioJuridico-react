import banner1 from '../pages/images/cab1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';

const estiloBanner = {
    display: "block",
    width: "100%",
    height: "auto",
};

const styleCuerpo = {
    width: 1140,
    paddingTop: 20,
    paddingBottom: 20,
    paddinRight: 0,
    paddinLeft: 0,
};

export const Banner = () => {
  return (
        <div>
            <Container style={styleCuerpo}>
                <Row>
                    <img style={estiloBanner} src={banner1} alt="banner1" />
                </Row>
            </Container>
        </div>
  )
}
