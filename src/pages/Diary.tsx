import { useState, useEffect } from 'react'
import { DiaryEntry } from '../types/entry';
import { fetchAllEntries } from '../services/Api';
import { DiaryForm } from '../components/DiaryForm';
import DiaryEntries from "../components/DiaryEntries";
import { SingleEntry } from '../components/SingleEntry';
import axios from 'axios';
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

    const createNewEntry = (newEntry: any)=> {
      const url = "https://yoga-4-all-backend.herokuapp.com/diary";
      axios.post(url, newEntry)
      .then(response => {
          const newEntry = [...entries];
          newEntry.push({
              diary_id: response.data.diary_id,
              entry: response.data.entry,
              posted_at: response.data.posted_at
      });
      setEntries(newEntry);
      }) 
      .catch(error => {
          console.log(error);
      });
      
      console.log(newEntry.data);
      return newEntry.data;
      };
    // do we need this handleAdd?? //
    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
    
      createNewEntry(FormData) // make a state to hold formData and use the setters that you get back from the state to keep track
      // then send that formData back inside of that fx
    };
  
    return (
      <div className="App">
        <h1 className="heading">Diary Entries Page</h1>
        {/* <SingleEntry createNewEntry={createNewEntry} /> */}
        <DiaryForm entry={entry} setEntry={setEntry} handleAdd={handleAdd} />
        <DiaryEntries entries={entries} setEntries={setEntries} />
      </div>
    );
  };
  