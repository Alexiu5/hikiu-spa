import React from 'react';
import { slider_consts } from '../../reducers/slider/sliderReducer';
import './sliderDots.scss';

const SliderDots = ({ dispatch, state }) => {
	const numberOfSlides = state.slides;

	return (
		<div className="slider-dots-container">
			<div className="slider-dots">
				{numberOfSlides.map((v, k) => (
					<span
						className={k === state.index && 'active'}
						key={k}
						onClick={() =>
							dispatch({
								type: slider_consts.CUSTOMSLIDE,
								payload: k,
							})
						}
					></span>
				))}
			</div>
		</div>
	);
};

export default SliderDots;
