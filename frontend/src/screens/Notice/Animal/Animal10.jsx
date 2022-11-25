// 북극곰
import React,{useEffect} from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice } from "@apis/notice";

function Animal10() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  useEffect(()=>{
    getDetailNotice(10)
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
            북극곰
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="JTnsYAhvKfU"
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
          <div className="notiani_txt notoReg fs-28">북극곰</div>
          <div className="notiani_tex notoReg fs-20">
            백곰이라고도 부른다. 북극 지방에 서식하고 있으며 현존하는 곰 중에서
            가장 큰 곰이다. 갓 태어난 북극곰의 새끼는 약 900g 미만이지만
            놀랍게도 다 자란 수컷은 300~650kg 정도라고 한다. 완벽한 육식성인
            곰으로 바다표범 사냥에 영리하다. 그외 순록, 돌고래, 새, 물고기를
            잡아 먹는다.
            <br /> <br />
            북극곰은 영하 40도의 추위와 시속 120km의 강풍도 견뎌내며, 뛰어난
            생존 적응력을 지녀 지구에서 가장 추운 환경에서도 번성한다. 몸은
            단열성이 우수해 체온 손실이 거의 없으며, 몸 속 깊은 곳에 온기를
            고스란히 간직하며, 영하를 밑도는 북극의 날씨를 이겨낼 수 있다. 몸
            전체가 하얗게 보이는 털로 덮여 있으나 코와 피부는 검은색이다. 빛의
            반사 때문에 하얗게 보이는 털은 실제로는 투명하다. 몸을 은폐시키는
            기능을 하며, 북극의 추운 기온을 차단해 준다. 북극곰의 털은 이런
            면에서 대단히 효과적이어서, 기온이 상승하면 북극곰은 얼음 위에서
            뒹굴며 몸을 적인 몸 구조를 가지고 있다. 피부 아래는 두꺼운 지방층이
            형성되어 있어 체온을 따뜻하게 유지할 수 있다.
            <br />
            <br />
            북극곰은 사람도 잡아먹는다. (북극곰은 사람을 찢어!!) 북극곰은 공격을 받고 있지 않은
            상황에서도 사람에게는 위협적인 존재이다. 북극곰은 사람을 본 적이
            거의 없기 때문에, 사람이 눈에 띄면 먹이로 간주한다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal10;
