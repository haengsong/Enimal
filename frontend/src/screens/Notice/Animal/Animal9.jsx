// 자이언트판다
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal9() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(9)
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
            자이언트판다
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="Gpkga0fq0x0"
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
          <div className="notiani_txt notoReg fs-28">자이언트판다</div>
          <div className="notiani_tex notoReg fs-20">
            자이언트를 생략하고 그냥 판다 또는 왕판다로 부르기도 한다. 큰 덩치,
            귀와 눈 주위의 검은 반점으로 쉽게 알아볼 수 있다. 중국 쓰촨성 지방과
            티벳 고산지대에 서식하는 포유 동물로 식사의 99%는 대나무 이다.
            천적은 눈표범, 자칼, 담비라고 한다. 판다 성체의 무게는 약
            70kg~120kg에 이른다. 아주 거대한 개체는 160kg까지 나간다고 한다.
            야생 개체수 약 1800마리 이다.
            <br /> <br />
            판다는 기존에 멸종위기종이었다. 2016년에 세계 판다의 개체수가
            2천마리 정도로 추산됨에 따라 멸종위기종에서 멸종위기 취약종으로 한
            단계 격하했다. 보통 때에는 단독 생활을 하지만 발정기인 봄에는 여러
            마리가 모인다. 대나무 잎, 조릿대, 죽순을 주로 먹으며 대나무의 땅속
            줄기, 풀, 쥐, 토끼, 새 등을 먹기도 한다. 앞발 발목뼈 하나가 크게 툭
            튀어나와 있는데, 이 돌기와 다른 발가락으로 먹이를 붙잡고 먹는다.
            성질이 온순하며 새처럼 높은 소리를 내기도 한다. 항문샘에서 나오는
            분비물로 자신의 영역을 표시한다. 겨울 잠을 자지 않는다. 판다를
            동물원에서 키울 경우 돈이 많이 든다고 한다. 하루에 먹는 대나무 양이
            성체 기준 30kg 정도라고 한다
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal9;
