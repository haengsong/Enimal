// 아시아코끼리
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal14() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(14)
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
            아시아 코끼리
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="fqgzE_C75tU"
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
          <div className="notiani_txt notoReg fs-28">아시아 코끼리</div>
          <div className="notiani_tex notoReg fs-20">
            1986년부터 IUCN 적색 목록에 기재된 멸종위기종이며, 즉시 관련 상품
            거래가 중단되어야 할 동물들의 목록인 멸종위기에 처한 야생동·식물의
            국제거래에 관한 협약 부속서 Ⅰ의 명단에도 올라와 있다. 60-75년간 개체
            수의 50%가 사라졌다고 추정되며 서식지 파괴와 기후변화, 밀렵 등이
            원인이다.
            <br /> <br />
            2003년 조사에서는 야생 개체가 41,410-52,345마리 사이라고 발표하였다.
            삼림 환경을 다소 재현한 사육 환경에서 암컷 기준으로 약 60년을 살며,
            동물원에서는 그보다 더 일찍 죽는다. 높지 않은 번식률과 높은 사망률
            때문에 사육되는 개체가 점점 줄어드는 추세이다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal14;
