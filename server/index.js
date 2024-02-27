import "dotenv/config";
import express from "express";
import initConnection from "./Database/initConnection.js";
import cors from "cors";
import clientRoutes from "./src/modules/clients/client.routes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(clientRoutes);

initConnection().then(() => {
  server.listen(6000, () => {
    console.log("Elgymaweya app listening");
  });
});
