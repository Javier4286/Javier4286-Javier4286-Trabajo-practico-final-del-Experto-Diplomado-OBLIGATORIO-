import { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import Producto from '../../components/producto/Producto'

function Home() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get('/data/data.json').then((response) => setProductos(response.data)).catch((error) => console.error(error))
    }, [])

    return (
        <div className="home">
            <div className='productos-grid'>
                {productos.map((producto, index) => (
                    <Producto key={index} imagen={producto.imagen} album={producto.album} artista={producto.artista} id={producto.id} />
                ))}
            </div>
        </div>
    )
}

export default Home