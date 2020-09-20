module.exports = {
    getArticles: (req, res) => {
        res.render("admin_views/admin_articles", {title: "Liste des préstations"});
    },
    getAddArticle: (req, res) => {
        res.render("admin_views/admin_add_article", {title: "Ajouter un article"});
    }
}