import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupsGegAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string){
    try{
        const storedGroups = await groupsGegAll();

        const groupAreadyExists = storedGroups.includes(newGroup);

        if(groupAreadyExists){
            throw new AppError('Já existe um groupo cadastrado com esse nome.')
        }
        
        const storage = JSON.stringify([...storedGroups, newGroup])
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    }catch(error){
        throw error;
    }
}