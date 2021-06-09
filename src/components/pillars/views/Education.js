import React, { useState } from 'react';
import ViewEdu1 from './views_education/ViewEdu1';
import ViewEdu2 from './views_education/ViewEdu2';
import ViewEdu3 from './views_education/ViewEdu3';
import ViewEdu4 from './views_education/ViewEdu4';
import IconLeft from '../../../assets/svg/left.svg';
import IconRight from '../../../assets/svg/right.svg';
import './views.scss';

const Education = () => {
	const [data, setData] = useState(1);

	const handleNext = () => {
		if (data < 4) {
			setData(data + 1);
		}
	};

	const handleBack = () => {
		if (data > 1) {
			setData(data - 1);
		}
	};
	return (
		<>
			<div className="container" data-aos="flip-right" data-aos-duration="1200">
				<button onClick={() => handleBack()} className="btn-back">
					flecha{' '}
				</button>
				<button onClick={() => handleNext()} className="btn-next">
					flecha{' '}
				</button>
				{data === 1 && <ViewEdu1 />}
				{data === 2 && <ViewEdu2 />}
				{data === 3 && <ViewEdu3 />}
				{data === 4 && <ViewEdu4 />}
			</div>

			<div className="active-views">
				{data === 1 ? <span className="active"></span> : <span></span>}
				{data === 2 ? <span className="active"></span> : <span></span>}
				{data === 3 ? <span className="active"></span> : <span></span>}
				{data === 4 ? <span className="active"></span> : <span></span>}
			</div>
		</>
	);
};

export default Education;
