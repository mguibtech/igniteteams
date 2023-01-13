import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPLayer: PlayerStorageDTO, group: string){
    try{
        const storagePlayers = await playersGetByGroup(group)

        const playerAlreadyExists = storagePlayers.filter(player => player.name === newPLayer.name)

        if(playerAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já esta adicionada em um time aqui');
        }

        const storage = JSON.stringify([...storagePlayers, newPLayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    }catch(error){
        throw(error)
    }
}