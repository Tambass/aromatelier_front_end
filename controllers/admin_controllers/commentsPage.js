module.exports = {
    getComments: (req, res) => {
        res.render("admin_views/admin_comments", {title: 'Liste des commentaires'})
    }
}