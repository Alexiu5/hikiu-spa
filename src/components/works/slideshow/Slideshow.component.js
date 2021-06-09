import { useState } from 'react';
import Slide from './Slide';
import Dots from './Dots';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const Slideshow = ({ images }) => {
	const [properties, setProperties] = useState(images);
	const [current, setCurrent] = useState({ index: 0 });

	const handlers = useSwipeable({
		onSwipedLeft: () => next(),
		onSwipedRight: () => prev(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});

	const next = () => {
		const currentIndex =
			current.index === properties.length - 1 ? 0 : current.index + 1;

		setCurrent({ direction: 'right', index: currentIndex });
	};

	const prev = () => {
		const currentIndex =
			current.index === 0 ? properties.length - 1 : current.index - 1;

		setCurrent({ direction: 'left', index: currentIndex });
	};

	const handleDotsClick = (index) => {
		setCurrent({ ...current, index });
	};

	return (
		<div className="slideshow-container" id="slideshow">
			<div
				{...handlers}
				className={`slideshow-container slider active-slide-${current.index}`}
			>
				<div
					className="cards-slider-wrapper"
					style={{
						transform: `translateX(-${
							current.index * (100 / properties.length)
						}%)`,
					}}
				>
					{properties.map((e, index) => (
						<Slide property={e} index={index} key={index} />
					))}
				</div>
			</div>
			<Dots properties={properties} current={current} onClick={handleDotsClick}/>
		</div>
	);
};

Slideshow.propTypes = {
	images: PropTypes.array.isRequired,
};

export default Slideshow;
