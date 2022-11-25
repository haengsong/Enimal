import React from "react";
import { Link } from "react-router-dom";
import './ArticleCard.scss'


function ArticleCard(props) {
  const { data } = props;

  return (
    <Link to={`/community/detail/${data.idx}`} className="mx-5">
      <div className="">
        <img className="myArticleIMG" src={data.picture} alt="게시글이미지" />
      </div>
      <div className="card_txt notoBold fs-20 text-center">
        {data.title}
      </div>
    </Link>
  )
}

export default ArticleCard;