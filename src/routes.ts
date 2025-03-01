import { Router} from "express";
import { getPlayer, getPlayersById, postPlayer } from "./controllers/players-controller";



const routes = Router();

routes.get("/players", getPlayer);
routes.get("/players/:id", getPlayersById);
routes.post("/players", postPlayer);


export default routes;