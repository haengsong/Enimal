// 바다거북
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal12() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(12)
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
            바다거북
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="ySgoZ6YwGBM"
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
          <div className="notiani_txt notoReg fs-28">바다거북</div>
          <div className="notiani_tex notoReg fs-20">
            넓은 의미로 거북목 바다거북상과에 속하는 모든 종들의 총칭이다.
            바다거북의 트레이드마크라고 할 수 있는 등딱지는 매우 단단하기 때문에
            상어 등의 육식동물의 습격에도 무사할 수 있다. 하지만 이건 등딱지
            한정으로 무사한 거고 지느러미같이 연한 부위를 물어 뜯기면 꽤나
            치명적이다.
            <br /> <br />
            바다거북상과에는 일반적인 바다거북과 장수거북, 그리고 지금은 멸종한
            아르켈론과 녀석의 친척들이 포함된다. 좁은 의미로는 바다거북상과의
            하위 분류군인 바다거북과에 속하는 모든 종들의 총칭이다. 특정 종을
            가리킬 때는 푸른바다거북을 의미한다. 북극해를 제외한 모든 대양에서
            서식하고 있으며, 현생 파충류 중에서도 유독 수중 생활에 특화된
            집단이다.
            <br />
            <br />
            수중 생활에 특화된 과 답게 팔다리는 전부 지느러미 형태로 진화되어
            있으며, 이 지느러미로 천천히 헤엄친다. 몸길이는 보통 상체가 1~1.2m
            정도이고, 최대 1.3m까지 자랄 수 있다. 부리는 앵무새의 부리와
            비슷하다. 부리를 이용하여 해조류를 뜯어먹기도 하지만, 가끔 물고기나
            해파리같은 동물성 먹이를 먹기도 한다. 특히 어릴 적에는 전적으로
            육식만 한다. 바다거북은 특히 엄청난 수의 해파리를 먹는데, 사실
            해파리의 몸은 대부분 수분이라 해파리로 에너지를 얻으려면 그 만큼
            많이 먹어야 하는 것이 사실이다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal12;
