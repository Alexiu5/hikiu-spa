import React, { useState } from 'react';
import Icon from '../icons/Icon';
import './style.scss';
import Education from './views/Education';
import Innovation from './views/Innovation';
import Strategies from './views/Strategies';
import Lang from './es';
import Figure from '../philosophy/figures/figure';
import arrow_down from '../../assets/svg/arrow_down.svg';

const Pillars = () => {
	const [stateEducation, setStateEducation] = useState(true);
	const [stateStrategies, setStateStrategies] = useState(false);
	const [stateInnovation, setStateInnovation] = useState(false);

	const handleEducation = () => {
		setStateEducation(true);
		setStateStrategies(false);
		setStateInnovation(false);
	};

	const handleStrategies = () => {
		setStateEducation(false);
		setStateStrategies(true);
		setStateInnovation(false);
	};

	const handleInnovation = () => {
		setStateEducation(false);
		setStateStrategies(false);
		setStateInnovation(true);
	};

	return (
		<section id="pilares">
			<h2 className="title">{Lang.pilares.title}</h2>
			<div className="card-container">
				<Figure customclass="bg-circle figure-rotate" />
				<div className="container-grid">
					<div onClick={() => handleEducation()} className="active" data-aos="fade-right" data-aos-duration="700">
						<Icon
							iconName="educacion_active"
							isActive={stateEducation}
						/>
						<h3>{Lang.pilares.navSection.educacion}</h3>
					</div>
					<div
						className="after-before active"
						onClick={() => handleStrategies()}
						data-aos="zoom-in"
						data-aos-duration="700"
					>
						<Icon
							iconName="estrategias_active"
							isActive={stateStrategies}
						/>
						<h3>{Lang.pilares.navSection.estrategias}</h3>
					</div>
					<div onClick={() => handleInnovation()} className="active" data-aos="fade-left" data-aos-duration="700">
						<Icon
							iconName="innovacion_active"
							isActive={stateInnovation}
						/>
						<h3>{Lang.pilares.navSection.innovacion}</h3>
					</div>
				</div>
				<div className="text-center">
					<div className="text one">
						<p>
							Creemos en la{' '}
							<strong>educación y colaboración</strong> como motor
							de cambio y crecimiento.
						</p>
						<p>
							Cursos, Worsshops y conocimiento disruptivos para
							esas inventores que quieren
						</p>
						<p>
							transformar sus <strong>sueños en realidad.</strong>
						</p>
					</div>
					<div className="text two">
						<p>
							<strong>
								Te presentamos 4 cursos para que aprendas
							</strong>
						</p>
						<p>y conozcas el increíble mundo de emprender</p>
					</div>
					<img src={arrow_down} className="arrow-down"/>
				</div>
			</div>
			<div className="slider-container">
				{stateEducation && <Education />}
				{stateStrategies && <Strategies />}
				{stateInnovation && <Innovation />}
			</div>
		</section>
	);
};

export default Pillars;
