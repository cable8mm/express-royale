/**
 * Created by monoless on 2015-12-01.
 */
var maxClasses = 2;  // 반 숫자
var classPerMan = 21;   // 성별당 최대 수

module.exports = {
    /*
     * ■ 장소
     * SU=발견증가 SD:발견감소 DU:방어증가 DD:방어감소 AU:공격증가 AD:공격감소
     */
    places: [
        {
            idx: 0,
            name: '분교',
            code: 'D-6',
            specialize: 'SU',
            message: '분교다. 곧 여기는 금지지역이 되겠구나.\n빨리 이동하지 않으면, 목걸이가 폭발하고 만다...'
        },
        {
            idx: 1,
            name: '북쪽갑',
            code: 'A-2',
            specialize: 'DD',
            message: '바다에는 배가 보인다. 탈출하려는 학생들을 감시하고 있는 정부의 배인가...'
        },
        {
            idx: 2,
            name: '북쪽 주택가',
            code: 'B-4',
            specialize: 'DU',
            message: '전에는 여기에서도 사람이 살고 있었겠지. 지금은 폐허로 변했구나.'
        },
        {
            idx: 3,
            name: '면사무소',
            code: 'C-3',
            specialize: 'SU',
            message: '여기가 마을의 중심인가. 지금으로서는 아무도 없는가...'
        },
        {
            idx: 4,
            name: '우체국',
            code: 'C-4',
            specialize: 'SD',
            message: '여기서는, 눈에 띄는 것이 없는데...'
        },
        {
            idx: 5,
            name: '소방서',
            code: 'C-5',
            specialize: 'SU',
            message: '소방서라곤 해도, 소방차조차 없구나.'
        },
        {
            idx: 6,
            name: '관음당',
            code: 'C-6',
            specialize: 'AU',
            message: '크고 작은 여러가지 불상이 모셔져 있구나. 밤에는 으시시하겠네.'
        },
        {
            idx: 7,
            name: '시미즈 연못',
            code: 'D-4',
            specialize: 'SU',
            message: '맑은 물이 가득 차 있구나.'
        },
        {
            idx: 8,
            name: '서쪽 신사',
            code: 'E-2',
            specialize: 'SD',
            message: '학문의 신들이 모셔져 있는거구나, 틀림없어.'
        },
        {
            idx: 9,
            name: '호텔 자리',
            code: 'E-4',
            specialize: 'AD',
            message: '이런 장소는 유령이 자주 나올까? 유령같은건 믿지 않지만.'
        },
        {
            idx: 10,
            name: '터널',
            code: 'E-7',
            specialize: 'DD',
            message: '깜깜하구나. 이런 곳에서 협공당하면 국물도 없겠군.'
        },
        {
            idx: 11,
            name: '서쪽 주택가',
            code: 'F-2',
            specialize: 'DU',
            message: '여기도, 다른 주택가와 같이, 모두 폐허로 변했구나...'
        },
        {
            idx: 12,
            name: '산악지대',
            code: 'F-5',
            specialize: 'SU',
            message: '이 섬을 한눈에 볼 수 있는 고지대다. 당연히 이곳에 서 있으면, 다른 곳에서도 날 발견할 가능성이 높을 것이다.'
        },
        {
            idx: 13,
            name: '절',
            code: 'F-8',
            specialize: 'SD',
            message: '모두 아주 황폐해져 있구나.'
        },
        {
            idx: 14,
            name: '학교',
            code: 'G-3',
            specialize: 'AD',
            message: '낮동안의 학교라는 건 좋은 것이지만, 밤의 학교라는 것은 좋은 것이 아니군.'
        },
        {
            idx: 15,
            name: '남쪽 신사',
            code: 'G-6',
            specialize: 'SD',
            message: '새집도 썩어서 형편없는 모습을 드러내고 있구나.'
        },
        {
            idx: 16,
            name: '삼림지대',
            code: 'H-4',
            specialize: 'SD',
            message: '나무들이 울창하게 자라 있구나. 풀숲에서 갑자기 습격하더라도 알아채지 못할거야...'
        },
        {
            idx: 17,
            name: '겐지로 연못',
            code: 'H-6',
            specialize: 'SD',
            message: '여기는 연못이라기보다도, 웅덩이구나. 정말 기분 나쁜 곳이야...'
        },
        {
            idx: 18,
            name: '남쪽 주택가',
            code: 'I-6',
            specialize: 'AU',
            message: '여기는, 다른 주택가보다, 가게가 많구나. 상점가인가 뭔가였겠지.'
        },
        {
            idx: 19,
            name: '요양소',
            code: 'I-7',
            specialize: 'SU',
            message: '황폐해져 있지만, 찾아보면 아직 사용할 수 있는 약 같은 것이 있을 것 같다...'
        },
        {
            idx: 20,
            name: '등대',
            code: 'I-10',
            specialize: 'DU',
            message: '요새로서 점거하면, 견고한 오새가 될듯한데. 바닥에는 말라붙은 혈흔이 많이 있구나. 무슨 일이 있었던거지?'
        },
        {
            idx: 21,
            name: '남쪽갑',
            code: 'J-6',
            specialize: 'SU',
            message: '병사의 배와... 우승자가 탈 배인가? 몇척의 배가 떠 있다.'
        }
    ],

    /*
     * ■ 반 번호
     */
    classes: [
        "3학년 A반",
        "3학년 B반",
        "3학년 C반",
        "3학년 D반",
        "3학년 E반",
        "3학년 F반",
        "3학년 G반",
        "3학년 H반",
        "3학년 I반",
        "3학년 J반"
    ],
    maxClasses: maxClasses,   // 반 숫자
    classPerMan: classPerMan,    // 성별당 최대수
    maxRecruitMember: maxClasses * classPerMan * 2,   // 최대등록인원수

    /*
     * ■ 레벨업 베이스 경험치 & 증가량
     */
    expPerLevel: 16,
    expIncrease: 4,

    /*
     * ■숙련도 요구치
     */
    expPerSkillLevel: 20,

    /*
     * ■프로그램 최저 개최일수
     * 이벤트·덫등으로 최후의 한명이 결정되더라도, 이 날짜 이하라면 게임이 속행됩니다.
     * 0으로 하면 1일.
     */
    minimumBattleTime: 2 * 86400000,

    /*
     * ■ 프로그램 접수마감일수
     */
    maxRecruitTime: 4 * 86400000,

    /*
     * 사망 후 가입 가능 시간
     */
    respawnTime: 7200000,

    /*
     * ■ 스테미너 최대치
     */
    maxStamina: 300,

    /*
     * ■ 응급처치 커맨드의 소비 스테미너
     */
    firstAidStamina: 30,

    /*
     * ■ 독 조사 커맨드의 소비 스테미너
     */
    detoxStamina: 10,

    /*
     * ■ 회복량의 설정
     */
    sleepTime: 30,  // 스테미너 회복시간(초) : 30초로 1포인트 회복
    healingRate: 3, // 체력회복비율 : 스테미너의 1/x (0으로 하지 말것)

    /*
     * ■ 아이콘 정의
     */
    icons: [
        {'path': '', 'name': '아이콘을 선택하여 주세요', gender: 'male'},
        {'path': './images/0.jpg', 'name': '남자 1번', gender: 'male'},
        {'path': './images/1.jpg', 'name': '남자 2번', gender: 'male'},
        {'path': './images/2.jpg', 'name': '남자 3번', gender: 'male'},
        {'path': './images/3.jpg', 'name': '남자 4번', gender: 'male'},
        {'path': './images/4.jpg', 'name': '남자 5번', gender: 'male'},
        {'path': './images/5.jpg', 'name': '남자 6번', gender: 'male'},
        {'path': './images/6.jpg', 'name': '남자 7번', gender: 'male'},
        {'path': './images/7.jpg', 'name': '남자 8번', gender: 'male'},
        {'path': './images/8.jpg', 'name': '남자 9번', gender: 'male'},
        {'path': './images/9.jpg', 'name': '남자 10번', gender: 'male'},
        {'path': './images/10.jpg', 'name': '남자 11번', gender: 'male'},
        {'path': './images/11.jpg', 'name': '남자 12번', gender: 'male'},
        {'path': './images/12.jpg', 'name': '남자 13번', gender: 'male'},
        {'path': './images/13.jpg', 'name': '남자 14번', gender: 'male'},
        {'path': './images/14.jpg', 'name': '남자 15번', gender: 'male'},
        {'path': './images/15.jpg', 'name': '남자 16번', gender: 'male'},
        {'path': './images/16.jpg', 'name': '남자 17번', gender: 'male'},
        {'path': './images/17.jpg', 'name': '남자 18번', gender: 'male'},
        {'path': './images/18.jpg', 'name': '남자 19번', gender: 'male'},
        {'path': './images/19.jpg', 'name': '남자 20번', gender: 'male'},
        {'path': './images/20.jpg', 'name': '남자 21번', gender: 'male'},
        {'path': './images/21.jpg', 'name': '여자 1번', gender: 'female'},
        {'path': './images/22.jpg', 'name': '여자 2번', gender: 'female'},
        {'path': './images/23.jpg', 'name': '여자 3번', gender: 'female'},
        {'path': './images/24.jpg', 'name': '여자 4번', gender: 'female'},
        {'path': './images/25.jpg', 'name': '여자 5번', gender: 'female'},
        {'path': './images/26.jpg', 'name': '여자 6번', gender: 'female'},
        {'path': './images/27.jpg', 'name': '여자 7번', gender: 'female'},
        {'path': './images/28.jpg', 'name': '여자 8번', gender: 'female'},
        {'path': './images/29.jpg', 'name': '여자 9번', gender: 'female'},
        {'path': './images/30.jpg', 'name': '여자 10번', gender: 'female'},
        {'path': './images/31.jpg', 'name': '여자 11번', gender: 'female'},
        {'path': './images/32.jpg', 'name': '여자 12번', gender: 'female'},
        {'path': './images/33.jpg', 'name': '여자 13번', gender: 'female'},
        {'path': './images/34.jpg', 'name': '여자 14번', gender: 'female'},
        {'path': './images/35.jpg', 'name': '여자 15번', gender: 'female'},
        {'path': './images/36.jpg', 'name': '여자 16번', gender: 'female'},
        {'path': './images/37.jpg', 'name': '여자 17번', gender: 'female'},
        {'path': './images/38.jpg', 'name': '여자 18번', gender: 'female'},
        {'path': './images/39.jpg', 'name': '여자 19번', gender: 'female'},
        {'path': './images/40.jpg', 'name': '여자 20번', gender: 'female'},
        {'path': './images/41.jpg', 'name': '여자 21번', gender: 'female'}
    ],

    /*
     * ■ 아이템 정의
     */
    items: {
        0: {
            name: '맨손', equip: false, type: ['fist'], attack: 0, ammo: 0, ammoRequire: false
        },
        1: {
            name: '석궁', equip: true, type: ['bow', 'melee'], attack: 20, ammo: 0, ammoRequire: true
        },
        2: {
            name: '식칼', equip: true, type: ['cut', 'poke'], attack: 15, ammo: 0, ammoRequire: false
        },
        3: {
            name: '손도끼', equip: true, type: ['cut'], attack: 17, ammo: 0, ammoRequire: false
        },
        4: {
            name: '레밍턴M31RS', equip: true, type: ['shot', 'melee'], attack: 28, ammo: 0, ammoRequire: true
        },
        5: {
            name: '나이프', equip: true, type: ['cut', 'poke'], attack: 17, ammo: 0, ammoRequire: false
        },
        6: {
            name: '단도', equip: true, type: ['cut', 'poke'], attack: 15, ammo: 0, ammoRequire: false
        },
        7: {
            name: '잉그램M10 서브머신건', equip: true, type: ['shot', 'melee'], attack: 30, ammo: 0, ammoRequire: true
        },
        8: {
            name: '포크', equip: true, type: ['poke'], attack: 7, ammo: 0, ammoRequire: false
        },
        9: {
            name: '금속 배트', equip: true, type: ['melee'], attack: 15, ammo: 0, ammoRequire: false
        },
        10: {
            name: '22구경 2연발 데린져', equip: true, type: ['shot', 'melee'], attack: 20, ammo: 0, ammoRequire: true
        },
        11: {
            name: '군용 나이프', equip: true, type: ['cut', 'poke', 'throw'], attack: 20, ammo: 1, ammoRequire: false
        },
        12: {
            name: '월터PPK 9밀리', equip: true, type: ['shot', 'melee'], attack: 25, ammo: 0, ammoRequire: true
        },
        13: {
            name: 'S&W M19 357 매그넘', equip: true, type: ['shot', 'melee'], attack: 26, ammo: 0, ammoRequire: true
        },
        14: {
            name: '베레타M92F', equip: true, type: ['shot', 'melee'], attack: 25, ammo: 0, ammoRequire: true
        },
        15: {
            name: 'S&W 치프스페셜 38구경', equip: true, type: ['shot', 'melee'], attack: 23, ammo: 0, ammoRequire: true
        },
        16: {
            name: '콜트357 매그넘 리볼버', equip: true, type: ['shot', 'melee'], attack: 27, ammo: 0, ammoRequire: true
        },
        17: {
            name: '양날 나이프', equip: true, type: ['cut', 'poke'], attack: 20, ammo: 0, ammoRequire: false
        },
        18: {
            name: '브라우닝 하이파워 9mm', equip: true, type: ['shot', 'melee'], attack: 26, ammo: 0, ammoRequire: true
        },
        19: {
            name: '다이버즈 나이프', equip: true, type: ['cut', 'poke'], attack: 20, ammo: 0, ammoRequire: false
        },
        20: {
            name: '다트', equip: true, type: ['throw'], attack: 5, ammo: 12, ammoRequire: false
        },
        21: {
            name: '수류탄', equip: true, type: ['bomb'], attack: 40, ammo: 2, ammoRequire: false
        },
        22: {
            name: 'S&W M59 오토', equip: true, type: ['shot', 'melee'], attack: 24, ammo: 0, ammoRequire: true
        },
        23: {
            name: '특수경봉', equip: true, type: ['melee'], attack: 13, ammo: 0, ammoRequire: false
        },
        24: {
            name: '콜트 하이웨이 패트롤맨 38구경', equip: true, type: ['shot', 'melee'], attack: 24, ammo: 0, ammoRequire: true
        },
        25: {
            name: '낫', equip: true, type: ['cut', 'poke'], attack: 20, ammo: 0, ammoRequire: false
        },
        26: {
            name: '얼음송곳', equip: true, type: ['poke'], attack: 8, ammo: 0, ammoRequire: false
        },
        27: {
            name: '눈쳐크', equip: true, type: ['melee'], attack: 12, ammo: 0, ammoRequire: false
        },
        28: {
            name: '부메랑', equip: true, type: ['throw'], attack: 9, ammo: 5, ammoRequire: false
        },
        29: {
            name: 'CZ M75', equip: true, type: ['shot', 'melee'], attack: 25, ammo: 0, ammoRequire: true
        },
        30: {
            name: '우지 9mm 서브머신건', equip: true, type: ['shot', 'melee'], attack: 30, ammo: 0, ammoRequire: true
        },
        31: {
            name: '시그 사우엘 P230 9mm', equip: true, type: ['shot', 'melee'], attack: 26, ammo: 0, ammoRequire: true
        },
        32: {
            name: '콜트 거버먼트 45구경', equip: true, type: ['shot', 'melee'], attack: 25, ammo: 0, ammoRequire: true
        },
        33: {
            name: '일본도', equip: true, type: ['cut', 'poke'], attack: 25, ammo: 0, ammoRequire: false
        },
        34: {
            name: '부채', equip: true, type: ['melee'], attack: 1, ammo: 0, ammoRequire: false
        },
        35: {
            name: '대야', equip: true, type: ['melee'], attack: 3, ammo: 0, ammoRequire: false
        },
        36: {
            name: '슬리퍼', equip: true, type: ['melee'], attack: 2, ammo: 0, ammoRequire: false
        },
        37: {
            name: '칠판지우개', equip: true, type: ['throw'], attack: 2, ammo: 1, ammoRequire: false
        },
        38: {
            name: '분필', equip: true, type: ['throw'], attack: 1, ammo: 1, ammoRequire: false
        },
        39: {
            name: '배트', equip: true, type: ['melee'], attack: 12, ammo: 0, ammoRequire: false
        },
        40: {
            name: '너클', equip: true, type: ['fist'], attack: 8, ammo: 0, ammoRequire: false
        },
        41: {
            name: '뿅망치', equip: true, type: ['melee'], attack: 1, ammo: 0, ammoRequire: false
        }
    }
};
/*
 #탄 또는 화살 지급
 if ($w_wep =~ /     ,    G/) { #?
 $item[3] = "탄환<>Y"; $eff[3] = 24; $itai[3] = 1;
 $item[4] = $st_item; $eff[4] = $st_eff; $itai[4] = $st_tai;
 } elsif ($w_wep =~ /     ,    A/) {    #矢
 $item[3] = "화살<>Y"; $eff[3] = 24; $itai[3] = 1;
 $item[4] = $st_item; $eff[4] = $st_eff; $itai[4] = $st_tai;
 } else {
 $item[3] = $st_item; $eff[3] = $st_eff; $itai[3] = $st_tai;
 }

 $w_wep,$w_att,$w_tai)

 N - 참살 / 베기
 A - 사살 / 활
 G - 총살 / 총
 C - 살해 / 던지기
 D - 폭살 / 폭탄
 S - 척살 / 찌르기
 B - 박살 // 때리기 - 곤봉 or 탄 없는 총 / 화살 없는 활
 P - 맨손
 - 살해




 방탄조끼<>ADB,5,10,
 독약<>Y,1,5,
 샤미센 줄<>Y,1,∞,
 간이레이더<>R1,1,∞,


 화염병<>WD<>15<>1");
 폭탄<>WD<>60<>3");
 간이화염방사기<>WD<>10<>8");
 사슬낫<>WBN<>22<>∞");
 못박은배트<>WB<>20<>∞");
 못박은대나무<>WB<>13<>∞");
 돌도끼<>WB<>15<>∞");
 커스텀나이프<>WNS<>20<>∞");
 쇠뇌<>WAB<>25<>0");
 대나무창<>WS<>20<>∞");
 언월도<>WS<>40<>∞");
 쌍칼<>WS<>35<>∞
 1,다이나마이트<>WD,30,8,
 2,돌멩이<>WC,15,5,
 2,식칼<>WN,5,20,
 2,컵<>WC,10,4,
 2,야구공세트<>WC,20,30,
 2,접시<>WC,10,4,
 2,텔레비젼<>WC,20,1,
 2,테이블<>WC,20,1,
 2,선반<>WC,15,1,
 2,보검<>WNS,20,∞,
 2,빈병<>WC,1,10,
 2,빈캔<>WC,2,10,
 2,유리잔<>WC,10,4,
 2,냄비<>WC,10,4,
 2,쇠사슬<>WB,15,∞,
 2,후라이팬<>WB,15,∞,
 5,소방용도끼<>WN,20,∞,
 5,소화기<>WB,12,∞,
 6,관음보살상<>WB,5,∞,
 6,염라대왕상<>WB,7,∞,
 6,아수라상<>WB,10,∞,
 6,지장보살상<>WB,8,∞,
 8,양궁<>WAB,20,0,
 12,곡괭이<>WS,15,∞,
 12,스카프<>WSB,10,∞,
 12,샤벨<>WSB,5,∞,
 12,암석<>WC,20,8,
 13,목탁<>WC,1,1,
 13,솔도파<>WB,4,1,

 14,연필<>WS,2,∞,
 14,지우개<>WC,1,1,
 14,플라스크<>WC,3,1,
 14,대걸레<>WB,8,1,
 14,칠판지우개<>WC,2,1,
 14,흰분필<>WC,2,1,
 14,빨간분필<>WC,2,1,
 14,노란분필<>WC,2,1,
 14,파란분필<>WC,2,1,
 14,인체모형<>WB,3,∞,
 14,거대삼각자<>WB,4,∞,
 14,거대콤파스<>WB,4,∞,
 14,의자<>WB,4,∞,
 14,소화기<>WB,12,∞,
 15,대나무<>WB,6,1,
 16,목검<>WNS,12,∞,
 16,대나무<>WB,6,1,
 99,화승총<>WGB,20,0,
 99,명도마사무네<>WNS,23,∞,
 99,요도무라마사<>WNS,23,∞,
 99,일본궁<>WAB,18,0,
 99,보검<>WNS,20,∞,
 99,전기인두<>WS,6,∞,
 99,고장난노트북<>WC,10,1,
 99,수리검<>WC,30,15,
 99,헤비크로스보우<>WAB,30,0,
 */