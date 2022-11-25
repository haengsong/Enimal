// 뱀장어
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal6() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(6)
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
            뱀장어
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="WEyvZ7pmhPQ"
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
          <div className="notiani_txt notoReg fs-28">뱀장어</div>
          <div className="notiani_tex notoReg fs-20">
            수영속도는 느리고 다른 물고기와 달리 뱀처럼 몸을 옆으로 구부러지게
            운동시킴으로써 추진력을 얻는다. 후각은 매우 뛰어나다.
            <br /> <br />
            멸종의 가장 큰 이유는 서식처 파괴이다. 뱀장어는 바다에서 강으로
            올라와 5~7년간 민물에서 성장한다. 산란기가 되면 6개월동안 아무것도
            먹지 않고 바다로 가 알을 낳고 번식을 마친 뱀장어는 죽고, 알에서
            깨어난 실뱀장어들은 다시 강 하구에서 상류로 거슬로 올라간다. 그러나
            강으로 올라가지 못하고 있다. 또한 댐 건설과 연안 간척 등으로 뱀장어
            서식지가 사라졌다. 결과적으로 산란하러 가는 뱀장어 감소로 산란양이
            줄고, 하구로 돌아오는 실뱀장어 양이 줄어들어 악순환이 반복된다.
            <br />
            <br />
            실뱀장어가 하굿둑 등을 쉽게 오를 수 있게 만드는 어도(물고기 길)을
            개선해야한다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal6;
