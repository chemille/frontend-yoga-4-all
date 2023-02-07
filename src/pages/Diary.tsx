import { useState, useEffect } from 'react'
import { DiaryEntry } from '../types/entry';
import { fetchAllEntries, createNewEntry } from '../services/Api';
import { DiaryForm } from '../components/DiaryForm';
import DiaryEntries from "../components/DiaryEntries";
import { SingleEntry } from '../components/SingleEntry';
// import axios from 'axios';
// export{}


export const Diary: React.FC = () => {
    const [entry, setEntry] = useState<string>("");
    const [entries, setEntries] = useState<DiaryEntry[]>([]);

    // GET ALL ENTRIES //
    useEffect(() => {
      const fetchEntries = async () => {
          const entries = await fetchAllEntries()
          setEntries(entries);
      }
      fetchEntries();
      }, [])
    
      console.log(entries);
    ///////////////////////

    // useEffect(() => {
    //   const postNewEntry = async () => {
    //     // how do we push a new entry into the exisiting entries? 
    //     const newEntry = await createNewEntry()
    //     if (entry) {
    //       setEntries([...entries, { id: Date.now(), entry, isDone: false }]);
    //       setEntry("");
    //     newEntry.push();
    //     // createNewEntry(entry);
    //     }
    //     createNewEntry()
    //   } 
    // }, [])

    ///////////////////////
    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      // createNewEnty()
      // if (entry) {
      //   setEntries([...entries, { diary_id, entry: entry, posted_at }]);
      //   setEntry("");
      // }
    };
  
    return (
      <div className="App">
        <span className="heading">Diary Entries Page</span>
        {/* <SingleEntry createNewEntry={createNewEntry} /> */}
        <DiaryForm entry={entry} setEntry={setEntry} handleAdd={handleAdd} />
        <DiaryEntries entries={entries} setEntries={setEntries} />
      </div>
    );
  };
  