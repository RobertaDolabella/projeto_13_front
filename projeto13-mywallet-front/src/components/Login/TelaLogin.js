import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.production.min";
import styled from 'styled-components';
import UserContext from '../../UserContext'
import enviarDadosUser from "./enviarDadosUser";

export default function TelaLogin() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const userInfo = {email, senha}

    const serelizaçãoUserInfo = stringify(userInfo)
    localStorage.setItem("user",serelizaçãoUserInfo)

    return (
        <ContainerPrincipal>
            <h1>My Walltet</h1>
            <ContainerInput>
                <input placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required></input>
                <input placeholder="Senha" onChange={(e)=>setSenha(e.target.value)} value={password} type="password" required></input>
                <button onClick={enviarDadosUser}>Entrar</button>
            </ContainerInput>
            <Cadastrar>Primeira vez? Cadastre-se!</Cadastrar>

        </ContainerPrincipal>
    )
}

const ContainerPrincipal = styled.div`
    width:100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #E5E5E5;

h1{
    font-family: 'Raleway', sans-serif;;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
}
`
const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

input{
    width:88%;
    height:46px;
    background: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    background: #FFFFFF;
    border-radius: 5px;
}

button{
    width:88%;
    height:46px;
    text-align: center;
    background: #A328D6;
    border-radius: 5px;
}
`
const Cadastrar = styled.button`

font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
background-color: rgba(0,0,0,0);
border:0px;
`