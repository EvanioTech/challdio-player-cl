import { Router} from "express";
import { deletePlayer, getPlayer, getPlayersById, postPlayer } from "./controllers/players-controller";



const routes = Router();

routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayersById);
routes.post("/players", postPlayer);
routes.delete("/players/:id", deletePlayer);


export default routes;