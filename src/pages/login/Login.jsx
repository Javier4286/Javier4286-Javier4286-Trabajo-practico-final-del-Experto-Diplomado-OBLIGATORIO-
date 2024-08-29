import { useState } from 'react'
import './login.css'

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function validaciones() {
        let formErrors = {}
        let valid = true

        if (!formData.email) {
            formErrors.email = "Debés ingresar una dirección de email"
            valid = false
        }

        if (!formData.password) {
            formErrors.password = "Debés ingresar la contraseña"
            valid = false
        }

        setErrors(formErrors)
        return valid
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (validaciones()) {
            alert("Datos ingresados correctamente!")
            resetForm()
        }
    }

    function resetForm() {
        setFormData({
            email: "",
            password: ""
        })
    }

    return (
        <div className='login'>

            <h1>Bienvenidos a DynastySales!</h1>
            <p>A continuación, ingrese sus datos para continuar:</p>

            <form onSubmit={handleSubmit} id='loginForm'>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInput} />
                </div>
                <div className="error">{errors.email}</div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleInput} />
                </div>
                <div className="error">{errors.password}</div>

                <button type="submit">Enviar</button>

            </form>

        </div>
    )
}

export default Login