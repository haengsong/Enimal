// 두루미
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal22() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(22)
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
            두루미
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="UOnAHfrh_aY"
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
          <div className="notiani_txt notoReg fs-28">두루미</div>
          <div className="notiani_tex notoReg fs-20">
            두루미목 두루미과에 속하는 조류이다. 몸 길이 150cm, 체중 7-12kg,
            날개 편 길이 220~250cm의 대형 조류이다. 이마, 머리꼭대기, 눈앞에는
            깃털이 없고 붉은색의 피부가 드러나 있다. 몸은 흰색이고, 멱과 목은
            검은색이다. 검은색 셋째 날개깃은 접었을 때 길게 늘어져서 꼬리가
            검은색처럼 보인다. 뚜루루루, 뚜루루루 하고 날카롭게 운다.
            <br /> <br />
            몸 길이 150cm, 체중 7-12kg, 날개 편 길이 220~250cm의 대형 조류이다.
            이마, 머리꼭대기, 눈앞에는 깃털이 없고 붉은색의 피부가 드러나 있다.
            몸은 흰색이고, 멱과 목은 검은색이고, 눈 뒤, 귀깃, 뒷머리는 흰색이다.
            부리는 옅은 노란색이며 끝부분이 밝다. 둘째 날개깃, 셋째 날개깃,
            다리는 검은색이다. 어린 새의 경우 머리와 목, 몸의 윗면이 연한
            갈색이다. 그 외의 깃털은 흰색이며, 깃털 끝부분은 황갈색이다.
            <br />
            <br />
            국내에는 강원도 철원, 경기도 연천, 파주 등의 비무장지대와
            민간인통제지역에서 월동한다. 인천 강화는 유일한 갯벌 서식지이다. 논
            등에서 먹이활동을 하며 국내에서는 서식지의 감소로 개체수가 줄고
            있다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal22;
