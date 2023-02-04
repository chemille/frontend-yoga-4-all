import { useState, useEffect } from 'react'
import { Entry } from '../types/entry';
import { createEntry } from '../services/Api';
import { DiaryForm } from '../components/DiaryForm';

export function DiaryEntries() {
    const [entryData, setEntryData] = useState<Entry[] | null>();
    useEffect(() => {
      const postEntry = async () => {
        const data = await createEntry()
        setEntryData(data);
      }
      postEntry();
    }, [])

    console.log(entryData);

    return (
    <div>
        <DiaryForm />
    </div>
    )
}
