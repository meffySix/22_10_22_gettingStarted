let express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.render("helloWorld.ejs");
});

app.listen(3000);