import axios from "axios"
import irParaTelaInicial from "./irParaTelaInicial"

export default function enviarDadosUser(){

    const POST_URL = 'localhost:5000/login'

    const userSerelizado = localStorage.getItem('user')
    const userLocal = JSON.parse(userSerelizado)

    const body={
        email: userLocal.email,
        password: userLocal.senha
   
    }

    const promiseLogin = axios.post(POST_URL, body)
    promiseLogin.then((response)=>gerarHeaders(response))
    promiseLogin.catch((response)=> alert(response.error))

    function gerarHeaders(response){

        const { name, _id} = response.data

        const headers={
            name: name,
            id: _id
        }


    const serelizaçãoHeaders = stringify(headers)
    localStorage.setItem("user",serelizaçãoHeaders)
    }
    return(
        irParaTelaInicial()
    )
}