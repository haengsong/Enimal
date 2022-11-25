import { API_DRAW } from "./index";

// 전체뽑기
export const getAllDraw = async () => {
  const res = await API_DRAW.post("/draw/all");
  return res.data;
};

// 선택뽑기
export const getSelectDraw = async (animal) => {
  const res = await API_DRAW.post(`/draw/select/${animal}`);
  return res.data;
};

// 재화 전환(충전)
export const chargeSave = async (PARAMS) => {
  const res = await API_DRAW.post("/credit","",{
    params : PARAMS,
  });
  return res.data;
};
