import { Router, Request,Response } from "express";
import { getPlayer } from "./controllers/players-controller";


const routes = Router();

routes.get("/players", getPlayer);


export default routes;