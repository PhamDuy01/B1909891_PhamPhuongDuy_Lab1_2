
const contactsRouter = require("./app/routes/contact.route");
const ApiError= require("./app/api-error");
app.use("/api/contacts", contactsRouter);
app.use("/api/contacts", contactsRouter);
app.use((req,res,next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err,req,res,next) =>{
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;