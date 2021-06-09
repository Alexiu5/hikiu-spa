import React from 'react';
import logo from '../../../assets/svg/Logo_Hikiu.svg';
import './styles.scss';

const navbarComponent = ({ isActive }) => {
	return (
		<nav
			className={
				isActive === true ? 'nav-container active' : 'nav-container'
			}
		>
			<div className="logo active">
				<img src={logo} alt="Logo Hikiu" />
			</div>
			<ul className="ul-container ">
				<li>
					<a href="#">Bienvenido</a>
				</li>
				<li>
					<a href="#philosophy">Nuestro equipo</a>
				</li>
				<li>
					<a href="#pilares">Pilares Hikiu</a>
				</li>
				<li>
					<a href="#works-container">Trabajos Hikiu</a>
				</li>
				<li>
					<a href="#contacto">Contacto</a>
				</li>
			</ul>
			<div className="hamburger-icon-container"></div>
		</nav>
	);
};

export default navbarComponent;
