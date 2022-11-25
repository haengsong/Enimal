import React from "react";
import '@components/common/Modal.scss'
import './BadgeModal.scss'

function BadgeModal(props){
  const { open, close,badge,img } = props;
  const Route = {
    "연금술사":"SSF코인을 SAVE로 처음 환전 시 획득 가능합니다.",
    "첫 걸음":"처음으로 조각 뽑기를 할 경우 획득 가능합니다.",
    "마음에 드시나요":"처음으로 동물 NFT를 발행시 획득 가능합니다.",
    "업적 냠냠":"처음으로 게시판에 글을 작성할 경우 획득 가능합니다.",
    "뽑기의 달인":"24종의 동물NFT를 모두 모을 경우 획득 가능합니다.",
    "개근상":"일주일(7일) 연속으로 로그인을 할 경우 획득 가능합니다.",
    "Enimal 홀릭":"환전 금액이 10000SAVE가 누적될 경우 획득 가능합니다.",
    "기부 천사":"기부 금액이 1000SAVE가 누적될 경우 획득 가능합니다.",
    "똥손":"똑같은 조각을 연속으로 뽑을 경우 획득 가능합니다.",
    "뽑기 중독":"조각 뽑기를 100회 이상 도전 할 경우 획득 가능합니다.",
    "Enimal 애호가":"오늘의 동물 영상을 모두 시청할 경우 획득 가능합니다.",
    "환경 지킴이":"환경 기념의 날에 로그인을 할 경우 획득 가능합니다.",
    "안 질려?":"같은 종의 동물 NFT를 3개를 모을 경우 획득 가능합니다.",
    "인플루언서":"내가 작성한 글에 10개 이상의 댓글이 작성될 경우 획득 가능합니다.",
    "명예 한 스푼":"컬렉션 랭킹이 10위 이내에 진입할 경우 획득 가능합니다.",
  }
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="badgeModal">
          <header>
            <h1 className='titleText fs-28 notoBold'>{badge}</h1>
          </header>

          <main className="text-center my-3">
            <img className="badgeModalImg" src={img} alt="#" />
            <h1 className="fs-22 notoBold">{Route[badge]}</h1>
            <div className="my-3">
              <h1 className="fs-18 notoMid">해당 뱃지를 보유중일 경우 미보유 조각이</h1>
            <h1 className="fs-18 notoMid"> 등장할 확률이 2% 상승합니다.</h1>
            </div>
            
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

export default BadgeModal;