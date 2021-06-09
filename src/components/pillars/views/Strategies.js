import React, { useState } from 'react';
import ViewStra1 from './views_strategies/ViewStra1';
import ViewStra2 from './views_strategies/ViewStra2';
import ViewStra3 from './views_strategies/ViewStra3';
import ViewStra4 from './views_strategies/ViewStra4';

const Strategies = () => {
	const [data, setData] = useState(1);

	const handleNext = () => {
		if (data >= 0 && data < 4) {
			setData(data + 1);
		}
	};

	const handleBack = () => {
		if (data > 1 && data <= 4) {
			setData(data - 1);
		}
	};
	return (
		<>
			<div className="container" data-aos="flip-right" data-aos-duration="1200">
				<button onClick={() => handleBack()} className="btn-back">
					{' '}
					atras{' '}
				</button>

				<button onClick={() => handleNext()} className="btn-next">
					{' '}
					siguiente{' '}
				</button>

				{data === 1 && <ViewStra1 />}
				{data === 2 && <ViewStra2 />}
				{data === 3 && <ViewStra3 />}
				{data === 4 && <ViewStra4 />}
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

export default Strategies;
