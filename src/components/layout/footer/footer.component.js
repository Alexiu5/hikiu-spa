import React from 'react';
import './styles.scss';

const FooterComponent = () => {
	return (
		<footer className="footer">
			<small>
				Copyright © HIKIU { new Date().getFullYear() } Términos y
				condiciones - Tratamientos de datos - Política de seguridad
			</small>
		</footer>
	);
};

export default FooterComponent;
