import React from 'react';
import StyleSlide from './education_slides/StyleSlide.component';
import StrategySlide from './education_slides/StrategySlide.component';
import CommunicateSlide from './education_slides/CommunicateSlide.component';
import CommercialSlide from './education_slides/CommercialSlide.component';
import Slider from '../../Slider/Slider.component';
// import IconLeft from '../../../assets/svg/left.svg';
// import IconRight from '../../../assets/svg/right.svg';
import './views.scss';

const Education = () => {
	return (
		<div
			data-aos="flip-right"
			data-aos-duration="800"
		>
			<Slider>
				<StyleSlide />
				<StrategySlide />
				<CommunicateSlide />
				<CommercialSlide />
			</Slider>
		</div>
		
	);
};

export default Education;
