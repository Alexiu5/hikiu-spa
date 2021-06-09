import axios from 'axios';

const apiUrl = 'http://api-dev.hikiulab.com/api/email';

export const contactUs = (userInfo) => {
	return axios.post(apiUrl, userInfo, {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
};
