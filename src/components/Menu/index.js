import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
import './Menu.css'

function Menu() {
    return (
        <nav className='Menu'>
            <a to="./">
                <img className="Logo" src={Logo} alt="Raplix Logo" />
            </a>
            <Button as={Link} className="ButtonLink" to="cadastro/video">Novo Vídeo</Button>
        </nav>
    )
}

export default Menu;