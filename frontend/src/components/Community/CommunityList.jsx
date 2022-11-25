import React, { useState, useEffect, useRef } from "react";
import "./CommunityCard.scss";

import { getCommunityList } from '@apis/community'
import CommunityCard from "./CommunityCard";



function CommunityList() {
  let IDX = 0
  const [articles, setArticles] = useState([]);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);


  async function getList() {
    const params = { pageSize: 9, lastIdx: IDX }
    await getCommunityList(params).then(res => {
      const DATA = res.data;
      if (DATA.length > 0) {
        setArticles(pre => [...pre, ...DATA])
        IDX = DATA.slice(-1)[0].idx
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
    if (bottom && articles.length % 9 === 0) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  return (
    <div className="cardList flex" id="cardList">
      {articles.map(article =>
      (
        <CommunityCard key={article.idx} data={article} />
      )
      )}
      <div ref={setBottom} />
    </div>


  )
}

export default CommunityList;