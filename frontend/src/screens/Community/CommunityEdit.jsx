import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CommunityRegist.scss";
import { getArticleDetail,getUpdateArticle } from "@apis/community";

function CommunitiEdit(){
  const [Title, setTitle] = useState(null);
  const [Content, setContent] = useState(null);
  const [Picture, setPicture] = useState(null);
  const articleId = useParams().index;
  const navigate = useNavigate();
  useEffect(()=>{
    getArticleDetail(articleId).then(res=>{
      document.getElementById('title').value = res.data.title
      setTitle(res.data.title)
      document.getElementById('content').value = res.data.content
      setContent(res.data.content)
      setPicture(res.data.picture)
    })
  },[])

  function updateArticle(e) {
    e.preventDefault();
    const DATA = {
      idx:articleId,
      title: Title,
      content: Content,
      user_id:localStorage.MyNick,
      picture: Picture
    }
    getUpdateArticle(DATA).then(()=>{
      navigate(`/community/detail/${articleId}`)
    })
  }

  function chaengtitle(e) {
    setTitle(e.target.value)
  }
  function chaengcontent(e) {
    setContent(e.target.value)
  }

  return (
    <div className="container flex">
      <div className="regi">
        <div className="regi_pagetitle notoBold fs-36">
          자랑게시판
        </div>
        <div className="divide" />
        <div className="regi_content flex justify-center">
            <img className="regi_content_img" src={Picture} alt="클릭로고" />
        </div>
        <div className="regi_text">
          <input className="regi_text_title notoMid fs-24" id="title" onChange={e => chaengtitle(e)} style={{ width: '900px' }} placeholder="제목을 입력해주세요" />

          <div className="divide" />
          <textarea className="regi_text_write notoReg fs-20 regi_textarea" id="content" onChange={e => chaengcontent(e)} placeholder="내용을 입력해주세요." />

        </div>
        <div className="regi_button flex">
          <button type="button" className="notoBold fs-24" onClick={e => updateArticle(e)}>
            수정하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunitiEdit;