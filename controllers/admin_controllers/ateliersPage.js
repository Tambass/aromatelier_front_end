module.exports = {
    getAteliers: (req, res) => {
        res.render("admin_views/admin_ateliers", {title: "Liste de vos ateliers"});
    }
}