import React from 'react';
import icon from '../../../../assets/svg/uno_active.svg';
import imgIcon from '../../../../assets/svg/educacion_uno.svg';
import './slides.scss';

const education = {
	hikiu: 'HIKIU',
	main_title: 'STYLE',
	primary_title: 'Fórmula para pensar',
	secondary_title: 'como un empredendedor',
	icono: 'icono',
	card_title: 'APRENDIZAJES:',
	card: {
		first_block: ['Estilo de vida del emprendedor', 'control del tiempo'],
		second_block: ['hábitos saludables', 'Eliminar bloqueos mentales'],
		third_block: ['Fortaleza mental y emocional', 'Mentes creativas'],
	},
};

const StyleSlide = () => {
	return (
		<div>
			<div className="slide">
				<div className="slide-header">
					<div className="slide-header-image">
						<img src={icon} alt="" />
					</div>
					<div className="slide-header-text">
						<h3>HIKIU</h3>
						<h4>{education.main_title}</h4>
						<p>{education.primary_title}</p>
						<h5 className="bold">{education.secondary_title}</h5>
					</div>
				</div>
				<div className="slide-content">
					<div className="slide-content-logo">
						<img src={imgIcon} alt="" />
					</div>
					<div className="slide-content-text">
						<p>
							Todo emprendedor debe estar dispuesto a{' '}
							<span>cambiar hábitos, generar</span>
							<span>
								{' '}
								cambios, abrir su mente a nuevas ideas,{' '}
							</span>{' '}
							y debe estar listo para todo lo grande que viene
							detras.
						</p>
						<br />
						<p>
							Juntos aprenderemos sobre <span>práticas</span> que
							te permitan llegar lejos, fortalecerte y conectarte
							con tu ser para ejecutar
							<span> mejor tu hacer.</span>
						</p>
					</div>
				</div>
				<div className="slide-frame">
					<div className="slide-frame-box">
						<div className="slide-frame-title">{education.card_title}</div>
						<div className="slide-frame-grid">
							<div className="frame-grid-bar">
								<p>{education.card.first_block[0]}</p>
								<p>{education.card.first_block[1]}</p>
							</div>
							<div className="frame-grid-bar">
								<p>{education.card.second_block[0]}</p>
								<p>{education.card.second_block[1]}</p>
							</div>
							<div className="frame-grid-bar">
								<p>{education.card.third_block[0]}</p>
								<p>{education.card.third_block[1]}</p>
							</div>
						</div>
						<div className="slide-frame-border"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StyleSlide;
