import { PlayerModel } from "../models/player-model";



const database: PlayerModel[] = [
    {
        id: 1,
        name: 'Messi',
    },
    {
        id: 2,
        name: 'Cristiano Ronaldo',
    },
    {
        id: 3,
        name: 'Neymar',
    },
    {
        id: 4,
        name: 'Mbappé',
    },
    {
        id: 5,
        name: 'Haaland',
    },
    {
        id: 6,
        name: 'Lewandowski',
    },
    {
        id: 7,
        name: 'De Bruyne',
    },
    {
        id: 8,
        name: 'Kanté',
    },
    {
        id: 9,
        name: 'Van Dijk',
    },
    {
        id: 10,
        name: 'Kimmich',
    }
    ];  


    export const findAllPlayers = async (): Promise<PlayerModel[]> => {
      return database;
    };

    export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
      return database.find(player => player.id === id) || null;
    };

    export const postPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
      database.push(player);
      return player;
    }

    export const insertPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
      database.push(player);
      return player;
    }

    export const deletePlayer = async (id: number): Promise<PlayerModel[]> => {
      const playerIndex = database.findIndex(player => player.id === id);
      database.splice(playerIndex, 1);
      return database;
    }