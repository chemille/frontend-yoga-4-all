import { SingleReflex } from "../types/reflex";
import { useState, useEffect } from "react";
import { fetchOneReflex } from "../services/Api";
import "./reflexStyles.css";

export const Reflex = (props: any) => {
  const reflexId = window.location.pathname.split('/').at(-1);

  const [oneReflex, setOneReflex] = useState<SingleReflex | undefined>(
    undefined
  );

  useEffect(() => {
    const getOneReflex = async () => {
      const oneReflex = await fetchOneReflex(reflexId);
      console.log(oneReflex);
      setOneReflex(oneReflex);
    };
    getOneReflex();
  }, []);

  if (oneReflex === undefined) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <section className="section">
        <br></br>
      <div>
        <h1 className="center-header">Reflex: {oneReflex.title}</h1>
      </div>
      <div>
        <br></br>
        <div className="video-container">
          {/* Videos: */}
          {oneReflex.videos.map((video: any) => (
          <iframe
            className="video"
            width="560"
            height="315"
            src={`${video}`}
            // src='https://www.youtube.com/embed/xnbfmiO_Wp4' 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
      </div>
      <div>
      <br></br>
        <h3>Education: {oneReflex.education}</h3>
      </div>
      </section>
    </>
  );
};
