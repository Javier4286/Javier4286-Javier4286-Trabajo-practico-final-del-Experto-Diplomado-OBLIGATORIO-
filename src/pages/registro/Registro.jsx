import { useState } from 'react'
import './registro.css'

function Registro() {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        gender: "",
        email: "",
        password: "",
        repeatPassword: "",
        address: "",
        phone: ""
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function validaciones() {
        let formErrors = {}
        let valid = true

        if (!formData.name) {
            formErrors.name = "Debés ingresar el nombre"
            valid = false
        }

        if (!formData.surname) {
            formErrors.surname = "Debés ingresar el apellido"
            valid = false
        }

        if (!formData.gender) {
            formErrors.gender = "Debés selecciona un género"
            valid = false
        }

        if (!formData.email) {
            formErrors.email = "Debés ingresar una dirección de email"
            valid = false
        }

        if (!formData.password) {
            formErrors.password = "Debés ingresar una contraseña"
            valid = false
        }

        if (!formData.repeatPassword) {
            formErrors.repeatPassword = "Debés ingresar nuevamente la contraseña"
            valid = false
        } else if (formData.password !== formData.repeatPassword) {
            formErrors.repeatPassword = "Las contraseñas no coinciden"
            valid = false
        }

        if (!formData.address) {
            formErrors.address = "Debés ingresar una dirección"
            valid = false
        }

        if (!formData.phone || isNaN(formData.phone) || formData.phone.trim() === "") {
            formErrors.phone = "Debés ingresar un número de teléfono"
            valid = false
        }

        setErrors(formErrors)
        return valid
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (validaciones()) {
            alert("Datos enviados correctamente!\nMuchísimas gracias por todo Yanel!!!")
            resetForm()
        }
    }

    function resetForm() {
        setFormData({
            name: "",
            surname: "",
            gender: "",
            email: "",
            password: "",
            repeatPassword: "",
            address: "",
            phone: ""
        })
    }

    return (
        <div className='registro'>

            <h1>Bienvenidos a DynastySales!</h1>
            <p>A continuación, complete sus datos:</p>

            <form onSubmit={handleSubmit} id='registroForm'>

                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInput} />
                <div className='error'>{errors.name}</div>

                <label htmlFor="surname">Apellido:</label>
                <input type="text" name="surname" id="surname" value={formData.surname} onChange={handleInput} />
                <div className='error'>{errors.surname}</div>

                <label htmlFor="gender">Género:</label>
                <select name="gender" id="gender" value={formData.gender} onChange={handleInput}>
                    <option value="" disabled >Seleccione una opción:</option>
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                    <option value="other">Otro</option>
                </select>
                <div className='error'>{errors.gender}</div>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInput} />
                <div className='error'>{errors.email}</div>

                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInput} />
                <div className='error'>{errors.password}</div>

                <label htmlFor="repeatPassword">Repetir contraseña:</label>
                <input type="password" name="repeatPassword" id="repeatPassword" value={formData.repeatPassword} onChange={handleInput} />
                <div className='error'>{errors.repeatPassword}</div>

                <label htmlFor="address">Dirección:</label>
                <input type="text" name="address" id="address" value={formData.address} onChange={handleInput} />
                <div className='error'>{errors.address}</div>

                <label htmlFor="phone">Teléfono:</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInput} />
                <div className='error'>{errors.phone}</div>

                <button type="submit" >Enviar</button>

            </form>
        </div>
    )
}

export default Registro