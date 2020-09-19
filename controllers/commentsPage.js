module.exports = {
    getComments: (req, res) => {
        res.render("admin_comments", {title: 'Liste des commentaires'})
    }
}