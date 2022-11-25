// 하마
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal5() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(5)
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
            하마
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="ddz7o-XGnoQ"
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
          <div className="notiani_txt notoReg fs-28">하마</div>
          <div className="notiani_tex notoReg fs-20">
            하마는 코끼리와 함께‘가장 무거운 육상 동물’중 하나로 꼽힌다. 하지만
            기후변화와 밀렵, 상아(엄니) 거래, 서식지 감소 등으로 인해 멸종위기에
            처해 있다. 이 하마를 지키기 위해 관련 국가들이 보호등급 조정에
            나선다. 토고와 말리 등 서아프리카 10개국은 오는 11월 파나마에서
            열리는 제19회 ‘멸종위기에 처한 야생 동식물종의 국제 거래에 관한
            협약’(CITES) 가입국 회의를 앞두고 하마를 최고 보호등급(부록Ⅰ)으로
            승격하자고 제안했다. 하마가 지난 20년간 개체수가 꾸준히 줄어들어
            이제는 위험 수위로 치닫고 있다는 판단에 따른 것이다.
            <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal5;
