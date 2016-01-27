/**
 * Created by monoless on 2016-01-14.
 */
var itemPlugin = require('../support/itemPlugin');

module.exports = {
    /*
     * ■ 아이템 정의
     */
    items: {
        // -- weapon
        weaponDefault: {
            id: 'weaponDefault',
            equip: 'weapon', name: '맨손', attackType: ['fist'], ammoRequire: false
        },
        weapon1: {
            id: 'weapon1',
            equip: 'weapon',
            name: '석궁',
            attackType: ['bow', 'melee'],
            ammoRequire: true,
            ammoReload: 1,
            ammoType: 'bow'
        },
        weapon2: {
            id: 'weapon2', equip: 'weapon', name: '식칼', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon3: {
            id: 'weapon3',
            equip: 'weapon', name: '손도끼', attackType: ['cut'], ammoRequire: false
        },
        weapon4: {
            id: 'weapon4',
            equip: 'weapon', name: '레밍턴 M31RS 샷건',
            attackType: ['shot', 'melee'],
            ammoRequire: true,
            ammoReload: 5,
            ammoType: '12gauge'
        },
        weapon5: {
            id: 'weapon5',
            equip: 'weapon', name: '나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon6: {
            id: 'weapon6',
            equip: 'weapon', name: '단도', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon7: {
            id: 'weapon7',
            equip: 'weapon', name: '잉그램 M10 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 32,
            ammoType: '9mm'
        },
        weapon8: {
            id: 'weapon8',
            equip: 'weapon', name: '포크', attackType: ['poke'], ammoRequire: false
        },
        weapon9: {
            id: 'weapon9',
            equip: 'weapon', name: '금속 배트', attackType: ['melee'], ammoRequire: false
        },
        weapon10: {
            id: 'weapon10',
            equip: 'weapon',
            name: '22구경 2연발 데린져',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 2,
            ammoType: '22lr'
        },
        weapon11: {
            id: 'weapon11',
            equip: 'weapon',
            name: '군용 나이프', attackType: ['cut', 'poke', 'throw'], ammoRequire: false
        },
        weapon12: {
            id: 'weapon12',
            equip: 'weapon',
            name: '월터 PPK 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 8,
            ammoType: '9mm'
        },
        weapon13: {
            id: 'weapon13',
            equip: 'weapon',
            name: 'S&W M19 357 매그넘',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 6,
            ammoType: '357mag'
        },
        weapon14: {
            id: 'weapon14',
            equip: 'weapon',
            name: '베레타 M92F 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 14,
            ammoType: '9mm'
        },
        weapon15: {
            id: 'weapon15',
            equip: 'weapon',
            name: 'S&W 치프스페셜 38구경',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 5,
            ammoType: '38special'
        },
        weapon16: {
            id: 'weapon16',
            equip: 'weapon',
            name: '콜트357 매그넘 리볼버',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 6,
            ammoType: '357mag'
        },
        weapon17: {
            id: 'weapon17',
            equip: 'weapon',
            name: '양날 나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon18: {
            id: 'weapon18',
            equip: 'weapon',
            name: '브라우닝 하이파워 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 14,
            ammoType: '9mm'
        },
        weapon19: {
            id: 'weapon19',
            equip: 'weapon',
            name: '다이버즈 나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon20: {
            id: 'weapon20',
            equip: 'weapon',
            name: '다트', attackType: ['throw'], ammoRequire: false
        },
        weapon21: {
            id: 'weapon21',
            equip: 'weapon',
            name: '수류탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon22: {
            id: 'weapon22',
            equip: 'weapon',
            name: 'S&W M59 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 15,
            ammoType: '9mm'
        },
        weapon23: {
            id: 'weapon23',
            equip: 'weapon',
            name: '특수경봉', attackType: ['melee'], ammoRequire: false
        },
        weapon24: {
            id: 'weapon24',
            equip: 'weapon',
            name: '콜트 H.P 38구경',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 6,
            ammoType: '38special'
        },
        weapon25: {
            id: 'weapon25',
            equip: 'weapon',
            name: '낫', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon26: {
            id: 'weapon26',
            equip: 'weapon',
            name: '얼음송곳', attackType: ['poke'], ammoRequire: false
        },
        weapon27: {
            id: 'weapon27',
            equip: 'weapon',
            name: '눈쳐크', attackType: ['melee'], ammoRequire: false
        },
        weapon28: {
            id: 'weapon28',
            equip: 'weapon',
            name: '부메랑', attackType: ['throw'], ammoRequire: false
        },
        weapon29: {
            id: 'weapon29',
            equip: 'weapon',
            name: 'CZ M75 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 16,
            ammoType: '9mm'
        },
        weapon30: {
            id: 'weapon30',
            equip: 'weapon',
            name: '우지 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 32,
            ammoType: '9mm'
        },
        weapon31: {
            id: 'weapon31',
            equip: 'weapon',
            name: '시그 사우엘 P230 9mm',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 8,
            ammoType: '9mm'
        },
        weapon32: {
            id: 'weapon32',
            equip: 'weapon',
            name: 'M1911 .45',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 8,
            ammoType: '45acp'
        },
        weapon33: {
            id: 'weapon33',
            equip: 'weapon',
            name: '일본도', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon34: {
            id: 'weapon34',
            equip: 'weapon',
            name: '부채', attackType: ['melee'], ammoRequire: false
        },
        weapon35: {
            id: 'weapon35',
            equip: 'weapon',
            name: '대야', attackType: ['melee'], ammoRequire: false
        },
        weapon36: {
            id: 'weapon36',
            equip: 'weapon',
            name: '슬리퍼', attackType: ['melee'], ammoRequire: false
        },
        weapon37: {
            id: 'weapon37',
            equip: 'weapon',
            name: '칠판지우개', attackType: ['throw'], ammoRequire: false
        },
        weapon38: {
            id: 'weapon38',
            equip: 'weapon',
            name: '분필', attackType: ['throw'], ammoRequire: false
        },
        weapon39: {
            id: 'weapon39',
            equip: 'weapon',
            name: '배트', attackType: ['melee'], ammoRequire: false
        },
        weapon40: {
            id: 'weapon40',
            equip: 'weapon',
            name: '너클', attackType: ['fist'], ammoRequire: false
        },
        weapon41: {
            id: 'weapon41',
            equip: 'weapon',
            name: '뿅망치', attackType: ['melee'], ammoRequire: false
        },
        weapon42: {
            id: 'weapon42',
            equip: 'weapon',
            name: '화염병', attackType: ['bomb'], ammoRequire: false,
            gasoline: true
        },
        weapon43: {
            id: 'weapon43',
            equip: 'weapon',
            name: '폭탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon44: {
            id: 'weapon44',
            equip: 'weapon',
            name: '간이화염방사기', attackType: ['bomb'], ammoRequire: false,
            gasoline: true
        },
        weapon45: {
            id: 'weapon45',
            equip: 'weapon',
            name: '사슬낫', attackType: ['cut', 'melee'], ammoRequire: false
        },
        weapon46: {
            id: 'weapon46',
            equip: 'weapon',
            name: '못박은배트', attackType: ['melee'], ammoRequire: false
        },
        weapon47: {
            id: 'weapon47',
            equip: 'weapon',
            name: '못박은대나무', attackType: ['melee'], ammoRequire: false
        },
        weapon48: {
            id: 'weapon48',
            equip: 'weapon',
            name: '돌도끼', attackType: ['melee'], ammoRequire: false
        },
        weapon49: {
            id: 'weapon49',
            equip: 'weapon',
            name: '커스텀나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon50: {
            id: 'weapon50',
            equip: 'weapon',
            name: '쇠뇌',
            attackType: ['bow', 'melee'], ammoRequire: true,
            ammoReload: 1,
            ammoType: 'bow'
        },
        weapon51: {
            id: 'weapon51',
            equip: 'weapon',
            name: '죽창', attackType: ['poke'], ammoRequire: false
        },
        weapon52: {
            id: 'weapon52',
            equip: 'weapon',
            name: '언월도', attackType: ['poke'], ammoRequire: false
        },
        weapon53: {
            id: 'weapon53',
            equip: 'weapon',
            name: '쌍칼', attackType: ['poke'], ammoRequire: false
        },
        weapon54: {
            id: 'weapon54',
            equip: 'weapon',
            name: '다이나마이트', attackType: ['bomb'], ammoRequire: false
        },
        weapon55: {
            id: 'weapon55',
            equip: 'weapon',
            name: '돌멩이', attackType: ['throw'], ammoRequire: false
        },
        weapon56: {
            id: 'weapon56',
            equip: 'weapon',
            name: '컵', attackType: ['throw'], ammoRequire: false
        },
        weapon57: {
            id: 'weapon57',
            equip: 'weapon',
            name: '야구공세트', attackType: ['throw'], ammoRequire: false
        },
        weapon58: {
            id: 'weapon58',
            equip: 'weapon',
            name: '접시', attackType: ['throw'], ammoRequire: false
        },
        weapon59: {
            id: 'weapon59',
            equip: 'weapon',
            name: '텔레비젼', attackType: ['throw'], ammoRequire: false
        },
        weapon60: {
            id: 'weapon60',
            equip: 'weapon',
            name: '테이블', attackType: ['throw'], ammoRequire: false
        },
        weapon61: {
            id: 'weapon61',
            equip: 'weapon',
            name: '선반', attackType: ['throw'], ammoRequire: false
        },
        weapon62: {
            id: 'weapon62',
            equip: 'weapon',
            name: '보검', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon63: {
            id: 'weapon63',
            equip: 'weapon',
            name: '빈병', attackType: ['throw'], ammoRequire: false
        },
        weapon64: {
            id: 'weapon64',
            equip: 'weapon',
            name: '빈캔', attackType: ['throw'], ammoRequire: false
        },
        weapon65: {
            id: 'weapon65',
            equip: 'weapon',
            name: '유리잔', attackType: ['throw'], ammoRequire: false
        },
        weapon66: {
            id: 'weapon66',
            equip: 'weapon',
            name: '냄비', attackType: ['throw'], ammoRequire: false
        },
        weapon67: {
            id: 'weapon67',
            equip: 'weapon',
            name: '쇠사슬', attackType: ['melee'], ammoRequire: false
        },
        weapon68: {
            id: 'weapon68',
            equip: 'weapon',
            name: '후라이팬', attackType: ['melee'], ammoRequire: false
        },
        weapon69: {
            id: 'weapon69',
            equip: 'weapon',
            name: '소방용도끼', attackType: ['cut'], ammoRequire: false
        },
        weapon70: {
            id: 'weapon70',
            equip: 'weapon',
            name: '소화기', attackType: ['melee'], ammoRequire: false
        },
        weapon71: {
            id: 'weapon71',
            equip: 'weapon',
            name: '관음보살상', attackType: ['melee'], ammoRequire: false
        },
        weapon72: {
            id: 'weapon72',
            equip: 'weapon',
            name: '염라대왕상', attackType: ['melee'], ammoRequire: false
        },
        weapon73: {
            id: 'weapon73',
            equip: 'weapon',
            name: '아수라상', attackType: ['melee'], ammoRequire: false
        },
        weapon74: {
            id: 'weapon74',
            equip: 'weapon',
            name: '지장보살상', attackType: ['melee'], ammoRequire: false
        },
        weapon75: {
            id: 'weapon75',
            equip: 'weapon',
            name: '양궁',
            attackType: ['bow', 'melee'], ammoRequire: true,
            ammoReload: 1,
            ammoType: 'bow'
        },
        weapon76: {
            id: 'weapon76',
            equip: 'weapon',
            name: '곡괭이', attackType: ['poke'], ammoRequire: false
        },
        weapon77: {
            id: 'weapon77',
            equip: 'weapon',
            name: '스카프', attackType: ['poke', 'melee'], ammoRequire: false
        },
        weapon78: {
            id: 'weapon78',
            equip: 'weapon',
            name: '샤벨', attackType: ['poke', 'melee'], ammoRequire: false
        },
        weapon79: {
            id: 'weapon79',
            equip: 'weapon',
            name: '암석', attackType: ['throw'], ammoRequire: false
        },
        weapon80: {
            id: 'weapon80',
            equip: 'weapon',
            name: '목탁', attackType: ['throw'], ammoRequire: false
        },
        weapon81: {
            id: 'weapon81',
            equip: 'weapon',
            name: '솔도파', attackType: ['melee'], ammoRequire: false
        },
        weapon82: {
            id: 'weapon82',
            equip: 'weapon',
            name: '연필', attackType: ['poke'], ammoRequire: false
        },
        weapon83: {
            id: 'weapon83',
            equip: 'weapon',
            name: '지우개', attackType: ['throw'], ammoRequire: false
        },
        weapon84: {
            id: 'weapon84',
            equip: 'weapon',
            name: '플라스크', attackType: ['throw'], ammoRequire: false
        },
        weapon85: {
            id: 'weapon85',
            equip: 'weapon',
            name: '대걸레', attackType: ['melee'], ammoRequire: false
        },
        weapon87: {
            id: 'weapon87',
            equip: 'weapon',
            name: '흰분필', attackType: ['throw'], ammoRequire: false
        },
        weapon88: {
            id: 'weapon88',
            equip: 'weapon',
            name: '빨간분필', attackType: ['throw'], ammoRequire: false
        },
        weapon89: {
            id: 'weapon89',
            equip: 'weapon',
            name: '노란분필', attackType: ['throw'], ammoRequire: false
        },
        weapon90: {
            id: 'weapon90',
            equip: 'weapon',
            name: '파란분필', attackType: ['throw'], ammoRequire: false
        },
        weapon91: {
            id: 'weapon91',
            equip: 'weapon',
            name: '인체모형', attackType: ['melee'], ammoRequire: false
        },
        weapon92: {
            id: 'weapon92',
            equip: 'weapon',
            name: '거대삼각자', attackType: ['melee'], ammoRequire: false
        },
        weapon93: {
            id: 'weapon93',
            equip: 'weapon',
            name: '거대콤파스', attackType: ['melee'], ammoRequire: false
        },
        weapon94: {
            id: 'weapon94',
            equip: 'weapon',
            name: '의자', attackType: ['melee'], ammoRequire: false
        },
        weapon96: {
            id: 'weapon96',
            equip: 'weapon',
            name: '대나무', attackType: ['melee'], ammoRequire: false
        },
        weapon97: {
            id: 'weapon97',
            equip: 'weapon',
            name: '목검', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon98: {
            id: 'weapon98',
            equip: 'weapon',
            name: '화승총',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 1,
            ammoType: 'apostle'
        },
        weapon99: {
            id: 'weapon99',
            equip: 'weapon',
            name: '명도마사무네', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon100: {
            id: 'weapon100',
            equip: 'weapon',
            name: '일본궁',
            attackType: ['bow', 'melee'], ammoRequire: true,
            ammoReload: 1,
            ammoType: 'bow'
        },
        weapon102: {
            id: 'weapon102',
            equip: 'weapon',
            name: '전기인두', attackType: ['poke'], ammoRequire: false
        },
        weapon103: {
            id: 'weapon103',
            equip: 'weapon',
            name: '고장난노트북', attackType: ['throw'], ammoRequire: false
        },
        weapon104: {
            id: 'weapon104',
            equip: 'weapon',
            name: '수리검', attackType: ['throw'], ammoRequire: false
        },
        weapon105: {
            id: 'weapon105',
            equip: 'weapon',
            name: '헤비크로스보우',
            attackType: ['bow', 'melee'], ammoRequire: true,
            ammoReload: 1,
            ammoType: 'bow'
        },
        weapon106: {
            id: 'weapon106',
            equip: 'weapon',
            name: '면도칼', attackType: ['cut'], ammoRequire: false
        },
        weapon107: {
            id: 'weapon107',
            equip: 'weapon',
            name: '버터플라이나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon108: {
            id: 'weapon108',
            equip: 'weapon',
            name: '화투', attackType: ['throw'], ammoRequire: false
        },
        weapon109: {
            id: 'weapon109',
            equip: 'weapon',
            name: '트럼프카드', attackType: ['throw'], ammoRequire: false
        },
        weapon110: {
            id: 'weapon110',
            equip: 'weapon',
            name: '휴대용게임기', attackType: ['melee'], ammoRequire: false
        },
        weapon111: {
            id: 'weapon111',
            equip: 'weapon',
            name: '비누', attackType: ['melee'], ammoRequire: false
        },
        weapon112: {
            id: 'weapon112',
            equip: 'weapon',
            name: '칫솔', attackType: ['melee'], ammoRequire: false
        },
        weapon113: {
            id: 'weapon113',
            equip: 'weapon',
            name: '요도마사무네', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon114: {
            id: 'weapon114',
            equip: 'weapon',
            name: '요도무라마사', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon115: {
            id: 'weapon115',
            equip: 'weapon',
            name: 'M16A2',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 30,
            ammoType: '5.56mm'
        },
        weapon116: {
            id: 'weapon116',
            equip: 'weapon',
            name: '안경테', attackType: ['poke'], ammoRequire: false
        },
        weapon117: {
            id: 'weapon117',
            equip: 'weapon',
            name: '유리알', attackType: ['throw'], ammoRequire: false
        },
        weapon118: {
            id: 'weapon118',
            equip: 'weapon',
            name: '던지기용 단도', attackType: ['throw'], ammoRequire: false
        },
        weapon119: {
            id: 'weapon119',
            equip: 'weapon',
            name: '콩알탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon120: {
            id: 'weapon120',
            equip: 'weapon',
            name: '동의보감', attackType: ['throw'], ammoRequire: false
        },
        weapon121: {
            id: 'weapon121',
            equip: 'weapon',
            name: '지포라이터', attackType: ['fist'], ammoRequire: false
        },
        weapon122: {
            id: 'weapon122',
            equip: 'weapon',
            name: '4면체 주사위', attackType: ['throw'], ammoRequire: false
        },
        weapon123: {
            id: 'weapon123',
            equip: 'weapon',
            name: '6면체 주사위', attackType: ['throw'], ammoRequire: false
        },
        weapon124: {
            id: 'weapon124',
            equip: 'weapon',
            name: '8면체 주사위', attackType: ['throw'], ammoRequire: false
        },
        weapon125: {
            id: 'weapon125',
            equip: 'weapon',
            name: '12면체 주사위', attackType: ['throw'], ammoRequire: false
        },
        weapon126: {
            id: 'weapon126',
            equip: 'weapon',
            name: '20면체 주사위', attackType: ['throw'], ammoRequire: false
        },
        weapon127: {
            id: 'weapon127',
            equip: 'weapon',
            name: '커터칼', attackType: ['cut'], ammoRequire: false
        },
        weapon128: {
            id: 'weapon128',
            equip: 'weapon',
            name: '재떨이', attackType: ['throw'], ammoRequire: false
        },
        weapon129: {
            id: 'weapon129',
            equip: 'weapon',
            name: '고무줄', attackType: ['throw'], ammoRequire: false
        },
        weapon130: {
            id: 'weapon130',
            equip: 'weapon',
            name: '동전', attackType: ['throw'], ammoRequire: false
        },
        weapon131: {
            id: 'weapon131',
            equip: 'weapon',
            name: '꽃', attackType: ['throw'], ammoRequire: false
        },
        weapon132: {
            id: 'weapon132',
            equip: 'weapon',
            name: '주머니칼', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon133: {
            id: 'weapon133',
            equip: 'weapon',
            name: '권투글러브', attackType: ['fist'], ammoRequire: false
        },
        weapon134: {
            id: 'weapon134',
            equip: 'weapon',
            name: '가죽장갑', attackType: ['fist'], ammoRequire: false
        },
        weapon135: {
            id: 'weapon135',
            equip: 'weapon',
            name: '장도리깨', attackType: ['melee'], ammoRequire: false
        },
        weapon136: {
            id: 'weapon136',
            equip: 'weapon',
            name: '공기총',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 1000,
            ammoType: 'lead'
        },
        weapon137: {
            id: 'weapon137',
            equip: 'weapon',
            name: '패트병', attackType: ['melee'], ammoRequire: false
        },
        weapon138: {
            id: 'weapon138',
            equip: 'weapon',
            name: '마이크', attackType: ['melee'], ammoRequire: false
        },
        weapon139: {
            id: 'weapon139',
            equip: 'weapon',
            name: '바늘', attackType: ['poke'], ammoRequire: false
        },
        weapon140: {
            id: 'weapon140',
            equip: 'weapon',
            name: '베레타 PX4 (45ACP)',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 11,
            ammoType: '45acp'
        },
        weapon141: {
            id: 'weapon141',
            equip: 'weapon',
            name: '쇠공', attackType: ['throw'], ammoRequire: false
        },
        weapon142: {
            id: 'weapon142',
            equip: 'weapon',
            name: '리볼버 MkII (38SP)',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 6,
            ammoType: '38special'
        },
        weapon143: {
            id: 'weapon143',
            equip: 'weapon',
            name: '리볼버 MkI (38SP)',
            attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 6,
            ammoType: '38special'
        },
        weapon144: {
            id: 'weapon144',
            equip: 'weapon',
            name: '전화번호부', attackType: ['melee', 'throw'], ammoRequire: false
        },
        weapon145: {
            id: 'weapon145',
            equip: 'weapon',
            name: '숟갈', attackType: ['melee', 'throw'], ammoRequire: false
        },
        weapon146: {
            id: 'weapon146',
            equip: 'weapon',
            name: 'CD', attackType: ['throw'], ammoRequire: false
        },
        weapon147: {
            id: 'weapon147',
            equip: 'weapon',
            name: '대털1권', attackType: ['throw'], ammoRequire: false
        },
        weapon148: {
            id: 'weapon148',
            equip: 'weapon',
            name: '대털2권', attackType: ['throw'], ammoRequire: false
        },
        weapon149: {
            id: 'weapon149',
            equip: 'weapon',
            name: '럭키짱1부1권', attackType: ['throw'], ammoRequire: false
        },
        weapon150: {
            id: 'weapon150',
            equip: 'weapon',
            name: '문희준2집', attackType: ['throw'], ammoRequire: false
        },
        weapon151: {
            id: 'weapon151',
            equip: 'weapon',
            name: '옷핀', attackType: ['poke'], ammoRequire: false
        },
        weapon152: {
            id: 'weapon152',
            equip: 'weapon',
            name: '염주알', attackType: ['throw'], ammoRequire: false
        },
        weapon153: {
            id: 'weapon153',
            equip: 'weapon',
            name: '럭키짱1부2권', attackType: ['throw'], ammoRequire: false
        },
        weapon154: {
            id: 'weapon154',
            equip: 'weapon',
            name: '목장갑', attackType: ['fist'], ammoRequire: false
        },
        weapon155: {
            id: 'weapon155',
            equip: 'weapon',
            name: '문희준3집', attackType: ['throw'], ammoRequire: false
        },
        weapon156: {
            id: 'weapon154',
            equip: 'weapon',
            name: '파이터 장갑', attackType: ['fist'], ammoRequire: false
        },
        weapon157: {
            id: 'weapon157',
            equip: 'weapon',
            name: '붕어', attackType: ['throw'], ammoRequire: false
        },
        weapon158: {
            id: 'weapon158',
            equip: 'weapon',
            name: '미꾸라지', attackType: ['throw'], ammoRequire: false
        },
        weapon159: {
            id: 'weapon159',
            equip: 'weapon',
            name: '거북', attackType: ['throw'], ammoRequire: false
        },
        weapon160: {
            id: 'weapon160',
            equip: 'weapon',
            name: '암즈', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon161: {
            id: 'weapon161',
            equip: 'weapon',
            name: '뜨거운 물', attackType: ['throw'], ammoRequire: false
        },
        weapon162: {
            id: 'weapon162',
            equip: 'weapon',
            name: '폭죽발사기', attackType: ['bomb'], ammoRequire: false
        },
        weapon163: {
            id: 'weapon163',
            equip: 'weapon',
            name: '아킴보 리볼버 (38SP)', attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 6,
            ammoType: '38special'
        },
        weapon164: {
            id: 'weapon164',
            equip: 'weapon',
            name: '대나무 채', attackType: ['throw'], ammoRequire: false
        },
        weapon165: {
            id: 'weapon165',
            equip: 'weapon',
            name: '달궈진 숫돌', attackType: ['throw'], ammoRequire: false
        },
        weapon166: {
            id: 'weapon166',
            equip: 'weapon',
            name: '사용가능 암즈', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon167: {
            id: 'weapon167',
            equip: 'weapon',
            name: '저격 크로스보우', attackType: ['shot', 'melee'], ammoRequire: true,
            ammoReload: 1,
            ammoType: 'bow'
        },
        weapon168: {
            id: 'weapon168',
            equip: 'weapon',
            name: '압축본드공', attackType: ['throw'], ammoRequire: false
        },
        weapon169: {
            id: 'weapon169',
            equip: 'weapon',
            name: '날카로운 검심', attackType: ['cut'], ammoRequire: false
        },
        weapon170: {
            id: 'weapon170',
            equip: 'weapon',
            name: '방전되는 배터리', attackType: ['throw'], ammoRequire: false
        },
        weapon171: {
            id: 'weapon171',
            equip: 'weapon',
            name: '폭염병', attackType: ['bomb'], ammoRequire: false,
            gasoline: true
        },
        weapon172: {
            id: 'weapon172',
            equip: 'weapon',
            name: '간이폭발물', attackType: ['bomb'], ammoRequire: false
        },
        weapon173: {
            id: 'weapon173',
            equip: 'weapon',
            name: '챠크람', attackType: ['throw'], ammoRequire: false
        },
        weapon174: {
            id: 'weapon174',
            equip: 'weapon',
            name: '챠크람', attackType: ['throw'], ammoRequire: false
        },
        weapon175: {
            id: 'weapon175',
            equip: 'weapon',
            name: '딱딱해진 거북시체', attackType: ['throw'], ammoRequire: false
        },
        weapon176: {
            id: 'weapon176',
            equip: 'weapon',
            name: '독침', attackType: ['throw'], ammoRequire: false
        },
        weapon177: {
            id: 'weapon177',
            equip: 'weapon',
            name: '마비침', attackType: ['throw'], ammoRequire: false,
            specialize: ['paralysis']
        },
        weapon178: {
            id: 'weapon178',
            equip: 'weapon',
            name: '화염분사기', attackType: ['bomb'], ammoRequire: false,
            gasoline: true
        },
        weapon179: {
            id: 'weapon179',
            equip: 'weapon',
            name: '네이팜탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon180: {
            id: 'weapon180',
            equip: 'weapon',
            name: '타이타닉', attackType: ['bomb'], ammoRequire: false
        },
        weapon181: {
            id: 'weapon181',
            equip: 'weapon',
            name: '소형폭탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon182: {
            id: 'weapon182',
            equip: 'weapon',
            name: '기화폭탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon183: {
            id: 'weapon183',
            equip: 'weapon',
            name: '원자폭탄', attackType: ['bomb'], ammoRequire: false
        },
        weapon184: {
            id: 'weapon184',
            equip: 'weapon',
            name: '유리너클', attackType: ['fist'], ammoRequire: false
        },
        weapon185: {
            id: 'weapon185',
            equip: 'weapon',
            name: '크고 딱딱한 부채', attackType: ['melee'], ammoRequire: false
        },
        weapon186: {
            id: 'weapon186',
            equip: 'weapon',
            name: '녹슨 커터칼', attackType: ['cut'], ammoRequire: false
        },
        weapon187: {
            id: 'weapon187',
            equip: 'weapon',
            name: '녹슨 면도칼', attackType: ['cut'], ammoRequire: false
        },
        weapon188: {
            id: 'weapon188',
            equip: 'weapon',
            name: '날이 선 식칼', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon189: {
            id: 'weapon189',
            equip: 'weapon',
            name: '요마명도', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon190: {
            id: 'weapon190',
            equip: 'weapon',
            name: '날카로운연필', attackType: ['poke'], ammoRequire: false
        },
        weapon191: {
            id: 'weapon191',
            equip: 'weapon',
            name: '사슬 나이프', attackType: ['throw', 'poke'], ammoRequire: false
        },
        weapon192: {
            id: 'weapon192',
            equip: 'weapon',
            name: '도끼 사슬', attackType: ['throw', 'cut', 'poke'], ammoRequire: false
        },
        weapon193: {
            id: 'weapon193',
            equip: 'weapon',
            name: '장도리깨 날사슬', attackType: ['throw', 'cut', 'poke'], ammoRequire: false
        },
        weapon194: {
            id: 'weapon194',
            equip: 'weapon',
            name: '강화나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon195: {
            id: 'weapon195',
            equip: 'weapon',
            name: '녹슨 강화나이프', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon196: {
            id: 'weapon196',
            equip: 'weapon',
            name: '망가진 검', attackType: ['cut', 'poke'], ammoRequire: false
        },
        weapon197: {
            id: 'weapon197',
            equip: 'weapon',
            name: '핀셋', attackType: ['poke'], ammoRequire: false
        },
        weapon198: {
            id: 'weapon198',
            equip: 'weapon',
            name: '징박은 가죽장갑', attackType: ['fist'], ammoRequire: false
        },
        weapon199: {
            id: 'weapon199',
            equip: 'weapon',
            name: '강화 너클', attackType: ['fist'], ammoRequire: false
        },
        weapon200: {
            id: 'weapon200',
            equip: 'weapon',
            name: '더블 라이터', attackType: ['fist'], ammoRequire: false
        },
        weapon201: {
            id: 'weapon201',
            equip: 'weapon',
            name: '피묻은장갑', attackType: ['fist'], ammoRequire: false
        },
        weapon202: {
            id: 'weapon202',
            equip: 'weapon',
            name: '도끼 사슬', attackType: ['throw', 'cut'], ammoRequire: false
        },
        weapon203: {
            id: 'weapon203',
            equip: 'weapon',
            name: '물에 젖은 잡지', attackType: ['melee'], ammoRequire: false
        },
        weapon204: {
            id: 'weapon204',
            equip: 'weapon',
            name: '물에 젖은 두꺼운책', attackType: ['melee'], ammoRequire: false
        },


        // -- armor
        armorDefault: {
            id: 'armorDefault',
            equip: 'armor',
            name: '속옷',
            type: 'body',
            material: 'fabric'
        },
        armor0: {id: 'armor0', equip: 'armor', name: '목걸이', type: 'head'},
        armor1: {id: 'armor1', equip: 'armor', name: '머리핀', type: 'head'},
        armor2: {id: 'armor2', equip: 'armor', name: '안경', type: 'head'},
        armor3: {id: 'armor3', equip: 'armor', name: '잡지', type: 'accessory'},
        armor4: {id: 'armor4', equip: 'armor', name: '다마고치', type: 'accessory'},
        armor5: {id: 'armor5', equip: 'armor', name: 'CD 플레이어', type: 'accessory'},
        armor6: {id: 'armor6', equip: 'armor', name: '방탄조끼', type: 'accessory'},
        armor7: {id: 'armor7', equip: 'armor', name: '등산화', type: 'foot'},
        armor8: {id: 'armor8', equip: 'armor', name: '등산모', type: 'head'},
        armor9: {id: 'armor9', equip: 'armor', name: '팔찌', type: 'arm'},
        armor10: {id: 'armor10', equip: 'armor', name: '털토시', type: 'arm'},
        armor11: {id: 'armor11', equip: 'armor', name: '민방위완장', type: 'arm'},
        armor12: {id: 'armor12', equip: 'armor', name: '새마을완장', type: 'arm'},
        armor13: {id: 'armor13', equip: 'armor', name: '머리띠', type: 'head'},
        armor14: {
            id: 'armor14',
            equip: 'armor',
            name: '방화복',
            type: 'body',
            material: 'fabric'
        },
        armor15: {id: 'armor15', equip: 'armor', name: '방화헬멧', type: 'head'},
        armor16: {id: 'armor16', equip: 'armor', name: '승복', type: 'body', material: 'fabric'},
        armor17: {
            id: 'armor17',
            equip: 'armor',
            name: '신관의옷',
            type: 'body',
            material: 'fabric'
        },
        armor18: {id: 'armor18', equip: 'armor', name: '나막신', type: 'foot'},
        armor19: {id: 'armor19', equip: 'armor', name: '작업용헬멧', type: 'head'},
        armor20: {
            id: 'armor20',
            equip: 'armor',
            name: '작업복',
            type: 'body',
            material: 'fabric'
        },
        armor21: {id: 'armor21', equip: 'armor', name: '오토바이헬멧', type: 'head'},
        armor22: {id: 'armor22', equip: 'armor', name: '리본', type: 'head'},
        armor23: {id: 'armor23', equip: 'armor', name: '운동화', type: 'foot'},
        armor24: {id: 'armor24', equip: 'armor', name: '주번완장', type: 'arm'},
        armor25: {id: 'armor25', equip: 'armor', name: '토시', type: 'arm'},
        armor26: {id: 'armor26', equip: 'armor', name: '실내화', type: 'foot'},
        armor27: {id: 'armor27', equip: 'armor', name: '녹슨철모', type: 'head'},
        armor28: {id: 'armor28', equip: 'armor', name: '흰옷', type: 'body', material: 'fabric'},
        armor29: {id: 'armor29', equip: 'armor', name: '장화', type: 'foot'},
        armor30: {id: 'armor30', equip: 'armor', name: '갑주', type: 'body', material: 'armor'},
        armor31: {
            id: 'armor31',
            equip: 'armor',
            name: '체인메일',
            type: 'body',
            material: 'chain'
        },
        armor32: {id: 'armor32', equip: 'armor', name: '투구', type: 'head'},
        armor33: {
            id: 'armor33',
            equip: 'armor',
            name: '가보갑주',
            type: 'body',
            material: 'armor'
        },
        armor34: {id: 'armor34', equip: 'armor', name: '고무신', type: 'foot'},
        armor35: {id: 'armor35', equip: 'armor', name: '하이힐', type: 'foot'},
        armor36: {id: 'armor36', equip: 'armor', name: '군화', type: 'foot'},
        armor37: {id: 'armor37', equip: 'armor', name: '철모', type: 'head'},
        armor38: {id: 'armor38', equip: 'armor', name: '조교완장', type: 'arm'},
        armor39: {id: 'armor39', equip: 'armor', name: 'MP완장', type: 'arm'},
        armor40: {
            id: 'armor40',
            equip: 'armor',
            name: '군복',
            type: 'body',
            material: 'fabric'
        },
        armor41: {id: 'armor41', equip: 'armor', name: '교복', type: 'body', material: 'fabric'},
        armor42: {
            id: 'armor42',
            equip: 'armor',
            name: '세라복',
            type: 'body',
            material: 'fabric'
        },
        armor43: {
            id: 'armor43',
            equip: 'armor',
            name: '체육복',
            type: 'body',
            material: 'fabric'
        },
        armor44: {id: 'armor44', equip: 'armor', name: '슬리퍼', type: 'foot'},
        armor45: {id: 'armor45', equip: 'armor', name: '두꺼운 종이1', type: 'head'},
        armor46: {id: 'armor46', equip: 'armor', name: '두꺼운 종이2', type: 'head'},
        armor47: {id: 'armor47', equip: 'armor', name: '한복', type: 'body', material: 'armor'},
        armor48: {
            id: 'armor48',
            equip: 'armor',
            name: '방탄옷',
            type: 'body',
            material: 'armor'

        },
        armor51: {id: 'armor51', equip: 'armor', name: '전투화', type: 'foot'},
        armor52: {
            id: 'armor52',
            equip: 'armor',
            name: '간부제복',
            type: 'body',
            material: 'fabric'

        },
        armor53: {
            id: 'armor53',
            equip: 'armor',
            name: '여군제복',
            type: 'body',
            material: 'fabric'
        },
        armor54: {id: 'armor54', equip: 'armor', name: '전투모', type: 'foot'},
        armor55: {id: 'armor55', equip: 'armor', name: '염주', type: 'arm'},
        armor56: {id: 'armor56', equip: 'armor', name: '골무', type: 'accessory'},
        armor57: {
            id: 'armor57',
            equip: 'armor',
            name: '바바리코트',
            type: 'body',
            material: 'fabric'
        },
        armor58: {id: 'armor58', equip: 'armor', name: '시계', type: 'arm'},
        armor59: {
            id: 'armor59',
            equip: 'armor',
            name: '커스텀 교복',
            type: 'body',
            material: 'chain'
        },
        armor60: {
            id: 'armor60',
            equip: 'armor',
            name: '커스텀 세라복',
            type: 'body',
            material: 'chain'
        },
        armor61: {
            id: 'armor61',
            equip: 'armor',
            name: '방탄교복',
            type: 'body',
            material: 'armor'
        },
        armor62: {
            id: 'armor62',
            equip: 'armor',
            name: '방탄세라복',
            type: 'body',
            material: 'armor'
        },
        armor63: {id: 'armor63', equip: 'armor', name: '딱딱한 종이', type: 'head'},
        armor64: {id: 'armor64', equip: 'armor', name: '강화안경', type: 'head'},
        armor65: {
            id: 'armor65',
            equip: 'armor',
            name: '강화체인메일',
            type: 'body',
            material: 'chain'
        },
        armor66: {id: 'armor66', equip: 'armor', name: '종이뭉치', type: 'head'},
        armor67: {
            id: 'armor67',
            equip: 'armor',
            name: '두꺼운 종이옷',
            type: 'body',
            material: 'chain'
        },
        armor68: {
            id: 'armor68',
            equip: 'armor',
            name: '딱딱한 종이옷',
            type: 'body',
            material: 'armor'
        },
        armor69: {
            id: 'armor69',
            equip: 'armor',
            name: '커스텀 아머',
            type: 'body',
            material: 'armor'
        },
        armor70: {
            id: 'armor70',
            equip: 'armor',
            name: '커스터마이징 아머',
            type: 'body',
            material: 'armor'
        },
        armor71: {
            id: 'armor71',
            equip: 'armor',
            name: '물에 젖은 교복',
            type: 'body',
            material: 'armor'
        },
        armor72: {
            id: 'armor72',
            equip: 'armor',
            name: '물에 젖은 세라복',
            type: 'body',
            material: 'armor'
        },
        armor73: {
            id: 'armor73',
            equip: 'armor',
            name: '거북갑주',
            type: 'body',
            material: 'armor'
        },
        armor74: {id: 'armor74', equip: 'armor', name: '복대', type: 'accessory'},
        armor75: {id: 'armor75', equip: 'armor', name: '안대', type: 'head'},
        armor76: {
            id: 'armor76',
            equip: 'armor',
            name: '종이뭉치옷',
            type: 'body',
            material: 'armor'
        },


        // -- stamina
        stamina0: {id: 'stamina0', equip: 'stamina', name: '와일드세븐'},
        stamina1: {id: 'stamina1', equip: 'stamina', name: '초콜렛'},
        stamina2: {id: 'stamina2', equip: 'stamina', name: '쿠키'},
        stamina3: {id: 'stamina3', equip: 'stamina', name: '고구마'},
        stamina4: {id: 'stamina4', equip: 'stamina', name: '참마'},
        stamina5: {id: 'stamina5', equip: 'stamina', name: '감자'},
        stamina6: {id: 'stamina6', equip: 'stamina', name: '우엉'},
        stamina7: {id: 'stamina7', equip: 'stamina', name: '당근'},
        stamina8: {id: 'stamina8', equip: 'stamina', name: '양파'},
        stamina9: {id: 'stamina9', equip: 'stamina', name: '마늘'},
        stamina10: {id: 'stamina10', equip: 'stamina', name: '생강'},
        stamina11: {id: 'stamina11', equip: 'stamina', name: '카레가루'},
        stamina12: {id: 'stamina12', equip: 'stamina', name: '간장'},
        stamina13: {id: 'stamina13', equip: 'stamina', name: '소스'},
        stamina14: {id: 'stamina14', equip: 'stamina', name: '영양드링크'},
        stamina15: {id: 'stamina15', equip: 'stamina', name: '스튜'},
        stamina17: {id: 'stamina17', equip: 'stamina', name: '빵'},
        stamina18: {id: 'stamina18', equip: 'stamina', name: '건빵'},
        stamina19: {id: 'stamina19', equip: 'stamina', name: '세계수'},
        stamina20: {id: 'stamina20', equip: 'stamina', name: '사과초'},
        stamina21: {id: 'stamina21', equip: 'stamina', name: '추가 빵'},
        stamina22: {id: 'stamina22', equip: 'stamina', name: '꿀'},
        stamina23: {id: 'stamina23', equip: 'stamina', name: '초록매실'},
        stamina24: {id: 'stamina24', equip: 'stamina', name: '유면'},
        stamina25: {id: 'stamina25', equip: 'stamina', name: '스프'},
        stamina26: {id: 'stamina26', equip: 'stamina', name: '라면스프'},
        stamina27: {id: 'stamina27', equip: 'stamina', name: '오렌지'},
        stamina28: {id: 'stamina28', equip: 'stamina', name: '박카스'},
        stamina29: {id: 'stamina29', equip: 'stamina', name: '우루사'},
        stamina30: {id: 'stamina30', equip: 'stamina', name: '익은면발'},
        stamina31: {id: 'stamina31', equip: 'stamina', name: '물에 젖은빵'},
        stamina32: {id: 'stamina32', equip: 'stamina', name: '묽은 영양드링크'},
        stamina33: {id: 'stamina33', equip: 'stamina', name: '이상한 약물'},
        stamina34: {id: 'stamina34', equip: 'stamina', name: '세계수 엑기스'},
        stamina35: {id: 'stamina35', equip: 'stamina', name: '약빵'},
        stamina36: {id: 'stamina36', equip: 'stamina', name: '구운 붕어'},
        stamina37: {id: 'stamina37', equip: 'stamina', name: '구운 미꾸라지'},
        stamina38: {id: 'stamina38', equip: 'stamina', name: '맛있는 라면'},
        stamina39: {id: 'stamina39', equip: 'stamina', name: '생 라면'},
        stamina40: {id: 'stamina40', equip: 'stamina', name: '물카레'},
        stamina41: {id: 'stamina41', equip: 'stamina', name: '회오리주'},


        // -- heal
        heal0: {id: 'heal0', equip: 'health', name: '위스키'},
        heal1: {id: 'heal1', equip: 'health', name: '물'},
        heal2: {id: 'heal2', equip: 'health', name: '약'},
        heal3: {id: 'heal3', equip: 'health', name: '분말쥬스'},
        heal4: {id: 'heal4', equip: 'health', name: '구급약'},
        heal5: {id: 'heal5', equip: 'health', name: '초특급 울트라슈퍼 스펙타클 환타지 리얼 딜리셔스 내츄럴 불고기'},
        heal6: {id: 'heal6', equip: 'health', name: '추가 물'},
        heal7: {id: 'heal7', equip: 'health', name: '약초'},
        heal8: {id: 'heal8', equip: 'health', name: '버섯'},
        heal9: {id: 'heal9', equip: 'health', name: '마취제'},
        heal10: {id: 'heal10', equip: 'health', name: '붕대'},
        heal11: {id: 'heal11', equip: 'health', name: '거북등가루'},
        heal12: {id: 'heal12', equip: 'health', name: '물약'},
        heal13: {id: 'heal13', equip: 'health', name: '탕약'},
        heal14: {id: 'heal14', equip: 'health', name: '쥬스'},
        heal15: {id: 'heal15', equip: 'health', name: '물에 젖은 빵'},
        heal16: {id: 'heal16', equip: 'health', name: '많은 물'},
        heal17: {id: 'heal17', equip: 'health', name: '꿀물'},
        heal18: {id: 'heal18', equip: 'health', name: '꿀약'},
        heal19: {id: 'heal19', equip: 'health', name: '신선두'},
        heal20: {id: 'heal20', equip: 'health', name: '오염된 물'},
        heal21: {id: 'heal21', equip: 'health', name: '침술용 핀세트'},
        heal22: {id: 'heal22', equip: 'health', name: '영약'},
        heal23: {id: 'heal23', equip: 'health', name: '소독핀셋'},
        heal24: {id: 'heal24', equip: 'health', name: '보약'},
        heal25: {id: 'heal25', equip: 'health', name: '약물'},
        heal26: {id: 'heal26', equip: 'health', name: '녹색 약'},
        heal27: {id: 'heal27', equip: 'health', name: '꿀약'},
        heal28: {id: 'heal28', equip: 'health', name: '녹색 물약'},
        heal29: {id: 'heal29', equip: 'health', name: '많은 물약'},


        // -- trap
        trap0: {id: 'trap0', equip: 'trap', name: '쥐덫'},
        trap1: {id: 'trap1', equip: 'trap', name: '지뢰'},
        trap2: {id: 'trap2', equip: 'trap', name: '피아노선'},
        trap3: {id: 'trap3', equip: 'trap', name: '강화지뢰'},
        trap4: {id: 'trap4', equip: 'trap', name: '가시발판'},
        trap5: {id: 'trap5', equip: 'trap', name: '군목적트랩'},
        trap6: {id: 'trap6', equip: 'trap', name: '마취트랩'},
        trap7: {id: 'trap7', equip: 'trap', name: '가시박힌 피아노선'},
        trap8: {id: 'trap8', equip: 'trap', name: '이중 줄선'},
        trap9: {id: 'trap9', equip: 'trap', name: '알람트랩', specialize: ['alarm']},
        trap10: {id: 'trap10', equip: 'trap', name: '가시박힌 피아노줄', specialize: ['paralysis']},
        trap11: {id: 'trap11', equip: 'trap', name: '줄 덫'},
        trap12: {id: 'trap12', equip: 'trap', name: '덫트랩'},
        trap13: {id: 'trap13', equip: 'trap', name: '알람마비트랩', specialize: ['alarm', 'paralysis']},
        trap14: {id: 'trap14', equip: 'trap', name: '가시트랩'},
        trap15: {id: 'trap15', equip: 'trap', name: '대나무 트랩'},
        trap16: {id: 'trap16', equip: 'trap', name: '대 강화 가시트랩'},
        trap17: {id: 'trap17', equip: 'trap', name: '강화 대나무 트랩'},
        trap18: {id: 'trap18', equip: 'trap', name: '강화 가시트랩'},
        trap19: {id: 'trap19', equip: 'trap', name: '녹슨 트랩'},
        trap20: {id: 'trap20', equip: 'trap', name: '폭파트랩'},


        // -- etc
        etc0: {id: 'etc0', equip: 'cellur', name: '휴대폰'},
        etc1: {id: 'etc1', equip: 'item', name: '뇌관'},
        etc2: {id: 'etc2', equip: 'item', name: '불꽃놀이'},
        etc3: {id: 'etc3', equip: 'item', name: '헤어스프레이'},
        etc4: {id: 'etc4', equip: 'lighter', name: '라이터'},
        etc5: {id: 'etc5', equip: 'temp_radar', name: '간이레이더'},
        etc6: {id: 'etc6', equip: 'item', name: '샤미센 줄'},
        etc7: {id: 'etc7', equip: 'poison', name: '독약'},
        etc8: {id: 'etc8', equip: '12gauge', name: '탄환 (샷건)'},
        etc9: {id: 'etc9', equip: '9mm', name: '탄환 (9mm)'},
        etc10: {id: 'etc10', equip: '22lr', name: '탄환 (22LR)'},
        etc12: {id: 'etc12', equip: '357mag', name: '탄환 (매그넘)'},
        etc13: {id: 'etc13', equip: '38special', name: '탄환 (.38SP)'},
        etc14: {id: 'etc14', equip: '45acp', name: '탄환 (.45ACP)'},
        etc15: {id: 'etc15', equip: 'apostle', name: '탄환 (화승총)'},
        etc16: {id: 'etc16', equip: 'bow', name: '화살'},
        etc17: {id: 'etc17', equip: 'armor_refine', name: '바느질도구'},
        etc20: {id: 'etc20', equip: 'weapon_refine', name: '숫돌'},
        etc23: {id: 'etc23', equip: 'gasoline', name: '휘발유'},
        etc24: {id: 'etc24', equip: 'gasoline', name: '경유'},
        etc25: {id: 'etc25', equip: 'item', name: '비료'},
        etc26: {id: 'etc26', equip: 'speaker', name: '확성기'},
        etc27: {id: 'etc27', equip: 'battery', name: '배터리'},
        etc31: {id: 'etc31', equip: 'item', name: '못'},
        etc32: {id: 'etc32', equip: 'tripwire', name: '도화선'},
        etc34: {id: 'etc34', equip: 'radar', name: '레이더'},
        etc35: {id: 'etc35', equip: 'item', name: '화약'},
        etc36: {id: 'etc36', equip: 'item', name: '노트북'},
        etc37: {id: 'etc37', equip: 'mobilepc', name: '모바일PC'},
        etc38: {id: 'etc38', equip: 'item', name: '창대'},
        etc39: {id: 'etc39', equip: 'program', name: '프로그램해제키'},
        etc40: {id: 'etc40', equip: 'item', name: '연결고리'},
        etc41: {id: 'etc41', equip: 'item', name: '플라스틱스위치통'},
        etc42: {id: 'etc42', equip: 'item', name: '조립단자'},
        etc43: {id: 'etc43', equip: 'item', name: '천쪼가리A'},
        etc44: {id: 'etc44', equip: 'item', name: '천쪼가리B'},
        etc45: {id: 'etc45', equip: 'item', name: '천쪼가리C'},
        etc46: {id: 'etc46', equip: 'item', name: '천쪼가리D'},
        etc47: {id: 'etc47', equip: 'item', name: '천쪼가리E'},
        etc48: {id: 'etc48', equip: 'item', name: '천쪼가리F'},
        etc49: {id: 'etc49', equip: 'item', name: '알수없는물건'},
        etc50: {id: 'etc50', equip: 'item', name: '알수없는피'},
        etc51: {id: 'etc51', equip: 'item', name: '이상한 콩'},
        etc52: {id: 'etc52', equip: 'item', name: '이상한기계'},
        etc53: {id: 'etc53', equip: 'item', name: '암즈 사용법'},
        etc54: {id: 'etc54', equip: 'item', name: '레이져 포인트'},
        etc55: {id: 'etc55', equip: 'tortoise', name: '거북등껍질'},
        etc56: {id: 'etc56', equip: 'weapon_refine', name: '제련철'},
        etc57: {id: 'etc57', equip: 'soft_paper', name: '부드러운 종이'},
        etc58: {id: 'etc58', equip: 'sound_bait', name: '소리유인기'},
        etc59: {id: 'etc59', equip: 'silence', name: '소음기'},
        etc60: {id: 'etc60', equip: 'fireworks', name: '불꽃놀이'},
        etc61: {id: 'etc61', equip: 'item', name: '고무버튼'},
        etc62: {id: 'etc62', equip: 'item', name: '유리조각'},
        etc63: {id: 'etc63', equip: 'item', name: '플레이보이'},
        etc64: {id: 'etc64', equip: 'acceptance', name: '합격통지서'},
        etc65: {id: 'etc65', equip: 'phone_bill', name: '전화세 납입서'},
        etc66: {id: 'etc66', equip: 'electricity_bill', name: '전기세 납입서'},
        etc67: {id: 'etc67', equip: 'item', name: '알코올 농도4'},
        etc68: {id: 'etc68', equip: 'item', name: '알코올 농도7'},
        etc69: {id: 'etc69', equip: 'item', name: '알코올 농도17'},
        etc70: {id: 'etc70', equip: 'item', name: '알코올 농도45'},
        etc71: {id: 'etc71', equip: 'item', name: '목공용본드'},
        etc72: {id: 'etc72', equip: 'item', name: '수도세 납입서'},
        etc73: {id: 'etc73', equip: 'item', name: '두꺼운 종이1'},
        etc74: {id: 'etc74', equip: 'item', name: '두꺼운 종이2'},
        etc75: {id: 'etc75', equip: 'item', name: '쇠사슬 줄'},
        etc76: {id: 'etc76', equip: 'item', name: '천A'},
        etc77: {id: 'etc77', equip: 'item', name: '천B'},
        etc78: {id: 'etc78', equip: 'item', name: '천C'},
        etc79: {id: 'etc79', equip: 'item', name: '옷감A'},
        etc80: {id: 'etc80', equip: 'item', name: '옷감B'},
        etc81: {id: 'etc81', equip: 'item', name: '제단용옷감'},
        etc82: {id: 'etc82', equip: 'item', name: '변형 옷감'},
        etc83: {id: 'etc83', equip: 'item', name: '안경고리'},
        etc84: {id: 'etc84', equip: 'item', name: '스위치'},
        etc85: {id: 'etc85', equip: 'item', name: '딱딱한 종이1'},
        etc86: {id: 'etc86', equip: 'item', name: '딱딱한 종이2'},
        etc87: {id: 'etc87', equip: 'item', name: '두꺼운 종이'},
        etc88: {id: 'etc88', equip: 'item', name: '가위'},
        etc89: {id: 'etc89', equip: 'item', name: '알수없는세포'},
        etc90: {id: 'etc90', equip: 'item', name: '???'},
        etc91: {id: 'etc91', equip: 'item', name: '기름병'},
        etc92: {id: 'etc92', equip: 'item', name: '유화배터리'},
        etc93: {id: 'etc93', equip: 'item', name: '녹슨 철'},
        etc94: {id: 'etc94', equip: 'item', name: '엉켜버린 쇠사슬'},
        etc95: {id: 'etc95', equip: 'item', name: '무거워서 못입게된 옷'}
    },


    /*
     * ■ 개인 아이템 정의
     */
    personalItems: [
        itemPlugin.toObject('etc0', 1, 1),      // 휴대폰
        itemPlugin.toObject('etc59', 1, 1),     // 소음기
        itemPlugin.toObject('stamina0', 1, 40), // 와일드세븐
        itemPlugin.toObject('stamina1', 1, 50), // 초콜렛
        itemPlugin.toObject('heal0', 1, 20),    // 위스키
        itemPlugin.toObject('stamina2', 1, 40), // 쿠키
        itemPlugin.toObject('weapon106', 0, 5), // 면도칼
        itemPlugin.toObject('weapon107', 0, 8), // 버터플라이나이프
        itemPlugin.toObject('armor0', 5, 1),    // 목걸이
        itemPlugin.toObject('etc1', 1, 1),      // 뇌관
        itemPlugin.toObject('weapon108', 1, 1), // 화투
        itemPlugin.toObject('weapon109', 1, 1), // 트럼프카드
        itemPlugin.toObject('etc60', 1, 24),    // 불꽃놀이
        itemPlugin.toObject('weapon110', 0, 2), // 휴대용게임기
        itemPlugin.toObject('armor1', 2, 1),    // 머리핀
        itemPlugin.toObject('stamina20', 5, 5), // 사과초
        itemPlugin.toObject('weapon111', 0, 1), // 비누
        itemPlugin.toObject('weapon112', 0, 1), // 칫솔
        itemPlugin.toObject('etc3', 1, 1),      // 헤어스프레이
        itemPlugin.toObject('armor2', 1, 1),    // 안경
        itemPlugin.toObject('etc4', 1, 1),      // 라이터
        itemPlugin.toObject('armor3', 2, 1),    // 잡지
        itemPlugin.toObject('armor4', 3, 1),    // 다마고치
        itemPlugin.toObject('armor5', 3, 1),    // CD 플레이어
        itemPlugin.toObject('weapon127', 0, 7), // 커터칼
        itemPlugin.toObject('etc61', 1, 1),     // 고무버튼
        itemPlugin.toObject('etc62', 1, 1),     // 유리조각
        itemPlugin.toObject('etc63', 1, 1),     // 플레이보이
        itemPlugin.toObject('heal6', 2, 20),    // 추가 물
        itemPlugin.toObject('stamina21', 3, 40),// 추가 빵
        itemPlugin.toObject('weapon128', 1, 4), // 재떨이
        itemPlugin.toObject('weapon120', 2, 1), // 동의보감
        itemPlugin.toObject('weapon129', 50, 1),// 고무줄
        itemPlugin.toObject('etc64', 1, 1),     // 합격통지서
        itemPlugin.toObject('weapon130', 1, 2), // 동전
        itemPlugin.toObject('etc58', 1, 1),     // 소리유인기
        itemPlugin.toObject('weapon131', 1, 0)  // 꽃
    ],


    /*
     * ■ 보급 아이템 정의
     */
    supplyItems: [
        itemPlugin.toObject('weapon1', 0, 20),      // 석궁
        itemPlugin.toObject('weapon2', 0, 15),      // 식칼
        itemPlugin.toObject('weapon3', 0, 17),      // 손도끼
        itemPlugin.toObject('armor6', 10, 5),       // 방탄조끼
        itemPlugin.toObject('weapon4', 0, 28),      // 레밍턴 M31RS 샷건
        itemPlugin.toObject('weapon5', 0, 17),      // 나이프
        itemPlugin.toObject('weapon6', 0, 15),      // 단도
        itemPlugin.toObject('weapon132', 0, 16),    // 주머니칼
        itemPlugin.toObject('weapon7', 0, 30),      // 잉그램 M10 9mm
        itemPlugin.toObject('etc5', 0, 1),          // 간이레이더
        itemPlugin.toObject('weapon8', 0, 7),       // 포크
        itemPlugin.toObject('weapon9', 0, 15),      // 금속 배트
        itemPlugin.toObject('weapon10', 0, 20),     // 22구경 2연발 데린져
        itemPlugin.toObject('weapon11', 1, 20),     // 군용 나이프
        itemPlugin.toObject('etc6', 1, 1),          // 샤미센 줄
        itemPlugin.toObject('weapon12', 0, 25),     // 월터 PPK 9mm
        itemPlugin.toObject('weapon13', 0, 26),     // S&W M19 357 매그넘
        itemPlugin.toObject('weapon14', 0, 25),     // 베레타 M92F 9mm
        itemPlugin.toObject('weapon15', 0, 23),     // S&W 치프스페셜 38구경
        itemPlugin.toObject('weapon16', 0, 27),     // 콜트357 매그넘 리볼버
        itemPlugin.toObject('weapon17', 0, 20),     // 양날 나이프
        itemPlugin.toObject('weapon18', 0, 26),     // 브라우닝 하이파워 9mm
        itemPlugin.toObject('weapon19', 0, 26),     // 다이버즈 나이프
        itemPlugin.toObject('weapon133', 0, 15),    // 권투글러브
        itemPlugin.toObject('weapon20', 12, 5),     // 다트
        itemPlugin.toObject('weapon21', 2, 40),     // 수류탄
        itemPlugin.toObject('weapon22', 0, 24),     // S&W M59 9mm
        itemPlugin.toObject('weapon23', 0, 13),     // 특수경봉
        itemPlugin.toObject('weapon24', 0, 24),     // 콜트 H.P 38구경
        itemPlugin.toObject('weapon25', 0, 20),     // 낫
        itemPlugin.toObject('weapon26', 0, 8),      // 얼음송곳
        itemPlugin.toObject('weapon27', 0, 12),     // 눈쳐크
        itemPlugin.toObject('weapon28', 5, 9),      // 부메랑
        itemPlugin.toObject('weapon134', 0, 10),    // 가죽장갑
        itemPlugin.toObject('weapon29', 0, 25),     // CZ M75 9mm
        itemPlugin.toObject('weapon30', 0, 30),     // 우지 9mm
        itemPlugin.toObject('weapon31', 0, 26),     // 시그 사우엘 P230 9mm
        itemPlugin.toObject('weapon32', 0, 25),     // M1911 .45
        itemPlugin.toObject('weapon33', 0, 25),     // 일본도
        itemPlugin.toObject('weapon34', 0, 1),      // 부채
        itemPlugin.toObject('weapon35', 0, 3),      // 대야
        itemPlugin.toObject('weapon36', 0, 2),      // 슬리퍼
        itemPlugin.toObject('weapon37', 1, 2),      // 칠판지우개
        itemPlugin.toObject('weapon38', 1, 1),      // 분필
        itemPlugin.toObject('weapon39', 0, 12),     // 배트
        itemPlugin.toObject('weapon40', 0, 8),      // 너클
        itemPlugin.toObject('weapon41', 0, 1),      // 뿅망치
        itemPlugin.toObject('etc7', 5, 1),          // 독약
        itemPlugin.toObject('weapon135', 0, 25),    // 장도리깨
        itemPlugin.toObject('weapon136', 1000, 14), // 공기총
        itemPlugin.toObject('weapon137', 0, 2),     // 페트병
        itemPlugin.toObject('weapon138', 0, 4),     // 마이크
        itemPlugin.toObject('weapon139', 0, 2),     // 바늘
        itemPlugin.toObject('trap5', 3, 300),       // 군목적트랩
        itemPlugin.toObject('weapon140', 0, 30),    // 베레타 PX4
        itemPlugin.toObject('weapon141', 40, 23),   // 쇠공
        itemPlugin.toObject('weapon142', 0, 20),    // 리볼버 MkII
        itemPlugin.toObject('weapon143', 0, 15),    // 리볼버 MkI
        itemPlugin.toObject('weapon144', 1, 8),     // 전화번호부
        itemPlugin.toObject('weapon145', 1, 2)      // 숟갈
    ],


    /*
     * ■ 조합 아이템 정의
     */
    mixItems: [
        {
            material: ['etc24', 'etc25'],
            result: itemPlugin.toObject('etc35', 1, 1)
        },    // 화약
        {
            material: ['etc23', 'weapon63'],
            result: itemPlugin.toObject('weapon42', 1, 45)
        },    // 화염병
        {
            material: ['etc1', 'etc35'],
            result: itemPlugin.toObject('weapon43', 3, 60)
        },    // 폭탄
        {
            material: ['etc35', 'etc32'],
            result: itemPlugin.toObject('weapon54', 6, 25)
        },    // 다이나마이트
        {
            material: ['etc35', 'trap1'],
            result: itemPlugin.toObject('trap3', 1, 40)
        },    // 강화지뢰
        {
            material: ['etc3', 'etc4'],
            result: itemPlugin.toObject('weapon44', 8, 65)
        },    // 간이화염방사기
        {
            material: ['etc2', 'etc35'],
            result: itemPlugin.toObject('weapon162', 10, 20)
        },    // 폭죽발사기
        {
            material: ['etc35', 'etc26'],
            result: itemPlugin.toObject('trap9', 1, 20)
        },    // 알람트랩
        {
            material: ['trap9', 'trap10'],
            result: itemPlugin.toObject('trap13', 1, 100)
        },    // 알람마비트랩

        {
            material: ['weapon67', 'weapon25'],
            result: itemPlugin.toObject('weapon45', 0, 24)
        },    // 사슬낫
        {
            material: ['weapon39', 'etc31'],
            result: itemPlugin.toObject('weapon46', 0, 22)
        },    // 못박은배트
        {
            material: ['weapon96', 'etc31'],
            result: itemPlugin.toObject('weapon47', 0, 15)
        },    // 못박은대나무
        {
            material: ['weapon79', 'weapon96'],
            result: itemPlugin.toObject('weapon48', 0, 16)
        },    // 돌도끼

        {
            material: ['etc20', 'weapon5'],
            result: itemPlugin.toObject('weapon49', 0, 20)
        },    // 커스텀나이프
        {
            material: ['weapon1', 'trap2'],
            result: itemPlugin.toObject('weapon50', 0, 25)
        },    // 쇠뇌
        {
            material: ['weapon96', 'weapon5'],
            result: itemPlugin.toObject('weapon51', 0, 20)
        },    // 죽창

        {
            material: ['etc36', 'etc5'],
            result: itemPlugin.toObject('etc34', 0, 1)
        },    // 레이더
        {
            material: ['weapon110', 'etc5'],
            result: itemPlugin.toObject('etc34', 0, 1)
        },    // 레이더

        {
            material: ['weapon102', 'weapon103'],
            result: itemPlugin.toObject('etc36', 1, 1)
        },    // 노트북
        {
            material: ['etc0', 'etc36'],
            result: itemPlugin.toObject('etc37', 0, 1)
        },    // 모바일PC
        {
            material: ['weapon62', 'etc38'],
            result: itemPlugin.toObject('weapon52', 0, 40)
        },    // 언월도
        {
            material: ['weapon2', 'weapon2'],
            result: itemPlugin.toObject('weapon53', 0, 35)
        },    // 쌍칼
        {
            material: ['weapon96', 'trap2'],
            result: itemPlugin.toObject('etc38', 1, 1)
        },    // 창대
        {
            material: ['weapon116', 'etc40'],
            result: itemPlugin.toObject('etc83', 1, 1)
        },    // 안경고리
        {
            material: ['etc83', 'weapon117'],
            result: itemPlugin.toObject('armor64', 3, 3)
        },    // 강화안경
        {
            material: ['trap4', 'etc6'],
            result: itemPlugin.toObject('trap14', 1, 100)
        },    // 가시트랩
        {
            material: ['etc61', 'etc41'],
            result: itemPlugin.toObject('etc84', 1, 1)
        },    // 스위치
        {
            material: ['etc84', 'etc42'],
            result: itemPlugin.toObject('etc39', 1, 1)
        },    // 프로그램해제키

        {
            material: ['weapon143', 'weapon142'],
            result: itemPlugin.toObject('weapon163', 0, 35, ['silence'])
        },    // 아킴보 리볼버 (38SP)
        {
            material: ['etc62', 'weapon40'],
            result: itemPlugin.toObject('weapon184', 0, 15)
        },    // 유리너클
        {
            material: ['heal1', 'heal3'],
            result: itemPlugin.toObject('heal14', 1, 50)
        },    // 쥬스
        {
            material: ['weapon67', 'armor31'],
            result: itemPlugin.toObject('armor65', 30, 25)
        },    // 강화체인메일
        {
            material: ['armor45', 'armor46'],
            result: itemPlugin.toObject('armor63', 4, 3)
        },    // 딱딱한 종이
        {
            material: ['etc85', 'etc86'],
            result: itemPlugin.toObject('armor66', 8, 5)
        },    // 종이뭉치

        {
            material: ['armor66', 'weapon34'],
            result: itemPlugin.toObject('weapon185', 0, 15)
        },    // 크고 딱딱한 부채
        {
            material: ['etc87', 'etc88'],
            result: itemPlugin.toObject('armor67', 7, 6)
        },    // 두꺼운 종이옷
        {
            material: ['armor63', 'etc88'],
            result: itemPlugin.toObject('armor68', 13, 8)
        },    // 딱딱한 종이옷
        {
            material: ['armor66', 'etc88'],
            result: itemPlugin.toObject('armor76', 30, 10)
        },    // 종이뭉치옷
        {
            material: ['etc6', 'weapon96'],
            result: itemPlugin.toObject('trap15', 1, 50)
        },    // 대나무 트랩
        {
            material: ['etc6', 'weapon67'],
            result: itemPlugin.toObject('etc75', 1, 1)
        },    // 쇠사슬 줄
        {
            material: ['trap2', 'etc6'],
            result: itemPlugin.toObject('trap8', 1, 20)
        },    // 이중 줄선
        {
            material: ['trap2', 'weapon67'],
            result: itemPlugin.toObject('etc94', 1, 1)
        },    // 엉켜버린 쇠사슬
        {
            material: ['trap2', 'trap4'],
            result: itemPlugin.toObject('trap7', 1, 35)
        },    // 가시박힌 피아노선
        {
            material: ['trap7', 'heal9'],
            result: itemPlugin.toObject('trap10', 1, 45)
        },    // 가시박힌 피아노줄
        {
            material: ['trap8', 'weapon96'],
            result: itemPlugin.toObject('weapon164', 1, 4)
        },    // 대나무 채
        {
            material: ['trap8', 'weapon67'],
            result: itemPlugin.toObject('etc75', 1, 1)
        },    // 쇠사슬 줄
        {
            material: ['trap8', 'trap4'],
            result: itemPlugin.toObject('trap16', 1, 300)
        },    // 대 강화 가시트랩

        {
            material: ['etc75', 'weapon96'],
            result: itemPlugin.toObject('trap17', 1, 150)
        },    // 강화 대나무 트랩
        {
            material: ['etc75', 'trap4'],
            result: itemPlugin.toObject('trap18', 1, 200)
        },    // 강화 가시트랩
        {
            material: ['heal1', 'stamina17'],
            result: itemPlugin.toObject('stamina31', 1, 2)
        },    // 물에 젖은빵
        {
            material: ['heal1', 'weapon127'],
            result: itemPlugin.toObject('weapon186', 0, 1, ['poison+20'])
        },    // 녹슨 커터칼+20
        {
            material: ['heal1', 'weapon106'],
            result: itemPlugin.toObject('weapon187', 0, 1, ['poison+20'])
        },    // 녹슨 면도칼+20
        {
            material: ['heal1', 'stamina14'],
            result: itemPlugin.toObject('stamina32', 2, 35)
        },    // 묽은 영양드링크
        {
            material: ['armor41', 'armor57'],
            result: itemPlugin.toObject('armor59', 25, 15)
        },    // 커스텀 교복
        {
            material: ['armor42', 'armor57'],
            result: itemPlugin.toObject('armor60', 25, 15)
        },    // 커스텀 세라복
        {
            material: ['heal1', 'weapon2'],
            result: itemPlugin.toObject('weapon188', 0, 25)
        },    // 날이 선 식칼

        {
            material: ['etc43', 'etc44'],
            result: itemPlugin.toObject('etc76', 1, 1)
        },    // 천A
        {
            material: ['etc45', 'etc46'],
            result: itemPlugin.toObject('etc77', 1, 1)
        },    // 천B
        {
            material: ['etc47', 'etc48'],
            result: itemPlugin.toObject('etc78', 1, 1)
        },    // 천C
        {
            material: ['etc76', 'etc77'],
            result: itemPlugin.toObject('etc79', 1, 1)
        },    // 옷감A
        {
            material: ['etc79', 'etc78'],
            result: itemPlugin.toObject('etc80', 1, 1)
        },    // 옷감B
        {
            material: ['etc17', 'etc79'],
            result: itemPlugin.toObject('etc81', 1, 1)
        },    // 제단용옷감
        {
            material: ['etc17', 'etc80'],
            result: itemPlugin.toObject('etc82', 1, 1)
        },    // 변형 옷감
        {
            material: ['etc81', 'armor41'],
            result: itemPlugin.toObject('armor59', 20, 20)
        },    // 커스텀 교복
        {
            material: ['etc82', 'armor41'],
            result: itemPlugin.toObject('armor59', 90, 30)
        },    // 커스텀 교복
        {
            material: ['etc81', 'armor42'],
            result: itemPlugin.toObject('armor60', 20, 20)
        },    // 커스텀 세라복
        {
            material: ['etc82', 'armor42'],
            result: itemPlugin.toObject('armor60', 0, 30)
        },    // 커스텀 세라복
        {
            material: ['armor42', 'armor41'],
            result: itemPlugin.toObject('armor69', 15, 10)
        },    // 커스텀 아머
        {
            material: ['armor59', 'armor60'],
            result: itemPlugin.toObject('armor70', 10, 20)
        },    // 커스터마이징 아머

        {
            material: ['trap0', 'etc32'],
            result: itemPlugin.toObject('trap11', 1, 35)
        },    // 줄 덫
        {
            material: ['trap11', 'weapon2'],
            result: itemPlugin.toObject('trap12', 1, 85)
        },    // 덫트랩
        {
            material: ['trap12', 'heal1'],
            result: itemPlugin.toObject('trap19', 1, 95)
        },    // 녹슨 트랩
        {
            material: ['etc4', 'etc20'],
            result: itemPlugin.toObject('weapon165', 5, 35)
        },    // 달궈진 숫돌
        {
            material: ['weapon138', 'weapon56'],
            result: itemPlugin.toObject('etc26', 1, 1)
        },    // 확성기
        {
            material: ['weapon114', 'weapon99'],
            result: itemPlugin.toObject('weapon189', 0, 45, ['poison+20'])
        },    // 요마명도+20
        {
            material: ['heal1', 'heal2'],
            result: itemPlugin.toObject('heal12', 1, 70)
        },    // 물약
        {
            material: ['heal1', 'armor41'],
            result: itemPlugin.toObject('armor71', 1, 1)
        },    // 물에 젖은 교복
        {
            material: ['heal1', 'armor42'],
            result: itemPlugin.toObject('armor72', 1, 1)
        },    // 물에 젖은 세라복
        {
            material: ['heal6', 'stamina21'],
            result: itemPlugin.toObject('heal15', 1, 5)
        },    // 물에 젖은 빵
        {
            material: ['armor6', 'armor41'],
            result: itemPlugin.toObject('armor61', 30, 25)
        },    // 방탄교복
        {
            material: ['armor6', 'armor42'],
            result: itemPlugin.toObject('armor62', 30, 25)
        },    // 방탄세라복
        {
            material: ['armor61', 'armor62'],
            result: itemPlugin.toObject('etc95', 1, 1)
        },    // 무거워서 못입게된 옷
        {
            material: ['weapon127', 'weapon82'],
            result: itemPlugin.toObject('weapon190', 0, 5)
        },    // 날카로운연필
        {
            material: ['weapon26', 'heal1'],
            result: itemPlugin.toObject('heal16', 2, 90)
        },    // 많은 물
        {
            material: ['weapon67', 'weapon17'],
            result: itemPlugin.toObject('weapon191', 0, 20)
        },    // 사슬 나이프
        {
            material: ['etc49', 'etc50'],
            result: itemPlugin.toObject('etc89', 1, 1)
        },    // 알수없는세포
        {
            material: ['etc89', 'etc51'],
            result: itemPlugin.toObject('etc90', 1, 1)
        },    // ???
        {
            material: ['etc90', 'etc52'],
            result: itemPlugin.toObject('weapon160', 0, 1)
        },    // 암즈
        {
            material: ['etc53', 'weapon160'],
            result: itemPlugin.toObject('weapon166', 0, 70)
        },    // 사용가능 암즈

        {
            material: ['weapon69', 'weapon67'],
            result: itemPlugin.toObject('weapon192', 0, 30)
        },    // 도끼 사슬
        {
            material: ['weapon135', 'weapon192'],
            result: itemPlugin.toObject('weapon193', 0, 50)
        },    // 장도리깨 날사슬
        {
            material: ['etc54', 'weapon105'],
            result: itemPlugin.toObject('weapon167', 0, 45)
        },    // 저격 크로스보우
        {
            material: ['etc55', 'armor30'],
            result: itemPlugin.toObject('armor73', 5, 30)
        },    // 거북갑주
        {
            material: ['heal10', 'weapon151'],
            result: itemPlugin.toObject('armor74', 15, 5)
        },    // 복대
        {
            material: ['stamina22', 'heal1'],
            result: itemPlugin.toObject('heal17', 1, 55)
        },    // 꿀물
        {
            material: ['stamina22', 'heal2'],
            result: itemPlugin.toObject('heal18', 1, 100)
        },    // 꿀약
        {
            material: ['heal16', 'heal2'],
            result: itemPlugin.toObject('heal29', 1, 140)
        },    // 많은 물약
        {
            material: ['trap1', 'trap2'],
            result: itemPlugin.toObject('trap20', 1, 250)
        },    // 폭파트랩
        {
            material: ['weapon120', 'heal2'],
            result: itemPlugin.toObject('heal13', 1, 100)
        },    // 탕약
        {
            material: ['weapon120', 'etc51'],
            result: itemPlugin.toObject('heal19', 1, 300)
        },    // 신선두
        {
            material: ['etc90', 'stamina28'],
            result: itemPlugin.toObject('stamina33', 1, 200, ['poison'])
        },    // 이상한 약물
        {
            material: ['etc56', 'weapon5'],
            result: itemPlugin.toObject('weapon194', 0, 23)
        },    // 강화나이프
        {
            material: ['heal1', 'etc56'],
            result: itemPlugin.toObject('etc93', 1, 1)
        },    // 녹슨 철
        {
            material: ['etc93', 'weapon5'],
            result: itemPlugin.toObject('weapon195', 0, 25, ['poison+30'])
        },    // 녹슨 강화나이프+30
        {
            material: ['etc71', 'heal1'],
            result: itemPlugin.toObject('weapon168', 5, 14)
        },    // 압축본드공
        {
            material: ['heal1', 'etc25'],
            result: itemPlugin.toObject('heal20', 1, 5, ['poison'])
        },    // 오염된 물
        {
            material: ['etc56', 'weapon33'],
            result: itemPlugin.toObject('weapon169', 1, 20)
        },    // 날카로운 검심
        {
            material: ['etc93', 'weapon33'],
            result: itemPlugin.toObject('weapon196', 0, 5, ['poison+50'])
        },    // 망가진 검+50
        {
            material: ['heal1', 'etc27'],
            result: itemPlugin.toObject('weapon170', 2, 30)
        },    // 방전되는 배터리
        {
            material: ['weapon151', 'weapon120'],
            result: itemPlugin.toObject('heal21', 5, 10)
        },    // 침술용 핀세트
        {
            material: ['heal12', 'weapon120'],
            result: itemPlugin.toObject('heal22', 1, 130)
        },    // 영약
        {
            material: ['etc24', 'weapon63'],
            result: itemPlugin.toObject('etc91', 1, 1)
        },    // 기름병
        {
            material: ['etc91', 'etc4'],
            result: itemPlugin.toObject('weapon171', 1, 150)
        },    // 폭염병
        {
            material: ['heal2', 'weapon151'],
            result: itemPlugin.toObject('heal23', 1, 80)
        },    // 소독핀셋
        {
            material: ['heal23', 'heal1'],
            result: itemPlugin.toObject('weapon197', 0, 2)
        },    // 핀셋
        {
            material: ['etc93', 'heal1'],
            result: itemPlugin.toObject('heal1', 1, 50, ['poison'])
        },    // 물
        {
            material: ['etc55', 'weapon135'],
            result: itemPlugin.toObject('heal11', 1, 2)
        },    // 거북등가루
        {
            material: ['heal11', 'heal1'],
            result: itemPlugin.toObject('heal24', 5, 50)
        },    // 보약
        {
            material: ['weapon120', 'stamina19'],
            result: itemPlugin.toObject('stamina34', 1, 60)
        },    // 세계수 엑기스

        {
            material: ['weapon134', 'etc56'],
            result: itemPlugin.toObject('weapon198', 0, 25)
        },    // 징박은 가죽장갑
        {
            material: ['weapon40', 'etc56'],
            result: itemPlugin.toObject('weapon199', 0, 20)
        },    // 강화 너클
        {
            material: ['etc4', 'etc4'],
            result: itemPlugin.toObject('weapon200', 0, 20)
        },    // 더블 라이터
        {
            material: ['weapon154', 'etc62'],
            result: itemPlugin.toObject('weapon201', 0, 30)
        },    // 피묻은장갑

        {
            material: ['heal7', 'weapon120'],
            result: itemPlugin.toObject('heal2', 3, 50)
        },    // 약
        {
            material: ['heal7', 'heal1'],
            result: itemPlugin.toObject('heal25', 1, 35, ['poison'])
        },    // 약물
        {
            material: ['heal7', 'heal2'],
            result: itemPlugin.toObject('heal26', 1, 80, ['poison'])
        },    // 녹색 약
        {
            material: ['heal7', 'stamina22'],
            result: itemPlugin.toObject('heal18', 1, 100, ['poison'])
        },    // 꿀약
        {
            material: ['heal7', 'heal12'],
            result: itemPlugin.toObject('heal28', 1, 90, ['poison'])
        },    // 녹색 물약
        {
            material: ['heal7', 'heal13'],
            result: itemPlugin.toObject('heal13', 1, 120, ['poison'])
        },    // 탕약
        {
            material: ['heal7', 'stamina17'],
            result: itemPlugin.toObject('stamina35', 1, 40, ['poison'])
        },    // 약빵
        {
            material: ['etc27', 'etc24'],
            result: itemPlugin.toObject('etc92', 1, 1)
        },    // 유화배터리
        {
            material: ['etc92', 'etc4'],
            result: itemPlugin.toObject('weapon172', 2, 40)
        },    // 간이폭발물
        {
            material: ['weapon65', 'etc4'],
            result: itemPlugin.toObject('etc62', 1, 1)
        },    // 유리조각
        {
            material: ['weapon67', 'weapon3'],
            result: itemPlugin.toObject('weapon192', 0, 28)
        },    // 도끼 사슬
        {
            material: ['weapon129', 'etc57'],
            result: itemPlugin.toObject('armor75', 2, 3)
        },    // 안대
        {
            material: ['weapon106', 'weapon146'],
            result: itemPlugin.toObject('weapon173', 4, 20)
        },    // 챠크람
        {
            material: ['weapon127', 'weapon146'],
            result: itemPlugin.toObject('weapon173', 10, 20)
        },    // 챠크람
        {
            material: ['weapon157', 'etc4'],
            result: itemPlugin.toObject('stamina36', 1, 35)
        },    // 구운 붕어
        {
            material: ['weapon158', 'etc4'],
            result: itemPlugin.toObject('stamina37', 1, 10)
        },    // 구운 미꾸라지
        {
            material: ['weapon159', 'etc4'],
            result: itemPlugin.toObject('weapon175', 1, 15)
        },    // 딱딱해진 거북시체
        {
            material: ['heal1', 'etc63'],
            result: itemPlugin.toObject('weapon203', 0, 5)
        },    // 물에 젖은 잡지
        {
            material: ['heal1', 'weapon120'],
            result: itemPlugin.toObject('weapon204', 0, 10)
        },    // 물에 젖은 두꺼운책
        {
            material: ['weapon151', 'etc7'],
            result: itemPlugin.toObject('weapon176', 1, 120, ['poison+100'])
        },    // 독침+100
        {
            material: ['weapon139', 'etc7'],
            result: itemPlugin.toObject('weapon176', 1, 120, ['poison+100'])
        },    // 독침+100
        {
            material: ['weapon151', 'heal9'],
            result: itemPlugin.toObject('weapon177', 1, 20)
        },    // 마비침
        {
            material: ['weapon139', 'heal9'],
            result: itemPlugin.toObject('weapon177', 1, 20)
        },    // 마비침
        {
            material: ['etc0', 'weapon138'],
            result: itemPlugin.toObject('etc58', 1, 1)
        },    // 소리유인기

        {
            material: ['heal1', 'etc4'],
            result: itemPlugin.toObject('weapon161', 1, 15)
        },    // 뜨거운 물
        {
            material: ['stamina24', 'weapon161'],
            result: itemPlugin.toObject('stamina30', 1, 5)
        },    // 익은면발
        {
            material: ['stamina30', 'stamina26'],
            result: itemPlugin.toObject('stamina38', 5, 15)
        },    // 맛있는 라면
        {
            material: ['stamina24', 'stamina26'],
            result: itemPlugin.toObject('stamina39', 5, 10)
        },    // 생 라면
        {
            material: ['etc0', 'etc26'],
            result: itemPlugin.toObject('etc58', 1, 1)
        },    // 소리유인기
        {
            material: ['etc24', 'etc4'],
            result: itemPlugin.toObject('weapon178', 6, 50)
        },    // 화염분사기
        {
            material: ['stamina11', 'weapon161'],
            result: itemPlugin.toObject('stamina40', 1, 30)
        },    // 물카레
        {
            material: ['stamina27', 'etc27'],
            result: itemPlugin.toObject('stamina27', 1, 5, ['poison'])
        },    // 오렌지
        {
            material: ['etc67', 'etc70'],
            result: itemPlugin.toObject('stamina41', 1, 15, ['poison'])
        },    // 회오리주
        {
            material: ['etc67', 'etc69'],
            result: itemPlugin.toObject('weapon179', 3, 10)
        },    // 네이팜탄
        {
            material: ['etc67', 'etc68'],
            result: itemPlugin.toObject('weapon180', 2, 15)
        },    // 타이타닉
        {
            material: ['etc69', 'etc70'],
            result: itemPlugin.toObject('weapon181', 2, 30)
        },    // 소형폭탄
        {
            material: ['etc69', 'etc68'],
            result: itemPlugin.toObject('weapon182', 2, 25)
        },    // 기화폭탄
        {
            material: ['etc70', 'etc68'],
            result: itemPlugin.toObject('weapon183', 3, 50)
        }    // 원자폭탄
    ],

    /*
     * ■ 필드 아이템
     */
    looted: {
        place0: [],
        place1: [
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('etc8', 1, 24),
            itemPlugin.toObject('etc9', 1, 24),
            itemPlugin.toObject('etc10', 1, 24),
            itemPlugin.toObject('etc12', 1, 24),
            itemPlugin.toObject('etc13', 1, 24),
            itemPlugin.toObject('etc14', 1, 24),
            itemPlugin.toObject('etc15', 1, 24),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('armor7', 5, 3),
            itemPlugin.toObject('armor8', 3, 2)
        ],
        place2: [
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon2', 20, 5),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon57', 30, 20),
            itemPlugin.toObject('weapon57', 25, 20),
            itemPlugin.toObject('weapon57', 25, 20),
            itemPlugin.toObject('etc17', 1, 3),
            itemPlugin.toObject('etc17', 1, 5),
            itemPlugin.toObject('etc17', 1, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon59', 1, 20),
            itemPlugin.toObject('weapon60', 1, 20),
            itemPlugin.toObject('weapon61', 1, 15),
            itemPlugin.toObject('weapon62', 0, 20),
            itemPlugin.toObject('weapon63', 10, 1),
            itemPlugin.toObject('weapon63', 10, 1),
            itemPlugin.toObject('weapon63', 10, 1),
            itemPlugin.toObject('weapon63', 10, 1),
            itemPlugin.toObject('weapon63', 10, 1),
            itemPlugin.toObject('weapon63', 10, 1),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('weapon121', 0, 25),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon146', 4, 5),
            itemPlugin.toObject('weapon146', 4, 5),
            itemPlugin.toObject('weapon146', 4, 5),
            itemPlugin.toObject('weapon146', 4, 5),
            itemPlugin.toObject('weapon146', 4, 5),
            itemPlugin.toObject('weapon146', 4, 5),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('etc66', 1, 1),
            itemPlugin.toObject('etc72', 1, 1),
            itemPlugin.toObject('etc65', 1, 1),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon147', 1, 4),
            itemPlugin.toObject('weapon148', 1, 5),
            itemPlugin.toObject('weapon149', 1, 3),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 3),
            itemPlugin.toObject('etc20', 1, 5),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 3),
            itemPlugin.toObject('etc20', 1, 5),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 2),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 5),
            itemPlugin.toObject('etc56', 3, 2),
            itemPlugin.toObject('stamina23', 1, 10, ['poison']),
            itemPlugin.toObject('stamina23', 1, 10, ['poison']),
            itemPlugin.toObject('stamina23', 1, 10, ['poison']),
            itemPlugin.toObject('stamina23', 1, 10, ['poison']),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 3),
            itemPlugin.toObject('etc20', 1, 5),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 3),
            itemPlugin.toObject('etc20', 1, 5),
            itemPlugin.toObject('weapon67', 0, 15),
            itemPlugin.toObject('weapon67', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon150', 1, 10),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('armor9', 2, 1),
            itemPlugin.toObject('armor9', 2, 1),
            itemPlugin.toObject('armor9', 2, 1),
            itemPlugin.toObject('armor10', 3, 2)
        ],
        place3: [
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('weapon151', 1, 3),
            itemPlugin.toObject('weapon151', 1, 3),
            itemPlugin.toObject('weapon151', 1, 3),
            itemPlugin.toObject('weapon151', 1, 3),
            itemPlugin.toObject('weapon151', 1, 3),
            itemPlugin.toObject('weapon151', 1, 3),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8, ['deploy']),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8, ['deploy']),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8, ['deploy']),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8, ['deploy']),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc26', 1, 1),
            itemPlugin.toObject('armor11', 3, 2),
            itemPlugin.toObject('armor11', 3, 2),
            itemPlugin.toObject('armor11', 3, 2),
            itemPlugin.toObject('armor12', 2, 1),
            itemPlugin.toObject('armor12', 2, 1),
            itemPlugin.toObject('armor12', 2, 1),
            itemPlugin.toObject('armor12', 2, 1),
            itemPlugin.toObject('armor12', 2, 1)
        ],
        place4: [
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap2', 1, 8),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('armor13', 3, 1),
            itemPlugin.toObject('armor13', 3, 1),
            itemPlugin.toObject('armor13', 3, 1),
            itemPlugin.toObject('armor13', 3, 1)
        ],
        place5: [
            itemPlugin.toObject('etc27', 1, 1),
            itemPlugin.toObject('etc27', 1, 1),
            itemPlugin.toObject('etc27', 1, 1),
            itemPlugin.toObject('etc27', 1, 1),
            itemPlugin.toObject('etc27', 1, 1),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('weapon69', 0, 20),
            itemPlugin.toObject('weapon69', 0, 20),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('armor14', 20, 10),
            itemPlugin.toObject('armor14', 20, 10),
            itemPlugin.toObject('armor14', 20, 10),
            itemPlugin.toObject('armor15', 5, 3),
            itemPlugin.toObject('armor15', 5, 3)
        ],
        place6: [
            itemPlugin.toObject('weapon71', 0, 5),
            itemPlugin.toObject('weapon72', 0, 7),
            itemPlugin.toObject('weapon73', 0, 10),
            itemPlugin.toObject('weapon74', 0, 8),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('weapon152', 10, 2),
            itemPlugin.toObject('weapon152', 10, 2),
            itemPlugin.toObject('weapon152', 10, 2),
            itemPlugin.toObject('armor55', 3, 3),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('armor16', 20, 8),
            itemPlugin.toObject('armor16', 20, 8),
            itemPlugin.toObject('armor16', 20, 8),
            itemPlugin.toObject('armor16', 20, 8),
            itemPlugin.toObject('armor17', 15, 8),
            itemPlugin.toObject('armor17', 15, 8),
            itemPlugin.toObject('armor17', 15, 8),
            itemPlugin.toObject('armor17', 15, 8),
            itemPlugin.toObject('armor17', 15, 8),
            itemPlugin.toObject('armor17', 15, 8),
            itemPlugin.toObject('armor18', 5, 2),
            itemPlugin.toObject('armor18', 5, 2)
        ],
        place7: [
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy'])
        ],
        place8: [
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('weapon75', 0, 20),
            itemPlugin.toObject('armor18', 5, 2),
            itemPlugin.toObject('armor18', 5, 2)
        ],
        place9: [
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon103', 1, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon59', 1, 20),
            itemPlugin.toObject('weapon60', 1, 20),
            itemPlugin.toObject('weapon61', 1, 15),
            itemPlugin.toObject('weapon62', 0, 20),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('armor56', 5, 2),
            itemPlugin.toObject('armor56', 5, 2),
            itemPlugin.toObject('armor56', 5, 2),
            itemPlugin.toObject('armor56', 5, 2),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('stamina3', 1, 20),
            itemPlugin.toObject('stamina4', 1, 40),
            itemPlugin.toObject('stamina5', 1, 40),
            itemPlugin.toObject('stamina6', 1, 40),
            itemPlugin.toObject('stamina7', 1, 40),
            itemPlugin.toObject('stamina8', 1, 40),
            itemPlugin.toObject('stamina9', 1, 40),
            itemPlugin.toObject('stamina10', 1, 40),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon153', 1, 2),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon69', 0, 20),
            itemPlugin.toObject('weapon69', 0, 20),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('etc20', 1, 2),
            itemPlugin.toObject('etc20', 1, 4),
            itemPlugin.toObject('etc20', 1, 6),
            itemPlugin.toObject('etc20', 1, 2),
            itemPlugin.toObject('etc20', 1, 4),
            itemPlugin.toObject('etc20', 1, 6),
            itemPlugin.toObject('etc20', 1, 2),
            itemPlugin.toObject('etc20', 1, 4),
            itemPlugin.toObject('etc20', 1, 6),
            itemPlugin.toObject('etc20', 1, 2),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc56', 3, 1),
            itemPlugin.toObject('etc20', 1, 4),
            itemPlugin.toObject('etc20', 1, 6)
        ],
        place10: [
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('etc31', 1, 1),
            itemPlugin.toObject('etc31', 1, 2),
            itemPlugin.toObject('etc31', 1, 3),
            itemPlugin.toObject('etc31', 1, 4),
            itemPlugin.toObject('etc31', 1, 1),
            itemPlugin.toObject('etc31', 1, 2),
            itemPlugin.toObject('etc31', 1, 3),
            itemPlugin.toObject('etc31', 1, 4),
            itemPlugin.toObject('etc31', 1, 1),
            itemPlugin.toObject('etc31', 1, 2),
            itemPlugin.toObject('etc31', 1, 3),
            itemPlugin.toObject('etc31', 1, 4),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc6', 0, 1),
            itemPlugin.toObject('etc6', 0, 1),
            itemPlugin.toObject('etc6', 0, 1),
            itemPlugin.toObject('etc6', 0, 1),
            itemPlugin.toObject('etc6', 0, 1),
            itemPlugin.toObject('weapon154', 0, 10),
            itemPlugin.toObject('weapon154', 0, 10),
            itemPlugin.toObject('weapon154', 0, 10),
            itemPlugin.toObject('weapon154', 0, 10),
            itemPlugin.toObject('weapon154', 0, 10),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('armor19', 5, 4),
            itemPlugin.toObject('armor19', 5, 4),
            itemPlugin.toObject('armor20', 10, 8),
            itemPlugin.toObject('armor20', 10, 8),
            itemPlugin.toObject('armor20', 10, 8),
            itemPlugin.toObject('armor21', 10, 4),
            itemPlugin.toObject('armor21', 10, 4)
        ],
        place11: [
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon59', 1, 20),
            itemPlugin.toObject('weapon60', 1, 20),
            itemPlugin.toObject('etc17', 1, 3),
            itemPlugin.toObject('etc17', 1, 5),
            itemPlugin.toObject('etc17', 1, 10),
            itemPlugin.toObject('etc17', 1, 3),
            itemPlugin.toObject('etc17', 1, 5),
            itemPlugin.toObject('etc17', 1, 10),
            itemPlugin.toObject('weapon61', 1, 15),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon63', 10, 2),
            itemPlugin.toObject('weapon63', 10, 2),
            itemPlugin.toObject('weapon63', 10, 2),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina22', 1, 100),
            itemPlugin.toObject('stamina24', 1, 2),
            itemPlugin.toObject('stamina26', 1, 2),
            itemPlugin.toObject('weapon63', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon64', 10, 2),
            itemPlugin.toObject('weapon155', 1, 15),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('stamina11', 1, 20),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('stamina12', 1, 20),
            itemPlugin.toObject('stamina13', 1, 20),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('stamina27', 5, 2),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('etc20', 10, 1),
            itemPlugin.toObject('armor10', 3, 2),
            itemPlugin.toObject('armor22', 2, 1),
            itemPlugin.toObject('armor22', 2, 1),
            itemPlugin.toObject('armor22', 2, 1),
            itemPlugin.toObject('armor23', 5, 3),
            itemPlugin.toObject('armor23', 5, 3)
        ],
        place12: [
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon76', 0, 15),
            itemPlugin.toObject('weapon76', 0, 15),
            itemPlugin.toObject('weapon77', 0, 10),
            itemPlugin.toObject('weapon78', 0, 5),
            itemPlugin.toObject('weapon78', 0, 5),
            itemPlugin.toObject('weapon78', 0, 5),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 5, ['poison']),
            itemPlugin.toObject('heal7', 1, 10, ['poison']),
            itemPlugin.toObject('heal7', 1, 15, ['poison']),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('weapon79', 8, 20),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('etc32', 1, 1),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('armor19', 5, 4),
            itemPlugin.toObject('armor19', 5, 4),
            itemPlugin.toObject('armor20', 10, 8),
            itemPlugin.toObject('armor20', 10, 8),
            itemPlugin.toObject('armor20', 10, 8),
            itemPlugin.toObject('armor7', 5, 3),
            itemPlugin.toObject('armor7', 5, 3),
            itemPlugin.toObject('armor8', 3, 2),
            itemPlugin.toObject('armor8', 3, 2)
        ],
        place13: [
            itemPlugin.toObject('weapon80', 1, 1),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon81', 1, 4),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('weapon55', 5, 15),
            itemPlugin.toObject('armor13', 3, 1),
            itemPlugin.toObject('armor13', 3, 1)
        ],
        place14: [
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon82', 0, 2),
            itemPlugin.toObject('weapon83', 1, 1),
            itemPlugin.toObject('weapon83', 1, 1),
            itemPlugin.toObject('etc67', 1, 1),
            itemPlugin.toObject('etc69', 1, 1),
            itemPlugin.toObject('etc70', 1, 1),
            itemPlugin.toObject('etc68', 1, 1),
            itemPlugin.toObject('etc67', 1, 1),
            itemPlugin.toObject('etc69', 1, 1),
            itemPlugin.toObject('etc70', 1, 1),
            itemPlugin.toObject('etc68', 1, 1),
            itemPlugin.toObject('etc67', 1, 1),
            itemPlugin.toObject('etc69', 1, 1),
            itemPlugin.toObject('etc67', 1, 1),
            itemPlugin.toObject('etc69', 1, 1),
            itemPlugin.toObject('etc70', 1, 1),
            itemPlugin.toObject('etc68', 1, 1),
            itemPlugin.toObject('weapon83', 1, 1),
            itemPlugin.toObject('weapon83', 1, 1),
            itemPlugin.toObject('weapon83', 1, 1),
            itemPlugin.toObject('weapon83', 1, 1),
            itemPlugin.toObject('weapon84', 1, 3),
            itemPlugin.toObject('weapon116', 0, 1),
            itemPlugin.toObject('weapon117', 2, 2),
            itemPlugin.toObject('etc40', 1, 1),
            itemPlugin.toObject('weapon116', 0, 1),
            itemPlugin.toObject('weapon117', 2, 2),
            itemPlugin.toObject('etc40', 1, 1),
            itemPlugin.toObject('weapon116', 0, 1),
            itemPlugin.toObject('weapon117', 2, 2),
            itemPlugin.toObject('etc40', 1, 1),
            itemPlugin.toObject('weapon57', 20, 20),
            itemPlugin.toObject('weapon57', 20, 20),
            itemPlugin.toObject('weapon57', 20, 20),
            itemPlugin.toObject('weapon57', 30, 20),
            itemPlugin.toObject('weapon57', 30, 20),
            itemPlugin.toObject('weapon57', 25, 20),
            itemPlugin.toObject('weapon57', 25, 20),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('etc71', 1, 1),
            itemPlugin.toObject('weapon57', 25, 20),
            itemPlugin.toObject('weapon84', 1, 3),
            itemPlugin.toObject('weapon84', 1, 3),
            itemPlugin.toObject('weapon84', 1, 3),
            itemPlugin.toObject('weapon85', 1, 8),
            itemPlugin.toObject('weapon85', 1, 8),
            itemPlugin.toObject('weapon85', 1, 8),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('weapon37', 1, 2),
            itemPlugin.toObject('etc37', 0, 1),
            itemPlugin.toObject('weapon37', 1, 2),
            itemPlugin.toObject('weapon154', 0, 2),
            itemPlugin.toObject('weapon37', 1, 2),
            itemPlugin.toObject('etc27', 3, 1),
            itemPlugin.toObject('weapon37', 1, 2),
            itemPlugin.toObject('weapon37', 1, 2),
            itemPlugin.toObject('weapon87', 1, 2),
            itemPlugin.toObject('weapon88', 1, 2),
            itemPlugin.toObject('weapon89', 1, 2),
            itemPlugin.toObject('weapon90', 1, 2),
            itemPlugin.toObject('weapon91', 0, 3),
            itemPlugin.toObject('weapon92', 0, 4),
            itemPlugin.toObject('weapon93', 0, 4),
            itemPlugin.toObject('weapon94', 0, 4),
            itemPlugin.toObject('armor57', 5, 3),
            itemPlugin.toObject('etc26', 1, 1),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('armor24', 3, 3),
            itemPlugin.toObject('armor24', 3, 3),
            itemPlugin.toObject('armor24', 3, 3),
            itemPlugin.toObject('armor24', 3, 3),
            itemPlugin.toObject('armor25', 20, 2),
            itemPlugin.toObject('armor25', 20, 2),
            itemPlugin.toObject('armor10', 3, 2),
            itemPlugin.toObject('armor26', 2, 1),
            itemPlugin.toObject('armor26', 2, 1),
            itemPlugin.toObject('armor26', 2, 1)
        ],
        place15: [
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('etc16', 1, 12),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('weapon75', 0, 15),
            itemPlugin.toObject('armor18', 5, 2),
            itemPlugin.toObject('armor18', 5, 2),
            itemPlugin.toObject('armor18', 5, 2)
        ],
        place16: [
            itemPlugin.toObject('weapon25', 1, 15),
            itemPlugin.toObject('weapon25', 1, 15),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 7, ['poison']),
            itemPlugin.toObject('heal8', 1, 10, ['poison']),
            itemPlugin.toObject('heal8', 1, 20, ['poison']),
            itemPlugin.toObject('weapon97', 0, 12),
            itemPlugin.toObject('weapon97', 0, 12),
            itemPlugin.toObject('weapon97', 0, 12),
            itemPlugin.toObject('weapon97', 0, 12),
            itemPlugin.toObject('weapon97', 0, 12),
            itemPlugin.toObject('weapon97', 0, 12),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('weapon96', 1, 6),
            itemPlugin.toObject('armor8', 3, 2),
            itemPlugin.toObject('armor8', 3, 2),
            itemPlugin.toObject('armor27', 3, 4),
            itemPlugin.toObject('armor27', 3, 4)
        ],
        place17: [
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('weapon157', 1, 2),
            itemPlugin.toObject('weapon157', 1, 2),
            itemPlugin.toObject('weapon157', 1, 2),
            itemPlugin.toObject('weapon157', 1, 2),
            itemPlugin.toObject('weapon158', 1, 1),
            itemPlugin.toObject('weapon158', 1, 1),
            itemPlugin.toObject('weapon158', 1, 1),
            itemPlugin.toObject('weapon158', 1, 1),
            itemPlugin.toObject('weapon159', 1, 3),
            itemPlugin.toObject('weapon159', 1, 3),
            itemPlugin.toObject('weapon159', 1, 3),
            itemPlugin.toObject('weapon159', 1, 3),
            itemPlugin.toObject('weapon159', 1, 3),
            itemPlugin.toObject('weapon159', 1, 3),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1),
            itemPlugin.toObject('etc25', 1, 1)
        ],
        place18: [
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('heal3', 1, 30),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('etc4', 0, 5),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon59', 1, 20),
            itemPlugin.toObject('weapon60', 1, 20),
            itemPlugin.toObject('weapon61', 1, 15),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon58', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon56', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon65', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon66', 4, 10),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('weapon2', 0, 15),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('armor58', 2, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('etc20', 1, 1),
            itemPlugin.toObject('weapon67', 0, 15),
            itemPlugin.toObject('weapon67', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('weapon68', 0, 15),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc23', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('etc24', 1, 1),
            itemPlugin.toObject('armor9', 2, 1),
            itemPlugin.toObject('armor9', 2, 1),
            itemPlugin.toObject('armor9', 2, 1)
        ],
        place19: [
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('weapon120', 1, 3),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('heal2', 1, 40),
            itemPlugin.toObject('stamina28', 1, 600),
            itemPlugin.toObject('stamina28', 1, 600),
            itemPlugin.toObject('stamina28', 1, 600),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina29', 1, 660),
            itemPlugin.toObject('stamina29', 1, 660),
            itemPlugin.toObject('stamina29', 1, 660),
            itemPlugin.toObject('stamina29', 1, 660),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal9', 1, 15),
            itemPlugin.toObject('heal10', 1, 45),
            itemPlugin.toObject('heal10', 1, 45),
            itemPlugin.toObject('heal10', 1, 45),
            itemPlugin.toObject('heal10', 1, 45),
            itemPlugin.toObject('heal10', 1, 45),
            itemPlugin.toObject('heal10', 1, 45),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('stamina14', 1, 100),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('armor28', 5, 10),
            itemPlugin.toObject('armor28', 5, 10),
            itemPlugin.toObject('armor28', 5, 10)
        ],
        place20: [
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50, ['poison']),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('stamina15', 1, 50),
            itemPlugin.toObject('weapon25', 0, 20),
            itemPlugin.toObject('weapon25', 0, 20),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon70', 0, 12),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('weapon54', 8, 30),
            itemPlugin.toObject('armor29', 5, 4),
            itemPlugin.toObject('armor29', 5, 4)
        ],
        place21: [
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('trap0', 1, 10, ['deploy']),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('etc8', 1, 12),
            itemPlugin.toObject('etc9', 1, 12),
            itemPlugin.toObject('etc10', 1, 12),
            itemPlugin.toObject('etc12', 1, 12),
            itemPlugin.toObject('etc13', 1, 12),
            itemPlugin.toObject('etc14', 1, 12),
            itemPlugin.toObject('etc15', 1, 12),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('etc55', 1, 1),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('heal1', 1, 20),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('trap1', 1, 8),
            itemPlugin.toObject('trap1', 1, 8, ['deploy']),
            itemPlugin.toObject('armor7', 5, 3),
            itemPlugin.toObject('armor8', 3, 2)
        ]
    },


    /*
     * ■ 랜덤 필드 아이템
     */
    randomLooted: [
        itemPlugin.toObject('etc8', 1, 12),
        itemPlugin.toObject('etc9', 1, 12),
        itemPlugin.toObject('etc10', 1, 12),
        itemPlugin.toObject('etc12', 1, 12),
        itemPlugin.toObject('etc13', 1, 12),
        itemPlugin.toObject('etc14', 1, 12),
        itemPlugin.toObject('etc15', 1, 12),
        itemPlugin.toObject('etc8', 1, 12),
        itemPlugin.toObject('etc9', 1, 12),
        itemPlugin.toObject('etc10', 1, 12),
        itemPlugin.toObject('etc12', 1, 12),
        itemPlugin.toObject('etc13', 1, 12),
        itemPlugin.toObject('etc14', 1, 12),
        itemPlugin.toObject('etc15', 1, 12),
        itemPlugin.toObject('etc8', 1, 12),
        itemPlugin.toObject('etc9', 1, 12),
        itemPlugin.toObject('etc10', 1, 12),
        itemPlugin.toObject('etc12', 1, 12),
        itemPlugin.toObject('etc13', 1, 12),
        itemPlugin.toObject('etc14', 1, 12),
        itemPlugin.toObject('etc15', 1, 12),
        itemPlugin.toObject('etc8', 1, 12),
        itemPlugin.toObject('etc9', 1, 12),
        itemPlugin.toObject('etc10', 1, 12),
        itemPlugin.toObject('etc12', 1, 12),
        itemPlugin.toObject('etc13', 1, 12),
        itemPlugin.toObject('etc14', 1, 12),
        itemPlugin.toObject('etc15', 1, 12),
        itemPlugin.toObject('etc8', 1, 12),
        itemPlugin.toObject('etc9', 1, 12),
        itemPlugin.toObject('etc10', 1, 12),
        itemPlugin.toObject('etc12', 1, 12),
        itemPlugin.toObject('etc13', 1, 12),
        itemPlugin.toObject('etc14', 1, 12),
        itemPlugin.toObject('etc15', 1, 12),
        itemPlugin.toObject('etc8', 1, 12),
        itemPlugin.toObject('etc9', 1, 12),
        itemPlugin.toObject('etc10', 1, 12),
        itemPlugin.toObject('etc12', 1, 12),
        itemPlugin.toObject('etc13', 1, 12),
        itemPlugin.toObject('etc14', 1, 12),
        itemPlugin.toObject('etc15', 1, 12),
        itemPlugin.toObject('heal1', 1, 20),
        itemPlugin.toObject('heal1', 1, 20),
        itemPlugin.toObject('heal1', 1, 20),
        itemPlugin.toObject('heal1', 1, 20),
        itemPlugin.toObject('heal1', 1, 20),
        itemPlugin.toObject('heal1', 1, 20),
        itemPlugin.toObject('weapon98', 0, 20),
        itemPlugin.toObject('weapon99', 0, 23),
        itemPlugin.toObject('weapon114', 0, 23),
        itemPlugin.toObject('weapon100', 0, 18),
        itemPlugin.toObject('weapon62', 0, 20),
        itemPlugin.toObject('armor30', 20, 12),
        itemPlugin.toObject('armor31', 20, 12),
        itemPlugin.toObject('armor32', 10, 5),
        itemPlugin.toObject('armor33', 20, 14),
        itemPlugin.toObject('armor34', 4, 2),
        itemPlugin.toObject('armor34', 4, 2),
        itemPlugin.toObject('armor34', 4, 2),
        itemPlugin.toObject('armor34', 4, 2),
        itemPlugin.toObject('armor34', 4, 2),
        itemPlugin.toObject('armor29', 5, 4),
        itemPlugin.toObject('armor29', 5, 4),
        itemPlugin.toObject('armor35', 3, 3),
        itemPlugin.toObject('armor35', 3, 3),
        itemPlugin.toObject('armor35', 3, 3),
        itemPlugin.toObject('armor36', 5, 5),
        itemPlugin.toObject('armor22', 2, 1),
        itemPlugin.toObject('armor22', 2, 1),
        itemPlugin.toObject('armor27', 3, 4),
        itemPlugin.toObject('armor37', 5, 5),
        itemPlugin.toObject('armor38', 5, 5),
        itemPlugin.toObject('armor39', 5, 4),
        itemPlugin.toObject('armor40', 40, 10),
        itemPlugin.toObject('etc34', 0, 1),
        itemPlugin.toObject('weapon102', 0, 6),
        itemPlugin.toObject('weapon103', 1, 10),
        itemPlugin.toObject('etc20', 1, 1),
        itemPlugin.toObject('etc20', 1, 1),
        itemPlugin.toObject('etc20', 1, 1),
        itemPlugin.toObject('etc20', 1, 1),
        itemPlugin.toObject('etc20', 1, 1),
        itemPlugin.toObject('etc20', 1, 1),
        itemPlugin.toObject('weapon2', 0, 15),
        itemPlugin.toObject('weapon2', 0, 15),
        itemPlugin.toObject('weapon2', 0, 15),
        itemPlugin.toObject('weapon2', 0, 15),
        itemPlugin.toObject('weapon21', 10, 45),
        itemPlugin.toObject('weapon21', 10, 45),
        itemPlugin.toObject('weapon21', 10, 45),
        itemPlugin.toObject('weapon21', 10, 45),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon104', 15, 30),
        itemPlugin.toObject('weapon57', 30, 20),
        itemPlugin.toObject('weapon57', 30, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon57', 30, 20),
        itemPlugin.toObject('weapon57', 30, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon57', 30, 20),
        itemPlugin.toObject('weapon57', 30, 20),
        itemPlugin.toObject('weapon57', 25, 20),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon55', 5, 15),
        itemPlugin.toObject('weapon105', 0, 30),
        itemPlugin.toObject('weapon105', 0, 30),
        itemPlugin.toObject('weapon105', 0, 30),
        itemPlugin.toObject('weapon105', 0, 30),
        itemPlugin.toObject('weapon116', 0, 1),
        itemPlugin.toObject('weapon117', 2, 2),
        itemPlugin.toObject('etc40', 1, 1),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('trap4', 1, 20),
        itemPlugin.toObject('weapon116', 0, 1),
        itemPlugin.toObject('weapon117', 2, 2),
        itemPlugin.toObject('etc40', 1, 1),
        itemPlugin.toObject('weapon116', 0, 1),
        itemPlugin.toObject('weapon117', 2, 2),
        itemPlugin.toObject('etc40', 1, 1),
        itemPlugin.toObject('etc41', 1, 1),
        itemPlugin.toObject('etc41', 1, 1),
        itemPlugin.toObject('etc41', 1, 1),
        itemPlugin.toObject('etc42', 1, 1),
        itemPlugin.toObject('etc42', 1, 1),
        itemPlugin.toObject('etc73', 2, 1),
        itemPlugin.toObject('etc74', 2, 1),
        itemPlugin.toObject('etc73', 2, 1),
        itemPlugin.toObject('etc74', 2, 1),
        itemPlugin.toObject('etc73', 2, 1),
        itemPlugin.toObject('etc74', 2, 1),
        itemPlugin.toObject('etc73', 2, 1),
        itemPlugin.toObject('etc74', 2, 1),
        itemPlugin.toObject('etc73', 2, 1),
        itemPlugin.toObject('etc74', 2, 1),
        itemPlugin.toObject('armor47', 40, 12),
        itemPlugin.toObject('etc43', 1, 1),
        itemPlugin.toObject('etc44', 1, 1),
        itemPlugin.toObject('etc45', 1, 1),
        itemPlugin.toObject('etc46', 1, 1),
        itemPlugin.toObject('etc47', 1, 1),
        itemPlugin.toObject('etc48', 1, 1),
        itemPlugin.toObject('etc43', 1, 1),
        itemPlugin.toObject('etc44', 1, 1),
        itemPlugin.toObject('etc45', 1, 1),
        itemPlugin.toObject('etc46', 1, 1),
        itemPlugin.toObject('etc47', 1, 1),
        itemPlugin.toObject('etc48', 1, 1),
        itemPlugin.toObject('weapon67', 0, 15),
        itemPlugin.toObject('weapon67', 0, 15),
        itemPlugin.toObject('weapon67', 0, 15),
        itemPlugin.toObject('weapon67', 0, 15),
        itemPlugin.toObject('weapon67', 0, 15),
        itemPlugin.toObject('armor48', 20, 15),
        itemPlugin.toObject('etc17', 0, 1),
        itemPlugin.toObject('etc49', 1, 1),
        itemPlugin.toObject('etc50', 1, 1),
        itemPlugin.toObject('etc51', 1, 1),
        itemPlugin.toObject('etc52', 1, 1),
        itemPlugin.toObject('etc53', 1, 1),
        itemPlugin.toObject('etc54', 1, 1),
        itemPlugin.toObject('etc55', 1, 1),
        itemPlugin.toObject('etc55', 1, 1),
        itemPlugin.toObject('etc55', 1, 1),
        itemPlugin.toObject('etc55', 1, 1),
        itemPlugin.toObject('etc55', 1, 1),
        itemPlugin.toObject('weapon118', 5, 15),
        itemPlugin.toObject('weapon118', 5, 15),
        itemPlugin.toObject('weapon118', 5, 15),
        itemPlugin.toObject('weapon118', 5, 15),
        itemPlugin.toObject('weapon118', 5, 15),
        itemPlugin.toObject('weapon118', 5, 15),
        itemPlugin.toObject('weapon119', 70, 2),
        itemPlugin.toObject('etc56', 3, 1),
        itemPlugin.toObject('etc56', 3, 1),
        itemPlugin.toObject('etc56', 3, 1),
        itemPlugin.toObject('etc56', 3, 1),
        itemPlugin.toObject('etc56', 3, 1),
        itemPlugin.toObject('stamina19', 1, 50),
        itemPlugin.toObject('stamina19', 1, 50),
        itemPlugin.toObject('stamina19', 1, 50),
        itemPlugin.toObject('stamina19', 1, 50),
        itemPlugin.toObject('stamina19', 1, 50),
        itemPlugin.toObject('heal5', 5, 5),
        itemPlugin.toObject('weapon120', 1, 3),
        itemPlugin.toObject('weapon120', 1, 3),
        itemPlugin.toObject('weapon120', 1, 3),
        itemPlugin.toObject('weapon120', 1, 3),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('etc57', 1, 1),
        itemPlugin.toObject('trap6', 1, 1, ['deploy']),
        itemPlugin.toObject('trap6', 1, 1, ['deploy']),
        itemPlugin.toObject('trap6', 1, 1, ['deploy']),
        itemPlugin.toObject('weapon121', 0, 25),
        itemPlugin.toObject('weapon122', 1, 3),
        itemPlugin.toObject('weapon123', 1, 2),
        itemPlugin.toObject('weapon124', 1, 2),
        itemPlugin.toObject('weapon125', 1, 3),
        itemPlugin.toObject('weapon126', 1, 5),
        itemPlugin.toObject('etc58', 1, 1),
        itemPlugin.toObject('etc59', 1, 1),
        itemPlugin.toObject('etc59', 1, 1),
        itemPlugin.toObject('etc59', 1, 1),
        itemPlugin.toObject('etc59', 1, 1)
    ],


    getInfo: function (itemId) {
        if (itemId instanceof Array) {
            var result = {};
            for (var i in itemId) {
                var item = this.getInfo(itemId[i]);
                if (typeof item !== 'undefined') {
                    result[itemId[i]] = item;
                }
            }

            return result;
        } else {
            return this.items[itemId];
        }
    },

    getRandomSupply: function () {
        var randomId = Math.floor(Math.random() * (this.supplyItems.length));
        return this.supplyItems[randomId];
    },

    getRandomPersonal: function () {
        var randomId = Math.floor(Math.random() * (this.personalItems.length));
        return this.personalItems[randomId];
    }
};