const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.path = {
      auth: "/api/auth",
    };

    //base de datos
    this.connectionDB();
    //middlewares
    this.middlewares();
    //rutas de mi app
    this.routes();
  }

  async connectionDB() {}

  middlewares() {
    //cors
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.path.auth, require("../routes/auth"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
