UA = require("./UA.js").class
login = require("./login.js").fn 
keep_page = require("./keep-page.js").fn

ua = keep_page login new UA

ua.run "page/open", "http://localhost:3000/login"
