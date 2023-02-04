import { useState } from "react";

const defaultFormData = {
  entry: "",
  posted_at: ""
}

export function DiaryForm() {
    const[formData, setFormData] = useState(defaultFormData);
    const { entry, posted_at } = formData

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);

      setFormData(defaultFormData);
    };

    return (
      <>
      <h1>Form</h1>
      <p>Create an entry</p>

      <form onSubmit={onSubmit}>
      <label htmlFor="title">Entry</label>
      <br />
      <input type="text" id="entry" value={entry} onChange={onChange} />
      <br />
      <br />
      <label htmlFor="body">Posted</label>
      <br />
      <input type="text" id="posted_at" value={posted_at} onChange={onChange} />
      <br />
      <br />
      <button type="submit">Upload Post</button>
      </form>
      </>
    );
  }
