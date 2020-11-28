const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

// start the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));