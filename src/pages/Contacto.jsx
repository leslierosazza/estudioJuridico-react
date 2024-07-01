import { Container } from "react-bootstrap";
import { Button, Form, H1 } from "../components/Layout/Layout.styles";

const mb10 = {
    marginBottom: 10,
};

const textAlign = {
    textAlign: "-webkit-center",
};

const Contacto = () => {
    return (
        <Container style={textAlign}>
            <div>
                <H1>Formulario de Contacto</H1>
                <p>Para atender su consulta, por favor complete el siguiente formulario:</p>
                <Form style={mb10}>
                <form action="">
                    <ul>
                        <li>
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text" id="nombres" name="nombres"/>
                        </li>
                        <li>
                            <label htmlFor="correo">Correo</label>
                            <input type="text" id="correo" name="correo"/>
                        </li>
                        <li>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" id="telefono" name="telefono"/>
                        </li>
                        <li>
                            <label htmlFor="asunto">Asunto</label>
                            <input type="text" id="asunto" name="asunto"/>
                        </li>
                        <li>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea id="msg" name="mensaje" ></textarea>
                        </li>
                        <li>
                            <Button type="submit">Enviar</Button>
                        </li>
                    </ul>
                </form>
                </Form>
            </div>
        </Container>
    );
};

export default Contacto;