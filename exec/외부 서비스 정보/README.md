## dream-api

AI 이미지 생성 / [dream-api 깃허브](https://github.com/cdgco/dream-api)
<br><br>

### :exclamation: 참고 사항
<br>
- npm 패키지 설치 해도 적용이 되지 않는 문제는 깃허브 파일을 내려받아서 적용 가능 <br>
- node.js용 패키지이므로 프론트에서 바로 적용 시 cors 에러 (서버 우회해 적용) <br>
- [wombo-dream-api](https://github.com/leopoldhub/wombo-dream-api)라는 비슷한 api 존재 <br>
<br>

---

## nft.store

IPFS 업로드 / [홈페이지](https://nft.storage/)
<br><br>

### :exclamation: 참고 사항
<br>
- 프론트에서 ipfs-api 설치 시 웹팩 오류가 발생해 대안으로 선택함 <br>
- `npm install nft.storage`로 설치 가능  <br>
- metadata와 파일을 같이 올리는 형식으로, name과 description이 꼭 필요함 <br>

```
// ipfs에 업로드하는 데이터 형식
{
    name: 이름,
    description: 설명,
    image: 이미지 (파일이나 blob 형식이어야 함),
    properties: {
        각종 속성
    }
}
```

- 사용 시 API 키 발급이 필요 (로그인해서 발급 받을 수 있음) <br>
- ipfs-api와는 달리 `ipfs daemon`이 없어도 잘 동작 <br>
- 이미지 url이 있다면 fetch로 보낸 후 blob 객체로 만들거나, 파일을 다운로드해 올리는 방법이 있음 <br>
- blob 객체로 보낼 때와 파일로 보낼 때 반환값이 다름 <br>
- 메타데이터 cid로 이미지 데이터 주소를 받기 위해서는 axios 요청을 보내 데이터 값에서 이미지 주소를 추출하면 됨 <br>
