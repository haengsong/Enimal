import React, { useEffect, useState, useRef } from "react";
import "./CollectionPiece.scss";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { getMyPiece } from "@apis/mypage";

import {
  panda1, panda2, panda3, panda4, panda5, panda6, panda7, panda8, panda9,
  asianele1, asianele2, asianele3, asianele4, asianele5, asianele6, asianele7, asianele8, asianele9,
  cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9,
  crane1, crane2, crane3, crane4, crane5, crane6, crane7, crane8, crane9,
  dolphin1, dolphin2, dolphin3, dolphin4, dolphin5, dolphin6, dolphin7, dolphin8, dolphin9,
  dugong1, dugong2, dugong3, dugong4, dugong5, dugong6, dugong7, dugong8, dugong9,
  eel1, eel2, eel3, eel4, eel5, eel6, eel7, eel8, eel9,
  elk1, elk2, elk3, elk4, elk5, elk6, elk7, elk8, elk9,
  finless1, finless2, finless3, finless4, finless5, finless6, finless7, finless8, finless9,
  goat1, goat2, goat3, goat4, goat5, goat6, goat7, goat8, goat9,
  hawk1, hawk2, hawk3, hawk4, hawk5, hawk6, hawk7, hawk8, hawk9,
  hippo1, hippo2, hippo3, hippo4, hippo5, hippo6, hippo7, hippo8, hippo9,
  orangutan1, orangutan2, orangutan3, orangutan4, orangutan5, orangutan6, orangutan7, orangutan8, orangutan9,
  otter1, otter2, otter3, otter4, otter5, otter6, otter7, otter8, otter9,
  polarbear1, polarbear2, polarbear3, polarbear4, polarbear5, polarbear6, polarbear7, polarbear8, polarbear9,
  rabbit1, rabbit2, rabbit3, rabbit4, rabbit5, rabbit6, rabbit7, rabbit8, rabbit9,
  redpanda1, redpanda2, redpanda3, redpanda4, redpanda5, redpanda6, redpanda7, redpanda8, redpanda9,
  rhinoceros1, rhinoceros2, rhinoceros3, rhinoceros4, rhinoceros5, rhinoceros6, rhinoceros7, rhinoceros8, rhinoceros9,
  shark1, shark2, shark3, shark4, shark5, shark6, shark7, shark8, shark9,
  spoonbill1, spoonbill2, spoonbill3, spoonbill4, spoonbill5, spoonbill6, spoonbill7, spoonbill8, spoonbill9,
  tiger1, tiger2, tiger3, tiger4, tiger5, tiger6, tiger7, tiger8, tiger9,
  turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8, turtle9,
  upalupa1, upalupa2, upalupa3, upalupa4, upalupa5, upalupa6, upalupa7, upalupa8, upalupa9,
  weasel1, weasel2, weasel3, weasel4, weasel5, weasel6, weasel7, weasel8, weasel9
} from "@images/animal";

const Panda = [panda1, panda2, panda3, panda4, panda5, panda6, panda7, panda8, panda9];
const Asianele = [asianele1, asianele2, asianele3, asianele4, asianele5, asianele6, asianele7, asianele8, asianele9];
const Cat = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9];
const Crane = [crane1, crane2, crane3, crane4, crane5, crane6, crane7, crane8, crane9];
const Dolphin = [dolphin1, dolphin2, dolphin3, dolphin4, dolphin5, dolphin6, dolphin7, dolphin8, dolphin9];
const Dugong = [dugong1, dugong2, dugong3, dugong4, dugong5, dugong6, dugong7, dugong8, dugong9];
const Eel = [eel1, eel2, eel3, eel4, eel5, eel6, eel7, eel8, eel9];
const Elk = [elk1, elk2, elk3, elk4, elk5, elk6, elk7, elk8, elk9];
const Finless = [finless1, finless2, finless3, finless4, finless5, finless6, finless7, finless8, finless9];
const Goat = [goat1, goat2, goat3, goat4, goat5, goat6, goat7, goat8, goat9];
const Hawk = [hawk1, hawk2, hawk3, hawk4, hawk5, hawk6, hawk7, hawk8, hawk9];
const Hippo = [hippo1, hippo2, hippo3, hippo4, hippo5, hippo6, hippo7, hippo8, hippo9];
const Orangutan = [orangutan1, orangutan2, orangutan3, orangutan4, orangutan5, orangutan6, orangutan7, orangutan8, orangutan9];
const Otter = [otter1, otter2, otter3, otter4, otter5, otter6, otter7, otter8, otter9];
const Polarbear = [polarbear1, polarbear2, polarbear3, polarbear4, polarbear5, polarbear6, polarbear7, polarbear8, polarbear9];
const Rabbit = [rabbit1, rabbit2, rabbit3, rabbit4, rabbit5, rabbit6, rabbit7, rabbit8, rabbit9];
const Redpanda = [redpanda1, redpanda2, redpanda3, redpanda4, redpanda5, redpanda6, redpanda7, redpanda8, redpanda9];
const Rhinoceros = [rhinoceros1, rhinoceros2, rhinoceros3, rhinoceros4, rhinoceros5, rhinoceros6, rhinoceros7, rhinoceros8, rhinoceros9];
const Shark = [shark1, shark2, shark3, shark4, shark5, shark6, shark7, shark8, shark9];
const Spoonbill = [spoonbill1, spoonbill2, spoonbill3, spoonbill4, spoonbill5, spoonbill6, spoonbill7, spoonbill8, spoonbill9];
const Tiger = [tiger1, tiger2, tiger3, tiger4, tiger5, tiger6, tiger7, tiger8, tiger9];
const Turtle = [turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8, turtle9];
const Upalupa = [upalupa1, upalupa2, upalupa3, upalupa4, upalupa5, upalupa6, upalupa7, upalupa8, upalupa9];
const Weasel = [weasel1, weasel2, weasel3, weasel4, weasel5, weasel6, weasel7, weasel8, weasel9];

const Piece = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
]

function Slide(props) {
  const {Animal, number} = props;
  return (
    <div className="puzzle">
      <div className="flex">
        <div className="flex">
          { Piece[number][0] ? <img className="PieceImg" src={Animal[0]} alt="#" />
          : <img className="PieceImg2" src={Animal[0]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][0]}개</h1>
        </div>

        <div className="flex">
        { Piece[number][1] ? <img className="PieceImg" src={Animal[1]} alt="#" />
          : <img className="PieceImg2" src={Animal[1]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][1]}개</h1>
        </div>

        <div className="flex">
        { Piece[number][2] ? <img className="PieceImg" src={Animal[2]} alt="#" />
          : <img className="PieceImg2" src={Animal[2]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold" >{Piece[number][2]}개</h1>
        </div>
      </div>

      <div className="flex">
        <div className="flex">
        { Piece[number][3] ? <img className="PieceImg" src={Animal[3]} alt="#" />
          : <img className="PieceImg2" src={Animal[3]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold" >{Piece[number][3]}개</h1>
        </div>
        <div className="flex">
        { Piece[number][4] ? <img className="PieceImg" src={Animal[4]} alt="#" />
          : <img className="PieceImg2" src={Animal[4]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][4]}개</h1>
        </div>
        <div className="flex">
        { Piece[number][5] ? <img className="PieceImg" src={Animal[5]} alt="#" />
          : <img className="PieceImg2" src={Animal[5]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][5]}개</h1>
        </div>
      </div>

      <div className="flex">
        <div className="flex">
        { Piece[number][6] ? <img className="PieceImg" src={Animal[6]} alt="#" />
          : <img className="PieceImg2" src={Animal[6]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][6]}개</h1>
        </div>
        <div className="flex">
        { Piece[number][7] ? <img className="PieceImg" src={Animal[7]} alt="#" />
          : <img className="PieceImg2" src={Animal[7]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][7]}개</h1>
        </div>
        <div className="flex">
        { Piece[number][8] ? <img className="PieceImg" src={Animal[8]} alt="#" />
          : <img className="PieceImg2" src={Animal[8]} alt="#" />}
          <h1 className="text_in_img fs-20 notoBold">{Piece[number][8]}개</h1>
        </div>
      </div>
    </div>
  );
}

function CollectionPiece() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 23;

  useEffect(() => {
    getMyPiece().then(res => {
      for (let i=0; i<res.data.length; i+=1) {
          const animalName = res.data[i].animal
          if (animalName==='자이언트판다'){Piece[0][res.data[i].piece] += res.data[i].count}
          else if (animalName==='아시아코끼리'){Piece[1][res.data[i].piece] += res.data[i].count}
          else if (animalName==='안데스산고양이'){Piece[2][res.data[i].piece] += res.data[i].count}
          else if (animalName==='두루미'){Piece[3][res.data[i].piece] += res.data[i].count}
          else if (animalName==='양쯔강돌고래'){Piece[4][res.data[i].piece] += res.data[i].count}
          else if (animalName==='듀공'){Piece[5][res.data[i].piece] += res.data[i].count}
          else if (animalName==='뱀장어'){Piece[6][res.data[i].piece] += res.data[i].count}
          else if (animalName==='고라니'){Piece[7][res.data[i].piece] += res.data[i].count}
          else if (animalName==='상괭이'){Piece[8][res.data[i].piece] += res.data[i].count}
          else if (animalName==='산양'){Piece[9][res.data[i].piece] += res.data[i].count}
          else if (animalName==='매'){Piece[10][res.data[i].piece] += res.data[i].count}
          else if (animalName==='하마'){Piece[11][res.data[i].piece] += res.data[i].count}
          else if (animalName==='오랑우탄'){Piece[12][res.data[i].piece] += res.data[i].count}
          else if (animalName==='수달'){Piece[13][res.data[i].piece] += res.data[i].count}
          else if (animalName==='북극곰'){Piece[14][res.data[i].piece] += res.data[i].count}
          else if (animalName==='강토끼'){Piece[15][res.data[i].piece] += res.data[i].count}
          else if (animalName==='렛서판다'){Piece[16][res.data[i].piece] += res.data[i].count}
          else if (animalName==='검은코뿔소'){Piece[17][res.data[i].piece] += res.data[i].count}
          else if (animalName==='고래상어'){Piece[18][res.data[i].piece] += res.data[i].count}
          else if (animalName==='저어새'){Piece[19][res.data[i].piece] += res.data[i].count}
          else if (animalName==='호랑이'){Piece[20][res.data[i].piece] += res.data[i].count}
          else if (animalName==='바다거북'){Piece[21][res.data[i].piece] += res.data[i].count}
          else if (animalName==='우파루파'){Piece[22][res.data[i].piece] += res.data[i].count}
          else if (animalName==='검은발족제비'){Piece[23][res.data[i].piece] += res.data[i].count}
      }
    })
  }, [])

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const AnimalName = [
    '자이언트 판다','아시아 코끼리','안데스산 고양이','두루미','양쯔강 돌고래','듀공','뱀장어','고라니','상괭이',
    '산양','매','하마','오랑우탄','수달','북극곰','강토끼','레서판다','검은 코뿔소','고래상어','저어새','호랑이','바다거북',
    '우파루파','검은발족제비'
    ]




  return (
    <div className="CollectionPiece">
      <h1 className="MyCollection notoBold fs-40">수집중인 컬렉션</h1>

      <div className="Piecetrack">
        <div className="PieceItem flex" ref={slideRef}>
          <Slide Animal={Panda} number={0} />
          <Slide Animal={Asianele} number={1} />
          <Slide Animal={Cat} number={2} />
          <Slide Animal={Crane} number={3} />
          <Slide Animal={Dolphin} number={4} />
          <Slide Animal={Dugong} number={5} />
          <Slide Animal={Eel} number={6} />
          <Slide Animal={Elk} number={7} />
          <Slide Animal={Finless} number={8} />
          <Slide Animal={Goat} number={9} />
          <Slide Animal={Hawk} number={10} />
          <Slide Animal={Hippo} number={11} />
          <Slide Animal={Orangutan} number={12} />
          <Slide Animal={Otter} number={13} />
          <Slide Animal={Polarbear} number={14} />
          <Slide Animal={Rabbit} number={15} />
          <Slide Animal={Redpanda} number={16} />
          <Slide Animal={Rhinoceros} number={17} />
          <Slide Animal={Shark} number={18} />
          <Slide Animal={Spoonbill} number={19} />
          <Slide Animal={Tiger} number={20} />
          <Slide Animal={Turtle} number={21} />
          <Slide Animal={Upalupa} number={22} />
          <Slide Animal={Weasel} number={23} />
        </div>
      </div>
      <div className="flex justify-center">
        <FontAwesomeIcon className="Angle" onClick={PrevSlide} icon={faAngleLeft} />
        <div className="collectionName fs-32 notoBold">{AnimalName[currentSlide]}</div>
        <FontAwesomeIcon className="Angle" onClick={NextSlide} icon={faAngleRight} />
      </div>
    </div>
  );
}
export default CollectionPiece;
