const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");
const DB = process.env.DATABASE;

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shut down server!");
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"))
  .catch(() => console.log("DB connection Fail!"));
const port = process.env.PORT || 3308;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shut down server!");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
