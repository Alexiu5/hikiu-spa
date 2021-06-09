import { PropTypes } from 'prop-types';
import './slideshow.scss';
import './grids.scss';

const Slide = ({ property, index }) => {
	const { name, images } = property;
	return (
		<div id={`slide-${index}`} className="slide">
			<div className={`grid-container grid-${index + 1}`}>
				{images.map((image, id) => (
					<img className="child" src={image} data-aos='flip-up' data-aos-duration='900'/>
				))}
			</div>
		
			<div className="slide-title">
				<span >{name}</span>
			</div>
		</div>
	);
};

Slide.proptypes = {
	property: PropTypes.object.isRequired,
};

export default Slide;
