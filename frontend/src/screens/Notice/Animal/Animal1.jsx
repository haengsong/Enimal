// 검은코뿔소
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getDetailNotice } from "@apis/notice";

function Animal1() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(1)
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
            검은 코뿔소
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="HuReYBQJkPg"
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
          <div className="notiani_txt notoReg fs-28">
            검은 코뿔소
          </div>
          <div className="notiani_tex notoReg fs-20">
          코 부분의 뿔은 두 개가 있으며 앞뿔은 최대 130cm, 뒷뿔은 최대 60cm까지 이른다. 검은코뿔소는 관목의 잎을 주로 먹기 때문에 잎을 뜯어내기 쉽게 윗입술이 길게 발달하고 입술이 좁은 형태를 지닌다. <br /> <br />
          개체수가 급감한 주요 원인은 밀렵이다. 검은코뿔소가 지니고 있는 두 개의 뿔은 해열과 해독, 최음제로도 쓰이고, 전통 의식을 위한 칼자루의 재료가 되기도 한다. 암을 비롯해 크고 작은 온갖 질병을 낫게 한다는 잘못된 믿음이 널리 퍼져 있어 아시아에서는 고가로 팔리고 있다. <br /><br />
          검은코뿔소는 본래 아프리카 대륙에서 가장 숫자가 많은 코뿔소 종이었지만, 오늘날에는 모든 아종들의 개체 수를 합하여도 남주흰코뿔소의 개체 수에도 미치지 못하는 상황이 되었고, 서식지 또한 크게 위축되었다. 서부검은코뿔소는 2006년 7월 7일자로 공식 멸종되었다.

          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal1;
