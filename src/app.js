const express = require("express");
const MensRanking = require("../src/models/mens");
require("./db/conn");
const router = require("../src/routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
});