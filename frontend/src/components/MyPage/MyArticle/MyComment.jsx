import React,{ useState,useEffect } from "react";
import './MyArticles.scss'

import { getMyComment } from "@apis/mypage";

import CommentCard from "./CommentCard";



function MyComment() {
  const [LastIdx,setLastIdx] = useState(0);
  const [myComments,setMyComments] = useState([]);
  useEffect(()=>{
    const params = {pageSize: 9 , lastIdx: LastIdx}
    getMyComment(params).then(res=>{
      setMyComments(res.data)
      setLastIdx(res.data.slice(-1)[0].idx)
    })
  },[])

  return (
    <div className="MyArticlesBox">
      <h1 className="fs-40 notoBold">내 댓글</h1>
      <hr />
      {myComments.length>0 ?
      <div>
          {myComments.map(comment => {
            return (
              <CommentCard data={comment} />
            )
          })}
      </div>
      :
      <div>
        <h1 className="fs-22 notoBold">작성하신 댓글이 없습니다.</h1>
      </div>
      }

    </div>
  );
}

export default MyComment;