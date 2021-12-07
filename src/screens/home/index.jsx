import React, { useContext } from 'react'
import doorOpen from '../../assets/doorOpen.png'
import './style.css'
import storeContext from '../../contexts/context'
import { useHistory } from 'react-router-dom'



export default function Home() {
    const { setToken } = useContext(storeContext)
    const history = useHistory()

    const logout = () => {
        setToken(null)
        return history.push('/login')
    }

    return (
        <div className="containerHome">
            <h1>Token gerado com sucesso</h1>
            <h3> Você está logado</h3>
            <img src={doorOpen} className="imagem" />
            <button className="botaoSair" type="submit" name="entrar" onClick={logout}>SAIR</button>
        </div>
    )
}
