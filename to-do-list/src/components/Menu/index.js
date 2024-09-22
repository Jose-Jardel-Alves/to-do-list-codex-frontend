import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Adicione estilos conforme necessário

const Menu = ({userId}) => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to={`/home/${userId}`}>Home</Link>
                </li>
                <li>
                    <Link to={`/edit-profile/${userId}`}>Editar Perfil</Link>
                </li>
                <li>
                    <Link to="/">Sair</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;