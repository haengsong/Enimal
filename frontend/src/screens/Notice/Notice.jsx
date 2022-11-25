import React, { useState, useEffect } from "react";
import "./Notice.scss";

import Pagination from "react-js-pagination";



import { Link } from "react-router-dom";

import { getNoticeList } from "@apis/notice";

import NoticeCard from "../../components/Notice/NoticeCard";

function Notice() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const params = { pageSize: 100, lastIdx: 0 }
    getNoticeList(params).then(res => {
      setArticles(res.data)
    })
  }, [])


  const handlePageChange = (e) => {
    setPage(e);
  };

  const lis = []
  for (let i=0; i<10; i+=1){
    if (articles[(page-1)*10+i]) {
      lis.push(articles[(page-1)*10+i])
    }
  }

  return (
    <div className="containerBox">




      <div className="notice">


        <div className="notice_pagetitle notoBold fs-36">공지사항</div>
        <div className=" flex justify-center align-center">
          {localStorage.MyNick === 'Enimal' ?
            <Link to="/notice/regist" className="notoBold fs-24 notice_regi">
              등록하기
            </Link>
            : null
          }

        </div>
        <div className="divide" />
        <div className="notice_table flex">
          <p className="notice_table_one notoBold fs-24">번호</p>
          <p className="notice_table_two notoBold fs-24">제목</p>
          <p className="notice_table_three notoBold fs-24">등록일</p>
        </div>
        <div className="divide" />
        <div className="notice_list">
          <div className="noticeList">
            {lis.map(article => {
              return (
                <NoticeCard idx={(page-1)*10+lis.indexOf(article)+1} key={article.idx} data={article} />
              )
            })
            }

          </div>
        </div>
        <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={24}
              pageRangeDisplayed={5}
              prevPageText="‹"
              nextPageText="›"
              onChange={handlePageChange}
            />
      </div>
    </div>
  );
}
export default Notice;
