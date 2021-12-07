import React, { useState, useContext } from 'react'
import door from '../../assets/doorClose.png'
import './style.css'
import storeContext from '../../contexts/context'
import { useHistory } from 'react-router-dom'

const initialState = {
    usuario: '',
    senha: '',
}

export default function Login() {
    const { setToken } = useContext(storeContext)
    const [values, setValues] = useState(initialState) //inicializando hooks para acessar os valores preenchidos no formulario
    const history = useHistory()

    const handleChange = (event) => { //
        const auxValues = { ...values }
        auxValues[event.target.name] = event.target.value
        setValues(auxValues)
    }

    const handleSubmit = () => (event) => {
        event.preventDefault() //impede que ele faça um submit do form por conta própria
        const { token } = entrar({ usuario: values.usuario, senha: values.senha })
        if (token) {
            setToken(token)
            setValues(initialState)
            return history.push('/')
        } else {
            setValues(initialState)
            return alert("Usuário ou senha inválido!")
        }

    }


    const entrar = ({ usuario, senha }) => {
        if (usuario == 'usuario' && senha == 'senha') {
            return { token: '111222aaadddwwee4w5' }
        } else {
            return { error: 'Login inválido' }
        }
    }

    return (
        <div className="container">
            <div className="card">
                <p>Sistema de Login =)</p>
                <img src={door} className="imagem" />
                <form onSubmit={handleSubmit()} className="formulario">
                    <div>
                        <input className="entradasTexto" value={values.usuario} type="text" name="usuario" placeholder="Usuário" onChange={handleChange} />
                    </div>
                    <div>
                        <input className="entradasTexto" value={values.senha} type="password" name="senha" placeholder="Senha" onChange={handleChange} />
                    </div>
                    <div>
                        <button className="botaoEntrar" type="submit" name="entrar">ENTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
