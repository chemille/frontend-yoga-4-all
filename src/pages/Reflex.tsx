import Home from "../components/Home";
// import axios from "axios";
// import { useState, useEffect } from "react";
import downwardDog from "./resources/downwardDog.jpg";

// export type oneReflex = {
//     reflex_id: number;
//     title: string;
//     education: string;
//     videos: Array<string>;
// };
    
export function Reflex() {
    // const [oneReflex, setOneReflex] = useState<oneReflex>();
    // useEffect(() => {
    //     const url = `https://yoga-4-all-backend.herokuapp.com/${oneReflex}`;
    //     axios.get(url).then((response) => {
    //         setOneReflex(response.data);
    //     });
    // }, []);
    // console.log(oneReflex);

    return (
        <div>
            <h1>Reflex</h1>
        <div> 
        <img src={downwardDog} alt=""/>
        </div>
        </div>
    );
}