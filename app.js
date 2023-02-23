const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();
app.use("/api/contacts", contactsRouter);
app.use(cost());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({ message: "Wellcome to contact book application."});
});

module.exports = app;