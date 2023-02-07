import React, { useRef } from "react";
import { useState } from "react";
import { DiaryEntry } from '../types/entry';
import axios from 'axios';
// import "./styles.css";

interface props {
  entry: string;
  setEntry: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const DiaryForm: React.FC<props> = ({ entry, setEntry, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<{entry: string, posted_at: string}>({ 
    entry: "",
    posted_at: ""
  })

  const handleChange = (e: any) => {
    setFormData(prevFormData => {
      return { 
        ...prevFormData,
        [e.target.name]: e.target.value // we're going use the event target info in order to 
        //dynamically update our formData
      }
    }) // just references the formData on line15
  }

  const createNewEntry = (e: any)=> {
    e.preventDefault();
    const url = "https://yoga-4-all-backend.herokuapp.com/diary";
    axios.post(url, { ...formData, posted_at: new Date() })
    .then(response => {
    //     const newEntry = [...entries]; // same thing as line 21
    //     newEntry.push({
    //         diary_id: response.data.diary_id,
    //         entry: response.data.entry,
    //         posted_at: response.data.posted_at
    // });
    // setEntries(newEntry);
    console.log(response.data);
    }) 
    .catch(error => {
        console.log(error);
    });
    
    // console.log(newEntry.data);
    // return newEntry.data;
    };

  console.log(formData);

          // inputRef.current?.blur();

  return (
    <form
      className="input"
      onSubmit={createNewEntry}
    >
      <input
        type="text"
        placeholder="Enter an Entry"
        value={formData.entry}
        name="entry"
        ref={inputRef}
        onChange={handleChange}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

