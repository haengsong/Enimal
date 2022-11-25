import React,{useEffect,useState} from "react";
import './UserInfo.scss'

import { getProfile } from "@apis/mypage";

import InfoTable from "./UserInfo/InfoTable";
import Achievements from "./UserInfo/Achievements";
import CollectionPiece from "./UserInfo/CollectionPiece";
import MyNFT from "./UserInfo/MyNFT";




function UserInfo(props) {
  const { userId } = props;
  const [data,setData] = useState(null);
  useEffect(()=>{
    getProfile(userId).then(res=>{
      setData(res.data)
    })
  }, [])

  return (
    <>
      <div className="userInfo flex">
        <InfoTable data={data} />
        <Achievements data={data} />
      </div>
      {userId === localStorage.MyNick ?
        <>
          <hr />
          <CollectionPiece userId={userId} />
        </>
        : null}

      <hr />
      <MyNFT userId={userId} />


    </>

  )
}
export default UserInfo;
