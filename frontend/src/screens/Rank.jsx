import React,{ useState } from "react";
import './Rank.scss'

import CollectionRank from "../components/RanK/CollectionRank";
import DonationRank from "../components/RanK/DonationRank";

function Rank() {
  const [Tab,setTab] = useState('collection')


  let RankTab = null
  if (Tab === 'collection') {
    RankTab = <CollectionRank />
  } else{
    RankTab = <DonationRank />
  }


  function TabChange(e){
    setTab(e.target.id)
    if (e.target.id === 'collection'){
      document.getElementById('collection').className = 'rankTabA'
      document.getElementById('donation').className = 'rankTabB'
    } else{
      document.getElementById('collection').className = 'rankTabB'
      document.getElementById('donation').className = 'rankTabA'
    }
  }

  
  return (
    <div className="Rank">
      <div>
        <h1 className="fs-40 notoBold">멸종 위기를 지켜준 사람들</h1>
        <hr />
        <button className="rankTabA" onClick={e=> TabChange(e)} id="collection" type="button">컬렉션</button>
        <button className="rankTabB" onClick={e=> TabChange(e)} id="donation" type="button">기부금</button>
      </div>
      {RankTab}
    </div>
  )
}
export default Rank;
