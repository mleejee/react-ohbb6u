import React from "react";
import "./style.css";

import labelText from "./labelText.json";

//const stuff = {label:"Super Duper"};
//const stuff = require("./labelText.json");
export default function App() {
  return (
    <div>
        <fieldset style={{width: "50%"}}>
          <legend>Borders</legend>
          <div class="grid-container">
            <div class="item1"></div>
            <div class="item2">
              <label>{labelText.borders.top}</label>
              <input type="checkbox" name="top"/>
            </div>
            <div class="item3"></div>

          
            <div class="item1">
              <label>{labelText.borders.left}</label>
              <input type="checkbox" name="left"/>
            </div>
            <div class="item2"></div>
            <div class="item3">
              <label>{labelText.borders.right}</label>
              <input type="checkbox" name="right"/>
            </div>
          

            <div class="item1"></div>
            <div class="item2">
            <label>{labelText.borders.bottom}</label>
            <input type="checkbox" name="bottom"/>
            </div>
            <div class="item3"></div>
          </div>
         </fieldset>
      

    </div>
    
  );
}
