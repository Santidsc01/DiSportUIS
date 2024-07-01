import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Importa el componente de la barra superior
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mapa from './components/Mapa'; // Importa el componente del mapa
import Reserva from './components/Reserva'; // Importa el componente de reserva
import Horarios from './components/Horarios'; // Importa el componente de horarios

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Utiliza el componente de la barra superior */}
                <Routes>
                    <Route path="/" element={<Mapa />} />
                    <Route path="/v1/reservations" element={<Reserva />} />
                    <Route path="/v1/disponibilidad" element={<Horarios />} />
                    {/* Agrega más rutas según sea necesario */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
