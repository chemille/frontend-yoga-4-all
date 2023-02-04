import axios from "axios";
import { ReflexList } from "../types/reflex";
import { Entry } from "../types/entry";

// GET all reflexes
export const fetchReflexData = async (): Promise<ReflexList[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/reflex";
    const reflexData = await axios.get(url)

    return reflexData.data;
}

// CREATE new diary entry
export const createEntry = async (): Promise<Entry[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/diary";
    const entryData = await axios.post(url)

    return entryData.data
}