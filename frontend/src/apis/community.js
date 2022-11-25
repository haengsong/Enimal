import { API_COMMUNITY } from "./index";

// 커뮤니티 게시글 리스트 조회
export const getCommunityList = async (PARAMS) => {
  const res = await API_COMMUNITY.get("/boardList",
  {
    params : PARAMS,
  });
  return res.data;
};

// 커뮤니티 게시글 작성
export const getCreateArticle = async (DATA) => {
   
  const res = await API_COMMUNITY.post("/board", DATA)
  return res.data;
};

// 커뮤니티 게시글 수정
export const getUpdateArticle = async (DATA) => {
   
  const res = await API_COMMUNITY.put("/board", DATA)
  return res.data;
};

// 커뮤니티 게시글 삭제
export const getDeleteArticle = async (index) => {
  const res = await API_COMMUNITY.delete("/board", {
    params : {idx:index}
  })
  return res.data;
};

// 커뮤니티 상세 페이지
export const getArticleDetail = async (index) => {
  const res = await API_COMMUNITY.get(`/boardList/${index}`)
  return res.data;
};

// 댓글 생성
export const getCreateComment = async (PARAMS,comment) => {
  const res = await API_COMMUNITY.post("/comment",comment,{
    params:PARAMS
  });
  return res.data;
};

// 댓글 삭제
export const getDeleteComment = async (idx) => {
  const res = await API_COMMUNITY.delete("/comment",{
    params:{comment_idx:idx}
  });
  return res.data;
};