import Icon from '../icons/Icon';
import './styles.scss';
import lang from './es';

const Banner = () => {
	return (
		<div className='banner animate__animated animate__fadeIn' id="banner">
			<div className="banner-container">
				<Icon iconName="banner_logo"/>
				<div className="text-principal animate__animated animate__fadeIn">
					<p className="text-white">Tu eres el <strong className="text-white-bold">INVENTOR</strong></p>
					<p className="text-red">y nosotros tu <strong className="text-red-bold">LAB ALIADO.</strong></p>
					<span className="before-line"></span>
				</div>
				<div className="icons-container">
					<div className="icon-text">
						<Icon iconName="educacion"/>
						<p>Educación</p>
					</div>
			
					<span className="signs">+</span>

					<div className="icon-text">
						<Icon iconName="estrategias" />
						<p>Estrategias</p>
					</div>

					<span className="signs">+</span>

					<div className="icon-text">
						<Icon iconName="innovacion"/>
						<p>Innovación</p>
					</div>

					<span className="signs">=</span>

					<div className="icon-text equals-container">
						<span className="text-white-bold">NEGOCIOS</span>
						<span className="text-red-bold">QUE LLEGAN</span>
						<span className="text-red-bold">LEJOS</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
