import React, { useState, useEffect, useRef } from "react";
import './DonationRank.scss'

import { Link } from "react-router-dom";
import { getRankd } from "../../apis/home";


function DonationRank() {
  let IDX = 0
  const [ranker, setRanker] = useState([]);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  async function getList() {
    const params = { pageSize: 10, lastIdx: IDX }
    await getRankd(params).then(res => {
      const DATA = res.data;
      if (DATA.length > 0) {
        setRanker(pre => [...pre, ...DATA])
        IDX += 1
      }

    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          getList()
        }
      }
    );
    bottomObserver.current = observer;

  }, [])


  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom && ranker.length % 9 === 0) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);








  return (
    <div className="DonationRank">
      <div>
        <li className="RankList grid">
          <span className="col-3 fs-24 text-center notoBold">순위</span>
          <span className="col-5 fs-24 notoBold">닉네임</span>
          <span className="col-4 fs-24 textEnd notoBold">기부금</span>
        </li>
        <hr className="Line2" />
        <div className="dRank">
          {ranker.map(user => {
            console.log(ranker.indexOf(user)+1)
            const dona = user.doantion.toLocaleString("ko-KR");
            return (
              <Link to={`/mypage/${user.nickname}`} key={ranker.indexOf(user)} className="RankList grid">
                <span className="col-3 fs-20 text-center notoMid">{ranker.indexOf(user)+1}</span>
                <span className="col-5 fs-20 notoBold">{user.nickname}</span>
                <span className="col-4 fs-20 textEnd notoMid">{dona} SAVE</span>
              </Link>
            );
          })}
          <div ref={setBottom} />
        </div>
      </div>
    </div>
  );
}
export default DonationRank;
