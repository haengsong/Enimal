// 듀공
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal20() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(20)
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
            듀공
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="u8aUG00DLms"
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
          <div className="notiani_txt notoReg fs-28">듀공</div>
          <div className="notiani_tex notoReg fs-20">
            전설 속 인어의 모태가 되었다고 알려진 듀공은 해초를 주식으로 삼으며,
            무리 생활을 하는 사회적 동물이다. 다수의 듀공들을 모두 먹일 풍부한
            해초층이 있는 연안가가 지구상에 많지 않은 까닭에 주로 1~4마리
            안팎으로 행동한다.
            <br /> <br />
            수줍음이 많고 사람을 다소 꺼리는 탓에 듀공의 행동 방식에 관해서
            알려진 것은 미미한 수준이다. 현재 듀공은 서식지가 바다 곳곳마다
            흩어져 있고, 그 개체 수도 얼마 남지 않았다고 추산되고 IUCN (국제
            자연 보전 연맹)에서 듀공을 취약(VU) 등급으로 명시하고 있다. 듀공은
            수명이 70년 정도로 긴 편이고 번식 속도가 너무나 느리기 때문에 개체
            수가 늘어나기 힘들다.
            <br />
            <br />
            페르시아만은 듀공들이 대규모로 서식하는 지역이며, 세계에서 두 번째로
            많은 수의 듀공들이 산다. 대부분은 남단 해안에서 목격되며, 현재 이
            지역의 개체 수는 5,800-7,300마리에 달하는 것으로 추정된다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal20;
