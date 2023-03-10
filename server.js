require("dotenv").config();
const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);

const PORT = process.env.PORT || 800;
server.listen(PORT, () => {
  console.log(`server listening port ${PORT}`);
});
