module.exports = {
    getAdminInfos: (req, res) => {
        res.render("admin_infos", {title: "Vos informations"})
    }
}