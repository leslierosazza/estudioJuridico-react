import { useEffect, useState } from 'react';
import {Grid, H1, Container, ButtonProductos} from '../components/Layout/Layout.styles';
import {BuscarProductos} from '../services/api';
function ConsultarApi() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [triggerSearch, setTriggerSearch] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (searchTerm.trim() !== '') {
                const results = await BuscarProductos(searchTerm);
                setResults(results);
            }
        };

        if (triggerSearch) {
            fetchData();
            setTriggerSearch(false);
        }
    }, [triggerSearch, searchTerm]);

    const handleSearch = () => {
        setTriggerSearch(true);
    };


    return (
        <Container>
            <div>
            <H1>Buscar Productos en Mercado Libre</H1>
            <input 
                type="text" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Buscar Producto"
            />
            <ButtonProductos onClick={handleSearch}>Buscar</ButtonProductos>
            <Grid>
                {results.map(item => (
                    <div key={item.id}>
                        <div>
                            <img src={item.thumbnail}/>
                            <H1>{item.title}</H1>
                            <p>Precio: ${item.price}</p>
                        </div>
                    </div>
                ))}
            </Grid>
            </div>
        </Container>
    );
}

export default ConsultarApi;

