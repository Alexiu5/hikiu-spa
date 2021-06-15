import React, { useState } from 'react';
import Icon from '../icons/Icon';
import './style.scss';
import Education from './views/Education.component';
import Innovation from './views/Innovation.component';
import Strategy from './views/Strategy.component';
import Lang from './es';
import Figure from '../philosophy/figures/figure';
import arrow_down from '../../assets/svg/arrow_down.svg';

const constants = {
	EDUCATION: 'education',
	STRATEGIES: 'strategies',
	INNOVATION: 'innovation',
};

const Pillars = () => {
	const [section, setSection] = useState(constants.EDUCATION);

	const handleEducation = () => setSection(constants.EDUCATION);
	const handleStrategies = () => setSection(constants.STRATEGIES);
	const handleInnovation = () => setSection(constants.INNOVATION);

	return (
		<section id="pilares">
			<h2 className="title">{Lang.pilares.title}</h2>
			<div className="card-container">
				<Figure customclass="bg-circle figure-rotate" />
				<div className="container-grid">
					<div
						onClick={() => handleEducation()}
						className="active"
						data-aos="fade-right"
						data-aos-duration="700"
					>
						<Icon
							iconName="educacion_active"
							isActive={section === constants.EDUCATION}
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
							isActive={section === constants.STRATEGIES}
						/>
						<h3>{Lang.pilares.navSection.estrategias}</h3>
					</div>
					<div
						onClick={() => handleInnovation()}
						className="active"
						data-aos="fade-left"
						data-aos-duration="700"
					>
						<Icon
							iconName="innovacion_active"
							isActive={section === constants.INNOVATION}
						/>
						<h3>{Lang.pilares.navSection.innovacion}</h3>
					</div>
				</div>
				<div className="text-center">
					<div className="text one">
						<p>
							Creemos en la{' '}
							<strong>educación y colaboración </strong>
							como motor de cambio y crecimiento.
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
					<img src={arrow_down} className="arrow-down" />
				</div>
			</div>
			<div className="slider-container">
				{section === constants.EDUCATION && <Education />}
				{section === constants.STRATEGIES && <Strategy />}
				{section === constants.INNOVATION && <Innovation />}
			</div>
		</section>
	);
};

export default Pillars;
