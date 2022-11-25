# C106 Enimal

### 📢 2022.08.29 ~ 2022.10.07 (7주)

### :arrow_right: [노션](https://selective-spectrum-c0a.notion.site/Enimal-09dba286b744472f8854dcf122d9e313)

### 📃[프로젝트 산출물](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/-/tree/master/exec)
# 🍯 팀원 소개

|Back-End|Back-End|Front-End|Front-End|NFT|NFT|
|-----|---|---|---|---|---|
|최 강(팀장)|김유완(팀원)|오행송(팀원)|이동명(팀원)|나원경(팀원)|김규민(팀원)|
<br/>

# 🐣 기획배경

✔ 환경 문제, 서식지 부족 등으로 멸종위기 종이 빠르게 늘어나고 있습니다. 

✔ 집중적인 보전 활동을 한다면 멸종위기 종의 서식지 환경이 개선되고, 개체 수가 증가할 수 있지만 돈과 관심이 필요합니다. 

✔ 이런 생각을 토대로 저희는 멸종위기 종에 대한 관심을 유발하고, 기부를 독려할 수 있는 NFT 서비스 Enimal (Endangered + Animal)을 만들게 되었습니다.
<br/>
# 🎯 타겟

🙍‍♀️ 멸종위기 종들에 대한 관심이 있는 사람

🙍‍♂️ NFT에 흥미가 있는 사람

🙍‍ 사소한 기부라도 하고 싶은 사람

🙍‍♂️ 환경 보존을 위해 노력하는 사람
<br/>

# 🐇 기술스택

![기술_스택.jpg (1640×779)](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/1cc364edc8b752cb7969fbfa8289d710/%EA%B8%B0%EC%88%A0_%EC%8A%A4%ED%83%9D.jpg)

### 프론트
    - React.js : 18.2.0
    - Node.js : 14.12.0
    - Sass : 7.0.3
### 백
    - JAVA : 11.0.14
    - Spring Boot : 2.7.3
    - JPA : 2.7.2
    - MySQL : 8.0.30-0ubuntu0.20.04.2
    - JWT : 0.9.0
### NFT
    - Solidity : 0.8.4
    - Truffle : 5.4.24
    - Besu : 21.10.20
    - Dream-api : 1.0.8
### 인프라
    - Nginx : 1.18.0
    - AWS : Linux/5.4.0-1018-aws
    - Jenkins : 2.361.1
    - Docker : 1.2.10
### 협업툴
    - Notion / Gitlab / Figma / Jira


## 🐑 프로젝트 핵심 기능

---

### 뽑기

- 전체 뽑기 : 멸종위기 24종을 임의로 선정하여 각 등급에 따라 차등으로 확률 뽑기
- 개별 뽑기 : 특정 종을 선택하여 등급에 따라 가격 산정
- 업적 보유시 : 미보유 뽑기 확률 상승

### 환전

- 사이트 내 재화로 환전 : SSF를 SAVE로 환전
- SSF 잔량 확인
- 트랜잭션 전송

### NFT 발급 ( Dream api 사용 )

- AI 이미지 생성 : 요청 시마다 새로운 AI 이미지를 생성
- ipfs로 파일 분산화 : DB 사용을 줄임
- 민팅 : 이미지를 NFT화하면서 소유 증명 가능 (ERC721 준수)

```vbnet
AI 이미지 생성 => url을 통해 이미지 다운로드 => 이미지와 메타데이터 ipfs에 전송
=> ipfs url로 get 요청을 보내 이미지 url 받아옴 => 스마트 컨트랙트에 민팅 요청
=> 백에 데이터 저장
```

# 🐑 프로젝트 화면
![사용설명서](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/58278b8b3e9c1f7c3d712396d380bb8c/%EC%82%AC%EC%9A%A9%EC%84%A4%EB%AA%85%EC%84%9C.png)

### ** 메인페이지-배너 **
![배너](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/a541b5562f32508ee1a754ba1cb35a5b/image.png)

서비스에 대한 간단한 소개 페이지를 갈 수 있는 배너

### ** 메인페이지-오늘의동물 **
![오늘의동물](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/eaaa800e5775c73845c40b881e703baf/image.png)

매일 랜덤으로 24종의 멸종위기 동물에 관한 내용을 보여주고, 영상 시청할 수 있도록 유도

### ** 상단바-환전 **
![환전](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/609ecbb9f785e72847c2482ff3b228f6/image.png)

싸피네트워크를 통해 SSF 코인 재화를 서비스 내 재화로 변환, 기부 할 비율을 선택 후 충전

### ** 전체 뽑기 **

![전체뽑기](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/0f79b0031fc20f0a48d0739269ed2bcc/%EC%A0%84%EC%B2%B4%EB%BD%91%EA%B8%B0.JPG)

사용자가 보유중인 업적과 멸종위기 등급을 통해 확률 산정 후 뽑기
업적 보유시 미보유 조각의 뽑기 확률을 증가

### ** 개별 뽑기 **

![선택뽑기](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/ebed303e8e8cd555065d076f9fd7fb6d/%EC%84%A0%ED%83%9D%EB%BD%91%EA%B8%B0.JPG)

사용자가 보유중인 업적과 멸종위기 등급을 통해 가격 산정 후 뽑기

### ** 뽑기 화면 **

![뽑기 화면](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/60ad8972db1bf757ddafae14d1cdf01b/image.png)

### **마이페이지**

![기본정보](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/92204f09f3949061d96ec6c69e88eb76/image.png)

현재 나의 랭킹, 업적별 획득 현황 등 사용자 기본정보

### **자유게시판**

![자유게시판](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/c73bbbb304d02a5e94657a69366beed7/%EC%9E%90%EC%9C%A0%EA%B2%8C%EC%8B%9C%ED%8C%90.JPG)

발급된 NFT들을 자랑하는 게시판

### NFT 발급 ( Dream api 사용 )

![이미지 설정](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/58950cac278242060a596673d0480b15/1.png)



#### 발급된 이미지

![이미지 발급](https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106/uploads/b75a38609a0ea035b261e0944b8c3ebe/2.png)

조각을 다 모은 동물을 선택해 이름과 테마 설정,
Dream API에서 해당 테마에 맞는 랜덤한 이미지로 생성,
해당 사용자의 계정에 mint시켜 NFT 발급

