// 레서판다
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal7() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(7)
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
            레서판다
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="CI4alIokR-4"
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
          <div className="notiani_txt notoReg fs-28">레서판다</div>
          <div className="notiani_tex notoReg fs-20">
            생김새는 다 성장했을 경우 50~65cm 정도까지 자라며 꼬리도 몹시 길어서
            30~60cm까지 성장한다. 꼬리가 긴 이유는 나무를 탈 때 무게중심을 잡기
            위해서다. 몸무게는 3~7kg이다. 식성은 잡식성으로 곤충, 새의 알,
            대나무, 죽순 등 가리지 않고 잘먹는다.
            <br /> <br />
            개체수는 5000여마리 정도로 추산되고 그 중 약 800마리 정도가
            동물원에서 사육중이다. 멸종의 원인은 개발로 인한 서식지 파괴,
            가죽이나 애완목적의 밀렵 등이다. 또한 레서판다는 육아를 싫어하여
            개체의 수가 잘 늘지 않는 것도 원인이다.
            <br />
            <br />
            레서판다에게는 근연종이 없어서, 만약 멸종 가까이 가면 복구는
            절망적이다. 이 중에서 가장 위협적인 것은 애완용 목적의 밀렵이다.
            원체 귀엽다보니 사람들이 다 좋아하고 많은 사람들이 가지고 싶어해서
            멸종위기에 몰렸다. 원래는 취약종이었지만 15년 이후 위험으로
            상향되었다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal7;
