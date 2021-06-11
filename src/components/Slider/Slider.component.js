import React, { useEffect, useReducer, useRef } from 'react';
import reducer, { slider_consts } from '../../reducers/slider/sliderReducer';
import SliderDots from './SliderDots.component';
import './slider.scss';

const Slider = ({ children }) => {
	const initialValue = {
		slides: [],
		index: 0,
	};
	const [state, dispatch] = useReducer(reducer, initialValue);
	const sliderContainer = useRef(null);

	useEffect(() => {
		const slides_container = sliderContainer.current.querySelector('.slides');
		dispatch({type: slider_consts.FILLSLIDE, payload : Array.from(slides_container.childNodes) });
	}, []);

	useEffect(() => {
		const slides_container = sliderContainer.current.querySelector('.slides');
		const slideWidth = window.innerWidth;
		slides_container.style.transform = `translateX(-${slideWidth * state.index}px)`;
	}, [state.index]);

	return (
		<div className="slides-parent" ref={sliderContainer}>
			<div className="slides">{children.map((item) => (
				<div className="slide-item">{item}</div>
			))}</div>
			<div></div>
			<SliderDots dispatch={dispatch} state={state} />
		</div>
	);
};

export default Slider;
