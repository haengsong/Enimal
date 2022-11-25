import React, { useState } from "react";
import '@components/common/Modal.scss'
import './MakeNFTModal.scss'

import { uploadData } from "@apis/ipfs"
import { create } from "@apis/sendTx"

import { getSaveMyNFT } from "@apis/mypage";
import axios from "axios";
import Loading from "../../common/Loading";

function MakeNFTModal(props) {
  const { open, close, animal, index } = props;
  const [Type, setType] = useState("Gouache");
  const [Name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Complete, setComplete] = useState(false);
  const [CompleteImg, setCompleteImg] = useState(null);

  const typeList = ["Gouache", "Line-Art", "Paint", "Polygon", "Comic", "HDR"]
  const typeDetail = {
    Paint: "물감으로 그린 느낌이에요",
    HDR: "실제 사진과 비슷하게 표현된 그림이에요",
    Polygon: "도형을 이어붙여 만든 느낌이 드는 그림이에요",
    Gouache: "수채화 물감으로 그린 그림이에요",
    Comic: "입체감 있는 일러스트 느낌이에요",
    "Line-Art": "선만으로 표현된 그림이에요"
  }
  
  const API_URL = "http://j7c106.p.ssafy.io:9000/meta"

  async function makeNFT() {
    if (Name) {
      const owner = localStorage.myAddress
      setLoading(true)
      uploadData(Type, animal, Name, owner)
        .then(async metadata => {
          const tokenURI = await metadata.data?.url
          const url = `https://ipfs.io/ipfs${tokenURI.substr(6)}`
          let image
          await axios.get(API_URL, {params: {url}})
            .then(async res => {
              image = await res.data
              console.log(res)
            }).catch(() => {
              alert('오류가 발생했습니다. 다시 시도해주세요')
              setLoading(false)
            })
          await create(owner, tokenURI)
            .then(async (res) => {
              console.log(image, 'image')
              if (res) {
                const Data = {
                  name: Name,
                  type: Type,
                  image: `https://ipfs.io/ipfs${image.substr(6)}`,
                  tokenId: res,
                  owner,
                }
                console.log(Data)

                getSaveMyNFT(index, Data).then(ress => {
                  console.log(ress)
                  setLoading(false)
                  setComplete(true)
                  setCompleteImg(Data)
                })
              }
            }).catch(() => {
              alert('오류가 발생했습니다. 다시 시도해주세요')
              setLoading(false)
            })
        }).catch(() => {
          alert('오류가 발생했습니다. 다시 시도해주세요')
          setLoading(false)
        })
    }
    else {
      alert("이름을 입력해주세요!")
    }
  }



  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="makeNFT">
          <header>
            <h1 className='titleText fs-24 notoBold'>{animal} NFT 발행하기</h1>
          </header>
          <main className="flex column align-center NFTModalMain">
            {Complete ?
              <li className="NFTcard">
                <img className="NFTImg" src={CompleteImg.image} alt="#" />
                <h1 className="fs-28 notoBold my-3">{CompleteImg.name}</h1>
                <div className="flex justify-center">
                  <h1 className="fs-18 roThin">Made by</h1>
                  <h1 className="fs-18 mx-2 roMid">{localStorage.MyNick}</h1>
                </div>
              </li>
              :

              <div className="flex column align-center my-5">
                <input type="text" className="nameInput fs-25 notoBold my-3" onChange={e => setName(e.target.value)} maxLength="8" placeholder="NFT에 이름을 지어주세요" />
                {loading ? <Loading /> : null}
                <div className="TypeBox">
                  <input
                    className="my-3 Typeinput"
                    type="range"
                    onChange={e => setType(typeList[e.target.value])}
                    min="0"
                    max="5"
                    defaultValue="0"
                    step="1"
                  />
                  <h2 className="fs-28 notoBold my-3">{Type}</h2>
                  <h2>{typeDetail[Type]}</h2>
                </div>
              </div>}

          </main>
          <footer>
            {Complete ?
              <button type="button" className="changeButton fs-22 notoBold" onClick={close}>
                확인
              </button>
              :
              <>
                <button type="button" className="changeButton fs-22 notoBold" onClick={makeNFT}>
                  만들기
                </button>
                <button type="button" className="closeButton fs-22 notoBold" onClick={close}>
                  취소
                </button>
              </>
            }
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default MakeNFTModal;
