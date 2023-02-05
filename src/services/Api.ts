import axios from "axios";
import { ReflexList } from "../types/reflex";
import { Entry } from "../types/entry";
import { useEffect, useState } from "react";

// GET all reflexes
export const fetchReflexData = async (): Promise<ReflexList[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/reflex";
    const reflexData = await axios.get(url)

    return reflexData.data;
}

// GET ALL DIARY ENTRIES
export const fetchAllEntries = async (): Promise<Entry[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/diary";
    const entryData = await axios.get(url)

    return entryData.data;
}

// GET ONE DIARY ENTRY
export const getOneEntry = async (): Promise<Entry[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/diary/<diary_id>";
    const entry = await axios.get(url)

    console.log(entry.data);
    return entry.data;
}

// CREATE NEW DIARY ANOTHER WAY
// export const createEntry = () => {
//     const [entryData, setEntryData] = useState<Entry{}>;
    
//     useEffect(() => {
//     const url = "https://yoga-4-all-backend.herokuapp.com/diary";
//     axios.post(url).then((response) => {
//         setEntryData(response.data);
//     });
//   }, []);
// }