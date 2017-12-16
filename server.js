const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
			return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

// middlewear
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home', {
		pageTitle: 'Home Page',
		welcomeMessage: "Hello there friend!"
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		pageTitle: 'About Page',
	});
});

app.get('/bad', (req, res) => {
	res.send({
		message: "404 Error"
	});
});

app.listen(3000, () => {
	console.log(`Server has started on port ${port}!`);
});