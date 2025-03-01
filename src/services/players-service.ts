import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import { badRequest, noContent, ok, created } from "../utils/http-helper";


export const getPlayerService = async () => {

const data = await PlayerRepository.findAllPlayers();
let response = null


if (data) {
  response = await ok(data);
}else{
  response = await noContent();
}


  return response
};


export const getPlayerByIdService = async (id: number) => {

  const data = await PlayerRepository.findPlayerById(id);
  let response = null
  
  
  if (data) {
    response = await ok(data);
  }else{
    response = await noContent();
  }

    return response
  };


  export const createPlayerService = async (player: PlayerModel) => {
   
   let response = null;
    
    if (Object.keys(player).length > 0) {
      response = await PlayerRepository.insertPlayer(player);
      response = await created(response);
    }else{
      response = badRequest(new Error('Player not found'));
    }
  
     return response;
    }

    export const deletePlayerService = async (id: number) => {
      let response = null;
      const player = await PlayerRepository.findPlayerById(id);
      if(player){
        response = await PlayerRepository.deletePlayer(id);
        response = await ok(response);
      }else{
        response = await noContent();
      }
      return response;
    }