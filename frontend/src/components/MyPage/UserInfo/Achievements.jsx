import React,{useEffect,useState} from "react";
import "./Achievements.scss";



import {
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
  badge9,
  badge10,
  badge11,
  badge12,
  badge13,
  badge14,
  badge15
} from "@images/badge";

import BadgeModal from "./BadgeModal";

function Achievements(props) {
  const [modalOpen,setModalOpen] = useState(false);
  const [selectBadge,setSelectBadge] = useState(null);
  const [selectImg,setSelectImg] = useState(null);
  const { data } = props;

  useEffect(()=>{
    if (data) {
      for (let i=0; i<data.badges.length; i+=1){
        document.getElementById(data.badges[i].badge).className="badgeImg2"
      }
    }
  },[data])


  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function imgclick(e){
    e.preventDefault();
    setSelectBadge(e.target.id)
    setSelectImg(e.target.src)
    openModal()
  }
  return (
    <div className="Achievements">
      <div className="AchiveNav fs-24 notoBold">수집된 업적</div>
      <div>
        <div className="AchiveBox">
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="연금술사" src={badge1} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="첫 걸음" src={badge2} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="마음에 드시나요" src={badge3} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="업적 냠냠" src={badge4} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="뽑기의 달인" src={badge5} alt="#" />
          </button>
        </div>

        <div className="AchiveBox">
        <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="개근상" src={badge6} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="Enimal 홀릭" src={badge7} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="기부 천사" src={badge8} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="똥손" src={badge9} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="뽑기 중독" src={badge10} alt="#" />
          </button>
        </div>

        <div className="AchiveBox">
        <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="Enimal 애호가" src={badge11} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="환경 지킴이" src={badge12} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="안 질려?" src={badge13} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="인플루언서" src={badge14} alt="#" />
          </button>
          <button type="button" className="badge" onClick={e=> imgclick(e)}>
            <img className="badgeImg" id="명예 한 스푼" src={badge15} alt="#" />
          </button>
        </div>
      </div>
      <BadgeModal open={modalOpen} close={closeModal} badge={selectBadge} img={selectImg} />
    </div>
  );
}
export default Achievements;
