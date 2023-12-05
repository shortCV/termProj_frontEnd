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
            <div className="Gradient col-sm-12">
                <div className="p-4 d-flex justify-content-center" >
                    <img src={placeHold} height="370px" width="370px" className="p-2" alt="artist image"/>
                    <div>
                        <h1 className="p-2" style={{color: "white"}}>{songs}</h1>
                        <h4 className="p-2" style={{color: "lightblue"}}>Taylor Swift</h4>
                        <h5 className="p-2" style={{color: "gray"}}>Produced by:</h5>
                        <h5 className="p-2" style={{color: "gray"}}>Written by:</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className="p-2 col-sm-8 .col-8 .col-md-8 px-4" style={{color: "lightblue"}} >
                        Extra Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    </h5>
                </div>


            </div>
            <div className="Gradient p-4" >
                <br/>
                <hr style={{color: "white"}}/>
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