/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { useState } from "react";
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Tabs({ children , activeTab }) {
    const [active,setActive] = useState(activeTab)
    return (
        <div className="tabs">
            <div>
            <nav>
            {children.map((item,index)=>(
            <button onClick={() => setActive(index)} key={index} className={active === index ? "active" : ""  }>{item.props.title}</button>
        ))}
        </nav>
        {children[active]}
        </div>
        </div>
    );
  }


export default Tabs