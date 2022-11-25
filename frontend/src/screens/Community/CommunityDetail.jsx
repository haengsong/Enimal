import React, { useEffect, useState } from "react";
import "./CommunityDetail.scss";

import profiledummy from "@assets/images/person.png";
import CommunityComment from "@components/Community/CommunityComment"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getArticleDetail, getCreateComment,getDeleteArticle } from "@apis/community"

import GetBadge from "../../components/common/GetBadge";


function CommunityRegist() {
  const location = useLocation();
  const articleId = useParams().index;
  const [data, setData] = useState(null);
  const [time, setTime] = useState(null);
  const [comment, setComment] = useState(null);
  const [myComment, setMyComment] = useState(null);
  const navigate = useNavigate();


  // 업적획득 세팅
  const [badge, setBadge] = useState([]);
  const [badgeModal, setBadgeModal] = useState(false);
  const openBadgeModal = () => {
    setBadgeModal(true);
  };
  const closeBadgeModal = () => {
    setBadgeModal(false);
  };



  useEffect(() => {
    getArticleDetail(articleId).then(res => {
      setData(res.data)
      setComment(res.comment)

      const date = new Date(res.data.boardTime);
      const articleTime = `${date.getFullYear()}년${(date.getMonth() + 1)}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분`;
      setTime(articleTime)
    })
    if (location.state && location.state.badge.length > 0) {
      setBadge(location.state.badge)
      openBadgeModal()
    }
  }, [])

  function createComment(e) {
    e.preventDefault();
    const params = { idx: articleId }
    const body = { content: myComment }
    getCreateComment(params, body)
    window.location.href = `/community/detail/${articleId}`
  }

  function deleteArticle(e){
    e.preventDefault();
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      getDeleteArticle(articleId).then(()=>{
      navigate('/community')
    })
    }
    
  }
  function back(e) {
    e.preventDefault();
    navigate('/community')
  }

  
  return (
    <div className="container flex aline-center">
      {data ? <div className="commudetail">
        <div className="flex justify-space-between aline-center commuNav">
        <FontAwesomeIcon className="backIcon" onClick={e => back(e)} icon={faArrowLeft} />
          <div className="commudetail_title notoBold fs-36">자랑게시판</div>
          <div className="emptyBox" />
        </div>
        <div className="divide" />
        <div className="commudetail_all">
          {/* 프로필 */}
          <div className="commudetail_all_profile flex justify-space-between">
            <div className="flex">
              <div className="commudetail_all_profile_img">
                <img src={profiledummy} alt="프로필이미지" />
              </div>
              <div className="commudetail_all_profile_extra flex">
                <Link to={`/mypage/${data.nickname}`} type="button" className="commudetail_all_profile_extra_name notoMid fs-24">
                  {data.nickname}
                </Link>
                <p className="commudetail_all_profile_extra_time notoMid fs-16" style={{ whiteSpace: "nowrap" }}>
                  {time}
                </p>
              </div>
            </div>

            <div className="commudetail_all_profile_btn flex">
              {data.nickname === localStorage.MyNick ?
              <>
              <Link to={`/community/edit/${articleId}`} className="commudetail_all_profile_btn_modi notoBold">수정하기</Link>
              <button type="button" onClick={e=>deleteArticle(e)} className="commudetail_all_profile_btn_del notoBold">삭제하기</button>
              </>
              : null
            }
              
            </div>
          </div>
          {/* 내용 */}
          <div className="commudetail_all_content">
            <div className="commudetail_all_content_photo">
              <img src={data.picture} alt="이미지" />
            </div>
            <div className="commudetail_all_content_title notoMid fs-32">
              {data.title}
            </div>
            <div className="divide" />
            <div className="commudetail_all_content_txt notoReg fs-24">
              {data.content}
            </div>
          </div>
          {/* 댓글입력 */}
          <div className="commudetail_all_comment flex">
            <div className="commudetail_all_comment_sub notoBold fs-24 flex align-center">
              댓글
            </div>
            <input type="text" onChange={e => setMyComment(e.target.value)} className="commudetail_all_comment_input_txt notoReg fs-16 commentInput" />
            <div className="commudetail_all_comment_enter flex align-center">
              <button type="button" onClick={e => createComment(e)} className="commudetail_all_comment_enter_btn notoBold fs-18 mx-3">
                등록
              </button>
            </div>
          </div>
          <div className="commudetail_all_colist">
            <CommunityComment comment={comment} articleId={articleId} />
          </div>

        </div>
      </div>
        : null}
      <GetBadge open={badgeModal} close={closeBadgeModal} badge={badge} />
    </div>
  );
}

export default CommunityRegist;
