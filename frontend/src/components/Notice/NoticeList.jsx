import React, { useState, useEffect } from "react";
// import "./NoticeCard.scss";

import { getNoticeList } from "@apis/notice";
import NoticeCard from "./NoticeCard";



function NoticeList(props) {
  const { page } = props;
  const [articles,setArticles] = useState([]);
  useEffect(()=>{
    const params = {pageSize: 100 , lastIdx: 0}
    getNoticeList(params).then(res =>{
      setArticles(res.data)
    })
  }, [page])


  return (
    <div className="noticeList">
      { articles.map(article => {
        const A = parseInt((page-1)*9,10)
        const B = parseInt(articles.indexOf(article)+1,10)
        return (
        <NoticeCard idx={A+B} key={article.idx} data={article} />
        )
        })
      }

    </div>
  );
}

export default NoticeList;
