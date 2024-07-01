import { Routes, BrowserRouter, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import NuestraFirma from "../pages/NuestraFirma";
import Civil from "../pages/Civil";
import Penal from "../pages/Penal";
import Clientes from "../pages/Clientes";
import Galeria from "../pages/Galeria";
import FormularioEnLinea from "../pages/FormularioEnLinea";
import Contacto from "../pages/Contacto";
import Layout from "../components/Layout/Layout";
import {Banner} from '../pages/Banner';


const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Banner/>  
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nuestra-firma" element={<NuestraFirma />} />
                    <Route path="/especialidad-civil" element={<Civil />} />
                    <Route path="/especialidad-penal" element={<Penal />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/formulario" element={<FormularioEnLinea />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;