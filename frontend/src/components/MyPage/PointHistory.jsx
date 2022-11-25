import React, { useEffect, useState } from "react";
import './PointHistory.scss'

import { getMyPointHistory } from "@apis/mypage";

function PointHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMyPointHistory().then(res => {
      setData(res.data.reverse())
    })
  }, [])





  return (
    <div className="PointHistory">
      <div className="flex justify-space-between text-center">
        <h1 className="fs-28 notoBold col-3">번호</h1>
        <h1 className="fs-28 notoBold col-6">환전 내역</h1>
        <h1 className="fs-28 notoBold col-3">환전 시간</h1>
      </div>
      {data.length >0 ?
      <ul className="my-5">
        {data.map((list) => {
          const date = new Date(list.createDate);
          const changeTime = `${date.getFullYear()}년${(date.getMonth() + 1)}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분`;

          const coin = parseInt(list.useCredit, 10);
          const SAVE = coin.toLocaleString('ko-KR');

          const dona = parseInt(list.donateCredit, 10);
          const Dona = dona.toLocaleString('ko-KR');

          return (
            <div className="my-5">
              <li key={data.indexOf(list)} className="flex justify-space-between text-center align-center">
                <h1 className="fs-20 notoMid number col-3">{data.indexOf(list)+1}</h1>
                <div className="col-6">
                  <div className="flex justify-center">
                    <h1 className="fs-20 notoMid">충전된 재화 : </h1>
                    <h1 className="fs-20 notoMid mx-3">{SAVE} SAVE</h1>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="fs-20 notoMid">기부한 금액 :</h1>
                    <h1 className="fs-20 notoMid mx-3">{Dona} SAVE</h1>
                  </div>
                  
                </div>
                <h1 className="fs-20 notoMid col-3">{changeTime}</h1>
              </li>
              <hr />
            </div>
          )
        })}
      </ul>
      :
      <div className="my-5">
        <h1 className="fs-28 notoBold text-center my-5">환전한 기록이 없습니다.</h1>
      </div>
      }
    </div>
  )
}
export default PointHistory;