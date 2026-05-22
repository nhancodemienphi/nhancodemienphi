const express = require("express");
const bodyParser = require("body-parser");
const taiKhoanRouter = require("./routers/taiKhoanRouter");
const giaoDienRouter = require("./routers/giaoDienRouter");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
// async function connectDB() {
//   await mongoose.connect(
//     "mongodb+srv://codetuan:codetuan@cluster0.btte2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
// }

// connectDB();
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", giaoDienRouter);
app.use("/api", taiKhoanRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port ");
});
