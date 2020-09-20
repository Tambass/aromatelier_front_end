const express = require('express')
var path = require('path');
const app = express();
const port = 1987;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

// ------CONTROLLERS------
const {getAdminPage} = require("./controllers/admin_controllers/adminPage");
const {getAdminInfos, getEditInfosPage} = require("./controllers/admin_controllers/adminInfosPage");
const {getArticles} = require("./controllers/admin_controllers/articlesPage");
const {getAteliers} = require("./controllers/admin_controllers/ateliersPage");
const {getComments} = require("./controllers/admin_controllers/commentsPage");

// ------ROUTES------

// Page d'accueil de l'administration
app.get('/admin', getAdminPage);

// Page des informations de l'administrateur
app.get('/admin/infos', getAdminInfos);
app.get('/admin/infos/edit_infos', getEditInfosPage);

// Page des prestations
app.get('/admin/articles', getArticles);

// Page des ateliers
app.get('/admin/ateliers', getAteliers);

// Page des commentaires
app.get('/admin/comments', getComments);

// Page des inscrits


app.listen(port, () => {
    console.log('Le server écoute le port : ', port);
});