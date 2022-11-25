// 수달
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal11() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(11)
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
            수달
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="CGMR_2y5lYU"
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
          <div className="notiani_txt notoReg fs-28">수달</div>
          <div className="notiani_tex notoReg fs-20">
            물에서 헤엄치면서 물고기를 주로 잡아먹는 족제비과 수달아과로
            분류되는 포유류이다. 족제비와 비슷하지만 훨씬 더 크고 수중생활을
            하기에 알맞다. 머리는 원형이고, 코는 둥글며, 눈은 작고, 귀는 짧아서
            주름가죽에 덮여 털 속에 묻혀 있다. 꼬리는 둥글며 끝으로 갈수록
            가늘어진다. 네 다리는 짧고 발가락은 발톱까지 물갈퀴로 되어 있어
            헤엄치기에 편리하며 걸어다닐 때 발가락 전체가 땅에 닿는다.
            <br /> <br />
            수달은 국내에서 천연기념물 제330호이며 멸종위기 야생생물 1급에
            해당된다. 수달은 보통 1급수에서만 서식한다고 생각하는 경우가 많으나,
            2급수 심지어 3급수에서도 살수 있으며, 서식에 가장 중요한 조건은
            풍부한 먹이다. 입 주변에 있는 수염은 더듬이 역할을 한다. 송곳니가
            발달했으며 야행성이며, 후각이 예민하다. 물가에서 굴을 파서 산다.
            활동 반경도 20~30km로 넓은 편이다. 매끈한 유선형의 몸은 길이가
            1,250mm이고 몸무게는 12kg 정도이며 발에 물갈퀴가 있고 이중구조의
            털가죽은 방수 및 보온 기능이 매우 뛰어나다. 육식성으로 주로 물고기를
            잡아먹는 수생태계의 최상위 포식자다. 주로 하천을 따라 살아 활동
            영역이 선형을 띠어 국내 전역에 분포해도 실제 서식 밀도는 매우 낮다.
            <br />
            <br />
            남획, 서식지 파괴, 먹이원 감소, 교통사고 등이 멸종의 주요 위협 요인이며,
            그물에 걸려 죽기도 한다. 개발이 빠르게 진행되어 강에 대형 수중보와
            댐등이 많이 설치되어 대한민국에서는 과거보다 살기 어려웠으나,
            보호정책 등을 통해 최근들어 숫자가 늘어나고있다. 동서고금을
            막론하고, 굵은 털과 윤기 때문에 많이 사냥 당해 가죽이 벗겨졌고,
            오늘날에도 밀렵꾼들이 사냥하고 있다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal11;
