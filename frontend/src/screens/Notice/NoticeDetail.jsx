import React, { useState, useEffect } from "react";
import "./NoticeDetail.scss";
import { Link, useNavigate, useParams, } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailNotice, getDeleteNotice } from "@apis/notice";

function NoticeDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  const noticeID = useParams().index;
  useEffect(() => {
    getDetailNotice(noticeID).then(res => {
      setData(res.data)
    })
  }, [])

  function back(e) {
    e.preventDefault();
    navigate('/notice')
  }

  function deleteNotice(e) {
    e.preventDefault();
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      getDeleteNotice(noticeID).then(() => {
        navigate('/notice')
      })
    }


  }
  return (
    <div className="container flex noticedetail">
      {data ? <div className="notiRegi">
        <div className="notiRegi_pgtitle notoBold fs-36 text-center flex justify-space-between">
          <FontAwesomeIcon className="" onClick={e => back(e)} icon={faArrowLeft} />
          <div className="NoticeText">공지사항</div>
          <div className="emptyBox" />
        </div>
        <div className="notiRegi_text">
          <div type="text" className="notiRegi_text_title notoMid fs-24">
            {data.title}
          </div>
          <div className="divide" />
          <div className="notiRegi_text_write notoReg fs-20">
            {data.content}
          </div>
          <div className="flex justify-end">
            {localStorage.MyNick === 'Enimal' ?
              <>
                <Link to={`/notice/edit/${noticeID}`} className="noticeButton fs-20 notoBold" type="button" style={{ backgroundColor: "#CBDFF1" }}>수정하기</Link>
                <button type="button" className="noticeButton fs-20 notoBold" onClick={e => deleteNotice(e)} style={{ backgroundColor: "#E8E8E8" }}>삭제하기</button>
              </>
              : null
            }

          </div>

        </div>
      </div> : null}
    </div>
  )
}

export default NoticeDetail;