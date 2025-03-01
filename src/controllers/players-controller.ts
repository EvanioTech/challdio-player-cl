import { Request, Response } from 'express';
import { getPlayerByIdService, getPlayerService } from '../services/players-service';


export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };


  export const getPlayersById = async (req: Request, res: Response) => {
    const  id  = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);

  };

  export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    console.log(bodyValue);
    

  };