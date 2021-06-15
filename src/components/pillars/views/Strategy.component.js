import React from 'react';
import Bussiness from './strategy_slides/Bussiness.component';
import Brand from './strategy_slides/Brand.component';
import Communicate from './strategy_slides/Communicate.component';
import Develop from './strategy_slides/Develop.component';
import Slider from '../../Slider/Slider.component';

const Strategy = () => {
	return (
		<div 
			data-aos="flip-right" 
			data-aos-duration="800"
		>
			<Slider>
				<Bussiness />
				<Brand />
				<Communicate />
				<Develop />
			</Slider>
		</div>
	);
};

export default Strategy;
