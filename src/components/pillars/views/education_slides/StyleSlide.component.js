import React from 'react';
import './styles_views/Edu1.scss';
import icon from '../../../../assets/svg/uno_active.svg';
import imgIcon from '../../../../assets/svg/educacion_uno.svg';

const educacion = {
	hikiu: 'HIKIU',
	titulo_rojo: 'STYLE',
	texto_morado: 'Fórmula para pensar',
	texto_morado_b: 'como un empredendedor',
	icono: 'icono',
	titulo_unico: 'APRENDIZAJES:',
	unico: [
		{
			texto1: 'Estilo de vida del emprendedor',
			texto2: 'control del tiempo',
		},
		{
			texto1: 'hábitos saludables',
			texto2: 'Eliminar bloqueos mentales',
		},
		{
			texto1: 'Fortaleza mental y emocional',
			texto2: 'Mentes creativas',
		},
	],
};
const StyleSlide = () => {
	const {
		hikiu,
		titulo_rojo,
		texto_morado,
		icono,
		titulo_unico,
		unico,
		texto_morado_b,
	} = educacion;

	return (
		<div>
			<div className="container-edu1">
				<div className="section-view1">
					<div className="wiew1-1">
						<img src={icon} alt="" />
					</div>
					<div className="wiew1-2">
						<h3>{hikiu}</h3>
						<h4>{titulo_rojo}</h4>
						<p>{texto_morado}</p>
						<h5 className="bold">{texto_morado_b}</h5>
					</div>
				</div>
				<div className="section-view2">
					<div className="wiew2-1">
						<img src={imgIcon} alt="" />
					</div>
					<div className="wiew2-2">
						<div className="padding">
							<p>
								Todo emprendedor debe estar dispuesto a <span>cambiar hábitos, generar</span> 
								<span> cambios, abrir su mente a nuevas ideas, </span> y debe estar listo 
								para todo Juntos aprenderemos sobre <span>práticas</span> que te permitan 
								llegar lejos, fortalecerte y conectarte con tu ser para ejecutar 
								<span>mejor tu hacer.</span>
							</p>
						</div>
					</div>
				</div>
				<div className="section-view3">
					<div className="title">{titulo_unico}</div>
					<div className="div-father">
						<div className="view3-grid">
							<div className="after">
								<p>{unico[0].texto1}</p>
								<p>{unico[0].texto2}</p>
							</div>
							<div className="after">
								<p>{unico[1].texto1}</p>
								<p>{unico[1].texto2}</p>
							</div>
							<div className="after">
								<p>{unico[2].texto1}</p>
								<p>{unico[2].texto2}</p>
							</div>
						</div>
						<div className="border-purple"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StyleSlide;
