// 고라니
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal4() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(4)
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
            고라니
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="recZ94-ByoU"
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
          <div className="notiani_txt notoReg fs-28">고라니</div>
          <div className="notiani_tex notoReg fs-20">
            몸 길이 약 90cm, 어깨 높이 약 50cm, 꼬리 길이 4~8cm, 몸무게는 평균
            9-11kg이다. 암수 모두 뿔이 없으며 위턱의 송곳니가 엄니 모양으로
            발달하였다. 수컷의 송곳니는 약 6cm나 되어 입 밖으로 내밀어 번식기에
            수컷끼리 싸울 때 쓰인다. 털은 거칠고 몸의 위쪽은 황갈색, 아랫면은
            담황색, 앞다리는 붉은색을 띤다. 20년도 기준으로 50만~60만마리가
            서식한다. 우리나라의 고라니가 전세계의 90%를 차지한다.
            <br /> <br />
            우리나라에서는 연간 최소 6만건 이상의 고라니 로드 킬이 발생하고
            있다. 도로들은 산을 깎아 만들게 되는 경우가 많은데 인간의 편의를
            위해 길을 냈지만 그 길은 고라니가 이전부터 다니고 있는 길 위에 생긴
            길이기 때문에 위험한곳으로 인식하지 못하고 다녀서 충돌하는 일이
            생긴다.
            <br />
            <br />
            고라니는 민가로 내려와 작물을 파괴하는 등 사고를 일으켰다. 어린잎을
            좋아하는 식성 때문에 농작물의 어린잎을 뜯어 먹어 농가의 피해가
            증가하였고 환경부에서는 농작물 피해를 예방하기 위해 멧돼지를
            포함하여 유해야생동물의 수렵과 포획을 허용하기도 하였다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal4;
