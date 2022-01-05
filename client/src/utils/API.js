import axios from 'axios';

axios.get('/api/reviews').then((response) => {
	console.log(response.data);
	console.log(response.status);
	console.log(response.statusText);
	console.log(response.headers);
	console.log(response.config);
});
