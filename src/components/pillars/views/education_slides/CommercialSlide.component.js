import React from 'react';
import './educationSlides.scss';
import icon from '../../../../assets/svg/cuatro_active.svg';
import imgIcon from '../../../../assets/svg/educacion_cuatro.svg';

const educacion = {
	hikiu: 'HIKIU',
	titulo_rojo: 'COMERCIAL',
	texto_morado: 'Fórmula para',
	texto_morado1: 'RENTABILIZAR TUS IDEAS',
	icono: 'icono',
};

const CommercialSlide = () => {
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
						Si de algo estamos seguros es que{' '}
						<span>
							una buena idea siempre debe ir acompañada de una
							INCREÍBLE estrategia comercial.
						</span>
					</p>
					<br />
					<p>
						Este curso aprenderás a orientar estratégicamene tus
						ideas para volverlas rentables,{' '}
						<span>
							con visión en ganancia y proyección en
							crecimiento.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CommercialSlide;
