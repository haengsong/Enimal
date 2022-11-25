import React from "react";
import { Link } from "react-router-dom";

import './CommentCard.scss'

function CommentCard(props) {
  const { data } =props;
  const date = new Date(data.createDate);
  const createTime=`${date.getFullYear()}년${(date.getMonth()+1)}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분`;
  
  
  return (
    <div className="mx-5 commentBox">
      <h1 className="fs-20 notoBold my-3">{data.content}</h1>
      <div className="fs-16 notoReg my-1">{createTime}</div>
      <Link to={`/community/detail/${data.boardIdx}`} className="fs-18 notoMid my-1">{data.boardTitle}</Link>
    </div>
  )
}

export default CommentCard;