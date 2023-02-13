import { useState } from "react";
import axios from 'axios';

interface props {
  entry: string;
  setEntry: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const DiaryForm: React.FC<props> = ({ entry, setEntry, handleAdd }) => {
  const [formData, setFormData] = useState<{entry: string, posted_at: string}>({ 
    entry: "",
    posted_at: ""
  })

  const handleChange = (e: any) => {
    setFormData(prevFormData => {
      return { 
        ...prevFormData,
        [e.target.name]: e.target.value 
      }
    }) 
  }

  const createNewEntry = (e: any)=> {
    e.preventDefault();
    const url = "https://yoga-4-all-backend.herokuapp.com/diary";
    axios.post(url, { ...formData, posted_at: new Date() })
    .then(response => {
      handleAdd(e);
      setFormData({
        entry: "",
        posted_at: ""
      });
      console.log(response.data);
    }) 
    .catch(error => {
        console.log(error);
    });
    };

  return (
    <form
      className="input"
      onSubmit={createNewEntry}
    >
      <input
        type="text"
        placeholder="Type your entry here."
        value={formData.entry}
        name="entry"
        onChange={handleChange}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Submit
      </button>
    </form>
  );
};

