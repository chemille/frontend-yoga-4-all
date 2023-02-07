import axios from "axios";
import { ReflexList } from "../types/reflex";
import { DiaryEntry } from "../types/entry";
// import { useState } from "react";

// GET all reflexes
export const fetchReflexData = async (): Promise<ReflexList[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/reflex";
    const reflexData = await axios.get(url)

    return reflexData.data;
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
export const createNewEntry = async (): Promise<DiaryEntry[]> => {
    const url = "https://yoga-4-all-backend.herokuapp.com/diary";
    const newEntry = await axios.post(url) // put json body right after url
    
    console.log(newEntry.data);
    return newEntry.data;
}