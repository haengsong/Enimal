// 안데스산고양이
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal13() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(13)
  })

  return (
    <div className="container flex">
      <div className="notiani">
        <div className="notiani_pgtitle notoBold fs-36 text-center flex justify-space-between">
          <FontAwesomeIcon
            className=""
            onClick={e => back(e)}
            icon={faArrowLeft}
          />
          <div className="NoticeText">공지사항</div>
          <div className="emptyBox" />
        </div>

        <div className="notiani_text">
          <div type="text" className="notiani_text_title notoMid fs-24">
            안데스산 고양이
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="jOo3Q3ywga4"
            opts={{
              width: "1100",
              height: "500",
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1
              }
            }}
          />
          <div className="notiani_txt notoReg fs-28">안데스산 고양이</div>
          <div className="notiani_tex notoReg fs-20">
            안데스 산맥에 사는 야생 고양이로 개체수가 2500여 마리 이하로
            간주하여 멸종위기종(EN)으로 분류하고 있다. 설치류 같은 소형동물,
            조류를 주식으로 삼는다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal13;
