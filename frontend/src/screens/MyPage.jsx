import React, { useState, } from "react";
import './MyPage.scss'
import { useNavigate, useParams } from "react-router-dom";

import UserInfo from "@components/MyPage/UserInfo";
import Check from "@components/MyPage/Check";
import PointHistory from "@components/MyPage/PointHistory";
import MyArticle from "@components/MyPage/MyArticle";
import { getDeleteUser } from "@apis/account";

import BaseImg from '../assets/images/base.png'



function MyPage() {
  const [Tab, setTab] = useState('info')
  const tabList = ['info', 'check', 'point', 'article']
  const userId = useParams().userid;
  const navigate = useNavigate();
  let MyPageTab = null
  if (Tab === 'info') {
    MyPageTab = <UserInfo userId={userId} />
  } else if (Tab === 'check') {
    MyPageTab = <Check userId={userId} />
  } else if (Tab === 'point') {
    MyPageTab = <PointHistory userId={userId} />
  } else {
    MyPageTab = <MyArticle userId={userId} />
  }

  function TabChange(e) {
    setTab(e.target.id)
    for (let i = 0; i < 4; i += 1) {
      if (e.target.id === tabList[i]) {
        document.getElementById(tabList[i]).className = 'mypageTabA'
      }
      else {
        document.getElementById(tabList[i]).className = 'mypageTabB'
      }
    }
  }

  function deleteAccount(e) {
    e.preventDefault();
    if (window.confirm("정말로 계정을 삭제하시겠습니까?")) {
      getDeleteUser().then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('MyNick')
        localStorage.removeItem('myAddress')
        alert("계정 삭제가 완료되었습니다!")
        navigate('/')
      })
    }
  }

  return (
    <div className="MyPage">
      <div className="flex align-center">
        <img className="profileImg" src={BaseImg} alt="#" />
        <h1 className="fs-40 roBold userNick">{userId}</h1>
        {userId === localStorage.MyNick ?
          <button className="deleteButton fs-15 notoReg mx-3" onClick={e => deleteAccount(e)} type="button">회원 탈퇴</button>
          : null
        }

      </div>
      <hr />

      <div className="flex">
        {userId === localStorage.MyNick ?
          <>
            <button className="mypageTabA" onClick={e => TabChange(e)} id="info" type="button">기본정보</button>
            <button className="mypageTabB" onClick={e => TabChange(e)} id="check" type="button">출석현황</button>
            <button className="mypageTabB" onClick={e => TabChange(e)} id="point" type="button">환전내역</button>
            <button className="mypageTabB" onClick={e => TabChange(e)} id="article" type="button">내가 작성한 글</button>
          </>
          :
          null
        }
      </div>

      {MyPageTab}
    </div>
  )
}
export default MyPage;
