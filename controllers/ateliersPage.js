module.exports = {
    getAteliers: (req, res) => {
        res.render("admin_ateliers", {title: "Liste de vos ateliers"});
    }
}