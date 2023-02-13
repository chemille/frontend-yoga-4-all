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
      fetchEntries();
      }, []); 

    const createNewEntry = (newEntry: any)=> {
      const url = "https://yoga-4-all-backend.herokuapp.com/diary";
      axios.post(url, newEntry)
      .then(response => {
          const newEntry = [...entries];
          fetchEntries();
      }).catch(error => {
          console.log(error);
      });
      
      return newEntry.data;
      };


    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      fetchEntries();
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
  