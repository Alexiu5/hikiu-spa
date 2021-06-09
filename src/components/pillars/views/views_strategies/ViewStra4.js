import React from 'react';
import './styles_views/Stra4.scss';
import numero from '../../../../assets/svg/cuatro_active.svg';

const estrategias = {
	icon: 'nombre del icono',
	titulo: 'FÓRMULARIO DE DESARROLLO',
	texto_negrilla:
		'Creamos plataformas tecnológicas e informáticas que apalancan y potencializan tu negocio a la era digital.',
};

const ViewStra4 = () => {
	const { icon, titulo, texto_negrilla } = estrategias;
	return (
		<div className="container-Stra4">
			<img src={numero} alt="uno" className="icon" />
			<div className="section-view1">
				<div className="wiew1-1">
					<strong>Icono</strong>
					<h3>{titulo}</h3>
				</div>
				<div className="wiew1-2">
					<p>{texto_negrilla}</p>
				</div>
			</div>
			<div className="div-father">
				<div className="Stra4-section-view2">
					<p>SOFTWARE </p>
					<p>ECOMMERCE </p>
					<p>APLICACIONES WEB/APP</p>
				</div>
				<div className="border-purple"></div>
			</div>
		</div>
	);
};

export default ViewStra4;
