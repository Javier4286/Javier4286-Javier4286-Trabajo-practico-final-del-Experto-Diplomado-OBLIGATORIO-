import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './detalleProducto.css';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get(`/data/data.json`);
                const producto = response.data.find(producto => producto.id == id);
                setProducto(producto);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducto();

    }, [id]);

    if (!producto) return <p className="noProducto">Producto no encontrado</p>;

    return (
        <div className='detalleProducto'>
            <img src={producto.imagen} alt={producto.nombre} />
            <p><span>Nombre:</span> {producto.nombre}</p>
            <p className="precio"><span>Precio:</span> ${producto.precio}</p>
            <p className="stock"><span>Stock:</span> {producto.stock}</p>
            <p><span>Codigo:</span> {producto.codigo}</p>
        </div>
    );
};

export default DetalleProducto;