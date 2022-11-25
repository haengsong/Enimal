// 상괭이
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal18() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(18)
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
            상괭이
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="pyYgwt0HbEs"
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
          <div className="notiani_txt notoReg fs-28">상괭이</div>
          <div className="notiani_tex notoReg fs-20">
            쇠돌고랫과에 속하는 여섯 종의 고래 중 하나이다. 모습이 웃는 얼굴
            같아서 웃는고래 라고도 부르기도 한다. 몸빛은 회백색이며, 몸길이는
            1.5-1.9 미터 정도까지 자란다. 등지느러미가 없는 대신에 높이 약 1
            센티미터의 융기가 나있다. 주로 아시아의 일본, 한국, 중국,
            인도네시아, 방글라데시의 주변 해역에 수중 50m 연안의 얕은 바다에서
            서식하는 종이지만, 바다와 민물에서 모두 목격 가능하다
            <br /> <br />
            자연에서 목격이 쉽지 않은데, 2m 크기의 작은 체구 탓도 있지만 인간을
            몹시 경계하고, ‘고래 답지 않게’ 조용히 헤엄치기 때문이다. 상괭이의
            주 멸종 위기 요인은 혼획(어업 중에 의도치 않게 본래 잡고자 수산물이
            아닌 생물을 섞어 잡는 것)이다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal18;
