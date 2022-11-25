import React, { useState } from "react";
import "./SelectDraw.scss";



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

const Cost = {
  1: 900, 2: 1200, 3: 1500, 4: 900, 5: 1200, 6: 900, 7: 1500, 8: 600, 9: 1500, 10: 300, 11: 900,
  12: 900, 13: 1500, 14: 1500, 15: 900, 16: 1200, 17: 1200, 18: 1200, 19: 900, 20: 1200, 21: 1200, 22: 1200, 23: 1500, 24: 1200
}

function SelectDraw() {
  const [selectImg, setSelectImg] = useState(null)

  const [modalOpen, setModalOpen] = useState(false);
  const [price, setPrice] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function drawButton(e) {
    e.preventDefault();
    if (localStorage.token) {
      if (selectImg) {
        openModal()
      }
      else {
        alert("동물을 선택해주세요!")
      }

    }
    else {
      alert("로그인 해주세요!")
    }
  }

  function select(e) {
    e.preventDefault();
    if (selectImg) {
      document.getElementById(selectImg).parentElement.className = "drawCard2";
    }
    if (selectImg === e.currentTarget.id) {
      setSelectImg(null)
      setPrice(null)
    }
    else {
      setSelectImg(e.currentTarget.id)
      setPrice(Cost[e.currentTarget.id])
    }
  }

  function mouseover(e) {
    document.getElementById(e.currentTarget.id).parentElement.className = "selectedCard";
  }
  function unSelect(e) {
    if (selectImg !== e.currentTarget.id) {
      document.getElementById(e.currentTarget.id).parentElement.className = "drawCard2";
    }

  }
  return (
    <div className="SelectDraw">
      <div className="CardList">


        <div className="flex justify-center">
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="7"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg7} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>]강토끼</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="3"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg3} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>]검은 코뿔소</h1>
            </button>
          </div>

          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="14"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg14} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>]아시아 코끼리</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="23"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg23} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>]양쯔강돌고래</h1>
            </button>
          </div>

          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="9"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg9} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>]우파루파</h1>
            </button>
          </div>

          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="13"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg13} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Lc">L</span>]오랑우탄</h1>
            </button>
          </div>





        </div>

        <div className="flex justify-center">
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="5"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg5} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]두루미</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="20"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg20} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]호랑이</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="2"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg2} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]안데스산 고양이</h1>
            </button>
          </div>


          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="16"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg16} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]바다거북</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="17"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg17} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]래서판다</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="18"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg18} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]검은발족제비</h1>
            </button>
          </div>
        </div>
        <div className="flex justify-center">   
        <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="21"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg21} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]고래상어</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="22"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg22} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]뱀장어</h1>
            </button>
          </div>

          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="24"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg24} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Uc">U</span>]저어새</h1>
            </button>
          </div>
        <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="11"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg11} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]고라니</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="12"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg12} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]듀공</h1>
            </button>
          </div>
  
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="1"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg1} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]북극곰</h1>
            </button>
          </div>



    
        </div>





        <div className="flex justify-center">
        <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="4"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg4} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]산양</h1>
            </button>
          </div>
        <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="6"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg6} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]자이언트 판다</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="15"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg15} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]상괭이</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="19"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg19} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Ec">E</span>]하마</h1>
            </button>
          </div>

     
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="8"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg8} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Rc">R</span>]수달</h1>
            </button>
          </div>
          <div className="drawCard2">
            <button
              className="selectbutton"
              type="button"
              id="10"
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={() => 1}
              onMouseLeave={e => unSelect(e)}
              onClick={e => select(e)}
            >
              <img className="drawImg" src={egg10} alt="#" />
              <h1 className="fs-14 notoBold drawTitle">[<span className="Nc">N</span>]매</h1>
            </button>
          </div>
        </div>







      </div>
      <button
        className="drawButton fs-28 notoBold"
        id="collection"
        type="button"
        onClick={e => drawButton(e)}
      >
        선택 뽑기 {price ? <span>({price}SAVE)</span> : null}
      </button>
      <div>
      <div className="flex justify-content-around">
          <div className="Lbox roBold">Legend : 1500</div>
          <div className="Ubox roBold">Unique : 1200</div>
          <div className="Ebox roBold">Epic : 900</div>
          <div className="Rbox roBold">Rare : 600</div>
          <div className="Nbox roBold">Nomal : 300</div>
        </div>
        <h1 className="fs-24 notoBold drawNotice">
          뽑기를 통해 컬렉션을 수집해보세요.
        </h1>
        <h1 className="fs-24 notoBold drawNotice">멸종위기등급에 따라 선택뽑기의 가격이 차이가 있습니다.</h1>
        <h1 className="fs-24 notoBold drawNotice">
          선택 뽑기는 선택된 동물 9조각중 하나의 조각이 일정 확률로 등장합니다.
        </h1>
        <h3 className="fs-18 notoMid drawNotice drawNotice2">
          보유중인 업적에 따라 미보유중인 조각이 등장할 확률이 상승합니다.
        </h3>
      </div>
      <DrawModal open={modalOpen} close={closeModal} draw={selectImg} length={9} price={price} />
    </div>
  );
}
export default SelectDraw;
