import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { Link, useLocation } from 'react-router-dom';
import placeHold from './images/placeholder-image-dark.jpg'
import { CDBRating, CDBContainer } from 'cdbreact';


//rating: https://www.devwares.com/docs/contrast/react/components/rating/
const SongDisplay = () => {
    const location = useLocation();
    const songs = new URLSearchParams(location.search).get("songs");
    return(
        <div>
            <Navbar/>
            <div className="Gradient ">
                <div className="p-4 d-flex justify-content-center" >
                    <img src={placeHold} height="370px" width="370px" className="p-2" alt="artist image"/>
                    <div>
                        <h1 className="p-2" style={{color: "white"}}>{songs}</h1>
                        <h4 className="p-2" style={{color: "lightblue"}}>Artists Names</h4>
                        <h4 className="p-2" style={{color: "lightblue"}}>Details</h4>
                        <h4 className="p-2" style={{color: "lightblue"}}>Details</h4>
                        <h4 className="p-2" style={{color: "lightblue"}}>Details</h4>
                    </div>
                </div>
                <hr style={{color: "white"}}/>
            </div>
            <div className="Gradient p-4" >
                <div className="p-2 ">
                    <h1  style={{color: "white"}}> Review</h1>
                    <div className="p d-flex">
                        <input type="text" className="form-control  w-25" name="" placeholder="Review title " />
                        <CDBContainer>
                            <CDBRating feedback />
                        </CDBContainer>
                    </div>
                    <br/>
                    <textarea className="form-control p-2" rows="3" name="" placeholder="Write your review" />
                    <div className="col-md-12 text-end p-2">
                        <Link to={`/`}>
                            <button className="btn btn-primary">
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>About</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Help</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>FAQ</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Top 10</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Socials</h5>
                </div>
            </div>
        </div>
    )
}
export default SongDisplay;