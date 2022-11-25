import React, { useState, useEffect} from "react";
import './MyNFT.scss'

import { getMyNFT } from "@apis/mypage";
import { useNavigate } from "react-router-dom";

import NFTtest from '@images/NFTtest.jpg'

import MakeNFTModal from "./MakeNFTModal";


function MyNFT(props) {
  const { userId } = props;
  const [myNFT, setMyNFT] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [Animal, setAnimal] = useState(null);
  const [Animalidx, setAnimalidx] = useState(null);
  const navigate = useNavigate();
  const [complete, setComplete] = useState(false)
  
  useEffect(() => {
    getMyNFT(userId).then(res => {
      setMyNFT(res.data.reverse())
    })
  }, [complete])
  
  const closeModal = () => {
    setOpenModal(false);
    navigate(`/mypage/${userId}`);
    setComplete(!complete)
  };


  function makeNFT(e) {
    setAnimal(myNFT[e.target.id].animal)
    setAnimalidx(myNFT[e.target.id].idx)
    setOpenModal(true)
  }
  return (
    <div>
      <h1 className="fs-40 notoBold myCollection">보유중인 컬렉션</h1>
      {myNFT.length > 0 ?
        <ul className="NFTList">
          {myNFT.map(nft => {
            return (
              <div className="flex mx-5">
                {nft.info === false ?
                  <div className="NoNFT">
                    <li className="NFTcard" style={{ opacity: "30%" }}>
                      <img className="NFTImg" src={NFTtest} alt="#" />
                      <h1 className="fs-32 notoBold my-3">{nft.animal}</h1>
                    </li>
                    {localStorage.MyNick === userId ?
                      <button type="button" onClick={e => makeNFT(e)} id={myNFT.indexOf(nft)} className="fs-32 notoBold MakeNFT">NFT 제작하기</button> : null}
                  </div>

                  :
                  <li className="NFTcard">
                    <img className="NFTImg" src={nft.nftURL} alt="#" />
                    <h1 className="fs-28 notoBold my-3">{nft.nftName}</h1>
                    <div className="flex justify-center">
                      <h1 className="fs-18 roThin">Made by</h1>
                      <h1 className="fs-18 mx-2 roMid">{nft.nftIdByWallet}</h1>
                    </div>
                  </li>
                }
              </div>
            )
          })}
        </ul>
        :
      <ul className="flex justify-center">
        <h1 className="text-center my-5 fs-18 notoBold">수집된 NFT가 없습니다.</h1>
      </ul>
      
      }
    <MakeNFTModal open={openModal} close={closeModal} animal={Animal} index={Animalidx} />
    </div >
  )
}
export default MyNFT;