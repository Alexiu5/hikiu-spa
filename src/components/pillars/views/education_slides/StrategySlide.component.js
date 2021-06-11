import React from 'react';
// import './styles_views/Edu2.scss';
import icon from '../../../../assets/svg/dos_active.svg';
import imgIcon from '../../../../assets/svg/educacion_dos.svg';

const educacion = {
	hikiu: 'HIKIU',
	titulo_rojo: 'ESTRATEGA',
	texto_morado: 'Fórmula para negocios sólidos',
	icono: 'icono',
};

const StrategySlide = () => {
	const { index, hikiu, titulo_rojo, texto_morado, icono } = educacion;
	return (
		<div>
			<div className="section-view1">
				<div className="wiew1-1">
					<img src={icon} alt="" />
				</div>
				<div className="wiew1-2">
					<h3>{hikiu}</h3>
					<h4>{titulo_rojo}</h4>
					<p className="bold">{texto_morado}</p>
				</div>
			</div>
			<div className="section-view2">
				<div className="wiew2-1">
					<img src={imgIcon} alt="" />
				</div>
				<div className="wiew2-2">
					<div className="padding">
						<p>
							En este curso aprenderás a{' '}
							<span>pensar y actuar estratégicamente.</span>
							Te daremos las bases para cultivar en tu negocio la
							investigación de tu público y tu entorno.{' '}
							<span>Saber preguntar, indagar y escuchar</span>
							<span>asertivamente,</span> para poder entender y
							crear tu modelo de negocio, y descubrir cúal es tu
							prropuesta de valor,{' '}
							<span>eso que te hace único</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StrategySlide;
