// 저어새
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal3() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(3)
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
            저어새
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="9P06mNNi1iQ"
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
          <div className="notiani_txt notoReg fs-28">저어새</div>
          <div className="notiani_tex notoReg fs-20">
            몸길이는 75cm 정도고 몸은 하얀색이며, 부리와 다리는 검은색이다.
            부리는 주걱 모양으로 되어 있으며 이 부리를 좌우로 저으면서 먹이를
            찾는 습성이 있다. 이러한 습성 때문에 저어새라는 이름이 붙여진
            것이다. 한국, 중국, 일본, 대만, 홍콩 등에 분포한다. 전 세계적으로
            5200여 마리밖에 남지 않은 멸종위기종 1급이다.
            <br /> <br />
            갯벌 매립으로 인한 서식지 감소, 질병 등 여러 요인이 있겠지만 그중
            DDT사용으로 인한 환경오염이 크게 작용하였다. DDT는 1940년대부터 널리
            사용된 살충제로 당이나 물속에 남아있는 DDT는 잘 분해가 되지 않고
            먹이 사슬의 위 단계에 있는 생물에게 쌓인다. 결과적으로 상위 포식자인
            새들은 축적된 DDT로 인해 알껍질이 얇아져 알이 쉽게 깨지고, 새끼를
            기르는 행동에 영향을 받게 되어 죽는 새들이 많아진다.
            <br />
            <br />
            우리나라에서는 1986년부터 DDT사용이 중지되었는데 이후 저어새 숫자가
            다시 서서히 늘어나기 시작했다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal3;
