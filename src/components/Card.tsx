import React from 'react'
import './cardStyles.css'


function Card() {

    return (
        <>
        <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--city">

                                <h2 className="card-front__heading">
                                    Card map
                                    {/* Need map through cards*/}
                                </h2>
                                <p className="card-front__text-price">
                                    From £29
                                </p>
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
                                As cities never sleep, there are always something going on, no matter what time!
                                </p>
                                <a href="/STNR" className="inside-page__btn inside-page__btn--city">View deals</a>
                            </div>
                        </div>
                    </div>
                </section>
        
        </>
    )
}

export default Card