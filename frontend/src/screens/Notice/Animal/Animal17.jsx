// 오랑우탄
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal17() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(17)
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
            오랑우탄
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="XwNaxK9v268"
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
          <div className="notiani_txt notoReg fs-28">오랑우탄</div>
          <div className="notiani_tex notoReg fs-20">
            생각과 행동이 매우 신중하며 고릴라 다음으로 몸집이 큰 유인원이다.
            거의 나무 위에서 생활하는데, 팔로 숲 꼭대기까지 기어올라가
            조심스럽게 돌아다니며, 때로는 이 가지에서 저 가지 사이를 구름다리
            타듯이 옮겨다닌다. 먹이는 야생새 알도 먹지만 주로 나무열매를
            좋아하며, 한 나무의 열매를 다 먹을 때까지 며칠이라도 그 나무 부근에
            머물러 있는다.
            <br /> <br />
            아주 드물지만 육식하는 경우가 있으며, 그 밖에 영양가가 풍부한 흙, 꽃
            등을 먹기도 한다. 밤에는 나뭇가지를 꺾어 휘어서 보금자리를 만들어
            잠을 잔다. 보금자리는 수일간 사용할 때도 있으나 매일 새로 만들어질
            때가 많다.
            <br />
            <br />
            대체적으로 조용하고 온순하여 애완용 및 곡마용으로 키워지기 위해
            사람에게 많이 잡혀간다. 남획과 삼림의 벌채로 야생 상태의
            오랑우탄은 멸종위기종이며, 절멸을 막기 위해 보호되고 있다.
            최근들어 벌채와 채광, 산불 등의 증가로 인해 서식지가 빠르게 파괴되고
            있다. 현재 남은 오랑우탄 개체들은 100,000마리는 충분히 되는 것으로
            보이나, 빠르게 감소하고 있어 보호가 시급하다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal17;
