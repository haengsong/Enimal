// import React from 'react';
import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

import asianele from "@assets/images/animal/main/asianele.jpeg";
import cat from "@assets/images/animal/main/cat.jpg";
import crane from "@assets/images/animal/main/crane.png";
import dolphin from "@assets/images/animal/main/dolphin.jpg";
import dugong from "@assets/images/animal/main/dugong.jpg";
import eel from "@assets/images/animal/main/eel.png";
import elk from "@assets/images/animal/main/elk.jpg";
import finless from "@assets/images/animal/main/finless.jpg";
import goat from "@assets/images/animal/main/goat.png";
import hawk from "@assets/images/animal/main/hawk.png";
import hippo from "@assets/images/animal/main/hippo.jpg";
import orangutan from "@assets/images/animal/main/orangutan.jpg";
import otter from "@assets/images/animal/main/otter.jpg";
import panda from "@assets/images/animal/main/panda.jpg";
import polarbear from "@assets/images/animal/main/polarbear.jpg";
import rabbit from "@assets/images/animal/main/rabbit.jpeg";
import redpanda from "@assets/images/animal/main/redpanda.jpg";
import rhinoceros from "@assets/images/animal/main/rhinoceros.jpg";
import shark from "@assets/images/animal/main/shark.png";
import spoonbill from "@assets/images/animal/main/spoonbill.jpg";
import tiger from "@assets/images/animal/main/tiger.png";
import turtle from "@assets/images/animal/main/turtle.jpg";
import upalupa from "@assets/images/animal/main/upalupa.jpg";
import weasel from "@assets/images/animal/main/weasel.jpg";

import { getTodayAnimal, getRankc, getRankd } from "@apis/home";

function Home() {
  const [todayAnimal, setTodayAnimal] = useState(null);

  const [rankC, setRankC] = useState([]);
  const [rankD, setRankD] = useState([]);

  useEffect(() => {
    getTodayAnimal().then(res => {
      setTodayAnimal(res.data);
    });
    const PARAMS = { pageSize: 10, lastIdx: 0 };
    getRankd(PARAMS).then(res2 => {
      setRankD(res2.data);
    });
    getRankc(PARAMS).then(res2 => {
      setRankC(res2.data);
    });
  }, []);

  const Route = {
    검은코뿔소: "/notice/1",
    양쯔강돌고래: "/notice/2",
    저어새: "/notice/3",
    고라니: "/notice/4",
    하마: "/notice/5",
    뱀장어: "/notice/6",
    렛서판다: "/notice/7",
    우파루파: "/notice/8",
    자이언트판다: "/notice/9",
    북극곰: "/notice/10",
    수달: "/notice/11",
    바다거북: "/notice/12",
    안데스산고양이: "/notice/13",
    아시아코끼리: "/notice/14",
    강토끼: "/notice/15",
    고래상어: "/notice/16",
    오랑우탄: "/notice/17",
    상괭이: "/notice/18",
    검은발족제비: "/notice/19",
    듀공: "/notice/20",
    매: "/notice/21",
    두루미: "/notice/22",
    산양: "/notice/23",
    호랑이: "/notice/24"
  };

  const images = {
    검은코뿔소: rhinoceros,
    양쯔강돌고래: dolphin,
    저어새: spoonbill,
    고라니: elk,
    하마: hippo,
    뱀장어: eel,
    렛서판다: redpanda,
    우파루파: upalupa,
    자이언트판다: panda,
    북극곰: polarbear,
    수달: otter,
    바다거북: turtle,
    안데스산고양이: cat,
    아시아코끼리: asianele,
    강토끼: rabbit,
    고래상어: shark,
    오랑우탄: orangutan,
    상괭이: finless,
    검은발족제비: weasel,
    듀공: dugong,
    매: hawk,
    두루미: crane,
    산양: goat,
    호랑이: tiger
  };

  return (
    <>
      <div className="MainPage1 Page1">
        <div className="Page1Content">
          <h1 className="fs-32 notoBold my-3 page1FontColor">Enimal</h1>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            멸종위기동물 NFT카드를 수집하면서
          </h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            우리와 함께 멸종위기 생물을 지켜주세요.
          </h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            사용된 SSF코인은 동물보호단체에 기부하는데 사용이 됩니다.
          </h3>
          <Link to="/intro" className="Button3 fs-16 notoBold">
            자세한 설명 보기
          </Link>
        </div>
      </div>

      <Fade bottom>
        <div className="MainPage2">
          <div className="container flex">
            <div className="animal flex">
              {todayAnimal ? (
                <>
                  <div className="animal_pic">
                    <img
                      className="todayImg"
                      src={images[todayAnimal.animal]}
                      alt="오늘의 동물"
                    />
                  </div>
                  <div className="animal_explain">
                    <div className="animal_explain_title notoBold fs-40 flex justify-center">
                      오늘의 동물
                    </div>
                    <div className="animal_explain_name flex justify-center notoBold fs-32">
                      {todayAnimal.animal}
                    </div>
                    <div className="animal_explain_content notoMid fs-28">
                      {todayAnimal.content}
                    </div>
                    <Link
                      to={Route[todayAnimal.animal]}
                      type="button"
                      className="animal_explain_noti notoBold fs-24 flex justify-center align-center"
                    >
                      영상 시청하기
                    </Link>
                  </div>
                </>
              ) : (
                1
              )}
            </div>
          </div>
        </div>
      </Fade>

      <div className="MainPage3">
        <div className="container">
          <h1 className="fs-32 notoBold text-center my-5 page2FontColor">
            멸종위기를 지켜준 사람들
          </h1>
          <div className="flex justify-center grid">
            <div className="col-5 rankingBox">
              <h1 className="fs-28 notoBold text-center my-4 page2FontColor">
                컬렉션 순위
              </h1>
              <li className="RankList grid">
                <span className="col-3 text-center notoBold text-center">순위</span>
                <span className="col-4 notoBold text-center">닉네임</span>
                <span className="col-3 textEnd notoBold text-center">뽑은 횟수</span>
                <span className="col-3 textEnd notoBold text-center">수집된 NFT</span>
              </li>
              <hr className="Line2" />
              <div className="collectionRank">
                {rankC.map(user => {
                  return (
                    <Zoom left>
                      <Link to={`/mypage/${user.nickname}`} key={rankC.indexOf(user)} className="RankList grid">
                        <span className="col-3 text-center notoMid text-center">
                          {rankC.indexOf(user) + 1}
                        </span>
                        <span className="col-4 notoBold text-center">{user.nickname}</span>
                        <span className="col-3 notoBold text-center">{user.drawCount}회</span>
                        <span className="col-3 textEnd notoMid text-center">
                          {user.collectionCount}개
                        </span>
                      </Link>
                    </Zoom>
                  );
                })}
              </div>
            </div>
            <div className="col-5 rankingBox">
              <h1 className="fs-28 notoBold text-center my-4 page2FontColor">
                기부금 순위
              </h1>
              <li className="RankList grid">
                <span className="col-3 text-center notoBold text-center">순위</span>
                <span className="col-5 notoBold text-center">닉네임</span>
                <span className="col-4 textEnd notoBold text-center">기부금</span>
              </li>
              <hr className="Line2" />
              <div className="donationRank">
                {rankD.map(user => {
                  const dona = user.doantion.toLocaleString("ko-KR");
                  return (
                    <Zoom left>
                      <Link to={`/mypage/${user.nickname}`} key={user.rank} className="RankList grid">
                        <span className="col-3 text-center notoMid text-center">
                          {rankD.indexOf(user) + 1}
                        </span>
                        <span className="col-5 notoBold text-center">{user.nickname}</span>
                        <span className="col-4 textEnd notoMid text-center">
                          {dona} SAVE
                        </span>
                      </Link>
                    </Zoom>
                  );
                })}
              </div>
            </div>
          </div>
          <Link to="/rank" className="Button2 fs-24 notoMid">
            랭킹 더보기
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
