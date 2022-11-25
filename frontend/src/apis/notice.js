import { API_NOTICE } from "./index";

// 공지사항 리스트 조회
export const getNoticeList = async (PARAMS) => {
  const res = await API_NOTICE.get("/noticeList",
  {
    params : PARAMS,
  });
  return res.data;
};

// 공지사항 리스트 조회
export const getCreateNotice = async (DATA) => {
  const res = await API_NOTICE.post("/notice",DATA);
  return res.data;
};

// 공지사항 상세 조회
export const getDetailNotice = async (index) => {
  const res = await API_NOTICE.get(`/noticeList/${index}`);

  return res.data;
};

// 공지사항 삭제
export const getDeleteNotice = async (index) => {
  const res = await API_NOTICE.delete('/notice/',
  {params:{idx:index}});
  return res.data;
};


// 공지사항 수정
export const getUpdateNotice = async (DATA) => {
  const res = await API_NOTICE.put('/notice',DATA);
  return res.data;
};