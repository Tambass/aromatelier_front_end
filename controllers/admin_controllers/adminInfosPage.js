module.exports = {
    getAdminInfos: (req, res) => {
        res.render("admin_views/admin_infos", {title: "Vos informations"})
    },
    getEditInfosPage: (req, res) => {
        res.render("admin_infos_edit", {title: "Modifier votre profile"})
    },
};