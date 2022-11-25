import React, { useState } from "react";
import './AllDraw.scss'


// import TEST from '@images/test.png'
import egg1 from '@images/eggs/egg1.png'
import egg2 from '@images/eggs/egg2.png'
import egg3 from '@images/eggs/egg3.png'
import egg4 from '@images/eggs/egg4.png'
import egg5 from '@images/eggs/egg5.png'
import egg6 from '@images/eggs/egg6.png'
import egg7 from '@images/eggs/egg7.png'
import egg8 from '@images/eggs/egg8.png'
import egg9 from '@images/eggs/egg9.png'
import egg10 from '@images/eggs/egg10.png'
import egg11 from '@images/eggs/egg11.png'
import egg12 from '@images/eggs/egg12.png'
import egg13 from '@images/eggs/egg13.png'
import egg14 from '@images/eggs/egg14.png'
import egg15 from '@images/eggs/egg15.png'
import egg16 from '@images/eggs/egg16.png'
import egg17 from '@images/eggs/egg17.png'
import egg18 from '@images/eggs/egg18.png'
import egg19 from '@images/eggs/egg19.png'
import egg20 from '@images/eggs/egg20.png'
import egg21 from '@images/eggs/egg21.png'
import egg22 from '@images/eggs/egg22.png'
import egg23 from '@images/eggs/egg23.png'
import egg24 from '@images/eggs/egg24.png'

import DrawModal from "./DrawModal";



function AllDraw() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    
    setModalOpen(false);
  };

  function drawButton(e) {
    e.preventDefault();
    if (localStorage.token) {
      openModal()
    }
    else {
      alert("로그인 해주세요!")
    }
  }

  return (
    <div className="AllDraw">
      <div className="CardList">

        <div className="flex justify-center">

          <div className="drawCard">
            <img className="drawImg" src={egg7} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>] 강토끼</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg3} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>] 검은 코뿔소</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg14} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>] 아시아 코끼리</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg23} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>] 양쯔강돌고래</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg9} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>] 우파루파</h1>
          </div>

          <div className="drawCard">
            <img className="drawImg" src={egg13} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>] 오랑우탄</h1>
          </div>

        </div>


        <div className="flex justify-center">
          <div className="drawCard">
            <img className="drawImg" src={egg5} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 두루미</h1>
          </div>

          <div className="drawCard">
            <img className="drawImg" src={egg20} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 호랑이</h1>
          </div>


          <div className="drawCard">
            <img className="drawImg" src={egg2} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 안데스산 고양이</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg16} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 바다거북</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg17} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 레서판다</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg18} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 검은발족제비</h1>
          </div>

        </div>


        <div className="flex justify-center">
          <div className="drawCard">
            <img className="drawImg" src={egg21} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 고래상어</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg22} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 뱀장어</h1>
          </div>

          <div className="drawCard">
            <img className="drawImg" src={egg24} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>] 저어새</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg11} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 고라니</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg12} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 듀공</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg1} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 북극곰</h1>
          </div>
        </div>

        <div className="flex justify-center">

          <div className="drawCard">
            <img className="drawImg" src={egg4} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 산양</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={egg6} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 자이언트 판다</h1>
          </div>

          <div className="drawCard">
            <img className="drawImg" src={egg15} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 상괭이</h1>
          </div>

          <div className="drawCard">
            <img className="drawImg" src={egg19} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>] 하마</h1>
          </div>


          <div className="drawCard">
            <img className="drawImg" src={egg8} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Rc">R</span>] 수달</h1>
          </div>

          <div className="drawCard">
            <img className="drawImg" src={egg10} alt="#" />
            <h1 className="fs-14 notoBold drawTitle">[<span className="Nc">N</span>] 매</h1>
          </div>
        </div>

      </div>
      <button className="drawButton fs-28 notoBold" onClick={e => drawButton(e)} id="collection" type="button">전체 뽑기 (100SAVE)</button>
      <div>
        <h1 className="fs-24 notoBold drawNotice">뽑기를 통해 컬렉션을 수집해보세요.</h1>
        <h1 className="fs-24 notoBold drawNotice">멸종위기등급에 따라 전체뽑기에서 등장할 확률이 차이가 있습니다.</h1>
        <h1 className="fs-24 notoBold drawNotice">전체 뽑기는 216종류의 조각이 중 하나의 조각이 일정 확률로 등장합니다.</h1>
        <h3 className="fs-18 notoMid drawNotice drawNotice2">보유중인 업적에 따라 미보유중인 조각이 등장할 확률이 상승합니다.</h3>
      </div>
      <DrawModal open={modalOpen} close={closeModal} draw="all" length={24} price={100} />
    </div>
  )
}
export default AllDraw;
