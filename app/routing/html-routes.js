const path = require('path');

module.exports = (app) =>{
	// var home = '../public/home.html'
	// app.use('/', home);

	app.get('/', (req, res) =>{
		res.sendFile(path.join(__dirname, '../public/home.html'))
	});

	app.get('/survey', (req, res) =>{
		res.sendFile(path.join(__dirname, '../public/survey.html'))
	});
};