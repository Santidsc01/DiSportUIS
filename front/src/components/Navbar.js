import React, { useState } from 'react';
import './Navbar.css'; // Importa los estilos CSS para la barra superior
import logo from './LogoDiSport.png'; // Importa el logo

function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false); // Estado para controlar la visibilidad de "Acerca de"

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleAbout = () => {
        setAboutVisible(!aboutVisible);
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <h1 className="title">DiSportUIS</h1>

            {/* Icono de menú hamburguesa para abrir y cerrar el menú */}
            <div className={`menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            {/* Menú desplegable */}
            {menuVisible && (
                <div className="dropdown-menu">
                    <a href="/">INICIO</a>
                    <a href="/v1/reservations">CREAR RESERVA</a>
                    <span className="about-link" onClick={toggleAbout}>ACERCA DE</span>
                </div>
            )}

            {/* Cuadro de texto de Acerca de */}
            {aboutVisible && (
                <div className="about-modal">
                    <div className="about-content">
                    <p>Creado por: Santiago Gelvez Gonzalez & Santiago Andrés Chaín Santos.</p>
                        <p>Universidad Industrial de Santander</p>
                        <p>2024</p>
                        <button onClick={toggleAbout}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
