// 호랑이
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal24() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(24)
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
            호랑이
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="gFc5Ha6es9Q"
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
          <div className="notiani_txt notoReg fs-28">호랑이</div>
          <div className="notiani_tex notoReg fs-20">
            호랑이는 식육목 고양이과에 속하는 포유류로, 고양이과 동물들 중 가장
            큰 동물이다. 등의 털색은 선명한 황갈색이고 불규칙적인 검은색
            줄무늬가 많다. 배는 백색으로 갈색 반점이 두드러진다. 깊은 산의 밀림
            지대에 주로 서식하며 자신이 잡은 신선한 야생동물의 고기를 먹는다.
            <br /> <br />
            암수모두 단독 생활하며, 자신의 세력권을 분명히 한다. 넓은 지역을
            돌아다니며 계속해서 영역을 관리하며, 침입자를 가차 없이 공격한다.
            영역 안에 다른 개체의 침범을 막기 위해 나무에 발톱 자국을 내거나
            분비물을 뿌리고 몸을 비벼 자신의 털과 체취를 남긴다. 야행성으로 밤에
            주로 사냥을 하고 낮에는 은식처에서 잠을 잔다. 보폭은 80cm에 달하며,
            항상 뒷발이 앞발자국을 되밟는 습성이 있다.
            <br />
            <br />
            깊은 산의 밀림 지대에 주로 서식한다. 삼림·갈대밭·바위가 많은 곳에
            살며 물가의 우거진 숲을 좋아한다.멧돼지, 대륙사슴, 노루 등
            육식동물을 잡아먹으며, 먹이가 풍부한 지방에서는 약 50km², 먹이가
            부족한 지방에서는 3,000km²의 세력 범위를 가진다.
            <br />
            <br />
            과거 한반도에 널리 서식하였지만 조선시대 말기에 총이 들여오면서부터
            사냥이 시작되어 개체수가 감소하였다. 또한, 일제강점기
            해수구제사업으로 많은 호랑이가 사냥되며 개체수가 급감하여 현재는
            절멸된 것으로 여겨진다. 1918년 강원도 춘성군 가리산, 1922년 경주
            대덕산, 1924년 강원도 횡성에서 마지막으로 한 마리가 포획된 이후
            발견되지 않고 있다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal24;
