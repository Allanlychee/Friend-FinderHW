var path = require("path")

module.exports = function (app) {
    
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    /* GET Route to /survey which should display the survey page */
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    /* A default, catch-all route that leads to home.html*/
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
}