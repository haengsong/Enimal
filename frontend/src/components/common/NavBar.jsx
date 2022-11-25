import React, { useState,useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

import nav from '@images/NAV.png'
import Login from "./Login/Login";
import ChangeMoney from "./ChangeMoney";

import { getMySave } from "../../apis/account";

import GetBadge from "./GetBadge";

const Web3 = require('web3');

function NavBar() {

  const [save,setSave] =useState(0);
  const [SSF,setSSF] =useState(0);

  // 업적획득 세팅
  const [badge, setBadge] = useState([]);
  const [badgeModal, setBadgeModal] = useState(false);
  const openBadgeModal = () => {
    setBadgeModal(true);
  };
  const closeBadgeModal = () => {
    setBadgeModal(false);
  };

  const {myAddress} = localStorage
	




  const web3 = new Web3(new Web3.providers.HttpProvider("http://52.141.42.92:8545/"));
  const token = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966';
  const wallet = localStorage.myAddress;
  const minABI = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];
  const contract = new web3.eth.Contract(minABI, token);
  const getBalance = async () => {
    const res = await contract.methods.balanceOf(wallet).call();
    // const format = web3.utils.fromWei(res);
    const coin = parseInt(res, 10);
    const ssf = coin.toLocaleString('ko-KR');
    localStorage.setItem('ssf', coin)
    setSSF(ssf)
  }
  getBalance();


  useEffect(()=>{
    if (myAddress) {
      getMySave().then(res=>{
        setSave(res.data)
      })
    }
  },[])
  


  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = (e) => {
    setModalOpen(false);
    if (myAddress) {
      getMySave().then(res=>{
        setSave(res.data)
      })
      if (e.length > 0) {
        setBadge(e)
        openBadgeModal()
      }
    }

  };

  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
    if (myAddress) {
      getMySave().then(res=>{
        setSave(res.data)
      })
    }
  };

  function Logout(e) {
    e.preventDefault();
    localStorage.removeItem('token')
    localStorage.removeItem('MyNick')
    localStorage.removeItem('myAddress')
    localStorage.removeItem('ssf')
    alert("로그아웃 되었습니다!")
    navigate('/')
  }

  const mySave = save.toLocaleString("ko-KR");
  return (
    <header className="fixed-top">
      <Navbar className="mainNav flex" expand="lg">
        <Navbar.Brand href="/" className="mainlogo notoBold fs-24">
          <img className="logoimg" src={nav} alt="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="basic-navbar-nav">
          <Nav>
            {localStorage.token ?
              <>
                <Nav.Link className="save notoMid fs-20">SSF : {SSF}</Nav.Link>
                <Nav.Link className="save notoMid fs-20">SAVE : {mySave}</Nav.Link>
              </>
              :
              null
            }
            <Nav.Link href="/draw" className="drawBtn notoMid fs-20">
              조각 뽑기
            </Nav.Link>
            <NavDropdown
              title="커뮤니티"
              className="nav-dropdown1 notoMid fs-20"
            >
              <NavDropdown.Item
                href="/notice"
                className="nav-dropdowm1_notice notoMid fs-18"
              >
                공지사항
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item
                href="/community"
                className="nav-dropdowm1_free notoMid fs-18"
              >
                자랑게시판
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="계정 관리"
              className="nav-dropdown2 notoMid fs-18"
            >
              {localStorage.token ?

                <>
                  <NavDropdown.Item
                    href={`/mypage/${localStorage.MyNick}`}
                    className="nav-dropdowm2_mypage notoMid fs-18"
                  >
                    마이페이지
                  </NavDropdown.Item>
                  <hr />
                  <NavDropdown.Item
                    onClick={openModal2}
                    className="nav-dropdowm2_acc notoMid fs-18"
                  >
                    재화 전환
                  </NavDropdown.Item>
                  <hr />
                  <NavDropdown.Item
                    onClick={e => Logout(e)}
                    className="nav-dropdowm2_acc notoMid fs-18"
                  >
                    로그아웃
                  </NavDropdown.Item>
                </>
                :
                <NavDropdown.Item
                  onClick={openModal}
                  className="nav-dropdowm2_acc notoMid fs-18"
                >
                  지갑연결
                </NavDropdown.Item>
              }


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login open={modalOpen} close={closeModal} />
      <ChangeMoney  open={modalOpen2} close={closeModal2} />
      <GetBadge open={badgeModal} close={closeBadgeModal} badge={badge} />
    </header>
  );
}

export default NavBar;
