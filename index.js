const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/',function(req,res){
	res.render('index');
	
});

app.use(express.static('public'))

app.use(function(req,res){
	res.render('404');
});

app.listen( process.env.PORT || 8081, () => console.log('Server running on port 8081'))