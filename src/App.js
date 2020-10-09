import React from "react";
import "./style.css";

import {ColorPicker, NumericTextBox} from '@progress/kendo-react-inputs';

//const stuff = {label:"Super Duper"};
//const stuff = require("./labelText.json");
export default function App() {
  return (
    <div>
        <fieldset>
          <legend>Borders</legend>
          <div className="grid-container">
            <div className="item1"></div>
            <div className="item2">
              <label>Top</label>
              <input type="checkbox" />
            </div>
            <div className="item3"></div>
            <div className="item4">
              <label>Color</label>
              <ColorPicker view="gradient" defaultValue={'white'} />
            </div>

          
            <div className="item1">
              <label>Left</label>
              <input type="checkbox" name="left"/>
            </div>
            <div className="item2"></div>
            <div className="item3">
              <label>Right</label>
              <input type="checkbox" name="right"/>
            </div>
          

            <div className="item1"></div>
            <div className="item2">
            <label>Bottom</label>
            <input type="checkbox" name="bottom"/>
            </div>
            <div className="item3"></div>
            <div className="item4">
              <label>Width</label>
            </div>
          </div>
         </fieldset>
      

    </div>
    
  );
}
