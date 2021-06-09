import React from 'react';
import './styles_views/Stra1.scss';
import numero from '../../../../assets/svg/uno_active.svg';

const estrategias = {
	titulo: 'Fórmularas para negocios sólidos',
	texto_negrilla:
		'en Hikui Lab, usamos la investigacion y 4 pasos que nos dan bases sólidas para orientartu modelo de negocio.',
	texto_normal:
		'Planear estratégicamente el crecimiento y visión de tus ideas, esa es nuestra promesa',
	unico: {
		primer: {
			primer1: 'INVESTIGACIÓN',
			primer2: 'DE MERCADO',
		},
		segunda: {
			segunda1: 'GESTIÓN',
			segunda2: 'JURÍDICA',
		},
		tercera: {
			tercera1: 'GESTIÓN',
			tercera2: 'ESTRATÉGICA Y DE PROCESOS',
		},
		cuarta: {
			cuarta1: 'GESTIÓN',
			cuarta2: 'COMERCIAL',
		},
	},
};

const ViewStra1 = () => {
	const { titulo, texto_negrilla, texto_normal, unico } = estrategias;
	return (
		<div className="container-Stra1">
			<img src={numero} alt="uno" className="icon" />
			<div className="section-view1">
				<div className="wiew1-1">
					<strong>Icono</strong>
					<h3>{titulo}</h3>
				</div>
				<div className="wiew1-2">
					<div>
						<strong>{texto_negrilla}</strong>
						<p>{texto_normal}</p>
					</div>
				</div>
			</div>
			<div className="div-father">
				<div className="section-view2">
					<div>
						<p>{unico.primer.primer1}</p>
						<p>{unico.primer.primer2}</p>
					</div>
					<div>
						<p>{unico.segunda.segunda1}</p>
						<p>{unico.segunda.segunda2}</p>
					</div>
					<div>
						<p>{unico.tercera.tercera1}</p>
						<p>{unico.tercera.tercera2}</p>
					</div>
					<div>
						<p>{unico.cuarta.cuarta1}</p>
						<p>{unico.cuarta.cuarta2}</p>
					</div>
				</div>
				<div className="border-purple"></div>
			</div>
		</div>
	);
};

export default ViewStra1;
