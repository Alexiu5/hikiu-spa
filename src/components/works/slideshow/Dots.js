import PropTypes from 'prop-types';

const Dots = ({ properties, current, onClick }) => {
	return (
		<div className="dots-container">
			{properties.map((dot, index) => (
				<span
					id={`dot-${index}`}
					className={current.index === index ? 'dot active' : 'dot'}
					onClick={() => onClick(index)}
				></span>
			))}
		</div>
	);
};

Dots.propTypes = {
	properties: PropTypes.array,
	current: PropTypes.number,
	onClick: PropTypes.func,
};

export default Dots;
