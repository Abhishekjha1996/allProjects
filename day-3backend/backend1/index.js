const express = require("express");
const app = express();
const { connecttion } = require("./db.js");
const { uregister } = require("./routes/register.route");
const { upost } = require("./routes/post.route");
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", uregister)
app.use("/post", upost)

app.listen(8080, async () => {
  try {
    await connecttion ;
    console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }

  console.log("server is running");
});
