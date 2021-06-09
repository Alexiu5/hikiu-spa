import PropTypes from 'prop-types';
import './figure.scss';

const figure = ({ customclass }) => {
	return <div className={`figure ${customclass}`}></div>;
};

figure.propType = {
	customclass: PropTypes.string,
};

export default figure;
