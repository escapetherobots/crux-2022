import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="app-content">
            <div className="grid-container">
            
            {/* MENU */}
            <div className="item2">
                
                <Link to="/ztest"><div className="zbtn">Code Stuff</div></Link>
                <div className="zbtn">Illustration Stuff</div>
            </div>

            {/* MAIN  */}
            <div className="item3">
                
                <img src="/assets/computer_guy_full.svg" alt="svg" />
            </div>  
            
            {/* FOOTER  */}
            <div className="item5">
                
            </div>
        </div>
        </div>
    );
};

export default Home;