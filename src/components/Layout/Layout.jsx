import Footer from '../../pages/Footer';
import { Container } from 'react-bootstrap';
import Menu from '../../pages/Menu';

const contenedor = {
  width: 1140,
  paddingTop: 0, 
  paddingBottom: 0, 
  paddingLeft: 80,
  paddingRight: 80,
};

const Layout = ({ children }) => {
  return(
    <div style={contenedor}>
      <Container>
        <Menu/>
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
      
  );
};

export default Layout;