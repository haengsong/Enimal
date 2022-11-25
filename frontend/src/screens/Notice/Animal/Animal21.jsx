// 매
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal21() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(21)
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
            매
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="VUM3pvLsw-s"
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
          <div className="notiani_txt notoReg fs-28">매</div>
          <div className="notiani_tex notoReg fs-20">
            매목 매과에 속하는 조류이다. 몸길이는 34-50cm이고 날개편길이
            80~115cm의 중형 맹금류로서 몸 윗면은 어두운 청회색이며 몸 아랫면은
            흰색에 검은 가로줄 무늬가 있다. 암수가 거의 비슷한 색이다. 등, 날개,
            꼬리는 푸른색을 띤 회색이고, 가슴과 배는 옅은 노란 갈색에 검은색
            가로줄 무늬가 세밀하게 있다. 눈 밑의 검은 무늬는 크고 뚜렷하며,
            눈테는 노란색이다. 특히 어린 새의 등은 갈색이며 배에는 굵고 어두운
            갈색 세로줄 무늬가 있다.
            <br /> <br />
            무인도를 중심으로 한 도서 지역이나 가파른 해안가 절벽에서 번식하며,
            꿩, 오리류 등 주로 조류를 주식으로 나무 꼭대기나 암벽 지대 위 등
            지형이 높은 곳에서 휴식을 취하거나 먹이를 찾는데, 먹이를 발견하면
            공중에서 빠른 속도로 잡는다. 알은 보통 3-4개를 낳는다. 번식기에는
            수컷이 잡은 먹이를 둥지 근처의 공중에서 암컷에게 전달하는 모습을 볼
            수 있다. 해안 도서 지역 및 철새도래지를 중심으로 하여 전국에
            서식하고, 남극을 제외한 전 세계에 분포한다.
            <br />
            <br />
            국내에는 해안 도서 지역 및 철새도래지를 중심으로 전국적으로
            분포한다. 국내에 서식하는 개체 수가 많지 않은 편으로, 번식기에는
            서남해안을 중심으로 한 철새 이동 경로상의 무인도에서 자주 관찰되며,
            겨울철에는 물새류 등 철새도래지 인근에 서식한다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal21;
