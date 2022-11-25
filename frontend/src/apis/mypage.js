import { API_MYPAGE } from "./index";

// 프로필 조회
export const getProfile = async (DATA) => {
  const res = await API_MYPAGE.get(`/user/profile/${DATA}`);
  return res.data;
};


// 내 게시글 조회
export const getMyArtilce = async (PARAMS) => {
  const res = await API_MYPAGE.get("/user/post",{
    params : PARAMS,
  });
  return res.data;
};

// 내 댓글 조회
export const getMyComment = async (PARAMS) => {
  const res = await API_MYPAGE.get("/user/comment",{
    params : PARAMS,
  });
  return res.data;
};


// 보유중인 NFT 조회
export const getMyNFT = async (userid) => {
  const res = await API_MYPAGE.get(`/user/completion/${userid}`);
  return res.data;
};

// 수집중인조각 조회
export const getMyPiece = async () => {
  const res = await API_MYPAGE.get('/user/collection/');
  return res.data;
};

// 재화 전환 내역 조회
export const getMyPointHistory = async () => {
  const res = await API_MYPAGE.get('/user/money/');
  return res.data;
};

// 나의 출석체크
export const getMyDayCheck = async () => {
  const res = await API_MYPAGE.get('/user/attend');
  return res.data;
};


// NFT 데이터 저장
export const getSaveMyNFT = async (idx,DATA) => {
  const res = await API_MYPAGE.post(`/nftCollection/${idx}`,DATA);
  return res.data;
};