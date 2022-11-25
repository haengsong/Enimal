import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getDetailNotice,getUpdateNotice } from "@apis/notice";

function NoticeEdit() {
  const [Title,setTitle] = useState(null);
  const [Content,setContent] =useState(null);
  const noticeID = useParams().index;
  const navigate = useNavigate();

  useEffect(()=>{
    getDetailNotice(noticeID).then(res=>{
      document.getElementById('title').value = res.data.title
      setTitle(res.data.title)
      document.getElementById('content').value = res.data.content
      setContent(res.data.content)
    })
  },[])

  function updateNotice(e){
    e.preventDefault();
    const data = {
      idx:noticeID,
      title:Title,
      content:Content
    }
    getUpdateNotice(data).then(() =>{
      navigate(`/notice/${noticeID}`)
    })

  }

  return (
    <div className="container flex">
      <div className="notiRegi">
        <div className="notiRegi_pgtitle notoBold fs-36">
          공지사항
        </div>
        <div className="notiRegi_text">
          <input type="text" id="title" className="notiRegi_text_title notoMid fs-24" onChange={e => setTitle(e.target.value)} placeholder="제목을 입력해주세요" />
          <div className="divide" />
          <textarea className="notiRegi_text_write notoReg fs-20" id="content" onChange={e => setContent(e.target.value)} placeholder="내용을 입력해주세요." />
        </div>
        <div className="notiRegi_button flex">
          <button type="button" className="notoBold fs-24" onClick={e => updateNotice(e)}>
            수정하기
          </button>
        </div>

      </div>
    </div>
  )
}

export default NoticeEdit