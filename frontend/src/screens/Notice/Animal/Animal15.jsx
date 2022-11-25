// 강토끼
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal15() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(15)
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
            강토끼
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="sq01sNRh9wM"
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
          <div className="notiani_txt notoReg fs-28">강토끼</div>
          <div className="notiani_tex notoReg fs-20">
            남아프리카 공화국의 카루 사막의 중앙과 남부 지역에 분포한다.
            일반적인 토끼와 비슷하지만 귀와 몸이 더 길며 입꼬리에서 볼 위로
            이어지는 줄무늬와 눈 주위에 하얀 고리가 있다. 또한 갈색 양털 꼬리,
            배와 목에 크림색 또는 회색빛 털을 가지고 있으며, 넓고 곤봉 같은
            뒷발을 가지고 있다. 야행성 동물이며 식물을 주식으로 삼는다.
            <br /> <br />
            현재 개체수는 약 1500마리 인 것으로 알려져 있다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal15;
