const express = require('express')
var path = require('path');
const app = express();
const port = 1987;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

// controllers
const {getAdminPage} = require("./controllers/adminPage")
const {getAdminInfos} = require("./controllers/adminInfosPage");
const {getArticles} = require("./controllers/articlesPage");

// routes

app.get('/admin', getAdminPage);
app.get('/admin/infos', getAdminInfos);
app.get('/admin/articles', getArticles);


app.listen(port, () => {
    console.log('Le server écoute le port : ', port);
});