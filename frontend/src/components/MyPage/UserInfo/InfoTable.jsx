import React from "react";
import './InfoTable.scss'

function InfoTable(props) {
  const { data } =props;

  return (
    <div className="infoTable">
      {data ?
      <div>
        <hr className="firstLine" />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">컬렉션 순위</h1>
          <h2 className="fs-20 notoMid">{data.collectionRank} 위</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">기부금 순위</h1>
          <h2 className="fs-20 notoMid">{data.donationRank} 위</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">완성된 컬렉션 수</h1>
          <h2 className="fs-20 notoMid">{data.collectionCount} 개</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">뽑은 횟수</h1>
          <h2 className="fs-20 notoMid">{data.usedCount} 번</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">사용한 금액</h1>
          <h2 className="fs-20 notoMid">{data.usedCredit.toLocaleString('ko-KR')} SAVE</h2>
        </div>
        <hr />
      </div>:null}

    </div>
  )
}
export default InfoTable;