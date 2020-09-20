module.exports = {
    getAdminPage: (req, res) => {
        res.render("admin_views/admin_home_page", {title: 'Bienvenue'})
    }
}