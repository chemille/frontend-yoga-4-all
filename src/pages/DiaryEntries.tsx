import { useState, useEffect } from 'react'
import { Entry } from '../types/entry';
import { fetchAllEntries } from '../services/Api';
import { DiaryForm } from '../components/DiaryForm';
// import axios from 'axios';

export function DiaryEntries() {
    // state variable for all entries 
    const [entryData, setEntryData] = useState<Entry[] | null>();
    useEffect(() => {
    const fetchEntries = async () => {
        const entries = await fetchAllEntries()
        setEntryData(entries);
    }
    fetchEntries();
    }, [])

    // console.log(entryData);


    return (
        <section>
            {entryData ? entryData.map((entry) => {
                console.log(entry)
        return( 
        //   <p>{entry.entry}</p>
        //   );
        // })
        // : null})
        <div className="entryContainer">
            <p className="entryMessage"> {entry.entry}</p>
            <button className="editButton">EDIT</button>
            <button className="deleteButton">DELETE</button>
        </div>
        );
        })
        : null}
    
            <div>
                <DiaryForm />
            </div>
        </section>
    )
}
