import { get } from "mongoose";
import data from "./data";
import { useState } from "react";

export default function Accordion() {

  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId){
	console.log(getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item">
              <div onlick={()=>handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
