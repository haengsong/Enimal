// 고래상어
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal16() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(16)
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
            고래상어
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="RZL2CH5y95g"
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
          <div className="notiani_txt notoReg fs-28">고래상어</div>
          <div className="notiani_tex notoReg fs-20">
            온순한 성격의 고래상어는 따뜻한 바다에서 발견되며 플랑크톤을
            주식으로 삼는다. IUCN에 의해 위기/취약(EN)으로 분류되어 있다.
            현존하는 어류중에서 크기가 가장 크며 100살 넘게 살 수 있을것으로
            추정된다.
            <br /> <br />
            총 개체수는 11~24만으로 추정되나 현재 추적되는 개체수는 7000마리에 불과하다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal16;
