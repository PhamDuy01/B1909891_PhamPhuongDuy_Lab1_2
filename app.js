
const contactsRouter = require("./app/routes/contact.route");

app.use("/api/contacts", contactsRouter);

module.exports = app;