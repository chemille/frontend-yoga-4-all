import { useState, useEffect } from 'react'
import { DiaryEntry } from '../types/entry';
import { fetchAllEntries } from '../services/Api';
import { DiaryForm } from '../components/DiaryForm';
import DiaryEntries from "../components/DiaryEntries";
import axios from 'axios';


export const Diary: React.FC = () => {
    const [entry, setEntry] = useState<string>("");
    const [entries, setEntries] = useState<DiaryEntry[]>([]);

    const fetchEntries = async () => {
      const entries = await fetchAllEntries()
      setEntries(entries);
  }

    // GET ALL ENTRIES //
    useEffect(() => {
      // const fetchEntries = async () => {
      //     const entries = await fetchAllEntries()
      //     setEntries(entries);
      // }
      fetchEntries();
      }, []); // If we have the empty array, the new entry won't show up right away when we click submit
      // If we remove the empty array, the new entry renders upon clicking submit, but the console continues to load infinitely
      // We tried [entry, setEntry] which makes the console stop loading, but it won't render the submitted entry right away

    const createNewEntry = (newEntry: any)=> {
      const url = "https://yoga-4-all-backend.herokuapp.com/diary";
      axios.post(url, newEntry)
      .then(response => {
          const newEntry = [...entries];
          fetchEntries();
      //     newEntry.push({
      //         diary_id: response.data.diary_id,
      //         entry: response.data.entry,
      //         posted_at: response.data.posted_at
      // });
        //     console.log("newEntry", newEntry);
        // setEntries(newEntry);
      }).catch(error => {
          console.log(error);
      });
      
      // console.log(newEntry.data);
      return newEntry.data;
      };


    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      fetchEntries();
      // createNewEntry(FormData) // make a state to hold formData and use the setters that you get back from the state to keep track
      // then send that formData back inside of that fx
    };

    // Create a toggle botton to show/hide diary form
    const [showForm, setShowForm] = useState(true);
    const toggleNewDiaryForm = () => {setShowForm(!showForm)}
  
    return (
      <div className="App">
        <h1 className="heading">Diary Entries Page</h1>
        {showForm ? <DiaryForm entry={entry} setEntry={setEntry} handleAdd={handleAdd} /> : ''}
        <button onClick={toggleNewDiaryForm} className='hideButton'>{showForm ? 'Hide Diary Form' : 'Show Diary Form'}</button>
        <DiaryEntries entries={entries} setEntries={setEntries} />
      </div>
    );
  };
  