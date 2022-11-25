import React from "react";
import "./CommunityCard.scss";

import { Link } from "react-router-dom";
import profiledummy from "@assets/images/person.png";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function CommunityCard(props) {
  const { data } = props;

  return (
    <Link to={`/community/detail/${data.idx}`} className="card">
      <div className="card_profile flex justify-space-between">
        <div className="flex">
          <div className="card_profile_img">
            <img src={profiledummy} alt="프로필이미지" />
          </div>
          <div className="card_profile_name notoMid fs-20 flex align-center">
            {data.nickname}
          </div>
        </div>
        <div className="flex align-center">
          <FontAwesomeIcon className="eye" icon={faEye} />
          <h1 className="fs-16 notoMid mx-2">{data.view}</h1>
        </div>
        
      </div>
      <div className="card_pic">
        <img src={data.picture} alt="게시글이미지" />
      </div>
      <div className="card_txt notoMid fs-16">
        {data.title}
      </div>
    </Link>
  );
}

export default CommunityCard;
