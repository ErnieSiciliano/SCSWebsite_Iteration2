import { isDocument } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import data from '../data';

function HomePage() {

    return (
    <div>
    <ul className="items">
    {
      data.items.map(item =>
    <li>
        <div className="item">
        <Link to={'/item/' + item.slug}>
                  <img
                    src={item.pic}
                    alt="item"
                    width="200" height="200"
                  />
        </Link>
             {/* <img src={item.pic} alt="item" width="200" height="200"></img> */}
             <div className="item-name"> 
                 <Link to={'/item/' + item.slug}>{item.name}</Link>
                 {/* <a href="item.html"> {item.name} </a>  */}
             </div>
             <div className="item-team"> {item.team} </div>
             <div className="item-price"> ${item.price} </div>
        </div>
    </li>)
    } 

    </ul>
    </div>
    )

}

export default HomePage;