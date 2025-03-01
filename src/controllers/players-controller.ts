import { Request, Response } from 'express';
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService } from '../services/players-service';
import { noContent } from '../utils/http-helper';


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
    const httpResponse = await createPlayerService(bodyValue);
    
    if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }else{
    const response = await noContent();
    console.log(response);
    res.status(response.statusCode).json(response.body);
  };
  }

  export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id); // aqui pego o id e trago convertido pelo parseint pois ele vem em string
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };