// 검은발족제비
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal19() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(19)
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
            검은발족제비
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="bEDrc4-3lT0"
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
          <div className="notiani_txt notoReg fs-28">검은발족제비</div>
          <div className="notiani_tex notoReg fs-20">
            짧은 다리에 몸통이 길고 눈 주위와 꼬리 끝이 검고 까만 장화를 신은 것
            같은 모습으로, 북아메리카 평원에 서식하는 세계에서 가장 희귀한
            포유류 중 하나다. 현재 개체수가 1000마리 이하인 것으로 알려져 있다.
            <br /> <br />
            주로 야행성이며 겨울에는 별로 활동을 하지 않아서 때로는 굴속에 5 ~
            6일동안 꼼작하지 않고 지내기도 한다. 단독생활을 하며 텃세적 습성이
            있어서 영역을 확보하는 데 자신의 영역에 같은 성별의 개체가 침범하면
            심하게 공격한다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal19;
