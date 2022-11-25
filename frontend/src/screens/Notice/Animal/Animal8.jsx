// 우파루파
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal8() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(8)
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
            우파루파
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="btfKCHOBBs4"
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
          <div className="notiani_txt notoReg fs-28">우파루파</div>
          <div className="notiani_tex notoReg fs-20">
            성적으로 성숙하기까지는 18-24개월이 걸리며, 이때 몸길이는
            15-45센티미터이다. 번식이 쉽고 잃어버린 신체를 쉽게 재생하고 놀라운
            장기이식 능력(다른 아홀로틀의 장기를 이식받아도 거부반응이 전혀 없고
            심장도 재생할 수 있다.) 때문에 과학연구용, 애완동물용으로 널리
            이용된다.
            <br /> <br />
            원산지는 멕시코의 중부에 위치한 호수인 호히밀코 호, 할코 호이다.
            야생개체는 홍수조절 및 멕시코 시의 상수도 수요를 충족하기 위해
            이루어지는 인위적인 호수 수원 고갈로 인해 멸종위기를 맞고 있다. 현재
            야생개체는 호히밀코 호에만 서식하고 있다.
            <br />
            <br />
            모델생물로 연구에 사용되고 있으며, 많은 수의 동물들이 포획되어
            연구되어 있다. 특히 육지생활의 요구로 인해 사육이 되지 않는 다른
            도룡농에 비해 번식하기 쉽다. 배아에서 심부전을 일으키는 돌연변이
            유전자의 존재로 인해 심장 결함 연구에 사용된다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal8;
