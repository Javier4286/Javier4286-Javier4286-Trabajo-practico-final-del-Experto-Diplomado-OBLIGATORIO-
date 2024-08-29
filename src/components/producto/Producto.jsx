import './producto.css'
import { Link } from 'react-router-dom'

function Producto(props) {
    return (
        <div className="producto">
            <img src={props.imagen} alt={props.nombre} />
            <h1>{props.album}</h1>
            <h2>{props.artista}</h2>
            <Link to={`/detalleProducto/${props.id}`}>+Info</Link>
        </div>
    )
}

export default Producto