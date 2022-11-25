import React, { useState } from "react";
import './Draw.scss'

import AllDraw from "../components/Draw/AllDraw";
import SelectDraw from "../components/Draw/SelectDraw";

function Draw() {

  const [Tab, setTab] = useState('alldraw')


  let DrawTab = null
  if (Tab === 'alldraw') {
    DrawTab = <AllDraw />
  } else {
    DrawTab = <SelectDraw />
  }


  function TabChange(e) {
    setTab(e.target.id)
    if (e.target.id === 'alldraw') {
      document.getElementById('alldraw').className = 'drawTabA'
      document.getElementById('selectdraw').className = 'drawTabB'
    } else {
      document.getElementById('alldraw').className = 'drawTabB'
      document.getElementById('selectdraw').className = 'drawTabA'
    }
  }




  return (
    <div className="draw">
      <div className="drawTab">
        <button className="drawTabA" onClick={e => TabChange(e)} id="alldraw" type="button">전체 뽑기</button>
        <button className="drawTabB" onClick={e => TabChange(e)} id="selectdraw" type="button">선택 뽑기</button>
      </div>
      <hr />
      { DrawTab }
    </div>

  )
}
export default Draw;
