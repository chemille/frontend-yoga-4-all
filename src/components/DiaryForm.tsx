import React, { useRef } from "react";
// import "./styles.css";

interface props {
  entry: string;
  setEntry: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const DiaryForm: React.FC<props> = ({ entry, setEntry, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter an Entry"
        value={entry}
        ref={inputRef}
        onChange={(e) => setEntry(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

