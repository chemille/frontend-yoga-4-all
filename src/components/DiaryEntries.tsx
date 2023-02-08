import React from "react";
import { DiaryEntry } from "../types/entry";
import { SingleEntry } from "./SingleEntry";

interface props {
  entries: DiaryEntry[];
  setEntries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}

const DiaryEntries: React.FC<props> = ({ entries, setEntries }) => {

  return (
    <div className="entries">
      {entries?.map((entry) => (
        <SingleEntry
          entries={entries}
          entry={entry}
          key={entry.diary_id}
          setEntries={setEntries}
        />
      ))}
    </div>
  );
};

export default DiaryEntries;
