import axios from "axios";
import { ReflexList } from "../types/reflex";

export const fetchReflexData = async (): Promise<ReflexList[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/reflex";
    const reflexData = await axios.get(url)

    return reflexData.data;
}