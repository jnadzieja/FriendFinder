const express = require("express");
const apiRoutes = require("./app/routing/apiRoutes")
const htmlRoutes = require("./app/routing/htmlRoutes")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
  console.log("Server started on Port 3000...");
});