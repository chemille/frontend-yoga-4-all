import React from "react";
import "./cardStyles.css";
import axios from "axios";
import { useState, useEffect } from "react";

export type ReflexList = {
  reflex_id: number;
  title: string;
};

function Home() {
  const [reflexData, setReflexData] = useState<ReflexList[] | null>();
  useEffect(() => {
    const url = "https://yoga-4-all-backend.herokuapp.com/reflex";
    axios.get(url).then((response) => {
      setReflexData(response.data);
    });
  }, []);
  console.log(reflexData);

  return (
    <>
    <section className="card-section">
    {reflexData
                      ? reflexData.map((reflex) => {
    return  (
        <div className="card">
          <div className="flip-card">
            <div className="flip-card__container">
              <div className="card-front">
                <div className="card-front__tp card-front__tp--city">
                  <h2 className="card-front__heading">
                    {/* {reflexData
                      ? reflexData.map((reflex) => { */}
                        <p>{reflex.title}</p>
                        {/* })
                      : null} */}
                    {/* Need map through cards*/}
                  </h2>
                  <p className="card-front__text-price">Reflex Name</p>
                </div>
        
                <div className="card-front__bt">
                  <p className="card-front__text-view card-front__text-view--city">
                    View me
                  </p>
                </div>
              </div>
              <div className="card-back">
                <img className="img_area" src="" />
              </div>
            </div>
          </div>

          <div className="inside-page">
            <div className="inside-page__container">
              <h3 className="inside-page__heading inside-page__heading--city">
                For urban lovers
              </h3>
              <p className="inside-page__text">
                As cities never sleep, there are always something going on, no
                matter what time!
              </p>
              <a
                href={`/${reflex.title}`} // gives you the name of the reflex as the endpoint
                className="inside-page__btn inside-page__btn--city"
              >
                View deals
              </a>
            </div>
          </div>
        </div>
     );
          })
          : null}
          </section>
    </>
  );
}

export default Home;
