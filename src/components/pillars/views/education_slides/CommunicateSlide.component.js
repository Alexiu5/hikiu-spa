import React from 'react';
import './educationSlides.scss';
import icon from '../../../../assets/svg/tres_active.svg';
import imgIcon from '../../../../assets/svg/educacion_tres.svg';

const educacion = {
	hikiu: 'HIKIU',
	titulo_rojo: 'COMUNICANDO CON SENTIDO',
	texto_morado: 'Fórmula para multiplicar',
	texto_morado1: 'LA VOZ DE TU MARCA',
	icono: 'icono',
};
const CommunicateSlide = () => {
	const {
		hikiu,
		titulo_rojo,
		texto_morado,
		icono,
		texto_morado1,
	} = educacion;
	return (
		<div className="slide">
			<div className="slide-header">
				<div className="slide-header-image">
					<img src={icon} alt="" />
				</div>
				<div className="slide-header-text">
					<h3>{hikiu}</h3>
					<h4>{titulo_rojo}</h4>
					<p>{texto_morado}</p>
					<p className="bold">{texto_morado1}</p>
				</div>
			</div>
			<div className="slide-content">
				<div className="slide-content-logo">
					<img src={imgIcon} alt="" />
				</div>
				<div className="slide-content-text">
					<p>
						Un espacio donde aprenderás a{' '}
						<span>
							descubrir y comunicar la esencia de tu marca,
						</span>{' '}
						a crear historias que conecten, a contruir
						relaciones significativas con tu audiencia y a
						entender la comunicación como base de tu negocio.
					</p>
					<p>
						Juntos descubriremos como{' '}
						<span>
							multiplicar lo que tienes para ek mundo.
							Comunicando con tu poder.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CommunicateSlide;
