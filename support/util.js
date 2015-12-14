/**
 * Created by monoless on 2015-12-08.
 */
module.exports = (function () {
    var gameConfig = {};


    /**
     * 설정값 추가
     *
     * @param config
     */
    function setGameConfig(config) {
        gameConfig = config;
    }


    /**
     * 스킬 설명
     *
     * @returns {{}}
     */
    function getSkills() {
        return gameConfig.skills;
    }


    /**
     * 전략 설명
     *
     * @returns {Array}
     */
    function getTactics() {
        return gameConfig.tactics;
    }


    /**
     * 공격 기본수치
     *
     * @returns {number}
     */
    function getAttack() {
        return gameConfig.attack;
    }


    /**
     * 방어 기본수치
     *
     * @returns {number}
     */
    function getDefence() {
        return gameConfig.defence;
    }


    /**
     * 체력 기본수치
     *
     * @returns {number}
     */
    function getHealth() {
        return gameConfig.health;
    }


    /**
     * 공격 기본수치 증가치
     *
     * @returns {number}
     */
    function getAttackMaxIncrease() {
        return gameConfig.attackMaxIncrease;
    }


    /**
     * 방어 기본수치 증가치
     *
     * @returns {number}
     */
    function getDefenceMaxIncrease() {
        return gameConfig.defenceMaxIncrease;
    }


    /**
     * 체력 기본수치 증가치
     *
     * @returns {number}
     */
    function getHealthMaxIncrease() {
        return gameConfig.healthMaxIncrease;
    }


    /**
     * 스테미너 기본수치
     *
     * @returns {number}
     */
    function getMaxStamina() {
        return gameConfig.maxStamina;
    }


    /**
     * 레벨당 경험치
     *
     * @returns {number}
     */
    function getExpPerLevel() {
        return gameConfig.expPerLevel;
    }


    /**
     * 레벨당 경험치 증가치
     *
     * @returns {number}
     */
    function getExpIncrease() {
        return gameConfig.expIncrease;
    }


    /**
     * 동아리
     *
     * @returns {Array}
     */
    function getClubs() {
        return gameConfig.clubs;
    }


    /**
     * 학급명 리턴
     *
     * @returns {Array}
     */
    function getGroups() {
        return gameConfig.groups;
    }


    /**
     * 최대 학급 수 리턴
     *
     * @returns {number}
     */
    function getMaxGroups() {
        return gameConfig.maxGroups;
    }


    /**
     * 학급당 최대 남학생(여학생) 후
     *
     * @return {number}
     */
    function getGroupPerMan() {
        return gameConfig.groupPerMan;
    }


    /**
     * 가입기간
     *
     * @returns {number}
     */
    function getMaxRecruitTime() {
        return gameConfig.maxRecruitTime;
    }


    /**
     * 최대 가입자 수 제한
     *
     * @returns {number}
     */
    function getMaxRecruitMember() {
        return gameConfig.maxRecruitMember;
    }


    /**
     * 스킬 경험치 리턴
     *
     * @returns {number}
     */
    function getExpPerSkillLevel() {
        return gameConfig.expPerSkillLevel;
    }


    /**
     * 캐릭터 재생성 시간
     *
     * @returns {number}
     */
    function getRespawnTime() {
        return gameConfig.respawnTime;
    }


    /**
     * 지역 정보 리턴
     *
     * @returns {{}}
     */
    function getPlaces() {
        return gameConfig.places;
    }


    /**
     * 지역 대사 리턴
     *
     * @param placeId
     * @returns {string}
     */
    function getPlaceMessage(placeId) {
        return gameConfig.places[placeId].message;
    }


    /**
     * 지역 스텟
     *
     * @param placeId
     * @returns {string}
     */
    function getPlaceSpecialize(placeId) {
        return gameConfig.places[placeId].specialize;
    }


    /**
     * 아이콘 정보 리턴
     *
     * @returns {Array}
     */
    function getIcons() {
        return gameConfig.icons;
    }


    /**
     * 아이템 리턴
     *
     * @param itemId
     * @returns {{}}
     */
    function getItem(itemId) {
        if (itemId instanceof Array) {
            var result = {};
            for (var i in itemId) {
                var item = getItem(itemId[i]);
                if (typeof item !== 'undefined') {
                    result[itemId[i]] = item;
                }
            }

            return result;
        } else {
            return gameConfig.items[itemId];
        }
    }


    /**
     * 주사위 (랜덤)
     *
     * @param maxValue
     * @returns {number}
     */
    function dice(maxValue) {
        return Math.floor(Math.random() * maxValue);
    }


    /**
     * 아이템 랜덤으로 뽑아오기
     *
     * @param itemList
     * @returns {{}}
     */
    function getRandomItem(itemList) {
        var itemLength = itemList.length;
        var itemId = itemList[dice(itemLength)];

        return getItem(itemId);
    }


    /**
     * 보급 아이템
     *
     * @returns {Array}
     */
    function getSupplyItems() {
        return gameConfig.supplyItems;
    }


    /**
     * 개인 아이템
     *
     * @returns {Array}
     */
    function getPersonalItems() {
        return gameConfig.personalItems;
    }


    /**
     * 포인트 랜덤으로 더하기
     *
     * @param basic
     * @param random
     * @returns {number}
     */
    function getPoint(basic, random) {
        return dice(random) + basic;
    }


    /**
     * 이동 스테미너 계산
     *
     * @param clubId
     * @param injured
     * @returns {number}
     */
    function moveConsumeStamina(clubId, injured) {
        var result = 0;
        if (-1 !== injured.indexOf('foot')) {
            result = dice(5) + 13;
        } else if (10 == clubId) {
            result = dice(5) + 5;
        } else {
            result = dice(5) + 8;
        }

        return result;
    }


    /**
     * 탐색 스테미너 계산
     *
     * @param clubId
     * @param injured
     * @returns {number}
     */
    function exploreConsumeStamina(clubId, injured) {
        var result = 0;
        if (-1 !== injured.indexOf('foot')) {
            result = dice(5) + 23;
        } else if (10 == clubId) {
            result = dice(5) + 13;
        } else {
            result = dice(5) + 18;
        }

        return result;
    }


    /**
     * 동아리에 따른 능력치 결정
     *
     * @param clubId
     * @returns {{cutSkill: number, throwSkill: number, fistSkill: number, meleeSkill: number, bombSkill: number, pokeSkill: number, bowSkill: number, shotSkill: number}}
     */
    function getSkillByClubId(clubId) {
        var expPerSkillLevel = getExpPerSkillLevel();
        var result = {
            cutSkill: 0,
            throwSkill: 0,
            fistSkill: 0,
            meleeSkill: 0,
            bombSkill: 0,
            pokeSkill: 0,
            bowSkill: 0,
            shotSkill: 0
        };

        if (0 === clubId) {
            // 궁도부
            result.bowSkill = expPerSkillLevel * 2;
            result.shotSkill = expPerSkillLevel / 2;
        } else if (1 === clubId) {
            // 사격부
            result.shotSkill = expPerSkillLevel * 2;
            result.bowSkill = expPerSkillLevel / 2;
        } else if (2 === clubId) {
            // 검도부
            result.cutSkill = expPerSkillLevel * 2;
            result.pokeSkill = expPerSkillLevel / 2;
            result.meleeSkill = expPerSkillLevel / 4;
        } else if (3 === clubId) {
            // 펜싱부
            result.pokeSkill = expPerSkillLevel * 2;
        } else if (4 === clubId || 5 === clubId) {
            // 태권도부 / 복싱부
            result.meleeSkill = expPerSkillLevel * 2;
        } else if (6 === clubId || 7 === clubId) {
            // 농구부 / 배구부
            result.throwSkill = expPerSkillLevel * 2;
            result.bombSkill = expPerSkillLevel / 4;
        } else if (8 === clubId) {
            // 야구부
            result.meleeSkill = expPerSkillLevel * 2;
            result.throwSkill = expPerSkillLevel / 2;
            result.bombSkill = expPerSkillLevel / 4;
        } else if (9 === clubId) {
            // 화학부
            result.bombSkill = expPerSkillLevel * 2;
        } else if (11 === clubId) {
            // 연극부
            var skillMap = [0, 0, 0, 0, 0, 0, 0, 0];
            skillMap[dice(8)] = expPerSkillLevel * 2;

            result.cutSkill = skillMap[0];
            result.throwSkill = skillMap[1];
            result.fistSkill = skillMap[2];
            result.meleeSkill = skillMap[3];
            result.bombSkill = skillMap[4];
            result.pokeSkill = skillMap[5];
            result.bowSkill = skillMap[6];
            result.shotSkill = skillMap[7];
        } else if (13 === clubId) {
            // 요리부
            result.cutSkill = expPerSkillLevel / 2;
        }

        return result;
    }


    /**
     * 보급 아이템 추가 설정
     *
     * @param supplyWeapon
     * @param personalItem
     * @returns {{item0: {idx: *, point: *, endurance: *}, item1: {idx: *, point: *, endurance: *}, item2: {idx: string, point: number, endurance: number}, item3: {idx: string, point: number, endurance: number}, item4: {}, item5: {}}}
     */
    function appendSupplyItem(supplyWeapon, personalItem) {
        var result = {
            item0: {idx: supplyWeapon.id, point: supplyWeapon.point, endurance: supplyWeapon.endurance},
            item1: {idx: personalItem.id, point: personalItem.point, endurance: personalItem.endurance},
            item2: {idx: 'stamina17', point: 20, endurance: 2},
            item3: {idx: 'heal1', point: 20, endurance: 2},
            item4: {idx: '', point: 0, endurance: 0},
            item5: {idx: '', point: 0, endurance: 0}
        };

        if ('weapon' === supplyWeapon.equip && '12gauge' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc8', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && '9mm' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc9', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && '22lr' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc10', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && '357mag' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc12', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && '38special' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc13', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && '45acp' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc14', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && 'apostle' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc15', point: 24, endurance: 1};
        } else if ('weapon' === supplyWeapon.equip && 'bow' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc16', point: 24, endurance: 1};
        }

        return result;
    }


    /**
     * 장소 관련된 정보 노출 최소화
     *
     * @returns {Array}
     */
    function arrangePlaceInfo() {
        var result = [];
        var places = getPlaces();
        var placeArrange = gameConfig.placeArrange;
        for (var i in placeArrange) {
            var idx = placeArrange[i];
            var place = places[idx];
            result.push({
                idx: idx,
                name: place.name,
                code: place.code,
                restrict: place.restrict,
                restrictReserve: place.restrictReserve
            });
        }

        return result;
    }


    /**
     * 게임 패킷 정보 정리
     *
     * @param queueId
     * @param eventName
     * @param eventResult
     * @param eventLog
     * @param packetData
     * @returns {{}}
     */
    function setReceivePacket(queueId, eventName, eventResult, eventLog, packetData) {
        if (queueId) {
            packetData.queueId = queueId;
        }
        packetData.type = eventName;
        packetData.result = eventResult;
        packetData.log = eventLog;
        packetData.place = arrangePlaceInfo();
        packetData.config = {
            expPerSkillLevel: getExpPerSkillLevel(),
            skills: getSkills(),
            tactics: getTactics()
        };

        if (typeof packetData.account != 'undefined') {
            packetData.itemList = getItem([
                packetData.account.weapon.idx,
                packetData.account.armor.head.idx,
                packetData.account.armor.body.idx,
                packetData.account.armor.arm.idx,
                packetData.account.armor.foot.idx,
                packetData.account.armor.accessory.idx,
                packetData.account.item0.idx,
                packetData.account.item1.idx,
                packetData.account.item2.idx,
                packetData.account.item3.idx,
                packetData.account.item4.idx,
                packetData.account.item5.idx
            ]);
        }

        return packetData;
    }


    function getBattleRate(tactics, placeId, injured) {
        var result = {
            find: 5,    // 적, 아이템 발견율
            ambush: 7,  // 선제공격율
            attack: 1.00,   // 공격율
            defence: 1.00   // 방어율
        };

        if (1 == tactics) {
            // 공격중시
            result.attack += 0.4;
            result.defence -= 0.4;
        } else if (2 == tactics) {
            // 방어중시
            result.attack -= 0.4;
            result.defence += 0.4;
            result.ambush -= 4;
        } else if (3 == tactics) {
            // 은밀행동
            result.attack -= 0.4;
            result.defence -= 0.4;
            result.find -= 4;
            result.ambush += 4;
        } else if (4 == tactics) {
            // 탐색행동
            result.attack -= 0.4;
            result.defence -= 0.4;
            result.find += 4;
            result.ambush += 4;
        } else if (5 == tactics) {
            // 연속공격
            result.defence -= 0.4;
            result.find += 6;
        }

        var merged = getBattleRateByPlace(placeId, result.attack, result.defence, result.find);
        result.attack = merged.attack;
        result.defence = merged.defence;
        result.find = merged.find;

        if (-1 !== injured.indexOf('arm')) {
            result.attack -= 0.2;
        }

        return result;
    }


    function getBattleRateByPlace(placeId, attack, defence, find) {
        var specialize = getPlaceSpecialize('place' + placeId);
        var result = {
            attack:attack,
            defence:defence,
            find:find
        };

        if ('attack_plus' === specialize) {
            result.attack += 0.1;
        } else if ('attack_minus' === specialize) {
            result.attack -= 0.1;
        } else if ('defence_plus' === specialize) {
            result.defence += 0.1;
        } else if ('defence_minus' === specialize) {
            result.defence -= 0.1;
        } else if ('find_plus' === specialize) {
            result.find += 1;
        } else if ('find_minus' === specialize) {
            result.find -= 1;
        }

        return result;
    }
    /*
     $chkpnt = 5 ;   #적, 아이템 발견율
     $chkpnt2 = 7 ;  #선제공격율
     $atp = 1.00 ;
     $dfp = 1.00 ;

     local($kind) = $w_kind ;
     local($wmei) = 0;
     local($wweps) = "" ;

     if (($kind =~ /B/) || (($kind =~ /G|A/) && ($wtai == 0))) { #棍棒 or ?無し銃 or 矢無し弓
     $wweps = "S" ;
     $wmei = 80 ;
     $wmei += int($wb/$BASE);
     } elsif ($kind =~ /A/) {        #射
     $wweps = "L" ;
     $wmei = 60 ;
     $wmei += int($wa/$BASE*2);
     }elsif ($kind =~ /C/) { #投
     $wweps = "L" ;
     $wmei = 70 ;
     $wmei += int($wc/$BASE*1.5);
     }elsif ($kind =~ /D/) { #爆
     $wweps = "L" ;
     $wmei = 60 ;
     $wmei += int($wd/$BASE*2);
     }elsif ($kind =~ /G/) { #銃
     $wweps = "L" ;
     $wmei = 60 ;
     $wmei += int($wg/$BASE*2);
     }elsif ($kind =~ /N/) { #斬
     $wweps = "S" ;
     $wmei = 80 ;
     $wmei += int($wn/$BASE);
     }elsif ($kind  =~ /S/) {    #刺
     $wweps = "S" ;
     $wmei = 80 ;
     $wmei += int($ws/$BASE);
     } else {    #手
     $wweps = "S" ;
     $wmei = 70 ;
     $wmei += int($wp/$BASE*1.5);
     }

     $weps = $wweps ;
     $mei = $wmei ;

     if ( $wmei > 95 ) { $wmei = 95; }
     if ($inf =~ /頭/) { $mei -= 20; }   // head
     */


    return {
        dice: dice,
        getRandomItem: getRandomItem,
        getPoint: getPoint,
        getSkillByClubId: getSkillByClubId,
        appendSupplyItem: appendSupplyItem,
        arrangePlaceInfo: arrangePlaceInfo,
        setGameConfig: setGameConfig,
        getExpPerSkillLevel: getExpPerSkillLevel,
        getRespawnTime: getRespawnTime,
        getGroups: getGroups,
        getMaxGroups: getMaxGroups,
        getMaxRecruitMember: getMaxRecruitMember,
        getMaxRecruitTime: getMaxRecruitTime,
        getGroupPerMan: getGroupPerMan,
        getPlaces: getPlaces,
        getItem: getItem,
        getSupplyItems: getSupplyItems,
        getPersonalItems: getPersonalItems,
        getIcons: getIcons,
        getClubs: getClubs,
        getAttack: getAttack,
        getDefence: getDefence,
        getHealth: getHealth,
        getAttackMaxIncrease: getAttackMaxIncrease,
        getDefenceMaxIncrease: getDefenceMaxIncrease,
        getHealthMaxIncrease: getHealthMaxIncrease,
        getMaxStamina: getMaxStamina,
        getExpPerLevel: getExpPerLevel,
        getExpIncrease: getExpIncrease,
        getSkills: getSkills,
        getTactics: getTactics,
        setReceivePacket: setReceivePacket,
        getPlaceMessage: getPlaceMessage,
        moveConsumeStamina: moveConsumeStamina,
        exploreConsumeStamina: exploreConsumeStamina
    };
})();