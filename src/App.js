import React, { useEffect, useState } from "react";
import "./App.css";
import whale1 from "./whale-8.png";
import userImage from "./cat-profile.png";
import whalee from "./whale4.png";
import whale3 from "./whale3.jpg";
import Notif from "./notif-bell.png";
import Pen from "./pen-icon.png";
import Menu from "./menu-icon.png";
import Popu from "./popular-image.jpg";
import Western from "./western-icon.jpg";
import Asian from "./asian-icon.png";
import Come from "./comedy-icon.png";
import SciFi from "./scifi-icon.png";
import Animate from "./animation-icon.jpg";
import Next from "./lessthan-icon.png";
import Prev from "./greaterthan-icon.png";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8000/api"
});

function App() {
  
  const [openProfile, setOpenProfile] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [notif, setNotif] = useState(false);
  const [openPen, setOpenPen] = useState(false);
  const [pen, setPen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [trend, setTrending] = useState("");
  const [west, setWest] = useState("");
  const [asi, setAsian] = useState("");
  const [com, setComedy] = useState("");
  const [scif, setScifi] = useState("");
  const [ani, setAnimation] = useState("");
  const [help, setOpenHelp] = useState("");
  const [movies, setMovies] = useState(false);

  
  { 
    return (
      <div>
        <div className="Uh">
          <img
            src={userImage}
            className="ProfileIcon"
            onClick={() => setOpenProfile((p) => !p)}
          />
          
          
        
        </div>
        <div className="ha">
            <img
                src={Notif}
                className="NotifIcon"
                onClick={() => setOpenNotif((p) => !p)}
              />

                    {openNotif && (
                          <div className="flex flex-col dropDownNotif">
                            <button onClick={() => setGeneral((p) => !p)} className="Mbutton">
                              
                            </button>
                            </div>
                        )}

        </div>

        <div className="forpen">
            <img
                src={Pen}
                className="PenIcon"
                onClick={() => setOpenPen((p) => !p)}
              />

              {openPen && (
                          <div className="Pen dialogue box">
                            <button onClick={() => setPen((p) => !p)} className="penbutton">
                              <img className="PenImages" src={Pen} />
                              Pen
                            </button>
                          </div>
                        )}

        </div>
        <div className="formenu">
            <img
                src={Menu}
                className="MenuIcon"
                onClick={() => setOpenMenu((p) => !p)}
              />

              {openMenu && (
                          <div className="flex flex-col dropDownMenu">
                            <button onClick={() => setHome((p) => !p)} className="Mbutton">
                              HOME
                            </button>
                            <button onClick={() => setGenre((p) => !p)} className="Mbutton">
                              GENRE
                            </button>
                            <button onClick={() => setMovies((p) => !p)} className="Mbutton">
                              MOVIES
                            </button>
                            <button onClick={() => setPopular((p) => !p)} className="Mbutton">
                              POPULAR
                            </button>
                            <button onClick={() => setHelp((p) => !p)} className="Mbutton">
                              HELP
                            
                            </button>
                            <button onClick={() => setAbout((p) => !p)} className="Mbutton">
                              ABOUT
                            </button>

                           
                          </div>
                        )}

        </div>

        <img
                src={whale1}
                className="WhaleIcon"
                
              />
        <h3 className="label1">Comment and Review website</h3>
        <div>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search here"
                  className="searchArea"
                />
        </div> 
        <h2 className="label2">POPULAR</h2>
        
        <img
                src={Popu}
                className="PopularIcon"
                
              />

        <h4 className="label3">Recent reviews </h4>
       
        <h1 className="label4">Trending </h1>

        <div className="fortrending">
            <img
                src={Popu}
                className="TrendingIcon1"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="TrendingIcon2"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="TrendingIcon3"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="TrendingIcon4"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="TrendingIcon5"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="RecentIcon1"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="RecentIcon2"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="RecentIcon3"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="RecentIcon4"
                onClick={() => setOpenTrending((p) => !p)}
              />
              <img
                src={Popu}
                className="RecentIcon5"
                onClick={() => setOpenTrending((p) => !p)}
              />
        </div>

        <h1 className="label5">Explore categories </h1>
        <h1 className="label6">Recent </h1>
        <div className="forexplorecategories">
            <img
                src={Western}
                className="WesternIcon"
                onClick={() => setOpenWest((p) => !p)}
              />
              <img
                src={Asian}
                className="AsianIcon"
                onClick={() => setOpenWest((p) => !p)}
              />
              <img
                src={Come}
                className="ComedyIcon"
                onClick={() => setOpenWest((p) => !p)}
              />
              <img
                src={SciFi}
                className="SciFiIcon"
                onClick={() => setOpenWest((p) => !p)}
              />
              <img
                src={Animate}
                className="AnimIcon"
                onClick={() => setOpenWest((p) => !p)}
              />
          </div>

          <h4 className="label7">WESTERN </h4>
          <h4 className="label8">ASIAN </h4>
          <h4 className="label9">COMEDY </h4>
          <h4 className="label10">SCI-FI </h4>
          <h4 className="label11">ANIMATION </h4>
          
          <div className="fortrendingnext">
            <img
                src={Next}
                className="NextIcon"
                onClick={() => setOpenNext((p) => !p)}
              />
              <img
                src={Prev}
                className="PrevIcon"
                onClick={() => setOpenPrev((p) => !p)}
              />
          </div>
          <div className="fortexplorecateg">
            <img
                src={Next}
                className="NextIconExpl"
                onClick={() => setOpenNext((p) => !p)}
              />
              <img
                src={Prev}
                className="PrevIconExpl"
                onClick={() => setOpenPrev((p) => !p)}
              />
          </div>
          <div className="fortrecent">
            <img
                src={Next}
                className="NextIconRec"
                onClick={() => setOpenNext((p) => !p)}
              />
              <img
                src={Prev}
                className="PrevIconRec"
                onClick={() => setOpenPrev((p) => !p)}
              />
          </div>
       
        
          
       
        
      </div>
      
    );

    
  }
  


      
}

export default App;
