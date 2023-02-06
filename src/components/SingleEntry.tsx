import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Entry } from "../types/entry";

export const SingleEntry: React.FC<{
  entry: Entry;
  entries: Entry[];
  setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
}> = ({ entry, entries, setEntries }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editEntry, setEditEntry] = useState<string>(entry.entry);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, entry: editEntry } : entry
      )
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleDone = (id: number) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isDone: !entry.isDone } : entry
      )
    );
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, entry.id)}>
      {edit ? (
        <input
          value={editEntry}
          onChange={(e) => setEditEntry(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : entry.isDone ? (
        <s className="todos__single--text">{entry.entry}</s>
      ) : (
        <span className="todos__single--text">{entry.entry}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !entry.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(entry.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(entry.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

