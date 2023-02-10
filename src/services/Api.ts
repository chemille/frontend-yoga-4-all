import axios from "axios";
import { SingleReflex, MultipleReflexes } from "../types/reflex";
import { DiaryEntry } from "../types/entry";
// import { useState } from "react";

// GET all reflexes
export const fetchReflexData = async (): Promise<MultipleReflexes[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/reflex";
    const reflexData = await axios.get(url)

    return reflexData.data;
}

// GET one reflex
export const fetchOneReflex = async (reflexId: any): Promise<SingleReflex> => {
    const url = `https://yoga-4-all-backend.herokuapp.com/reflex/${reflexId}`; // need to string interpolate
    const reflex = await axios.get(url)

    return reflex.data.reflex;
}

// GET ALL DIARY ENTRIES
export const fetchAllEntries = async (): Promise<DiaryEntry[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/diary";
    const entryData = await axios.get(url)

    return entryData.data;
}

// GET ONE DIARY ENTRY
export const getOneEntry = async (): Promise<DiaryEntry[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/diary/<diary_id>";
    const entry = await axios.get(url)

    // console.log(entry.data);
    return entry.data;
}

// CREATE NEW DIARY ENTRY
// export const createNewEntry = async (newEntry): Promise<DiaryEntry[]> => {
//     const url = "https://yoga-4-all-backend.herokuapp.com/diary";
//     axios.post(url, newEntry)
//     .then(response => {
//         const newEntry = [...entries];
//         newEntry.push({
//             entry: response.data.entry,
//             posted_at: response.data.posted_at,
//             ...entries
//     });
//     setEntries(newEntry);
//     }) 
//     .catch(error => {
//         console.log(error);
//     });
    
//     console.log(newEntry.data);
//     return newEntry.data;
//     };