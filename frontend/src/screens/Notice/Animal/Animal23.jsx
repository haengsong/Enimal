// 산양
import React,{useEffect}from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal23() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(23)
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
            산양
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="2vlRlXcAXWo"
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
          <div className="notiani_txt notoReg fs-28">산양</div>
          <div className="notiani_tex notoReg fs-20">
            ‘숲속에 사는 작은 양’이라는 이름의 산양은 이름처럼 가파른 바위가
            있는 산악지역에 서식한다. 튼튼한 발굽과 잘 발달된 두 개의 발가락으로
            가파른 경사의 바위틈을 빠르게 올라갈 수 있다, 주행성으로 이른 아침과
            저녁에 활발히 활동하며, 초식성으로 초목과 과실 등을 섭식한다. 성체
            수컷은 주로 단독생활을 하며, 암컷이 어린 새끼 2~4마리를 데리고
            다니며 작은 그룹으로 생활한다. 전형적인 산악동물로 절벽지역에 서식해
            겨울철 폭설로 고립되어 폐사하는 경우도 잦으며, 특히 산림개발과
            임도건설 등으로 서식처가 파괴되어 멸종위기에 처해 있다.
            <br /> <br />
            한반도에서는 제주도를 제외하고 북부의 높은 산악지대에서 흔히 볼 수
            있었다고 한다. 하지만 포획과 밀렵, 서식처 파괴 등으로 멸종위기에
            처해 현재 강원도와 충청북도, 경북 울진 등 태백산맥 일대의 산악지역에
            개체군이 서식하고 있는 것으로 연구되었다.
            <br />
            <br />
            현재 전국에 690-784개체가 서식하는 것으로 추정된다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal23;
