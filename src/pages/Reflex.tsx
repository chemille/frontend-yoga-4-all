// import { useState } from "react";
import Home from "../components/Home";
// import { fetchOneReflex } from '../services/Api';
import { SingleReflex } from '../types/reflex';
import { useState, useEffect } from "react";
import { fetchOneReflex } from "../services/Api";
// import downwardDog from "./resources/downwardDog.jpg";


export const Reflex = (props: any) => {
    const params = props.match.params

    const [oneReflex, setOneReflex] = useState<SingleReflex | undefined>(undefined); 

    useEffect(() => {
        const getOneReflex = async () => {
            const oneReflex = await fetchOneReflex(params.reflexId)
            console.log(oneReflex)
            setOneReflex(oneReflex);
        }
        getOneReflex();
    }, [params])
    
    //     console.log("oneReflex", oneReflex);

    if(oneReflex === undefined){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Reflex: {oneReflex.title}</h1>    
        </div> 
        );
    };
    
