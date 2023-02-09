// import { useState } from "react";
import Home from "../components/Home";
// import { fetchOneReflex } from '../services/Api';
import { SingleReflex } from "../types/reflex";
import { useState, useEffect } from "react";
import { fetchOneReflex } from "../services/Api";
// import downwardDog from "./resources/downwardDog.jpg";

export const Reflex = (props: any) => {
  const params = props.match.params;

  const [oneReflex, setOneReflex] = useState<SingleReflex | undefined>(
    undefined
  );

  useEffect(() => {
    const getOneReflex = async () => {
      const oneReflex = await fetchOneReflex(params.reflexId);
      console.log(oneReflex);
      setOneReflex(oneReflex);
    };
    getOneReflex();
  }, [params]);

  //     console.log("oneReflex", oneReflex);

  if (oneReflex === undefined) {
    return <div>Loading...</div>; // loading will be an error msg
  }

  return (
    <>
      <div>
        <h1>Reflex: {oneReflex.title}</h1>
      </div>
      <div>
        <div>
          Videos:
          <iframe
            width="560"
            height="315"
            // src={`${oneReflex.videos}`}
            src='https://www.youtube.com/embed/xnbfmiO_Wp4' 
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
          {/* {oneReflex.videos} */}
        </div>
      </div>
      <div>
        <h3>Education: {oneReflex.education}</h3>
      </div>
    </>
  );
};
