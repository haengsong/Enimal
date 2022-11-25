import React,{ useState } from "react";
import "./NoticeRegist.scss";

import { getCreateNotice } from "@apis/notice";
import { useNavigate } from "react-router-dom";

function NoticeRegist() {
  const [Title,setTitle] = useState(null);
  const [Content,setContent] =useState(null);
  const navigate = useNavigate();

  function createNotice(e){
    e.preventDefault();
    const DATA = { title: Title, content:Content}
    getCreateNotice(DATA).then(()=>{
      navigate('/notice')
    })
    
  }
  return (
    <div className="container flex">
      <div className="notiRegi">
        <div className="notiRegi_pgtitle notoBold fs-36">
          공지사항
        </div>
        <div className="notiRegi_text">
          <input type="text" className="notiRegi_text_title notoMid fs-24" onChange={e=>setTitle(e.target.value)} placeholder="제목을 입력해주세요" />
          <div className="divide" />
          <textarea className="notiRegi_text_write notoReg fs-20" onChange={e=>setContent(e.target.value)} placeholder="내용을 입력해주세요." />
        </div>
        <div className="notiRegi_button flex">
          <button type="button" className="notoBold fs-24" onClick={e=>createNotice(e)}>
            등록하기
          </button>
        </div>

      </div>
    </div>
  );
}

export default NoticeRegist;
