import React from 'react';
import './styles_views/Edu4.scss';
import icon from '../../../../assets/svg/cuatro_active.svg';
import imgIcon from '../../../../assets/svg/educacion_cuatro.svg';

const educacion = {
	hikiu: 'HIKIU',
	titulo_rojo: 'COMERCIAL',
	texto_morado: 'Fórmula para',
	texto_morado1: 'RENTABILIZAR TUS IDEAS',
	icono: 'icono',
};

const ViewEdu4 = () => {
	const {
		hikiu,
		titulo_rojo,
		texto_morado,
		icono,
		texto_morado1,
	} = educacion;
	return (
		<div className="container-edu4">
			<div className="section-view1">
				<div className="wiew1-1">
					<img src={icon} alt="" />
				</div>
				<div className="wiew1-2">
					<h3>{hikiu}</h3>
					<h4>{titulo_rojo}</h4>
					<p>{texto_morado}</p>
					<p className="bold">{texto_morado1}</p>
				</div>
			</div>
			<div className="section-view2">
				<div className="wiew2-1">
					<img src={imgIcon} alt="" />
				</div>
				<div className="wiew2-2">
					<div className="padding">
						<p>
							Si de algo estamos seguros es que{' '}
							<span>
								una buena idea siempre debe ir acompañada de una
								INCREÍBLE estrategia comercial.
							</span>
						</p>
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
		</div>
	);
};

export default ViewEdu4;
