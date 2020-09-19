module.exports = {
    getArticles: (req, res) => {
        res.render("admin_articles", {title: "Liste des articles"});
    }
}