-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: j7c106.p.ssafy.io    Database: j7c106
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ANIMAL`
--

DROP TABLE IF EXISTS `ANIMAL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ANIMAL` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `animal` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int NOT NULL,
  `picture` blob NOT NULL,
  `grade` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ANIMAL`
--

LOCK TABLES `ANIMAL` WRITE;
/*!40000 ALTER TABLE `ANIMAL` DISABLE KEYS */;
INSERT INTO `ANIMAL` VALUES (1,'검은코뿔소',5000,_binary '\0','위급','코 부분의 뿔은 두 개가 있으며 앞뿔은 최대 130cm, 뒷뿔은 최대 60cm까지 이른다. 검은코뿔소는 관목의 잎을 주로 먹기 때문에 잎을 뜯어내기 쉽게 윗입술이 길게 발달하고 입술이 좁은 형태를 지닌다.'),(2,'양쯔강돌고래',0,_binary '\0','위급','양쯔강돌고래는 몸이 대체적으로 푸른 빛을 띄며 옅은 회색에 배부분은 흰색을 띄고 있는 동물이다. 그리고 등지느러미가 다른 돌고래와는 다르게 조금 더 작다. 상당한 거구며 몸길이는 약 2.5m, 무게는 400kg 가까이 나간다. 가늘고 긴 부리의 끝이 약간 위로 향했고 위턱뼈 융기의 발달과 눈이 거의 퇴화했으며 초음파로 물체나 먹이를 확인한다.'),(3,'저어새',5222,_binary '\0','위기','몸길이는 75cm 정도고 몸은 하얀색이며, 부리와 다리는 검은색이다. 부리는 주걱 모양으로 되어 있으며 이 부리를 좌우로 저으면서 먹이를 찾는 습성이 있다. 이러한 습성 때문에 \'저어새\'라는 이름이 붙여진 것이다. '),(4,'고라니',550000,_binary '\0','취약','몸 길이 약 90cm, 어깨 높이 약 50cm, 꼬리 길이 4–8cm, 몸무게는 평균 9-11kg이다. 암수 모두 뿔이 없으며 위턱의 송곳니가 엄니 모양으로 발달하였다. 수컷의 송곳니는 약 6cm나 되어 입 밖으로 내밀어 번식기에 수컷끼리 싸울 때 쓰인다. '),(5,'하마',110000,_binary '\0','취약','하마는 코끼리와 함께‘가장 무거운 육상 동물’중 하나로 꼽힌다. 하지만 기후변화와 밀렵, 상아(엄니) 거래, 서식지 감소 등으로 인해 멸종위기에 처해 있다.'),(6,'뱀장어',0,_binary '\0','위기','수영속도는 느리고 다른 물고기와 달리 뱀처럼 몸을 옆으로 구부러지게 운동시킴으로써 추진력을 얻는다. 후각은 매우 뛰어나다.'),(7,'렛서판다',5000,_binary '\0','위기','생김새는 다 성장했을 경우 50~65cm 정도까지 자라며 꼬리도 몹시 길어서 30~60cm까지 성장한다. 꼬리가 긴 이유는 나무를 탈 때 무게중심을 잡기 위해서다. 몸무게는 3~7kg이다. 식성은 잡식성으로 곤충, 새의 알, 대나무, 죽순 등 가리지 않고 잘먹는다.'),(8,'우파루파',1200,_binary '\0','위급','번식이 쉽고 잃어버린 신체를 쉽게 재생하고 놀라운 장기이식 능력(다른 아홀로틀의 장기를 이식받아도 거부반응이 전혀 없고 심장도 재생할 수 있다.) 때문에 과학연구용, 애완동물용으로 널리 이용된다.'),(9,'자이언트판다',1800,_binary '\0','취약','자이언트를 생략하고 그냥 판다 또는 왕판다로 부르기도 한다. 큰 덩치, 귀와 눈 주위의 검은 반점으로 쉽게 알아볼 수 있다. 중국 쓰촨성 지방과 티벳 고산지대에 서식하는 포유 동물로 식사의 99%는 대나무 이다.'),(10,'북극곰',30000,_binary '\0','취약','백곰이라고도 부른다. 북극 지방에 서식하고 있으며 현존하는 곰 중에서 가장 큰 곰이다. 갓 태어난 북극곰의 새끼는 약 900g 미만이지만 놀랍게도 다 자란 수컷은 300~650kg 정도라고 한다. 완벽한 육식성인 곰으로 바다표범 사냥에 영리하다. '),(11,'수달',0,_binary '\0','준위협','물에서 헤엄치면서 물고기를 주로 잡아먹는 족제비과 수달아과로 분류되는 포유류이다. 족제비와 비슷하지만 훨씬 더 크고 수중생활을 하기에 알맞다. 머리는 원형이고, 코는 둥글며, 눈은 작고, 귀는 짧아서 주름가죽에 덮여 털 속에 묻혀 있다.'),(12,'바다거북',0,_binary '\0','위기','넓은 의미로 거북목 바다거북상과에 속하는 모든 종들의 총칭이다. 바다거북의 트레이드마크라고 할 수 있는 등딱지는 매우 단단하기 때문에 상어 등의 육식동물의 습격에도 무사할 수 있다. 하지만 이건 등딱지 한정으로 무사한 거고 지느러미같이 연한 부위를 물어 뜯기면 꽤나 치명적이다.'),(13,'안데스산고양이',2500,_binary '\0','위기','안데스 산맥에 사는 야생 고양이로 개체수가 2500여 마리 이하로 간주하여 멸종위기종(EN)으로 분류하고 있다. 설치류 같은 소형동물, 조류를 주식으로 삼는다.'),(14,'아시아코끼리',45000,_binary '\0','위급','삼림 환경을 다소 재현한 사육 환경에서 암컷 기준으로 약 60년을 살며, 동물원에서는 그보다 더 일찍 죽는다. 높지 않은 번식률과 높은 사망률 때문에 사육되는 개체가 점점 줄어드는 추세이다.'),(15,'강토끼',1500,'','위급','남아프리카 공화국의 카루 사막의 중앙과 남부 지역에 분포한다. 일반적인 토끼와 비슷하지만 귀와 몸이 더 길며 입꼬리에서 볼 위로 이어지는 줄무늬와 눈 주위에 하얀 고리가 있다. 또한 갈색 양털 꼬리, 배와 목에 크림색 또는 회색빛 털을 가지고 있으며, 넓고 곤봉 같은 뒷발을 가지고 있다. 야행성 동물이며 식물을 주식으로 삼는다.'),(16,'고래상어',7000,_binary '\0','위기','온순한 성격의 고래상어는 따뜻한 바다에서 발견되며 플랑크톤을 주식으로 삼는다. IUCN에 의해 위기/취약(EN)으로 분류되어 있다. 현존하는 어류중에서 크기가 가장 크며 100살 넘게 살 수 있을것으로 추정된다.'),(17,'오랑우탄',0,_binary '\0','위급','생각과 행동이 매우 신중하며 고릴라 다음으로 몸집이 큰 유인원이다. 거의 나무 위에서 생활하는데, 팔로 숲 꼭대기까지 기어올라가 조심스럽게 돌아다니며, 때로는 이 가지에서 저 가지 사이를 구름다리 타듯이 옮겨다닌다. 먹이는 야생 새 알도 먹지만 주로 나무열매를 좋아하며, 한 나무의 열매를 다 먹을 때까지 며칠이라도 그 나무 부근에 머물러 있는다.'),(18,'상괭이',0,_binary '\0','취약','쇠돌고랫과에 속하는 여섯 종의 고래 중 하나이다. 모습이 웃는 얼굴 같아서 웃는고래 라고도 부르기도 한다. 몸빛은 회백색이며, 몸길이는 1.5-1.9 미터 정도까지 자란다. 등지느러미가 없는 대신에 높이 약 1 센티미터의 융기가 나있다.'),(19,'검은발족제비',0,_binary '\0','위기','짧은 다리에 몸통이 길고 눈 주위와 꼬리 끝이 검고 까만 장화를 신은 것 같은 모습으로, 북아메리카 평원에 서식하는 세계에서 가장 희귀한 포유류 중 하나다. 주로 야행성이며 겨울에는 별로 활동을 하지 않아서 때로는 굴속에 5 ~ 6일동안 꼼작하지 않고 지내기도 한다. 단독생활을 하며 텃세적 습성이 있어서 영역을 확보하는 데 자신의 영역에 같은 성별의 개체가 침범하면 심하게 공격한다.'),(20,'듀공',0,_binary '\0','취약','전설 속 인어의 모태가 되었다고 알려진 듀공은 해초를 주식으로 삼으며, 무리 생활을 하는 사회적 동물이다. 다수의 듀공들을 모두 먹일 풍부한 해초층이 있는 연안가가 지구상에 많지 않은 까닭에 주로 1~4마리 안팎으로 행동한다.'),(21,'매',1200000,_binary '\0','최소관심','매는 멸종위기 야생생물 Ⅰ급의 매과 조류로, 우리나라의 전국 하구, 호수, 농경지 인근에서 주로 관찰되는 텃새이다. 몸 윗면은 청회색이고 뺨에 검은색 무늬가 특징이다. 1950~60년대 전 세계적인 DDT(살충제)의 사용으로 번식에 큰 타격을 입은 대표적인 맹금류다. 현재 한국적색목록에 멸종위기 범주로 평가되어 있다.'),(22,'두루미',2800,_binary '\0','위기','두루미목 두루미과에 속하는 조류이다. 몸 길이 150cm, 체중 7-12kg, 날개 편 길이 220~250cm의 대형 조류이다. 이마, 머리꼭대기, 눈앞에는 깃털이 없고 붉은색의 피부가 드러나 있다. 몸은 흰색이고, 멱과 목은 검은색이다. 검은색 셋째 날개깃은 접었을 때 길게 늘어져서 꼬리가 검은색처럼 보인다. \'뚜루루루, 뚜루루루\'하고 날카롭게 운다. '),(23,'산양',700,_binary '\0','취약','산양은 멸종위기 야생생물 Ⅰ급의 포유류이다. 가파른 바위가 있거나 험한 산악지역에 서식하고 있으며, 서식지 단절과 훼손 등으로 위협받고 있다. 대부분 일생동안 일정한 지역에서만 서식하는 습성이 있다. 현재 한국적색목록에 멸종위기범주로 평가되어 있다.'),(24,'호랑이',0,_binary '\0','위기','호랑이는 식육목 고양이과에 속하는 포유류로, 고양이과 동물들 중 가장 큰 동물이다. 깊은 산의 밀림 지대에 주로 서식하며 자신이 잡은 신선한 야생동물의 고기를 먹는다. 과거 한반도에 널리 서식하였으나 호피를 이용하기 위한 무분별한 남획과 1940년대 해수구제사업으로 개체수가 급감하여 현재 한반도에서는 절멸된 것으로 여겨진다.');
/*!40000 ALTER TABLE `ANIMAL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ATTENDENCE`
--

DROP TABLE IF EXISTS `ATTENDENCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ATTENDENCE` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attenddate` datetime DEFAULT NULL,
  `convertdate` int DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ATTENDENCE`
--

LOCK TABLES `ATTENDENCE` WRITE;
/*!40000 ALTER TABLE `ATTENDENCE` DISABLE KEYS */;
INSERT INTO `ATTENDENCE` VALUES (147,'Enimal','2022-10-06 14:47:00',279),(148,'HaengSong','2022-10-06 17:48:25',279),(149,'Won','2022-10-06 17:58:26',279),(150,'현서','2022-10-06 22:27:38',279),(151,'Gang','2022-10-06 23:08:30',279),(152,'Uwan','2022-10-06 23:09:57',279),(153,'Yellow','2022-10-06 23:10:18',279),(154,'James','2022-10-06 23:10:30',279),(155,'Jone','2022-10-06 23:10:40',279),(156,'Alice','2022-10-06 23:11:03',279),(157,'Bob','2022-10-06 23:11:40',279),(158,'Cream','2022-10-06 23:11:49',279),(159,'Dive','2022-10-06 23:19:38',279),(160,'Enoma','2022-10-06 23:19:48',279),(161,'Fitch','2022-10-06 23:19:58',279),(162,'Handler','2022-10-06 23:20:08',279),(163,'Inseo','2022-10-06 23:20:20',279),(165,'현서','2022-10-07 09:23:46',280);
/*!40000 ALTER TABLE `ATTENDENCE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BADGE`
--

DROP TABLE IF EXISTS `BADGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BADGE` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `percentage` int DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BADGE`
--

LOCK TABLES `BADGE` WRITE;
/*!40000 ALTER TABLE `BADGE` DISABLE KEYS */;
INSERT INTO `BADGE` VALUES (155,'Enimal','연금술사',2,'2022-10-06 17:38:51'),(156,'Enimal','기부 천사',2,'2022-10-06 17:38:51'),(157,'Enimal','첫 걸음',2,'2022-10-06 17:39:03'),(158,'HaengSong','연금술사',2,'2022-10-06 17:50:29'),(159,'HaengSong','기부 천사',2,'2022-10-06 17:50:29'),(160,'HaengSong','첫 걸음',2,'2022-10-06 17:52:11'),(161,'HaengSong','Enimal 홀릭',2,'2022-10-06 17:55:29'),(162,'Won','연금술사',2,'2022-10-06 17:58:44'),(163,'Won','첫 걸음',2,'2022-10-06 17:58:56'),(164,'Won','기부 천사',2,'2022-10-06 17:59:24'),(165,'Won','명예 한 스푼',2,'2022-10-06 18:12:15'),(166,'Won','마음에 드시나요',2,'2022-10-06 19:26:35'),(167,'Won','뽑기 중독',2,'2022-10-06 21:27:53'),(168,'Won','업적 냠냠',2,'2022-10-06 21:56:39'),(169,'현서','첫 걸음',2,'2022-10-06 22:28:16'),(170,'HaengSong','명예 한 스푼',2,'2022-10-06 22:34:12'),(171,'Uwan','첫 걸음',2,'2022-10-06 23:15:43'),(172,'Cream','명예 한 스푼',2,'2022-10-06 23:17:20'),(173,'James','명예 한 스푼',2,'2022-10-06 23:17:54'),(174,'Jone','명예 한 스푼',2,'2022-10-06 23:18:21'),(175,'Gang','명예 한 스푼',2,'2022-10-06 23:18:21'),(176,'Bob','명예 한 스푼',2,'2022-10-06 23:18:21'),(177,'Inseo','명예 한 스푼',2,'2022-10-06 23:20:42'),(178,'Handler','명예 한 스푼',2,'2022-10-06 23:20:54'),(179,'Enoma','명예 한 스푼',2,'2022-10-06 23:21:04'),(180,'Inseo','첫 걸음',2,'2022-10-06 23:23:53'),(181,'Cream','첫 걸음',2,'2022-10-06 23:46:47'),(182,'Enimal','명예 한 스푼',2,'2022-10-07 00:24:30'),(183,'Uwan','명예 한 스푼',2,'2022-10-07 02:08:42'),(186,'HaengSong','마음에 드시나요',2,'2022-10-07 09:06:01'),(188,'현서','환경 지킴이',2,'2022-10-07 09:23:46'),(189,'HaengSong','업적 냠냠',2,'2022-10-07 09:25:50');
/*!40000 ALTER TABLE `BADGE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BOARD`
--

DROP TABLE IF EXISTS `BOARD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BOARD` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdate` datetime DEFAULT CURRENT_TIMESTAMP,
  `modifydate` datetime DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `view` int DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BOARD`
--

LOCK TABLES `BOARD` WRITE;
/*!40000 ALTER TABLE `BOARD` DISABLE KEYS */;
INSERT INTO `BOARD` VALUES (81,'폴리곤으로 팬더 뽑았습니다','Won','2022-10-06 21:56:39','2022-10-06 21:56:39',' 내 스타일 아님',70,'https://ipfs.io/ipfs/bafybeig76aawvif6e3hapfkyh7hy3bon3bpqq6zwnazakt5rnsmprcwy6e/blob'),(83,'..좀 예쁜데요?','Won','2022-10-07 01:10:51','2022-10-07 01:10:51','팔아요...',14,'https://ipfs.io/ipfs/bafybeifypc3f4gb4yu53wtgqc7qe7itp2bctf2kr52rdamyzfgffpewqd4/blob'),(84,'물감으로 그린 팬더입니다','Won','2022-10-07 06:13:00','2022-10-07 06:13:00','팬더를 무려 두개나 뽑았네요 제가 허허... \n이건 좀 더 사실적인 그림이 나와서 또 마음에 드네요~',4,'https://ipfs.io/ipfs/bafybeiaqcm45hqzn7ejalkdispgxo4wvcvrxgvyfup5qoqkjqfneynauqy/blob'),(87,'수달 뽑았다!','HaengSong','2022-10-07 09:16:26','2022-10-07 09:16:26','수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달\n수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달\n수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달\n수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달\n수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달\n수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달수달',7,'https://ipfs.io/ipfs/bafybeievsrtahzw6buki62352dyuavg7pusjh24gkvsd4obhr6ldxv7ljm/blob');
/*!40000 ALTER TABLE `BOARD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `COLLECTION`
--

DROP TABLE IF EXISTS `COLLECTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `COLLECTION` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `animal` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tokenIdInfo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `nftURL` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nftType` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nftWallet` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nftName` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info` tinyint DEFAULT '0',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COLLECTION`
--

LOCK TABLES `COLLECTION` WRITE;
/*!40000 ALTER TABLE `COLLECTION` DISABLE KEYS */;
INSERT INTO `COLLECTION` VALUES (55,'Won','자이언트판다','98','2022-10-06 20:24:10','https://ipfs.io/ipfs/bafybeiaqcm45hqzn7ejalkdispgxo4wvcvrxgvyfup5qoqkjqfneynauqy/blob','Paint','0x7edc38F3511F13100AdcC4c16Ba14eC475C00776','물감으로 그린 팬더',1),(56,'Won','자이언트판다','99','2022-10-06 21:11:58','https://ipfs.io/ipfs/bafybeig76aawvif6e3hapfkyh7hy3bon3bpqq6zwnazakt5rnsmprcwy6e/blob','Polygon','0x7edc38F3511F13100AdcC4c16Ba14eC475C00776','폴리곤으로 팬더',1),(57,'Won','북극곰','100','2022-10-06 21:29:23','https://ipfs.io/ipfs/bafybeifypc3f4gb4yu53wtgqc7qe7itp2bctf2kr52rdamyzfgffpewqd4/blob','Comic','0x7edc38F3511F13100AdcC4c16Ba14eC475C00776','코믹 북극곰',1),(58,'Won','북극곰','103','2022-10-07 09:18:37','https://ipfs.io/ipfs/bafybeiaxf4gewvypeuvihdv2qn7xnsuxdjir5x4go547xr5f66ywapa64q/img.jpg','Line-Art','0x7edc38F3511F13100AdcC4c16Ba14eC475C00776','북극곰이다',1),(59,'HaengSong','수달','101','2022-10-07 09:06:01','https://ipfs.io/ipfs/bafybeievsrtahzw6buki62352dyuavg7pusjh24gkvsd4obhr6ldxv7ljm/blob','Gouache',NULL,'귀여운 수달',1),(61,'Cream','수달',NULL,NULL,NULL,NULL,NULL,NULL,0),(62,'Cream','북극곰',NULL,NULL,NULL,NULL,NULL,NULL,0),(63,'Cream','수달',NULL,NULL,NULL,NULL,NULL,NULL,0),(64,'James','수달',NULL,NULL,NULL,NULL,NULL,NULL,0),(65,'James','수달',NULL,NULL,NULL,NULL,NULL,NULL,0),(66,'Jone','수달',NULL,NULL,NULL,NULL,NULL,NULL,0),(67,'Gang','수달',NULL,NULL,NULL,NULL,NULL,NULL,0),(68,'Bob','메',NULL,NULL,NULL,NULL,NULL,NULL,0),(69,'Inseo','메',NULL,NULL,NULL,NULL,NULL,NULL,0),(70,'Inseo','북극곰',NULL,NULL,NULL,NULL,NULL,NULL,0),(71,'Inseo','자이언트판다',NULL,NULL,NULL,NULL,NULL,NULL,0),(72,'Inseo','우파루파',NULL,NULL,NULL,NULL,NULL,NULL,0),(73,'Handler','우파루파',NULL,NULL,NULL,NULL,NULL,NULL,0),(74,'Handler','바다상어',NULL,NULL,NULL,NULL,NULL,NULL,0),(75,'Handler','매',NULL,NULL,NULL,NULL,NULL,NULL,0),(76,'Enoma','우파루파',NULL,NULL,NULL,NULL,NULL,NULL,0),(77,'Enoma','북극곰',NULL,NULL,NULL,NULL,NULL,NULL,0),(78,'Enoma','매',NULL,NULL,NULL,NULL,NULL,NULL,0),(79,'Enoma','자이언트판다',NULL,NULL,NULL,NULL,NULL,NULL,0),(80,'Uwan','매',NULL,NULL,NULL,'',NULL,'',0),(81,'Enimal','렛서판다',NULL,NULL,NULL,NULL,NULL,NULL,0),(82,'Enimal','하마',NULL,NULL,NULL,NULL,NULL,NULL,0),(83,'HaengSong','자이언트판다','104','2022-10-07 09:58:36','https://ipfs.io/ipfs/bafybeifmnlguwzgwts3pnkm4tun3kv3hzmwoerk32ro2bkg37i4mt5nc5q/blob','HDR',NULL,'동명이는 판다',1),(84,'HaengSong','바다거북',NULL,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `COLLECTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `COMMENT`
--

DROP TABLE IF EXISTS `COMMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `COMMENT` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `board_idx` int DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COMMENT`
--

LOCK TABLES `COMMENT` WRITE;
/*!40000 ALTER TABLE `COMMENT` DISABLE KEYS */;
INSERT INTO `COMMENT` VALUES (68,'Uwan',81,'부러워요','2022-10-06 23:21:15'),(69,'Cream',81,'저는 고래 뽑을거에요','2022-10-06 23:47:27'),(70,'HaengSong',81,'볼수록 매력있네요 허허','2022-10-07 02:16:49'),(71,'Won',81,'댓글 더 달아주세요 인플루언서 업적 받고싶어요','2022-10-07 02:43:19');
/*!40000 ALTER TABLE `COMMENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EVENTDAY`
--

DROP TABLE IF EXISTS `EVENTDAY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EVENTDAY` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `eventName` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eventDate` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EVENTDAY`
--

LOCK TABLES `EVENTDAY` WRITE;
/*!40000 ALTER TABLE `EVENTDAY` DISABLE KEYS */;
INSERT INTO `EVENTDAY` VALUES (1,'국제 븍극곰의 날','02-27'),(2,'멸종 위기종의 날','04-01'),(3,'지구의 날','04-22'),(4,'세계 생물 다양성 보존의 날','05-22'),(5,'세계 거북이의 날','05-23'),(6,'세계 환경의 날','06-05'),(7,'세계 해양의 날','06-08'),(8,'국제 호랑이의 날','07-29'),(9,'세계 사자의 날','08-10'),(10,'세계 코끼리의 날','08-12'),(11,'식목일','04-05'),(13,'세계 동물의 날','10-04'),(14,'Enimal의 날','10-07');
/*!40000 ALTER TABLE `EVENTDAY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MONEY`
--

DROP TABLE IF EXISTS `MONEY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MONEY` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit` int DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `donateCredit` int DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MONEY`
--

LOCK TABLES `MONEY` WRITE;
/*!40000 ALTER TABLE `MONEY` DISABLE KEYS */;
INSERT INTO `MONEY` VALUES (72,'Enimal',9000,'2022-10-06 17:38:51',1000),(73,'HaengSong',9000,'2022-10-06 17:50:29',1000),(74,'HaengSong',90000,'2022-10-06 17:55:29',10000),(75,'HaengSong',90000,'2022-10-06 17:56:24',10000),(76,'HaengSong',90000,'2022-10-06 17:57:24',10000),(77,'Won',900,'2022-10-06 17:58:44',100),(78,'Won',9000,'2022-10-06 17:59:24',1000),(79,'HaengSong',90000,'2022-10-07 10:11:35',10000);
/*!40000 ALTER TABLE `MONEY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NOTICE`
--

DROP TABLE IF EXISTS `NOTICE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NOTICE` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `modifydate` datetime DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `view` int DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NOTICE`
--

LOCK TABLES `NOTICE` WRITE;
/*!40000 ALTER TABLE `NOTICE` DISABLE KEYS */;
INSERT INTO `NOTICE` VALUES (1,'[동물 소개] 검은코뿔소','Enimal','2022-09-18 08:42:23','2022-09-27 05:44:43','수정내용2222222222',7),(2,'[동물 소개] 양쯔강 돌고래','Enimal','2022-09-21 02:31:33','2022-09-21 02:31:33','내용',0),(3,'[동물 소개] 저어새','Enimal','2022-09-27 04:44:17','2022-09-27 05:34:06','공지사항 수정~~~',0),(4,'[동물 소개] 고라니','Enimal','2022-09-28 04:28:49','2022-09-28 04:28:49','내용!!!!!!',0),(6,'[동물 소개] 뱀장어','Enimal','2022-10-05 05:37:17','2022-10-05 05:37:17','내용',0),(7,'[동물 소개] 레서판다','Enimal','2022-10-05 05:37:26','2022-10-05 05:37:26','내용',0),(8,'[동물 소개] 우파루파','Enimal','2022-10-05 05:37:38','2022-10-05 05:37:38','내용',0),(9,'[동물 소개] 자이언트 판다','Enimal','2022-10-05 05:37:47','2022-10-05 05:37:47','내용',0),(10,'[동물 소개] 북극곰','Enimal','2022-10-05 05:37:55','2022-10-05 05:37:55','내용',0),(11,'[동물 소개] 수달','Enimal','2022-10-05 05:38:03','2022-10-05 05:38:03','내용',1),(12,'[동물 소개] 바다거북','Enimal','2022-10-05 05:38:09','2022-10-05 05:38:09','내용',0),(13,'[동물 소개] 안데스산 고양이','Enimal','2022-10-05 05:38:16','2022-10-05 05:38:16','내용',0),(14,'[동물 소개] 아시아 코끼리','Enimal','2022-10-05 05:38:24','2022-10-05 05:38:24','내용',0),(15,'[동물 소개] 강토끼','Enimal','2022-10-05 05:38:31','2022-10-05 05:38:31','내용',0),(16,'[동물 소개] 고래상어','Enimal','2022-10-05 05:38:35','2022-10-05 05:38:35','내용',3),(17,'[동물 소개] 오랑우탄','Enimal','2022-10-05 05:38:39','2022-10-05 05:38:39','내용',2),(18,'[동물 소개] 상괭이','Enimal','2022-10-05 05:38:43','2022-10-05 05:38:43','내용',1),(19,'[동물 소개] 검은발족제비','Enimal','2022-10-05 05:38:50','2022-10-05 05:38:50','내용',0),(20,'[동물 소개] 듀공','Enimal','2022-10-05 05:38:55','2022-10-05 05:38:55','내용',0),(21,'[동물 소개] 매','Enimal','2022-10-05 05:38:59','2022-10-05 05:38:59','내용',1),(22,'[동물 소개] 두루미','Enimal','2022-10-05 05:39:04','2022-10-05 05:39:04','내용',0),(23,'[동물 소개] 산양','Enimal','2022-10-05 05:39:08','2022-10-05 05:39:08','내용',0),(24,'[동물 소개] 호랑이','Enimal','2022-10-05 05:39:15','2022-10-05 05:39:15','내용',0);
/*!40000 ALTER TABLE `NOTICE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NOTICEATTENDENCE`
--

DROP TABLE IF EXISTS `NOTICEATTENDENCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NOTICEATTENDENCE` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice_idx` int DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NOTICEATTENDENCE`
--

LOCK TABLES `NOTICEATTENDENCE` WRITE;
/*!40000 ALTER TABLE `NOTICEATTENDENCE` DISABLE KEYS */;
INSERT INTO `NOTICEATTENDENCE` VALUES (73,'Enimal',34),(74,'Won',1),(75,'HaengSong',16),(76,'Won',16),(77,'Enimal',35),(78,'HaengSong',17),(79,'HaengSong',18);
/*!40000 ALTER TABLE `NOTICEATTENDENCE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PUZZLE`
--

DROP TABLE IF EXISTS `PUZZLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PUZZLE` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `animal` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `piece` int DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=508 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PUZZLE`
--

LOCK TABLES `PUZZLE` WRITE;
/*!40000 ALTER TABLE `PUZZLE` DISABLE KEYS */;
INSERT INTO `PUZZLE` VALUES (342,'Enimal','렛서판다',1,'2022-10-07 00:07:11',3),(343,'Enimal','렛서판다',8,'2022-10-07 00:07:24',3),(344,'HaengSong','바다거북',1,'2022-10-07 09:30:05',5),(345,'HaengSong','매',7,'2022-10-06 17:52:25',1),(346,'HaengSong','오랑우탄',2,'2022-10-06 17:52:31',1),(348,'HaengSong','검은코뿔소',4,'2022-10-06 17:52:39',1),(349,'HaengSong','검은코뿔소',8,'2022-10-06 17:53:14',2),(350,'HaengSong','하마',3,'2022-10-06 17:52:47',1),(351,'HaengSong','검은코뿔소',3,'2022-10-06 17:53:11',1),(352,'HaengSong','검은코뿔소',0,'2022-10-06 17:53:15',2),(353,'HaengSong','검은코뿔소',7,'2022-10-06 17:53:16',1),(354,'HaengSong','안데스산고양이',1,'2022-10-06 17:53:27',1),(355,'HaengSong','강토끼',7,'2022-10-06 17:53:29',1),(356,'Won','안데스산고양이',5,'2022-10-06 17:58:56',1),(357,'Won','강토끼',3,'2022-10-06 17:59:04',1),(358,'Won','검은코뿔소',2,'2022-10-06 17:59:12',1),(359,'Won','자이언트판다',7,'2022-10-06 19:53:54',4),(361,'Won','자이언트판다',5,'2022-10-06 20:33:25',3),(363,'Won','자이언트판다',8,'2022-10-06 20:33:17',6),(365,'Won','자이언트판다',4,'2022-10-06 19:53:30',1),(366,'Won','자이언트판다',3,'2022-10-06 21:23:27',5),(368,'Won','뱀장어',4,'2022-10-06 18:03:12',1),(369,'Won','산양',8,'2022-10-06 18:03:14',1),(370,'Won','두루미',7,'2022-10-06 18:03:17',1),(371,'Won','검은코뿔소',5,'2022-10-06 18:03:24',1),(372,'Won','안데스산고양이',8,'2022-10-06 18:03:26',1),(373,'Won','듀공',0,'2022-10-06 18:03:28',1),(374,'Won','상괭이',0,'2022-10-06 18:03:31',1),(375,'Won','호랑이',6,'2022-10-06 18:03:33',1),(376,'Won','렛서판다',7,'2022-10-06 18:03:35',1),(377,'Won','오랑우탄',8,'2022-10-06 18:03:37',1),(378,'Won','하마',4,'2022-10-06 18:03:39',1),(379,'Won','강토끼',5,'2022-10-06 18:03:41',1),(380,'Won','안데스산고양이',1,'2022-10-06 18:03:43',1),(382,'Won','호랑이',5,'2022-10-06 18:07:56',1),(385,'Won','자이언트판다',0,'2022-10-06 21:56:13',11),(388,'Won','북극곰',4,'2022-10-06 21:33:23',3),(389,'Won','북극곰',8,'2022-10-06 21:33:36',5),(390,'Won','북극곰',5,'2022-10-06 21:33:26',3),(391,'Won','북극곰',7,'2022-10-06 21:34:34',5),(392,'Won','북극곰',0,'2022-10-06 21:34:31',4),(393,'Won','북극곰',3,'2022-10-06 21:33:08',3),(394,'Won','북극곰',1,'2022-10-06 21:33:33',3),(395,'Won','북극곰',2,'2022-10-07 01:47:57',5),(398,'현서','수달',1,'2022-10-06 22:28:16',1),(399,'HaengSong','수달',1,'2022-10-06 22:32:29',4),(400,'HaengSong','수달',7,'2022-10-06 22:32:31',3),(401,'HaengSong','수달',6,'2022-10-06 22:32:34',2),(402,'HaengSong','수달',5,'2022-10-06 22:32:53',4),(404,'HaengSong','수달',3,'2022-10-06 22:32:57',3),(405,'HaengSong','수달',0,'2022-10-07 09:55:55',4),(407,'HaengSong','수달',2,'2022-10-06 22:32:48',2),(408,'HaengSong','수달',4,'2022-10-06 22:32:50',1),(409,'HaengSong','고래상어',2,'2022-10-06 22:46:43',3),(410,'HaengSong','고래상어',8,'2022-10-06 22:46:56',3),(411,'HaengSong','고래상어',4,'2022-10-06 22:46:58',3),(412,'HaengSong','고래상어',6,'2022-10-06 22:46:51',1),(413,'HaengSong','고래상어',3,'2022-10-06 22:46:53',1),(414,'HaengSong','고래상어',1,'2022-10-06 22:47:01',1),(415,'HaengSong','하마',0,'2022-10-06 22:54:40',1),(416,'HaengSong','아시아코끼리',4,'2022-10-06 22:54:49',1),(417,'HaengSong','저어새',3,'2022-10-06 22:54:56',1),(418,'Uwan','고래상어',4,'2022-10-06 23:15:43',1),(420,'Uwan','아시아코끼리',8,'2022-10-06 23:15:59',1),(421,'Uwan','안데스산고양이',7,'2022-10-06 23:16:39',1),(422,'Uwan','아시아코끼리',2,'2022-10-06 23:16:45',1),(423,'Uwan','수달',4,'2022-10-06 23:16:49',1),(424,'Uwan','산양',8,'2022-10-06 23:18:24',1),(425,'Uwan','검은코뿔소',3,'2022-10-06 23:18:29',1),(426,'Uwan','바다거북',7,'2022-10-06 23:18:33',1),(427,'Uwan','산양',3,'2022-10-06 23:18:38',1),(428,'Uwan','매',2,'2022-10-06 23:22:05',3),(429,'Uwan','매',1,'2022-10-06 23:22:02',2),(431,'Uwan','매',5,'2022-10-06 23:19:35',1),(435,'Inseo','저어새',6,'2022-10-06 23:23:53',1),(436,'Inseo','자이언트판다',1,'2022-10-06 23:23:58',1),(437,'Inseo','수달',5,'2022-10-06 23:24:01',1),(438,'Inseo','안데스산고양이',1,'2022-10-06 23:24:06',1),(439,'Uwan','강토끼',8,'2022-10-06 23:32:54',1),(440,'Uwan','양쯔강돌고래',2,'2022-10-06 23:34:28',2),(441,'Uwan','북극곰',5,'2022-10-06 23:34:05',1),(442,'Uwan','검은발족제비',1,'2022-10-06 23:34:13',1),(443,'Uwan','산양',5,'2022-10-06 23:34:16',1),(445,'Uwan','오랑우탄',8,'2022-10-06 23:34:24',1),(446,'Cream','하마',7,'2022-10-06 23:46:46',1),(447,'Cream','양쯔강돌고래',1,'2022-10-06 23:46:51',1),(448,'Cream','매',7,'2022-10-06 23:48:45',1),(449,'Enimal','수달',7,'2022-10-06 23:55:08',1),(450,'Enimal','검은코뿔소',3,'2022-10-06 23:55:13',1),(451,'Enimal','렛서판다',0,'2022-10-07 00:02:04',3),(452,'Enimal','렛서판다',6,'2022-10-07 00:00:54',2),(453,'Enimal','렛서판다',5,'2022-10-07 00:07:18',1),(454,'Enimal','렛서판다',3,'2022-10-07 00:01:20',1),(455,'Enimal','렛서판다',7,'2022-10-07 00:01:13',2),(459,'Enimal','하마',4,'2022-10-07 00:22:02',1),(460,'Enimal','하마',0,'2022-10-07 00:22:21',2),(463,'Enimal','하마',5,'2022-10-07 00:22:05',1),(467,'Enimal','하마',8,'2022-10-07 00:22:24',1),(468,'Enimal','하마',2,'2022-10-07 00:22:28',1),(469,'Enimal','북극곰',0,'2022-10-07 05:48:10',6),(470,'Enimal','북극곰',5,'2022-10-07 00:23:06',1),(471,'Enimal','북극곰',8,'2022-10-07 05:47:52',4),(472,'Enimal','북극곰',3,'2022-10-07 05:47:56',7),(473,'Enimal','북극곰',6,'2022-10-07 00:23:18',1),(474,'Enimal','북극곰',1,'2022-10-07 05:47:41',4),(475,'Enimal','북극곰',2,'2022-10-07 00:23:25',1),(476,'Enimal','북극곰',7,'2022-10-07 05:48:00',5),(477,'Won','검은발족제비',1,'2022-10-07 01:40:24',1),(478,'Won','검은발족제비',3,'2022-10-07 01:40:24',1),(479,'Won','뱀장어',3,'2022-10-07 01:46:01',1),(480,'Won','고라니',7,'2022-10-07 01:47:30',1),(481,'Won','우파루파',5,'2022-10-07 06:56:38',2),(482,'HaengSong','우파루파',7,'2022-10-07 02:38:40',1),(483,'Won','고래상어',0,'2022-10-07 06:33:16',1),(484,'Won','듀공',6,'2022-10-07 06:39:42',1),(485,'Won','바다거북',7,'2022-10-07 06:40:24',1),(486,'Won','우파루파',1,'2022-10-07 06:41:40',1),(487,'Won','매',7,'2022-10-07 06:51:20',1),(489,'HaengSong','자이언트판다',2,'2022-10-07 09:28:02',2),(493,'HaengSong','자이언트판다',8,'2022-10-07 09:27:55',1),(495,'HaengSong','자이언트판다',7,'2022-10-07 09:27:57',1),(498,'HaengSong','바다거북',8,'2022-10-07 09:30:15',4),(499,'HaengSong','바다거북',3,'2022-10-07 09:30:12',2),(500,'HaengSong','바다거북',4,'2022-10-07 09:30:10',4),(501,'HaengSong','바다거북',0,'2022-10-07 09:30:15',7),(502,'HaengSong','바다거북',5,'2022-10-07 09:28:59',1),(504,'HaengSong','바다거북',6,'2022-10-07 09:28:45',1),(506,'HaengSong','안데스산고양이',3,'2022-10-07 09:56:01',1),(507,'HaengSong','우파루파',2,'2022-10-07 09:56:18',1);
/*!40000 ALTER TABLE `PUZZLE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `wallet` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit` int DEFAULT '0',
  `createdate` datetime DEFAULT NULL,
  `usedcredit` int DEFAULT '0',
  `usedcount` int DEFAULT '0',
  `donation` int DEFAULT '0',
  `lastPuzzle` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idx`,`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (40,'0x7edc38F3511F13100AdcC4c16Ba14eC475C00776','Won','Won',90700,'2022-10-06 08:58:26',117100,136,11000,'우파루파5'),(41,'0x01E04dfC7240B86D115Ed2C232953B0E71333290','Enimal','Enimal',400,'2022-10-06 08:32:26',68600,70,8800,'검은코뿔소3'),(44,'0x6F16B23002a40de643fc360CB16cd47f1722DD4d','HaengSong','HaengSong',102600,'2022-10-06 13:26:40',88400,95,17000,'안데스산고양이3'),(45,'0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF','현서','현서',900,'2022-10-06 13:27:38',100,1,0,'수달1'),(46,'0xe1AB8145F7E55DC933d51a18c793F901A3A0b276','Yellow','Yellow',500,'2022-10-06 14:10:18',0,0,6300,'lastPuzzle'),(47,'0x1efF47bc3a10a45D4B230B5d10E37751FE6AA718','Uwan','Uwan',44300,'2022-10-06 14:09:57',5700,31,6000,'양쯔강돌고래2'),(48,'0xd41c057fd1c78805AAC12B0A94a405c0461A6FBb','Jone','Jone',500,'2022-10-06 14:10:40',0,41,5800,'lastPuzzle'),(49,'0xE57bFE9F44b819898F47BF37E5AF72a0783e1141','James','James',500,'2022-10-06 14:10:30',0,79,5500,'lastPuzzle'),(50,'0x6813Eb9362372EEF6200f3b1dbC3f819671cBA69','Gang','Gang',500,'2022-10-06 14:08:30',0,38,5000,'lastPuzzle'),(51,'0xfaE394561e33e242c551d15D4625309EA4c0B97f','Cream','Cream',200,'2022-10-06 14:11:49',300,147,4000,'매7'),(52,'0xF7Edc8FA1eCc32967F827C9043FcAe6ba73afA5c','Bob','Bob',500,'2022-10-06 14:11:40',0,35,500,'lastPuzzle'),(53,'0xF1F6619B38A98d6De0800F1DefC0a6399eB6d30C','Alice','Alice',500,'2022-10-06 14:11:03',0,0,300,'lastPuzzle'),(54,'0x252Dae0A4b9d9b80F504F6418acd2d364C0c59cD','Dive','Dive',500,'2022-10-06 14:19:38',0,0,0,'lastPuzzle'),(55,'0x79196B90D1E952C5A43d4847CAA08d50b967c34A','Enoma','Enoma',500,'2022-10-06 14:19:48',0,97,0,'lastPuzzle'),(56,'0x4bd1280852Cadb002734647305AFC1db7ddD6Acb','Fitch','Fitch',500,'2022-10-06 14:19:58',0,0,0,'lastPuzzle'),(57,'0x811da72aCA31e56F770Fc33DF0e45fD08720E157','Handler','Handler',5000,'2022-10-06 14:20:08',0,70,0,'lastPuzzle'),(58,'0x157bFBEcd023fD6384daD2Bded5DAD7e27Bf92E4','Inseo','Inseo',100,'2022-10-06 14:20:20',400,92,0,'안데스산고양이1');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'j7c106'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 10:29:47
