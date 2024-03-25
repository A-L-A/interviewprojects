//import { get } from "mongoose";
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {

const [selected, setSelected] = useState(null);
const [enableMultiSelection, setEnableMultiSelection] = useState(false);
const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId){
	//console.log("Clicked on ID:", getCurrentId);
  setSelected(getCurrentId === selected ? null : getCurrentId );
  }

   function handleMultipleSelection(getCurrentId) {
     let cpyMultiple = [...multiple];
     const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
     console.log(findIndexofCurrentId);
     if(findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId)
     else cpyMultiple.splice(findIndexofCurrentId, 1)

     setMultiple(cpyMultiple);
   }

   console.log(selected, multiple);

  return (
    <div className="wrapper">
    <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={ enableMultiSelection
                ? ()=> handleMultipleSelection(dataItem.id) 
                : () => handleSingleSelection(dataItem.id)}
                className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
          
              {
                  selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                  <div className="content">{dataItem.answer}</div>
                  : null }
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
