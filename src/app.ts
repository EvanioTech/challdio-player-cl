import express, {Request, Response} from "express";

import routes from "./routes";

function startServer() {

const app = express();

app.use(express.json());
app.use("/api", routes);

return app;


}


export default startServer;