import React, { useState, useEffect } from "react";
import "./DrawSlide.scss";

import { getAllDraw, getSelectDraw } from "@apis/draw";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GetBadge from "../common/GetBadge";

import {
  panda, asianele, cat, crane, dolphin, dugong, eel, elk, finless, goat, hawk, hippo, orangutan, otter, polarbear, rabbit, redpanda, rhinoceros, shark, spoonbill, tiger, turtle, upalupa, weasel,
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
} from "../../assets/images/animal";

function DrawSlide(props) {
  const { draw, length, price } = props;

  /* eslint-disable no-unused-vars */
  const ALL = [
    [panda], [asianele], [cat], [crane], [dolphin], [dugong], [eel], [elk], [finless], [goat], [hawk], [hippo], [orangutan], [otter], [polarbear], [rabbit], [redpanda], [rhinoceros], [shark], [spoonbill], [tiger], [turtle], [upalupa], [weasel]
  ];
  const Panda = [
    [panda1, "판다 1번 조각"],
    [panda2, "판다 2번 조각"],
    [panda3, "판다 3번 조각"],
    [panda4, "판다 4번 조각"],
    [panda5, "판다 5번 조각"],
    [panda6, "판다 6번 조각"],
    [panda7, "판다 7번 조각"],
    [panda8, "판다 8번 조각"],
    [panda9, "판다 9번 조각"]
  ];
  const Asianele = [
    [asianele1, "코끼리 1번 조각"],
    [asianele2, "코끼리 2번 조각"],
    [asianele3, "코끼리 3번 조각"],
    [asianele4, "코끼리 4번 조각"],
    [asianele5, "코끼리 5번 조각"],
    [asianele6, "코끼리 6번 조각"],
    [asianele7, "코끼리 7번 조각"],
    [asianele8, "코끼리 8번 조각"],
    [asianele9, "코끼리 9번 조각"]
  ];
  const Cat = [
    [cat1, "고양이 1번조각"],
    [cat2, "고양이 2번조각"],
    [cat3, "고양이 3번조각"],
    [cat4, "고양이 4번조각"],
    [cat5, "고양이 5번조각"],
    [cat6, "고양이 6번조각"],
    [cat7, "고양이 7번조각"],
    [cat8, "고양이 8번조각"],
    [cat9, "고양이 9번조각"]
  ];
  const Crane = [
    [crane1, "두루미 1번조각"],
    [crane2, "두루미 2번조각"],
    [crane3, "두루미 3번조각"],
    [crane4, "두루미 4번조각"],
    [crane5, "두루미 5번조각"],
    [crane6, "두루미 6번조각"],
    [crane7, "두루미 7번조각"],
    [crane8, "두루미 8번조각"],
    [crane9, "두루미 9번조각"]
  ];
  const Dolphin = [
    [dolphin1, "돌고래 1번조각"],
    [dolphin2, "돌고래 2번조각"],
    [dolphin3, "돌고래 3번조각"],
    [dolphin4, "돌고래 4번조각"],
    [dolphin5, "돌고래 5번조각"],
    [dolphin6, "돌고래 6번조각"],
    [dolphin7, "돌고래 7번조각"],
    [dolphin8, "돌고래 8번조각"],
    [dolphin9, "돌고래 9번조각"]
  ];
  const Dugong = [
    [dugong1, "듀공 1번조각"],
    [dugong2, "듀공 2번조각"],
    [dugong3, "듀공 3번조각"],
    [dugong4, "듀공 4번조각"],
    [dugong5, "듀공 5번조각"],
    [dugong6, "듀공 6번조각"],
    [dugong7, "듀공 7번조각"],
    [dugong8, "듀공 8번조각"],
    [dugong9, "듀공 9번조각"]
  ];
  const Eel = [
    [eel1, "뱀장어 1번조각"],
    [eel2, "뱀장어 2번조각"],
    [eel3, "뱀장어 3번조각"],
    [eel4, "뱀장어 4번조각"],
    [eel5, "뱀장어 5번조각"],
    [eel6, "뱀장어 6번조각"],
    [eel7, "뱀장어 7번조각"],
    [eel8, "뱀장어 8번조각"],
    [eel9, "뱀장어 9번조각"]
  ];
  const Elk = [
    [elk1, "고라니 1번조각"],
    [elk2, "고라니 2번조각"],
    [elk3, "고라니 3번조각"],
    [elk4, "고라니 4번조각"],
    [elk5, "고라니 5번조각"],
    [elk6, "고라니 6번조각"],
    [elk7, "고라니 7번조각"],
    [elk8, "고라니 8번조각"],
    [elk9, "고라니 9번조각"]
  ];
  const Finless = [
    [finless1, "상괭이 1번조각"],
    [finless2, "상괭이 2번조각"],
    [finless3, "상괭이 3번조각"],
    [finless4, "상괭이 4번조각"],
    [finless5, "상괭이 5번조각"],
    [finless6, "상괭이 6번조각"],
    [finless7, "상괭이 7번조각"],
    [finless8, "상괭이 8번조각"],
    [finless9, "상괭이 9번조각"]
  ];
  const Goat = [
    [goat1, "산양 1번조각"],
    [goat2, "산양 2번조각"],
    [goat3, "산양 3번조각"],
    [goat4, "산양 4번조각"],
    [goat5, "산양 5번조각"],
    [goat6, "산양 6번조각"],
    [goat7, "산양 7번조각"],
    [goat8, "산양 8번조각"],
    [goat9, "산양 9번조각"]
  ];
  const Hawk = [
    [hawk1, "매 1번조각"],
    [hawk2, "매 2번조각"],
    [hawk3, "매 3번조각"],
    [hawk4, "매 4번조각"],
    [hawk5, "매 5번조각"],
    [hawk6, "매 6번조각"],
    [hawk7, "매 7번조각"],
    [hawk8, "매 8번조각"],
    [hawk9, "매 9번조각"]
  ];
  const Hippo = [
    [hippo1, "하마 1번조각"],
    [hippo2, "하마 2번조각"],
    [hippo3, "하마 3번조각"],
    [hippo4, "하마 4번조각"],
    [hippo5, "하마 5번조각"],
    [hippo6, "하마 6번조각"],
    [hippo7, "하마 7번조각"],
    [hippo8, "하마 8번조각"],
    [hippo9, "하마 9번조각"]
  ];
  const Orangutan = [
    [orangutan1, "오랑우탄 1번조각"],
    [orangutan2, "오랑우탄 2번조각"],
    [orangutan3, "오랑우탄 3번조각"],
    [orangutan4, "오랑우탄 4번조각"],
    [orangutan5, "오랑우탄 5번조각"],
    [orangutan6, "오랑우탄 6번조각"],
    [orangutan7, "오랑우탄 7번조각"],
    [orangutan8, "오랑우탄 8번조각"],
    [orangutan9, "오랑우탄 9번조각"]
  ];
  const Otter = [
    [otter1, "수달 1번조각"],
    [otter2, "수달 2번조각"],
    [otter3, "수달 3번조각"],
    [otter4, "수달 4번조각"],
    [otter5, "수달 5번조각"],
    [otter6, "수달 6번조각"],
    [otter7, "수달 7번조각"],
    [otter8, "수달 8번조각"],
    [otter9, "수달 9번조각"]
  ];
  const Polarbear = [
    [polarbear1, "북극곰 1번조각"],
    [polarbear2, "북극곰 2번조각"],
    [polarbear3, "북극곰 3번조각"],
    [polarbear4, "북극곰 4번조각"],
    [polarbear5, "북극곰 5번조각"],
    [polarbear6, "북극곰 6번조각"],
    [polarbear7, "북극곰 7번조각"],
    [polarbear8, "북극곰 8번조각"],
    [polarbear9, "북극곰 9번조각"]
  ];
  const Rabbit = [
    [rabbit1, "강토끼 1번조각"],
    [rabbit2, "강토끼 2번조각"],
    [rabbit3, "강토끼 3번조각"],
    [rabbit4, "강토끼 4번조각"],
    [rabbit5, "강토끼 5번조각"],
    [rabbit6, "강토끼 6번조각"],
    [rabbit7, "강토끼 7번조각"],
    [rabbit8, "강토끼 8번조각"],
    [rabbit9, "강토끼 9번조각"]
  ];
  const Redpanda = [
    [redpanda1, "레서판다 1번조각"],
    [redpanda2, "레서판다 2번조각"],
    [redpanda3, "레서판다 3번조각"],
    [redpanda4, "레서판다 4번조각"],
    [redpanda5, "레서판다 5번조각"],
    [redpanda6, "레서판다 6번조각"],
    [redpanda7, "레서판다 7번조각"],
    [redpanda8, "레서판다 8번조각"],
    [redpanda9, "레서판다 9번조각"]
  ];
  const Rhinoceros = [
    [rhinoceros1, "코뿔소 1번조각"],
    [rhinoceros2, "코뿔소 2번조각"],
    [rhinoceros3, "코뿔소 3번조각"],
    [rhinoceros4, "코뿔소 4번조각"],
    [rhinoceros5, "코뿔소 5번조각"],
    [rhinoceros6, "코뿔소 6번조각"],
    [rhinoceros7, "코뿔소 7번조각"],
    [rhinoceros8, "코뿔소 8번조각"],
    [rhinoceros9, "코뿔소 9번조각"]
  ];
  const Shark = [
    [shark1, "고래상어 1번조각"],
    [shark2, "고래상어 2번조각"],
    [shark3, "고래상어 3번조각"],
    [shark4, "고래상어 4번조각"],
    [shark5, "고래상어 5번조각"],
    [shark6, "고래상어 6번조각"],
    [shark7, "고래상어 7번조각"],
    [shark8, "고래상어 8번조각"],
    [shark9, "고래상어 9번조각"]
  ];
  const Spoonbill = [
    [spoonbill1, "저어새 1번조각"],
    [spoonbill2, "저어새 2번조각"],
    [spoonbill3, "저어새 3번조각"],
    [spoonbill4, "저어새 4번조각"],
    [spoonbill5, "저어새 5번조각"],
    [spoonbill6, "저어새 6번조각"],
    [spoonbill7, "저어새 7번조각"],
    [spoonbill8, "저어새 8번조각"],
    [spoonbill9, "저어새 9번조각"]
  ];
  const Tiger = [
    [tiger1, "호랑이 1번조각"],
    [tiger2, "호랑이 2번조각"],
    [tiger3, "호랑이 3번조각"],
    [tiger4, "호랑이 4번조각"],
    [tiger5, "호랑이 5번조각"],
    [tiger6, "호랑이 6번조각"],
    [tiger7, "호랑이 7번조각"],
    [tiger8, "호랑이 8번조각"],
    [tiger9, "호랑이 9번조각"]
  ];
  const Turtle = [
    [turtle1, "바다거북 1번조각"],
    [turtle2, "바다거북 2번조각"],
    [turtle3, "바다거북 3번조각"],
    [turtle4, "바다거북 4번조각"],
    [turtle5, "바다거북 5번조각"],
    [turtle6, "바다거북 6번조각"],
    [turtle7, "바다거북 7번조각"],
    [turtle8, "바다거북 8번조각"],
    [turtle9, "바다거북 9번조각"]
  ];
  const Upalupa = [
    [upalupa1, "우파루파 1번조각"],
    [upalupa2, "우파루파 2번조각"],
    [upalupa3, "우파루파 3번조각"],
    [upalupa4, "우파루파 4번조각"],
    [upalupa5, "우파루파 5번조각"],
    [upalupa6, "우파루파 6번조각"],
    [upalupa7, "우파루파 7번조각"],
    [upalupa8, "우파루파 8번조각"],
    [upalupa9, "우파루파 9번조각"]
  ];
  const Weasel = [
    [weasel1, "족제비 1번조각"],
    [weasel2, "족제비 2번조각"],
    [weasel3, "족제비 3번조각"],
    [weasel4, "족제비 4번조각"],
    [weasel5, "족제비 5번조각"],
    [weasel6, "족제비 6번조각"],
    [weasel7, "족제비 7번조각"],
    [weasel8, "족제비 8번조각"],
    [weasel9, "족제비 9번조각"]
  ];

  const Animal = {
    북극곰: Polarbear,
    안데스산고양이: Cat,
    검은코뿔소: Rhinoceros,
    산양: Goat,
    두루미: Crane,
    자이언트판다: Panda,
    강토끼: Rabbit,
    수달: Otter,
    우파루파: Upalupa,
    매: Hawk,
    고라니: Elk,
    듀공: Dugong,
    오랑우탄: Orangutan,
    아시아코끼리: Asianele,
    상괭이: Finless,
    바다거북: Turtle,
    레서판다: Redpanda,
    검은발족제비: Weasel,
    하마: Hippo,
    호랑이: Tiger,
    고래상어: Shark,
    뱀장어: Eel,
    양쯔강돌고래: Dolphin,
    저어새: Spoonbill
  };
  /* eslint-disable no-unused-vars */

  const [slidesItem, setSlidesItem] = useState(ALL);
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [select, setSelect] = useState(1);
  const [move, setMove] = useState(true);
  const [ArrLength, setArrLength] = useState(length);
  const [drawType, setDrawType] = useState("select");
  const [drawPiece, setDrawPiece] = useState("select");
  const [animal, setAnimal] = useState(null);

  // 업적획득 세팅
  const [badge, setBadge] = useState([]);
  const [badgeModal, setBadgeModal] = useState(false);
  const openBadgeModal = () => {
    setBadgeModal(true);
  };
  const closeBadgeModal = () => {
    setBadgeModal(false);
  };


  useEffect(() => {
    if (draw === "all") {
      setSlidesItem(ALL);
      setDrawType("all");
    } else if (draw === "1") {
      setSlidesItem(Polarbear);
      setAnimal("북극곰")
    } else if (draw === "2") {
      setSlidesItem(Cat);
      setAnimal("안데스산고양이")
    } else if (draw === "3") {
      setSlidesItem(Rhinoceros);
      setAnimal("검은코뿔소")
    } else if (draw === "4") {
      setSlidesItem(Goat);
      setAnimal("산양")
    } else if (draw === "5") {
      setSlidesItem(Crane);
      setAnimal("두루미")
    } else if (draw === "6") {
      setSlidesItem(Panda);
      setAnimal("자이언트판다")
    } else if (draw === "7") {
      setSlidesItem(Rabbit);
      setAnimal("강토끼")
    } else if (draw === "8") {
      setSlidesItem(Otter);
      setAnimal("수달")
    } else if (draw === "9") {
      setSlidesItem(Upalupa);
      setAnimal("우파루파")
    } else if (draw === "10") {
      setSlidesItem(Hawk);
      setAnimal("매")
    } else if (draw === "11") {
      setSlidesItem(Elk);
      setAnimal("고라니")
    } else if (draw === "12") {
      setSlidesItem(Dugong);
      setAnimal("듀공")
    } else if (draw === "13") {
      setSlidesItem(Orangutan);
      setAnimal("오랑우탄")
    } else if (draw === "14") {
      setSlidesItem(Asianele);
      setAnimal("아시아코끼리")
    } else if (draw === "15") {
      setSlidesItem(Finless);
      setAnimal("상괭이")
    } else if (draw === "16") {
      setSlidesItem(Turtle);
      setAnimal("바다거북")
    } else if (draw === "17") {
      setSlidesItem(Redpanda);
      setAnimal("렛서판다")
    } else if (draw === "18") {
      setSlidesItem(Weasel);
      setAnimal("검은발족제비")
    } else if (draw === "19") {
      setSlidesItem(Hippo);
      setAnimal("하마")
    } else if (draw === "20") {
      setSlidesItem(Tiger);
      setAnimal("호랑이")
    } else if (draw === "21") {
      setSlidesItem(Shark);
      setAnimal("고래상어")
    } else if (draw === "22") {
      setSlidesItem(Eel);
      setAnimal("뱀장어")
    } else if (draw === "23") {
      setSlidesItem(Dolphin);
      setAnimal("양쯔강돌고래")
    } else if (draw === "24") {
      setSlidesItem(Spoonbill);
      setAnimal("저어새")
    }
  }, [draw]);

  function setSlides() {
    const side = 3;
    const addedFront = [];
    const addedLast = [];
    let index = 0;
    while (index < side) {
      addedLast.push(slidesItem[index % slidesItem.length]);
      addedFront.unshift(
        slidesItem[slidesItem.length - 1 - (index % slidesItem.length)]
      );
      index += 1;
    }
    return [...addedFront, ...slidesItem, ...addedLast];
  }
  useEffect(() => {
    if (speed === 5 && select === drawPiece + 1) {
      setMove(false);
    }
  }, [speed, select]);

  useEffect(() => {
    if (speed > 15) {
      setCount(0);
    }
    const timer = setInterval(() => {
      if (move) {
        setCount(prev => prev + 1);
      }
    }, 5);
    const timer2 = setInterval(() => {
      if (move) {
        setSelect(prev => prev + 1);
      }
    }, 1100 / speed);
    const timer3 = setInterval(() => {
      if (move) {
        setCount(0);
        setSelect(1);
      }
      if (speed >= 6) {
        setSpeed(prev => prev - 5);
      }
    }, (ArrLength * 1100) / speed);
    return () => {
      clearInterval(timer);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [speed, move]);

  function goDraw(e) {
    e.preventDefault();

    if (drawType === "all") {
      getAllDraw().then(res => {
        if (res.message === "SUCCESS") {
          const drawed = res.data.animal;
          if (drawed === "북극곰") {
            setSlidesItem(Polarbear);
          } else if (drawed === "안데스산고양이") {
            setSlidesItem(Cat);
          } else if (drawed === "검은코뿔소") {
            setSlidesItem(Rhinoceros);
          } else if (drawed === "산양") {
            setSlidesItem(Goat);
          } else if (drawed === "두루미") {
            setSlidesItem(Crane);
          } else if (drawed === "자이언트판다") {
            setSlidesItem(Panda);
          } else if (drawed === "강토끼") {
            setSlidesItem(Rabbit);
          } else if (drawed === "수달") {
            setSlidesItem(Otter);
          } else if (drawed === "우파루파") {
            setSlidesItem(Upalupa);
          } else if (drawed === "매") {
            setSlidesItem(Hawk);
          } else if (drawed === "고라니") {
            setSlidesItem(Elk);
          } else if (drawed === "듀공") {
            setSlidesItem(Dugong);
          } else if (drawed === "오랑우탄") {
            setSlidesItem(Orangutan);
          } else if (drawed === "아시아코끼리") {
            setSlidesItem(Asianele);
          } else if (drawed === "상괭이") {
            setSlidesItem(Finless);
          } else if (drawed === "바다거북") {
            setSlidesItem(Turtle);
          } else if (drawed === "렛서판다") {
            setSlidesItem(Redpanda);
          } else if (drawed === "검은발족제비") {
            setSlidesItem(Weasel);
          } else if (drawed === "하마") {
            setSlidesItem(Hippo);
          } else if (drawed === "호랑이") {
            setSlidesItem(Tiger);
          } else if (drawed === "고래상어") {
            setSlidesItem(Shark);
          } else if (drawed === "뱀장어") {
            setSlidesItem(Eel);
          } else if (drawed === "양쯔강돌고래") {
            setSlidesItem(Dolphin);
          } else if (drawed === "저어새") {
            setSlidesItem(Spoonbill);
          }

          setArrLength(9);
          setMove(true);
          setSpeed(20);
          setDrawPiece(res.data.piece);
          if (res.data.modalName.length > 0) {
            setBadge(res.data.modalName)
            openBadgeModal()
          }

        } else if (res.message === "noCredit") {
          alert("뽑기에 필요한 SAVE가 부족합니다!");
        }
      });
    }
    else {
      getSelectDraw(animal).then(res => {
        if (res.message === "SUCCESS") {
          setArrLength(9);
          setMove(true);
          setSpeed(20);
          setDrawPiece(res.data.piece);
          if (res.data.modalName.length > 0) {
            setBadge(res.data.modalName)
            openBadgeModal()
          }
        }
        else if (res.message === "noCredit") {
          alert("뽑기에 필요한 SAVE가 부족합니다!");
        }

      })
    }

  }

  let DrawButton = (
    <button
      type="button"
      className="fs-18 notoBold goDraw"
      onClick={e => goDraw(e)}
    >
      뽑기 ({price}SAVE)
    </button>
  );
  if (speed > 5) {
    DrawButton = (
      <button
        type="button"
        className="fs-18 notoBold goDraw2"
        onClick={e => goDraw(e)}
        disabled
      >
        뽑기 ({price}SAVE)
      </button>
    );
  }
  return (
    <div className="slider-area">
      <div className="slider">
        <hr className="sliderLine" />
        <FontAwesomeIcon className="CaretDown" icon={faCaretDown} />
        <div className="slider-list">
          <div className="slider-track">
            {setSlides().map(item => (
              <div className="slider-item">
                <div
                  id="drawitem"
                  className="drawitem"
                  style={{
                    transform: `translateX(-${count * speed}px)`,
                    transition: `transform 0.00000001s ease-in`
                  }}
                >
                  <img src={item[0]} alt="#" className="pieceimg" />
                  {slidesItem.length === 9 ? (
                    <h1 className="fs-22 notoBold">{item[1]}</h1>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="sliderLine" />
      </div>
      {DrawButton}
      <GetBadge open={badgeModal} close={closeBadgeModal} badge={badge} />
    </div>
  );
}
export default DrawSlide;
