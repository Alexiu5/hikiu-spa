import { useState } from 'react';
import './styles.scss';
import lang from './es';
import Profiles from './profiles/profiles.component';
import ProfilesCard from './profiles/card/ProfilesCard.component';
import figGestion from '../../assets/svg/red_bar.svg';
import Icon from '../icons/Icon';

const OurTeam = () => {
	const images = [
		{
			image: '1.jpg',
			custom: true
		},
		{
			image: '2.jpg',
			custom: true
		},
		{
			image: '3.jpg',
			custom: true
		},
		{
			image: '5.jpg',
			custom: true
		},
		{
			image: '6.jpg',
			custom: true
		},
		{
			image: '7.jpg',
			custom: true
		},
	];
	
	const imagesCard = [
		{
			image: '2-min.jpg',
		},
		{
			image: '3-min.jpg',
		},
		{
			image: '5-min.jpg',
		},
		{
			image: '6-min.jpg',
		},
		{
			image: '7-min.jpg',
		},
		{
			image: '8-min.jpg',
		}
	];
	const [current, setCurrent] = useState(0);
	const [currentArrow, setCurrentArrow] = useState('right');

	const length = images.length;

	const handleCurrentArrow = () => {
		if (current === length - 2) {
			setCurrentArrow('left');
		} else if (current === 1) {
			setCurrentArrow('right');
		}
	};

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		handleCurrentArrow();
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		handleCurrentArrow();
	};

	const handleProfileCardClick = (index) => {
		setCurrent(index);
		handleCurrentArrow();
	};

	return (
		<section className="our-team-container" id="equipo">
			<div className="section left">
				<Profiles current={current} images={images} />
				<ProfilesCard current={current} images={imagesCard} onClick={handleProfileCardClick} />
				<div className="slide-controls mobile">
					<button
						onClick={prevSlide}
						className={
							currentArrow === 'left' ? 'btn arr-left' : 'btn'
						}
					>
						<span><Icon iconName="arrow_left"/></span>
					</button>
					<button
						className={
							currentArrow === 'right' ? 'btn arr-right' : 'btn'
						}
						onClick={nextSlide} 
					>
						<span ><Icon iconName="arrow_right" /></span>
					</button>
				</div>
			</div>
			<div className="section right">
				<div className="title">
					<h1>{lang.teamSection.title}</h1>
				</div>
				<div className="desc">
					<p>
						{lang.teamSection.desc}{' '}
						<strong>{lang.teamSection.strongOne} </strong>
						{lang.teamSection.subDesc}{' '}
						<strong>{lang.teamSection.strongTwo}.</strong>
					</p>
				</div>
				<div className="fig-gestion-container">
					<span>{lang.teamSection.gestion}</span>
					<img src={figGestion}></img>
				</div>
				<div className="slide-controls desktop">
					<button
						className={
							currentArrow === 'left' ? 'btn arr-left' : 'btn'
						}
					>
						<Icon
							iconName="arrow_left"
							width="300px"
							height="15px"
							clickEvent={prevSlide}
						/>
					</button>
					<button
						className={
							currentArrow === 'right' ? 'btn arr-right' : 'btn'
						}
					>
						<Icon
							iconName="arrow_right"
							width="300px"
							height="15px"
							clickEvent={nextSlide}
						/>
					</button>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
