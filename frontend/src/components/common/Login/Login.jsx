import React, { useState } from "react";
import './Login.scss'
import { getLogin } from '@apis/account'

const Web3 = require("web3");

function Login(props) {
  const { open, close } = props;
  const [myKey, setMyKey] = useState(null);
  const [newbie, setNewbie] = useState(false);
  const [nick, setNick] = useState(null);
  
  function inputKey(e) {
    setMyKey(e.target.value)
  }

  function inputNick(e) {
    setNick(e.target.value)
  }


  function goLogin(e) {
    e.preventDefault();
    if (myKey) {
      // 싸피 네트워크 주소
      const web3 = new Web3(new Web3.providers.HttpProvider("http://52.141.42.92:8545/"));
      // 개인키
      const pubKey = web3.eth.accounts.privateKeyToAccount(myKey);
      if (newbie && (nick === '' || nick === null)) {
        alert("닉네임을 입력해 주세요")
      }
      else {
        let DATA = { wallet: pubKey.address }
        if (nick) {
          DATA = {
            id: nick,
            wallet: pubKey.address
          }
        }
        getLogin(DATA).then((res) => {
          if (res.message === 'FAIL') {
            setNewbie(true)
          }
          else {
            localStorage.setItem('token', res.Authorization)
            localStorage.setItem('MyNick', res.data.userId)
            localStorage.setItem('myAddress', pubKey.address)
            localStorage.setItem('ssf', 0)
            close(res.data.modalName)
          }
        })

      }

    }
  }

  function cancle(e){
    e.preventDefault();
    setNewbie(false)
    close()
  }

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="loginModal">
          <header>
            <h1 className='titleText fs-24 notoBold'>지갑 연결</h1>
          </header>


          <main className="text-center">
            <span className="fs-20 notoBold ssafy">SSAFY WALLET</span><span className="fs-20 notoBold" style={{ color: "#274662" }}>의</span>
            <h1 className="fs-20 notoBold">개인키를 입력해주세요</h1>
            <div className="keyInputBox">
              <h1 className="fs-20 roBold">Private Key</h1>
              <input type="text" className="textInput" onChange={e => inputKey(e)} />
            </div>


            {newbie ?
              <>
                <div className="">
                  <h1 className="fs-20 notoBold">최초 로그인 이시네요!</h1>
                  <h1 className="fs-20 notoBold">사용할 닉네임을 입력해 주세요!</h1>
                </div>

                <div className="keyInputBox">
                  <h1 className="fs-20 notoBold" style={{ color: "#274662" }}>닉네임</h1>
                  <input type="text" className="nickInput" onChange={e => inputNick(e)} />
                </div>
              </>
              : null
            }

          </main>
          <footer>
            <button type="button" className="submitButton fs-18 notoMid" onClick={e => goLogin(e)}>연결하기</button>
            <button type="button" className="cancleButton fs-18 notoMid" onClick={e => cancle(e)}>
              취소
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default Login;
