import React from 'react';
import './styles_views/Stra3.scss';
import numero from '../../../../assets/svg/tres_active.svg';

const estrategias = {
	icon: 'nombre del icono',
	titulo: 'FÓRMULA PARA COMUNICAR MARCAS CON SENTIDO',
	texto_negrilla:
		'Desarrollamos planes estratégicos, creamos contenido de valor y multiplicamos la voz para que tu marca llegue lejos.',
};

const ViewStra3 = () => {
	const { icon, titulo, texto_negrilla } = estrategias;
	return (
		<div className="container-Stra3">
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
				<div className="Stra3-section-view2">
					<div className="view2-1">
						<div className="text-bolder">
							<p>CREACIÓN DE CONTENIDO</p>
						</div>
						<div className="between-border">
							<p>-Redacion creativa</p>
							<p>-Fotografía</p>
							<p>-Dirección de arte</p>
							<p>-Video</p>
						</div>
					</div>
					<div className="view2-2">
						<div className="text-bolder">
							<p>MARKETING DIGITAL</p>
						</div>
						<div className="between-border">
							<p>-Estrategias digitales</p>
							<p>-Manejo de redes sociales</p>
						</div>
					</div>
				</div>
				<div className="border-purple"></div>
			</div>
		</div>
	);
};

export default ViewStra3;
