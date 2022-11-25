import React,{useState,useEffect,useRef} from "react";
import "./CollectionRank.scss";

import { Link } from "react-router-dom";
import { getRankc } from "../../apis/home";



function CollectionRank() {
  let IDX = 0
  const [ranker, setRanker] = useState([]);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  async function getList() {
    const params = { pageSize:10, lastIdx: IDX }
    await getRankc(params).then(res => {
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
    <div className="CollectionRank">
      <div>
        <li className="RankList grid">
          <span className="col-2 fs-24 text-center notoBold">순위</span>
          <span className="col-4 fs-24 notoBold">닉네임</span>
          <span className="col-3 fs-24 textEnd notoBold">수집된 NFT</span>
          <span className="col-3 fs-24 textEnd notoBold">뽑은 횟수</span>
        </li>
        <hr className="Line2" />
        <div className="cRank">
          {ranker.map(user => {
            const cnt = user.drawCount.toLocaleString("ko-KR");
            return (
              <Link to={`/mypage/${user.nickname}`} key={user.rank} className="RankList grid">
                <span className="col-2 fs-20 text-center notoMid">{ranker.indexOf(user)+1}</span>
                <span className="col-4 fs-20 notoBold">{user.nickname}</span>
                <span className="col-3 fs-20 textEnd notoMid">
                  {user.collectionCount}장
                </span>
                <span className="col-3 fs-20 textEnd notoMid">{cnt}회</span>
              </Link>
            );
          })}
          <div ref={setBottom} />
        </div>
      </div>
    </div>
  );
}
export default CollectionRank;
