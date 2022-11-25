import React from "react";
import "./CommunityComment.scss";
import { getDeleteComment } from "@apis/community";
import profiledummy from '@assets/images/person.png'

function CommunityComment(props) {
  const { comment,articleId } = props;

  function deleteComment(e){
    e.preventDefault();
    getDeleteComment(e.target.id)
    window.location.href = `/community/detail/${articleId}`
  }
  return (
    <div className="comment">
      {comment.map(item => {
        return (
          <div className="flex justify-space-between comment">
            <div className="flex align-center">
              <img className="Commentimg" src={profiledummy} alt="프로필이미지" />
              <div className="comment_nick notoMid fs-20">
                {item.user_id}
              </div>
              <div className="content notoReg fs-16">
                {item.content}
              </div>
            </div>


            { item.user_id === localStorage.MyNick ?
              <button type="button" onClick={e=>deleteComment(e)} id={item.comment_idx} className="CommentDeleteButton notoMid fs-18">삭제</button>
            :null}
          </div>
        )
      })}
    </div>
  );
}

export default CommunityComment;
