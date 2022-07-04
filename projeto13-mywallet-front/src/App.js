import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext';
import TelaLogin from './components/Login/TelaLogin'
import TelaCadastro from './components/TelaCadastro'
import TelaInicial from './components/TelaInicial';
import TelaNovaEntrada from './components/TelaNovaEntrada';
import TelaNovaSaida from './components/TelaNovaSaida';
import TelaEditar from './components/TelaEditar';


function App() {
  return (
    <BrowserRouter>

    <UserContext.Provider value={{}}>

    <Routes>
      <Route path="/" element={< TelaLogin />}/>
      <Route path="/cadastro" element={< TelaCadastro />}/>
      <Route path="/inicio" element={< TelaInicial />}/>
      <Route path="/entrada" element={< TelaNovaEntrada />}/>
      <Route path="/saida" element={< TelaNovaSaida />}/>
      <Route path="/Editar" element={< TelaEditar />}/>
    </Routes>

    </UserContext.Provider>

    </BrowserRouter>

  )
}

export default App;
