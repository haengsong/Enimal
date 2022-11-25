import React from "react";
import '@components/common/Modal.scss'
import './GetBadge.scss'


import {
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
  badge9,
  badge10,
  badge11,
  badge12,
  badge13,
  badge14,
  badge15
} from "@images/badge";


function GetBadge(props){

  const Route = {
    "연금술사":[badge1,"처음으로 SSF코인을 SAVE로 환전하셨습니다!"],
    "첫 걸음":[badge2,"처음으로 조각 뽑기에 도전하셨습니다!"],
    "마음에 드시나요":[badge3,"처음으로 동물 NFT를 완성하셨습니다!"],
    "업적 냠냠":[badge4,"처음으로 게시판에 글을 작성하셨습니다!"],
    "뽑기의 달인":[badge5,"24종의 동물NFT를 모두 수집하였습니다!"],
    "개근상":[badge6,"일주일 연속으로 로그인 하셨습니다!"],
    "Enimal 홀릭":[badge7,"환전 금액이 10000SAVE를 달성하였습니다!"],
    "기부 천사":[badge8,"기부 금액이 1000SAVE를 달성하였습니다!"],
    "똥손":[badge9,"똑같은 조각을 연속으로 뽑아서 획득하였습니다!"],
    "뽑기 중독":[badge10,"조각 뽑기를 100회 이상 도전하셨습니다!"],
    "Enimal 애호가":[badge11,"오늘의 동물 영상을 모두 시청하셨습니다!"],
    "환경 지킴이":[badge12,"환경 기념의 날에 로그인을 하셨습니다!"],
    "안 질려?":[badge13,"같은 종의 동물 NFT를 3개 획득하셨습니다! "],
    "인플루언서":[badge14,"작성하신 게시글에 10개 이상의 댓글이 작성되었습니다!"],
    "명예 한 스푼":[badge15,"컬렉션 랭킹이 10위 이내에 진입하였습니다!"],
  }




  const { open, close,badge } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="getBadgeModal">
          <header>
            <h1 className='titleText fs-24 notoBold'>업적 획득</h1>
          </header>

         
          <main className="text-center">
            { badge.map((item) => {
              return (<div>
                <img className="badgeModalImg" src={Route[item][0]} alt="#"/>
                <h1 className="fs-28 notoBold">{Route[item][1]}</h1>
              </div>)
            })}
            
            <h1 className="fs-18 notoMid my-3">해당 업적을 보유하면 미보유 조각 등장 확률이 2% 증가합니다.</h1>
          </main>
          <footer>
            <button type="button" className="changeButton fs-22 notoBold" onClick={close}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
      </div>
  )
}

export default GetBadge;