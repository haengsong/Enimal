import React from "react";
import './CommunityMain.scss'

import CommunityList from "@components/Community/CommunityList";
import { useNavigate } from "react-router-dom";

function Community() {
  const navigate = useNavigate();
  function CreateArticle(e){
    e.preventDefault();
    if (localStorage.token) {
      navigate('/community/regist')
    }
    else {
      alert("지갑을 먼저 연결해주세요!")
    }
  }

  return (
    <div className="containerBox flex">
      <div className="commu">
        <div className="commu_up flex">
          <div className="commu_up_name notoBold fs-36">
            자랑게시판
          </div>
          <div className="commu_up_btn flex justify-center align-center">
            <button type="button" onClick={e => CreateArticle(e)} className="notoBold fs-24 createbutton">
              글쓰기
            </button>
          </div>
        </div>
        <div className="commu_down">
          <CommunityList />
        </div>
      </div>
    </div>
  )
}
export default Community;
