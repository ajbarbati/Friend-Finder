const path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join("C:/Users/Owner/documents/bootcamp/july/friend-finder/app/public/home.html"))
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join("C:/Users/Owner/documents/bootcamp/july/friend-finder/app/public/survey.html"))
})

}
