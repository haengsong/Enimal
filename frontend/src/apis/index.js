import axios from "axios";

export const BASE_URL = "http://j7c106.p.ssafy.io:8081";

export const API_ACCOUNT = axios.create({
  baseURL : BASE_URL,
  headers: {
    "Authorization": localStorage.token
  }
});

export const API_COMMUNITY = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_NOTICE = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_MYPAGE = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_DRAW = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_HOME = axios.create({
  baseURL: BASE_URL,
  headers: {}             
})

export const ex = () => {};
