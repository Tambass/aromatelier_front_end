const express = require('express')
var path = require('path');
const app = express();
const port = 1987;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));
app.get('/',function (req, res) {
res.render('admin_home_page', {title: "Bienvenue"})
});
app.listen(port, () => {
    console.log('Le server écoute le port : ', port);
});