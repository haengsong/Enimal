import React, { useState } from "react";
import "@components/common/Modal.scss";
import "./ChangeMoney.scss";

import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { charge, revertCharge } from "@apis/sendTx"
import { chargeSave } from "@apis/draw"

const Web3 = require("web3");

function ChangeMoney(props) {
  const { open, close } = props;
  const [donaPer, setDonaPer] = useState(10);
  const [cash, setCash] = useState(0);
  const SAVE = (cash * (100 - donaPer)) * 10;
  const [confirmed, setConfirmed] = useState(false)
  const {myAddress} = localStorage
  const [myKey, setMyKey] = useState(0);

  function inputKey(e) {
    setMyKey(e.target?.value)
  }
  const userAddress = localStorage.getItem('myAddress')
  async function ssfToSave(e) {
    e.preventDefault();
    const web3 = new Web3(new Web3.providers.HttpProvider("http://52.141.42.92:8545/"));
    // 개인키
    if (myKey.length === 66) {
      const pubKey = web3.eth.accounts.privateKeyToAccount(myKey);
      if (pubKey.address === myAddress) {
        setConfirmed(true)
      } else {
        setConfirmed(false)
        alert('현재 계정의 개인키가 아닙니다')
      }
      if (confirmed) {
        if (Number(cash) <= Number(localStorage.ssf)) {
          await charge(userAddress, cash, myKey)
            .then(async () => {
              // 백에 데이터 보냄
              const PARAMS = {
                percent: donaPer,
                firstCredit: cash * 1000,
              }
              await chargeSave(PARAMS).then(async () => {
                await alert('충전되었습니다')
                setCash(0)
                close()
              }).catch(() => {
                revertCharge(userAddress, cash)
                alert('충전에 실패했습니다')
              })
            })
        }
        else {
          alert("SSF 코인이 부족합니다!")
        }
      } else {
        alert("개인키가 유효하지 않습니다")
      }
    } else {
      alert("개인키 형식이 맞지 않습니다")
    }
  }

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section className="cashModal">
          <header>
            <h1 className="titleText fs-28">재화 전환</h1>
          </header>

          <main className="cashMain">
            <div className="flex align-center cashInputSet">
              <input
                className="cashInput fs-32 notoBold"
                value={cash}
                onChange={e => setCash(e.target.value)}
                type="text"
              />
              <h1 className="fs-32 roBold mx-3">SSF</h1>
            </div>
            <input
              type="range"
              id="inputSlider"
              className="donaRange"
              onChange={e => setDonaPer(e.target.value)}
              min="10"
              max="100"
              defaultValue="10"
              step="5"
            />
            <h1 className="fs-20 notoBold">
              전환 금액의 {donaPer} %인 {cash * donaPer} SSF를 동물 보호 단체에 기부하겠습니다.
            </h1>
            <FontAwesomeIcon className="arrowDown" icon={faDownLong} />
            <div className="flex align-center cashInputSet">
              <div className="fs-32 notoBold saveBox">{SAVE}</div>
              <h1 className="fs-32 roBold mx-3">SAVE</h1>
            </div>
            <div className="flex align-center mx-4 keyInputBox">
              <input
                className="cashInput fs-18 notoBold"
                placeholder="privateKey"
                onChange={e => inputKey(e)}
                type="text"
              />
            </div>
          </main>
          <footer>
            <button
              type="button"
              className="changeButton fs-24 notoBold"
              onClick={e=>ssfToSave(e)}
            >
              충전하기
            </button>
            <button
              type="button"
              className="closeButton fs-24 notoBold"
              onClick={close}
            >
              취소하기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default ChangeMoney;
