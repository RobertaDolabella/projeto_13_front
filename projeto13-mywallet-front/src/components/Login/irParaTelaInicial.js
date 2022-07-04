import { useNavigate } from "react-router-dom"

export default function irParaTelaInicial(){

    const navigate = useNavigate()
    return(
        navigate("../Inicial/TelaInicial")
    )

}