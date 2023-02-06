import { useState } from 'react'
import { Entry } from '../types/entry';
// import { fetchAllEntries } from '../services/Api';
import { DiaryForm } from '../components/DiaryForm';
import DiaryEntries from "../components/DiaryEntries";
// import axios from 'axios';
// export{}

export const Diary: React.FC = () => {
    const [entry, setEntry] = useState<string>("");
    const [entries, setEntries] = useState<Entry[]>([]);
  
    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (entry) {
        setEntries([...entries, { id: Date.now(), entry, isDone: false }]);
        setEntry("");
      }
    };
  
    return (
      <div className="App">
        <span className="heading">Diary Entries Page</span>
        <DiaryForm entry={entry} setEntry={setEntry} handleAdd={handleAdd} />
        <DiaryEntries entries={entries} setEntries={setEntries} />
      </div>
    );
  };
  