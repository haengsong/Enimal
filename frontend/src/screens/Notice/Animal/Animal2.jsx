// 양쯔강 돌고래
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getDetailNotice } from "@apis/notice";

function Animal2() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(2)
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
            양쯔강 돌고래
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="VdPtYRGcHSw"
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
          <div className="notiani_txt notoReg fs-28">양쯔강 돌고래</div>
          <div className="notiani_tex notoReg fs-20">
            양쯔강돌고래는 몸이 대체적으로 푸른 빛을 띄며 옅은 회색에 배부분은
            흰색을 띄고 있는 동물이다. 그리고 등지느러미가 다른 돌고래와는
            다르게 조금 더 작다. 상당한 거구며 몸길이는 약 2.5m, 무게는 400kg
            가까이 나간다. 가늘고 긴 부리의 끝이 약간 위로 향했고 위턱뼈 융기의
            발달과 눈이 거의 퇴화했으며 초음파로 물체나 먹이를 확인한다.
            <br /> <br />
            경제발전에 따른 오염과 수로 발달, 무분별한 포획이 멸종 이유이다.
            <br />
            <br />
            1970년대 말에서 1980년대 초에 최초로 양쯔강 돌고래에 대한 조사가
            이루어졌으나 이때 집계된 숫자도 고작 400마리였다. 1999년 조사 결과는
            더욱 절망적이어서 13마리만 집계되었다. 2006년 중국 정부는 외국
            과학자들까지 동원하여 구성된 50여명의 학자들을 동원해 돌고래들을
            수색하기 위한 6주 간의 프로젝트에 착수했으며 이는 멸종위기종 동물을
            보전하기 위한 영국의 EDGE 프로그램의 지원도 받았다. 아무 결과를 얻지
            못하고 지금 정부에선 양쯔강돌고래의 DNA와 세포, 정수를 보존하고
            있으며, 양쯔강에서 아직 살아있는 돌고래를 발견하면 생포해서 동물원에
            옮겨 짝을 지어 새끼를 낳게 할 거라고 한다. 그래서 중국정부에서
            돌고래를 발견하면 포상금을 준다고 하고 있다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal2;
