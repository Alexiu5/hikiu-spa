import React from 'react';
import './styles_views/Stra2.scss';
import numero from '../../../../assets/svg/dos_active.svg';

const estrategias = {
	icon: 'nombre del icono',
	titulo: 'FÓRMULA PARA MARCAS AUTÉNTICAS',
	texto_negrilla:
		'Diseñamos y creamos marcas, productos y servicios que conectan, que cuentan historias y que sean innovadoras, pero sobre todo que brillen por su autenticidad.',

	unico: {
		primer: {
			primer1: 'IDENTIDAD',
			primer2: 'VISUAL',
		},
		segunda: {
			segunda1: 'PLANEACIÓN',
			segunda2: 'ESTRATÉGICA DE MARCA',
		},
	},
};

const ViewStra2 = () => {
	const { icon, titulo, texto_negrilla, unico } = estrategias;
	return (
		<div className="container-Stra2">
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
				<div className="section-view2">
					<div>
						<p>{unico.primer.primer1}</p>
						<p>
							{' '}
							<strong>{unico.primer.primer2}</strong>
						</p>
					</div>
					<div>
						<p>{unico.segunda.segunda1}</p>
						<p>
							{' '}
							<strong>{unico.segunda.segunda2}</strong>
						</p>
					</div>
				</div>
				<div className="border-purple"></div>
			</div>
		</div>
	);
};

export default ViewStra2;
