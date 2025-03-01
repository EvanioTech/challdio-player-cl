import express from "express";
import cors from "cors";

import routes from "./routes";

function startServer() {

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(cors());

return app;


}


export default startServer;