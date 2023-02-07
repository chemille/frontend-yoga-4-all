import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { DiaryEntry } from "../types/entry";
import axios from 'axios';

export const SingleEntry: React.FC<{
  entry: DiaryEntry;
  entries: DiaryEntry[];
  setEntries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}> = ({ entry, entries, setEntries }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editEntry, setEditEntry] = useState<string>(entry.entry);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const url = `https://yoga-4-all-backend.herokuapp.com/diary/${id}`;
    axios.put(url, { entry: editEntry })
    .then((response) => {
      setEntries(
        entries.map((entry) =>
          entry.diary_id === id ? { ...entry, entry: editEntry } : entry
        )
      );
    })
    setEdit(false);
  };

  const handleDelete = (id: number) => { 
    const url = `https://yoga-4-all-backend.herokuapp.com/diary/${id}`;
    axios
      .delete(url)
      .then(() => {
        // setEntries(entries.filter((entry) => entry.diary_id !== id));
        setEntries((entries) => entries.filter((entry) => entry.diary_id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, entry.diary_id)}>
      {edit ? (
        <input
          value={editEntry}
          onChange={(e) => setEditEntry(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : entry.posted_at ? (
        <span className="todos__single--text">{entry.entry}</span>
      ) : (
        <span className="todos__single--text">{entry.entry}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(entry.diary_id)}>
          <AiFillDelete />
        </span>
      </div>
    </form>
  );
};