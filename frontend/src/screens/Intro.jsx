import React from "react";
import { Link } from "react-router-dom";
import "./intro.scss"

import Fade from "react-reveal/Fade";

import walletPic from "@assets/images/intro/wallet.png"
import exchangePic from "@assets/images/intro/exchange.png"
import drawPic from "@assets/images/intro/draw.png"
import badgePic from "@assets/images/intro/badge.png"
import right from "@assets/icons/south_east_black_24dp.svg"
import left from "@assets/icons/south_west_black_24dp.svg"

function Intro() {
  return (
    <>
      <div className="intropg1">
        <div className="container" style={{marginRight:'100px'}}>
          <div className="intropg1_title notoBold fs-60 text-end">
            Enimal = Endangered + Animal
          </div>
          <div className="intropg1_con1 notoBold fs-28">
            사라지고 있는 동물을 도와주세요!
          </div>
          <div className="intropg1_con2 notoBold fs-28">
            SSF를 충전해서 Save로 환전한 뒤 멸종동물 NFT 카드를 수집 해 보세요.
          </div>
          <div className="intropg1_con3 notoBold fs-28">
            뽑기를 통해 멸종 동물 조각을 모두 모으면
          </div>
          <div className="intropg1_con3 notoBold fs-28">
            NFT 기반의 멸종동물 이미지 카드를 드립니다!
          </div>
          <div className="intropg1_con4 notoBold fs-28">
            SSF를 충전해서 기부를 할 수도 있어요!
          </div>
          <div className="intropg1_con5 notoBold fs-28">
            모인 SSF코인은 멸종 동물 관련 단체에 기부됩니다.
          </div>

            {/* <button type="button" className="intropg1_btn_1 notoBold fs-24 flex justify-center align-center">지갑 연결</button> */}
          <Link to="/draw" type="button" className="intropg1_btn notoBold fs-24 flex justify-center align-center">뽑기</Link>

        </div>
      </div>
      <div className="intropg2">
        <div className="container">
          <Fade bottom>
            <div className="intropg2_name notoBold fs-40">
              HOW TO
            </div>
          </Fade>
          <div className="intropg2_step1 flex">
            <Fade bottom>
              <div className="intropg2_step1_text1">
                <div className="intropg2_step1_text1_txt1 notoBold fs-32">
                  1. 지갑을 개설해주세요
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  저희 서비스를 이용하기 위해서 지갑을 연동하고 닉네임을 설정 해주셔야 합니다!
                </div>
              </div>
              <div className="intropg2_step1_img">
                <img src={walletPic} alt="지갑연결" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <img src={right} alt="오른화살표" className="right" />
          </Fade>
          <div className="intropg2_step1 flex">
            <Fade bottom>
              <div className="intropg2_step1_img">
                <img src={exchangePic} alt="환전" />
              </div>
            </Fade>
            <Fade bottom>
              <div className="intropg2_step1_text3">
                <div className="intropg2_step1_text1_txt1 notoBold fs-32">
                  2. SSF코인을 Save로 환전해주세요!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  조각 뽑기를 위해 SSF코인을 Save재화로 환전 해주세요! 환전 과정에서 일정 금액의 SSF코인을 기부할 수 있습니다. 모인 기부금은 멸종동물보호단체에 기부됩니다. <br /><br />이외에도 출석체크, 오늘의 동물 영상 시청, 게시판 게시글 작성의 방법으로 Save를 획득할 수 있습니다. 
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  Save : 뽑기에 사용되는 Enimal 자체 재화입니다. 
                </div>
              </div>

            </Fade>
          </div>
          <Fade bottom>
            <img src={left} alt="왼화살표" className="right" />
          </Fade>
          <div className="intropg2_step1 flex">
            <Fade bottom>
              <div className="intropg2_step1_text4">
                <div className="intropg2_step1_text1_txt1 notoBold fs-32">
                  3. 조각을 뽑아보세요!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  Save를 이용해서 동물 조각을 모아보세요. 같은 동물의 조각을 모두 모으면 해당 동물 그림의 NFT카드를 발급할 수 있습니다!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  전체뽑기 : 모든 동물 조각 중 한 조각이 랜덤으로 뽑히게 됩니다! 동물 조각 수가 216개나 되니 전체뽑기만으로 원하는 동물 NFT카드를 발급받을 있을까요??!!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  랜덤뽑기 : 내가 원하는 동물을 선택해서 동물 조각을 뽑을 수 있습니다. 내가 원하는 동물 NFT카드를 빠르게 모으고 싶다면~!!
                </div>
              </div>
              <div className="intropg2_step1_img">
                <img src={drawPic} alt="뽑기" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <img src={right} alt="오른화살표" className="right" />
          </Fade>
          <div className="intropg2_step1 flex">
            <Fade bottom>
              <div className="intropg2_step1_img">
                <img src={exchangePic} alt="환전" />
              </div>
            </Fade>
            <Fade bottom>
              <div className="intropg2_step1_text5">
                <div className="intropg2_step1_text1_txt1 notoBold fs-32">
                  4. 동물 조각을 모두 모았다면 NFT카드를 발급해보세요!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  9개의 동물조각을 모두 모으면 해당 동물 그림의 NFT 카드를 발급할 수 있습니다.
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  나만의 NFT카드를 자랑게시판에서 자랑해보세요~ 다른 이용자의 NFT카드 역시 구경할 수 있습니다!  
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <img src={left} alt="왼화살표" className="right" />
          </Fade>
          <div className="intropg2_step2 flex">
            <Fade bottom>
              <div className="intropg2_step1_text5">
                <div className="intropg2_step1_text1_txt1 notoBold fs-32">
                  보너스 - 업적을 모아보세요!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  서비스를 이용할 때마다 숨겨진 업적을 하나씩 획득할 수 있습니다. 업적 획득 시 미보유 동물조각을 뽑을 확률이 늘어납니다!!
                </div>
                <div className="intropg2_step1_text1_txt2 notoReg fs-24">
                  15종의 업적에 대한 정보는 마이페이지에서 확인 가능합니다.
                </div>
              </div>
              <div className="intropg2_step1_img">
                <img src={badgePic} alt="업적" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}
export default Intro;
