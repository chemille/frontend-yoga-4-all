import React from "react";
import { Entry } from "../types/entry";
import { SingleEntry } from "./SingleEntry";

interface props {
  entries: Entry[];
  setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
}

const DiaryEntries: React.FC<props> = ({ entries, setEntries }) => {
  return (
    <div className="todos">
      {entries?.map((entry) => (
        <SingleEntry
          entries={entries}
          entry={entry}
          key={entry.id}
          setEntries={setEntries}
        />
      ))}
    </div>
  );
};

export default DiaryEntries;
