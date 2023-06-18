const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

const port = process.env.PORT;

//         port
app.listen(port, () => {
  console.log("server running successfully");
});
