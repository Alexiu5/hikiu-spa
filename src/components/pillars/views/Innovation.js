import React from 'react';
import './views_innovation/Inno1.scss';
import imagen from '../../../assets/png/innovacion.png';

const innovacion = {
	texto_azul: 'UN LAB LLENO DE',
	texto_rojo: 'FÓRMULAS CREATIVAS Y ESTRATÉGICAS',
	texto_morado: 'para que encontremos la mejor forma de',
	texto_morado1: 'darle vida a tu negocio',
	texto: 'Somos un equipo de mentes creativas, con ideas y',
	texto1: 'conocimientos diferentes dispuestos a soñar por ti.',
};

const Innovation = () => {
	const {
		texto_azul,
		texto_rojo,
		texto_morado,
		texto_morado1,
		texto,
		texto1,
	} = innovacion;
	return (
		<div className="container_inno" data-aos="flip-right" data-aos-duration="1200">
			<h3 className="texto_blue">{texto_azul}</h3>
			<h4 className="texto_red">{texto_rojo}</h4>
			<h5 className="texto_purple">{texto_morado}</h5>
			<h5 className="texto_purple">
				<strong>{texto_morado1}</strong>
			</h5>
			<div className="texto_negrilla">
				<p>{texto}</p>
				<p>{texto1}</p>
			</div>
			<div className="style_img">
				<img src={imagen} alt="innovationImg" />
			</div>
		</div>
	);
};

export default Innovation;
