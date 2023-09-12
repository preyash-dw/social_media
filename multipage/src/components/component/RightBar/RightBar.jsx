import React, { useContext } from "react";
import "./RightBar.scss";
import { AuthContext } from "../../../context/Authorization";

const RightBar = () => {

 const{currentUser}=useContext(AuthContext);

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed profile picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed profile picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                <span>Sahil Lather</span> posted profile picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div> 
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <p>
                <span>Sumit Kumar</span> changed profile picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Freinds</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <span>Kuldeep Kushwaha</span>
              <div className="online"></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
