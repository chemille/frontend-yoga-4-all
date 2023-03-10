import React from "react";
import "./cardStyles.css";
import { useState, useEffect } from "react";
import { fetchReflexData } from "../services/Api";
import { MultipleReflexes } from "../types/reflex";
import downwardDog from "../resources/downwardDog.jpg";
// import styled from "styled-components";

function Home() {
  const [reflexData, setReflexData] = useState<MultipleReflexes[] | null>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReflexData()
      setReflexData(data);
    }
    fetchData();
  }, [])

  return (
    <>
    <section className="card-section">
    {reflexData ? reflexData.map((reflex) => {
    return  (
        <div className="card">
          <div className="flip-card">
            <div className="flip-card__container">
              <div className="card-front">
                <div className="card-front__tp card-front__tp--city">
                  <div className="cardFont">
                    <p>{reflex.title}</p>
                  </div>
                </div>        
                <div className="card-front__bt">
                  <p className="card-front__text-view card-front__text-view--city">
                    View me
                  </p>
                </div>
              </div>
              <div className="card-back">
                {/* Currently hard-coded to render image */}
                {/* <img className="img_area" src="https://imgur.com/YJzynW4.jpg" alt='pose' /> */}
                <img src={downwardDog} alt="Downward Dog" className="imageContainer" />
              </div>
            </div>
          </div>

          <div className="inside-page">
            <div className="inside-page__container">
              <h3 className="inside-page__heading inside-page__heading--city">
                For {reflex.title} ...
              </h3>
              <p className="inside-page__text"></p>
              <a href={`/reflex/${reflex.reflex_id}`} 
                className="inside-page__btn inside-page__btn--city"
              >
                Click for exercises!
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
