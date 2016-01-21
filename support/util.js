/**
 * Created by monoless on 2015-12-08.
 */
module.exports = (function () {
    /**
     * 체력 상태 출력
     *
     * @param maxHealth
     * @param health
     * @returns {number}
     */
    function getHealthStatus(maxHealth, health) {
        var statusId = 0;
        var percent = 100;
        if (0 < maxHealth) {
            percent = health * 100 / maxHealth;
            if (percent > 60) {
                statusId = 0;
            } else if (percent > 30) {
                statusId = 1;
            } else if (percent > 10) {
                statusId = 2;
            } else if (percent > 0) {
                statusId = 3;
            } else if (percent <= 0) {
                statusId = 4;
            }
        } else {
            statusId = 4;
        }

        return statusId;
    }


    /**
     * 기본 적 발견율
     *
     * @returns {number}
     */
    function getPersonSearch(tactics, level, killCount) {
        var personSearch = 60;
        var maxPersonSearch = 90;
        if (5 == tactics) {
            // 연속공격시 레벨/2+킬수/2만큼 적 발견율 상승
            personSearch += parseInt((level + killCount) / 2);
            if (maxPersonSearch < personSearch) {
                personSearch = maxPersonSearch;
            }
        }

        return personSearch;
    }


    /**
     * 초당 스테미너 회복
     *
     * @param second
     * @param interval
     * @param increase
     * @returns {Number}
     */
    function getRecoverStamina(second, interval, increase) {
        return Math.floor((second / interval) * increase);
    }


    /**
     * 초당 체력 회복
     *
     * @param second
     * @param interval
     * @param increase
     * @returns {Number}
     */
    function getRecoverHealth(second, interval, increase) {
        return Math.floor((second / interval) * increase);
    }


    /**
     * 아이템 종류에 따른 아이템 슬롯 리턴
     *
     * @param items
     * @param equipType
     * @param item0
     * @param item1
     * @param item2
     * @param item3
     * @param item4
     * @param item5
     * @returns {null|string}
     */
    function findItemSlotByEquip(items, equipType, item0, item1, item2, item3, item4, item5) {
        var resultSlot = null;
        var inventories = [item0, item1, item2, item3, item4, item5];
        for (var i in inventories) {
            var itemInfo = items.getInfo(inventories[i].idx);
            if (typeof itemInfo !== 'undefined' && equipType === itemInfo.equip) {
                resultSlot = 'item' + i;
                break;
            }
        }

        return resultSlot;
    }


    /**
     * 회복 상태 출력
     *
     * @param target
     * @param staminaRecoverInterval
     * @param staminaRecoverIncrease
     * @param healthRecoverInterval
     * @param healthRecoverIncrease
     * @param maxStamina
     * @returns {string}
     */
    function setRecover(target, staminaRecoverInterval, staminaRecoverIncrease, healthRecoverInterval,
                        healthRecoverIncrease, maxStamina) {
        var currentTime = Date.now();
        var activeTime = new Date(target.statusChangedAt).getTime();
        if (isNaN(activeTime)) {
            activeTime = currentTime;
        }

        var recover = 0;
        var recoverTime = Math.abs(Math.floor((currentTime - activeTime) / 1000));
        var recoverLog = '';
        if (5 === target.status && recoverTime > 0) {
            recover = getRecoverHealth(recoverTime, healthRecoverInterval, healthRecoverIncrease);
            recoverLog = '치료 결과, 체력이 ' + recover + ' 회복 되었다.';
            target.health += recover;
            if (target.maxHealth < target.health) {
                target.health = target.maxHealth;
            }
        } else if (6 === target.status && recoverTime > 0) {
            recover = getRecoverStamina(recoverTime, staminaRecoverInterval, staminaRecoverIncrease);
            if (recover > 0 && -1 !== target.injured.indexOf('body')) {
                target = parseInt(recover / 2);
            }

            recoverLog = '수면 결과, 스테미너가 ' + recover + ' 회복 되었다.';
            target.stamina += recover;
            if (maxStamina < target.stamina) {
                target.stamina = maxStamina;
            }
        }

        target.statusChangedAt = new Date();
        return recoverLog;
    }


    /**
     * 빈슬롯 찾기
     *
     * @param item0
     * @param item1
     * @param item2
     * @param item3
     * @param item4
     * @param item5
     * @returns {null|string}
     */
    function getEmptyItemSlot(item0, item1, item2, item3, item4, item5) {
        var inventories = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5'];
        var slots = {
            item0: item0,
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
            item5: item5
        };

        var returnSlot = null;
        for (var i in inventories) {
            var current = slots[inventories[i]];
            if ('' === current.idx) {
                returnSlot = inventories[i];
                break;
            }
        }

        return returnSlot;
    }


    /**
     * 아이템 합성
     *
     * @param mixItems
     * @param itemFrom
     * @param itemTo
     */
    function getMixItem(mixItems, itemFrom, itemTo) {
        var result = null;
        for (var i in mixItems) {
            var entry = mixItems[i];
            if (-1 !== entry.material.indexOf(itemFrom) && -1 !== entry.material.indexOf(itemTo)) {
                result = entry.result;
                break;
            }
        }

        return result;
    }


    /**
     * 아이템ID로 슬롯 찾기
     *
     * @param itemId
     * @param item0
     * @param item1
     * @param item2
     * @param item3
     * @param item4
     * @param item5
     * @returns {null|string}
     */
    function findItemSlotById(itemId, item0, item1, item2, item3, item4, item5) {
        var inventories = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5'];
        var slots = {
            item0: item0,
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
            item5: item5
        };

        var returnSlot = null;
        for (var i in inventories) {
            var current = slots[inventories[i]];
            if (itemId === current.idx) {
                returnSlot = inventories[i];
                break;
            }
        }

        return returnSlot;
    }


    /**
     * 주사위 (랜덤)
     *
     * @param maxValue
     * @returns {number}
     */
    function dice(maxValue) {
        return Math.floor(Math.random() * (maxValue + 1));
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
            result = dice(5) + 8;
        } else if (10 == clubId) {
            result = dice(5);
        } else {
            result = dice(5) + 3;
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
            result = dice(5) + 18;
        } else if (10 == clubId) {
            result = dice(5) + 8;
        } else {
            result = dice(5) + 13;
        }

        return result;
    }


    /**
     * 공격 퍼센트 계산
     *
     * @param attack
     * @param weaponPoint
     * @param command
     * @returns {Number}
     */
    function getAttackPercent(attack, weaponPoint, command) {
        var result = (weaponPoint + attack) * attack;
        if ('meleeSkill' == command) {
            result = (parseInt(weaponPoint / 10) + attack) * attack;
        }

        return parseInt(result / 100);
    }


    /**
     * 방어 퍼센트 계산
     *
     * @param defence
     * @param headPoint
     * @param bodyPoint
     * @param armPoint
     * @param footPoint
     * @param accessoryPoint
     * @returns {Number}
     */
    function getDefencePercent(defence, headPoint, bodyPoint, armPoint, footPoint, accessoryPoint) {
        var result = (defence + headPoint + bodyPoint + armPoint + footPoint + accessoryPoint) * defence;

        return parseInt(result / 100);
    }


    /**
     * 동아리에 따른 능력치 결정
     *
     * @param clubId
     * @param expPerSkillLevel
     * @returns {{cutSkill: number, throwSkill: number, fistSkill: number, meleeSkill: number, bombSkill: number, pokeSkill: number, bowSkill: number, shotSkill: number}}
     */
    function getSkillByClubId(clubId, expPerSkillLevel) {
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
            item2: {idx: 'stamina17', point: 40, endurance: 2},
            item3: {idx: 'heal1', point: 20, endurance: 2},
            item4: {idx: '', point: 0, endurance: 0},
            item5: {idx: '', point: 0, endurance: 0}
        };

        if ('weapon' === supplyWeapon.equip && '12gauge' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc8', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && '9mm' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc9', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && '22lr' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc10', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && '357mag' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc12', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && '38special' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc13', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && '45acp' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc14', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && 'apostle' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc15', endurance: 24, point: 1};
        } else if ('weapon' === supplyWeapon.equip && 'bow' === supplyWeapon.ammoType) {
            result.item4 = {idx: 'etc16', endurance: 24, point: 1};
        }

        return result;
    }


    /**
     * 데미지 계산
     *
     * @param items
     * @param userAttack
     * @param userDamage
     * @param enemyDefence
     * @param skillName
     * @param armorBody
     * @param armorHead
     * @param armorAccessory
     * @returns {number}
     */
    function getTotalDamage(items, userAttack, userDamage, enemyDefence, skillName, armorBody, armorHead,
                            armorAccessory) {
        var result = parseInt(userAttack * userDamage / 100) - enemyDefence;
        result /= 2;
        result += dice(result);

        var equipBuff = getEquipCounter(
            items,
            skillName,
            armorBody,
            armorHead,
            armorAccessory
        );

        result = parseInt(result * equipBuff / 100);
        if (result <= 0) {
            result = 1;
        }

        return result;
    }


    /**
     * 프로그램 최저 개최일수
     *
     * @param minimumBattleTime
     * @param gameStart
     * @returns {boolean}
     */
    function isBattleOver(minimumBattleTime, gameStart) {
        return (Date.now() - gameStart.getTime()) > minimumBattleTime;
    }


    /**
     * 경험치 계산
     *
     * @param userLevel
     * @param enemyLevel
     * @returns {number}
     */
    function getBattleExp(userLevel, enemyLevel) {
        var levelDiff = enemyLevel - userLevel;
        if (0 > levelDiff) {
            levelDiff = 0;
        }

        return parseInt(levelDiff / 2) + 1;
    }


    /**
     * 레벨 상승 이벤트
     *
     * @param level
     * @param maxHealth
     * @param attack
     * @param defence
     * @param requireExp
     * @param expPerLevel
     * @param expIncrease
     * @returns {{status: boolean, maxHealth: *, attack: *, defence: *, level: *, requireExp: number}}
     */
    function setLevelUp(level, maxHealth, attack, defence, requireExp, expPerLevel, expIncrease) {
        var result = {
            status: false,
            maxHealth: maxHealth,
            attack: attack,
            defence: defence,
            level: level,
            requireExp: requireExp
        };

        if (0 >= requireExp) {
            result.status = true;
            result.maxHealth += dice(3) + 7;
            result.attack += dice(3) + 2;
            result.defence += dice(3) + 2;
            result.level++;
            result.requireExp = expPerLevel + expIncrease * result.level;
        }

        return result;
    }


    /**
     * 부상부위 결정
     *
     * @param injured
     * @param part
     * @returns {[]}
     */
    function setInjured(injured, part) {
        if ('' !== part && -1 === injured.indexOf(part)) {
            injured.push(part);
        }

        return injured;
    }


    /**
     * 아이템 소모 결정
     *
     * @param item
     * @param quantity
     * @returns {{}}
     */
    function setConsumeItem(item, quantity) {
        if (typeof quantity === 'undefined') {
            item.endurance--;
        } else {
            item.endurance -= quantity;
        }

        if (0 >= item.endurance) {
            item = {idx: '', endurance: 0, point: 0};
        }

        return item;
    }


    /**
     * 전체 패킷 전송
     *
     * @param socket
     * @param placeId
     * @param placeName
     * @param broadType
     * @param broadUser
     * @param broadMessage
     */
    function broadcastToAll(socket, placeId, placeName, broadType, broadUser, broadMessage) {
        var result = {
            type: 'broadcast',
            log: '',
            except: broadUser
        };

        if ('shot' === broadType) {
            result.log = [
                '<strong style="color:#ffff00;">',
                placeName,
                ' 쪽에서, 총성이 들렸다...</strong>'
            ].join('');
            socket.broadcast.emit('recv', result);
        } else if ('bomb' === broadType) {
            result.log = [
                '<strong style="color:#ffff00;">',
                placeName,
                ' 쪽에서, 폭발소리가 들렸다...</strong>'
            ].join('');
            socket.broadcast.emit('recv', result);
        } else if ('killed' === broadType) {
            result.log = '<strong style="color:#ffff00;">근처에서 비명이? 누군가, 죽은 것인가...?</strong>';
            socket.broadcast.to(placeId).emit('recv', result);
        } else if ('speaker' === broadType) {
            result.log = [
                '<strong style="color:#ffff00;">',
                placeName,
                ' 쪽에서 ',
                broadUser,
                '의 목소리가 들렸다...</strong><br /><strong style="color:#00ff00;">『',
                broadMessage,
                '』</strong>'
            ].join('');
            socket.broadcast.emit('recv', result);
        }
    }


    /**
     * 사망내용 대상자 전송
     *
     * @param items
     * @param io
     * @param expPerSkillLevel
     * @param skills
     * @param tactics
     * @param staminaRecoverInterval
     * @param staminaRecoverIncrease
     * @param healthRecoverInterval
     * @param healthRecoverIncrease
     * @param victim
     */
    function deathInfoToVictim(items, io, expPerSkillLevel, skills, tactics, staminaRecoverInterval,
                               staminaRecoverIncrease, healthRecoverInterval, healthRecoverIncrease, victim) {
        var res = {
            type: 'killed',
            account: victim,
            config: {
                expPerSkillLevel: expPerSkillLevel,
                skills: skills,
                tactics: tactics,
                staminaRecoverInterval: staminaRecoverInterval,
                staminaRecoverIncrease: staminaRecoverIncrease,
                healthRecoverInterval: healthRecoverInterval,
                healthRecoverIncrease: healthRecoverIncrease
            },
            itemList: [],
            log: [
                '<strong class="red">',
                victim.username,
                '(',
                victim.groupName,
                ' ',
                0 == victim.userGender ? '남자' : '여자',
                victim.studentNo,
                '번)은(는) 사망했다.</strong>'
            ].join('')
        };

        var itemList = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5'];
        for (var i in itemList) {
            res.account[itemList[i]].point = Math.abs(victim[itemList[i]].point);
        }

        res.itemList = items.getInfo([
            victim.weapon.idx,
            victim.armor.head.idx,
            victim.armor.body.idx,
            victim.armor.arm.idx,
            victim.armor.foot.idx,
            victim.armor.accessory.idx,
            victim.item0.idx,
            victim.item1.idx,
            victim.item2.idx,
            victim.item3.idx,
            victim.item4.idx,
            victim.item5.idx
        ]);

        io.in(victim.username).emit('recv', res);
    }


    /**
     * broadcast attack
     *
     * @param items
     * @param socket
     * @param expPerSkillLevel
     * @param skills
     * @param tactics
     * @param staminaRecoverInterval
     * @param staminaRecoverIncrease
     * @param healthRecoverInterval
     * @param healthRecoverIncrease
     * @param victim
     * @param assault
     * @param damagePoint
     * @param counterPoint
     * @param counterResult
     */
    function battleInfoToVictim(items, socket, expPerSkillLevel, skills, tactics, staminaRecoverInterval,
                                staminaRecoverIncrease, healthRecoverInterval, healthRecoverIncrease, victim, assault,
                                damagePoint, counterResult, counterPoint) {
        var currentDate = new Date();
        var hour = currentDate.getHours();
        var min = currentDate.getMinutes();
        var sec = currentDate.getSeconds();
        if (10 > hour) {
            hour = '0' + hour;
        }

        if (10 > min) {
            min = '0' + min;
        }

        if (10 > sec) {
            sec = '0' + sec;
        }

        var res = {
            type: 'attackBroadcast',
            account: victim,
            config: {
                expPerSkillLevel: expPerSkillLevel,
                skills: skills,
                tactics: tactics,
                staminaRecoverInterval: staminaRecoverInterval,
                staminaRecoverIncrease: staminaRecoverIncrease,
                healthRecoverInterval: healthRecoverInterval,
                healthRecoverIncrease: healthRecoverIncrease
            },
            itemList: [],
            log: [
                '<strong style="color:#ffff00;">',
                hour,
                ':',
                min,
                ':',
                sec,
                ' 전투:',
                assault.username,
                '(',
                assault.groupName,
                ' ',
                0 == assault.userGender ? '남자' : '여자',
                assault.studentNo,
                '번) 공격:',
                damagePoint
            ]
        };

        var itemList = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5'];
        for (var i in itemList) {
            res.account[itemList[i]].point = Math.abs(res.account[itemList[i]].point);
        }

        res.itemList = items.getInfo([
            res.account.weapon.idx,
            res.account.armor.head.idx,
            res.account.armor.body.idx,
            res.account.armor.arm.idx,
            res.account.armor.foot.idx,
            res.account.armor.accessory.idx,
            res.account.item0.idx,
            res.account.item1.idx,
            res.account.item2.idx,
            res.account.item3.idx,
            res.account.item4.idx,
            res.account.item5.idx
        ]);

        if (typeof counterPoint !== 'undefined') {
            res.log.push(' 피해:');
            res.log.push(counterPoint);
        }

        if (typeof counterResult !== 'undefined') {
            res.log.push([
                true === counterResult.weaponDestroy ? ' 무기손상' : '',
                '' !== counterResult.injured ? {
                    head: ' 머리 부상',
                    arm: ' 팔 부상',
                    body: ' 복부 부상',
                    foot: ' 다리 부상'
                }[counterResult.injured] : '',
                true === counterResult.critical ? ' 크리티컬' : ''
            ].join(''));
        }

        res.log.push('</strong>');
        res.log = res.log.join('');
        socket.to(victim.username).emit('recv', res);
    }


    /**
     * 전투 계산
     *
     * @param items
     * @param user
     * @param skillType
     * @param enemy
     * @param strikeBack
     * @param expPerSkillLevel
     * @param eventLog
     * @returns {{damage: number, critical: boolean, injured: string, alert: boolean, weaponDestroy: boolean, eventLog: [], user: {}, enemy: {}}}
     */
    function getBattleResult(items, user, skillType, enemy, strikeBack, expPerSkillLevel, eventLog) {
        var res = {
            damage: 0,
            critical: false,
            injured: '',
            alert: false,
            weaponDestroy: false,
            eventLog: eventLog,
            user: user,
            enemy: enemy
        };

        var attackName = strikeBack ? '반격' : '공격';
        var weapon = items.getInfo(user.weapon.idx);
        var destroyPercent = 0;
        var injurePercent = 0;
        var injurePart = [];
        var skillLevel = 0;

        if ('meleeSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(으)로 ', res.enemy.username,
                '을(를) 때렸다!'
            ].join(''));
            res.user.meleeSkill++;
            skillLevel = res.user.meleeSkill;
            destroyPercent = 3;
            injurePercent = 5;
            injurePart = ['head', 'arm'];
        } else if ('bowSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(으)로 ', res.enemy.username,
                '을(를) 겨냥해 쐈다!'
            ].join(''));
            res.user.bowSkill++;
            skillLevel = res.user.bowSkill;
            destroyPercent = 3;
            injurePercent = 10;
            injurePart = ['head', 'arm', 'body', 'foot'];
        } else if ('throwSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(을)를 ', res.enemy.username,
                '에게 던졌다!'
            ].join(''));
            res.user.throwSkill++;
            skillLevel = res.user.throwSkill;
            destroyPercent = 0;
            injurePercent = 7;
            injurePart = ['head', 'foot'];
        } else if ('bombSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(을)를 ', res.enemy.username,
                '에게 던졌다!'
            ].join(''));
            res.user.bombSkill++;
            skillLevel = res.user.bombSkill;
            destroyPercent = 0;
            injurePercent = 15;
            injurePart = ['head', 'arm', 'body', 'foot'];
            res.alert = true;
        } else if ('shotSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(으)로 ', res.enemy.username,
                '을(를) 겨냥해 발포했다!'
            ].join(''));
            res.user.shotSkill++;
            skillLevel = res.user.shotSkill;
            destroyPercent = 3;
            injurePercent = 12;
            injurePart = ['head', 'arm', 'body', 'foot'];
            res.alert = true;
        } else if ('pokeSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(으)로 ', res.enemy.username,
                '을(를) 찔렀다!'
            ].join(''));
            res.user.pokeSkill++;
            skillLevel = res.user.pokeSkill;
            destroyPercent = 3;
            injurePercent = 10;
            injurePart = ['head', 'arm', 'body', 'foot'];
        } else if ('cutSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(으)로 ', res.enemy.username,
                '을(를) 베었다!'
            ].join(''));
            res.user.cutSkill++;
            skillLevel = res.user.cutSkill;
            destroyPercent = 3;
            injurePercent = 10;
            injurePart = ['head', 'arm', 'body', 'foot'];
        } else if ('fistSkill' === skillType) {
            res.eventLog.push([
                res.user.username, '의 ', attackName, '! ', weapon.name, '(으)로 ', res.enemy.username,
                '을(를) 때렸다!'
            ].join(''));
            res.user.fistSkill++;
            skillLevel = res.user.fistSkill;
            destroyPercent = 3;
            injurePercent = 10;
            injurePart = ['head'];

            if ('weaponDefault' === res.user.weapon.idx) {
                destroyPercent = 0;
                injurePercent = 3;
            }
        }

        skillLevel = parseInt(skillLevel / expPerSkillLevel);
        res.damage = getDamageBySkillLevel(skillLevel, res.user.weapon.idx);

        // 무기 손상
        if (dice(100) < destroyPercent) {
            res.weaponDestroy = true;
            res.user.weapon = {idx: 'weaponDefault', point: 0, endurance: 0};
        }

        // 부상처리 & 크리티컬
        var injureAttack = false;
        var injureDice = dice(100);
        var injurePartDice = dice(4);
        if (injureDice < injurePercent) {
            if (0 == injurePartDice && -1 !== injurePart.indexOf('head')) {
                res.injured = 'head';
                injureAttack = true;
            } else if (1 == injurePartDice && -1 !== injurePart.indexOf('arm')) {
                res.injured = 'arm';
                injureAttack = true;
            } else if (2 == injurePartDice && -1 !== injurePart.indexOf('body')) {
                res.injured = 'body';
                injureAttack = true;
            } else if (3 == injurePartDice && -1 !== injurePart.indexOf('foot')) {
                res.injured = 'foot';
                injureAttack = true;
            }
        }

        if (true === injureAttack && -1 !== ['', 'armorDefault'].indexOf(res.enemy.armor[res.injured].idx)) {
            res.injured = '';
            injureAttack = false;
        }

        if (true === injureAttack) {
            res.enemy.armor[res.injured].endurance--;
            if (0 >= res.enemy.armor[res.injured].endurance) {
                res.enemy.armor[res.injured] = {idx: '', point: 0, endurance: 0};
            }
        }

        if (true === injureAttack && dice(100) < {head: 30, arm: 80, body: 20, foot: 50}[res.injured]) {
            res.injured = '';
            res.damage += 10;
            res.critical = true;
        }

        return res;
    }


    /**
     * 크리티컬 확률 계산
     *
     * @param items
     * @param skillType
     * @param bodyId
     * @param headId
     * @param accessoryId
     * @returns {number}
     */
    function getEquipCounter(items, skillType, bodyId, headId, accessoryId) {
        var body = items.getInfo(bodyId);
        var head = items.getInfo(headId);
        var accessory = items.getInfo(accessoryId);
        var result = 100;

        if ('shotSkill' == skillType && typeof accessory !== 'undefined') {
            result = 50;
        } else if ('shotSkill' == skillType && typeof head !== 'undefined') {
            result = 150;
        } else if ('cutSkill' == skillType && typeof body !== 'undefined' && 'chain' === body.material) {
            result = 50;
        } else if ('cutSkill' == skillType && typeof accessory !== 'undefined') {
            result = 150;
        } else if ('meleeSkill' == skillType && typeof head !== 'undefined') {
            result = 50;
        } else if ('meleeSkill' == skillType && typeof body !== 'undefined' && 'armor' === body.material) {
            result = 150;
        } else if ('pokeSkill' == skillType && typeof body !== 'undefined' && 'armor' === body.material) {
            result = 50;
        } else if ('pokSkill' == skillType && typeof body !== 'undefined' && 'chain' === body.material) {
            result = 150;
        }

        return result;
    }


    /**
     * 사망 메세지 출력
     *
     * @param deathCause
     * @returns {string}
     */
    function getDeathCauseMessage(deathCause) {
        var result = {
            poison: '중독사',
            hackingFailed: '정부에 의해 처형',
            restrictArea: '금지지역 체재',
            cutSkill: '참살',
            bowSkill: '사살',
            shotSkill: '총살',
            throwSkill: '살해',
            bombSkill: '폭살',
            pokeSkill: '척살',
            meleeSkill: '박살',
            fistSkill: '박살'
        }[deathCause];

        if (typeof result === 'undefined') {
            result = '쇠약사';
        }

        return result;
    }


    /**
     * 사망 메세지 출력
     *
     * @param deathCause
     * @param deathType
     * @returns {*}
     */
    function getCorpseMessage(deathCause, deathType) {
        if ('cutSkill' === deathCause && 0 === deathType) {
            return '머리부분이 목에 있는 피부 하나로 이어져 있는 상태다... 목을 잘린듯하다.';
        } else if ('cutSkill' === deathCause && 1 === deathType) {
            return '복부가 예리한 날과 같은 것으로 가른듯, 내장이 튀어나와있다...';
        } else if ('cutSkill' === deathCause && 2 === deathType) {
            return '어깨죽지부터 가슴에 걸쳐 비스듬히 베였다. 완전히 갈라져 있다...';
        } else if ('cutSkill' === deathCause && 3 === deathType) {
            return '목, 몸, 양팔, 양다리가 모두 잘려져 있다. 이런 일이 제정신인 인간이 할 수 있는 것일까...';
        } else if ('cutSkill' === deathCause && 4 === deathType) {
            return '머리가 집중적으로 잘게 썰어져 있다. 살아있을 때의 모습따윈 전혀 남아있지 않다...';
        } else if ('cutSkill' === deathCause && 5 === deathType) {
            return '복부가 갈라져 있지만, 잘 보면 손목에도 칼자국이 많이 있다...<br />상대에게 베인 후에 자살을 하려고 했던 것일까?';
        } else if ('cutSkill' === deathCause) {
            return '머리부터 가슴에 걸쳐 무참히 잘려 있다...';
        } else if ('bowSkill' === deathCause && 0 === deathType) {
            return '이마에 한발의 화살이 박혀있다...';
        } else if ('bowSkill' === deathCause && 1 === deathType) {
            return '등에 몇발이나 되는 화살이 박혀있다. 도망치려고 했을 때, 등뒤에서 맞은듯하다.';
        } else if ('bowSkill' === deathCause && 2 === deathType) {
            return '심장에 한발 정확하게 화살이 꽂혀 있다. 상당한 실력의 소유자겠지...';
        } else if ('bowSkill' === deathCause && 3 === deathType) {
            return '다리와 머리에 화살이 박혀 있다. 다리를 쏘아, 도망칠 수 없게 만든 후에 급소를 쏜것 같다...';
        } else if ('bowSkill' === deathCause && 4 === deathType) {
            return '벽에 화살로 박혀 고정되어있다... 골고다 언덕에서 처형된 성자 같은 자세다...';
        } else if ('bowSkill' === deathCause && 5 === deathType) {
            return '십수발의 화살이 박혀, 고슴도치처럼 되어 있다...';
        } else if ('bowSkill' === deathCause) {
            return '목에 몇개의 화살이 박혀 있다... 한발은 턱 아래에 꽂혀 있다...';
        } else if ('shotSkill' === deathCause && 0 === deathType) {
            return '가슴에 3발, 이마에 1발의 탄흔이 있다... 이마의 한발이 치명상이 된 듯하다...';
        } else if ('shotSkill' === deathCause && 1 === deathType) {
            return '복부에 몇발의 탄흔이 있고, 피가 흘러 나오고 있다. 그러나, 그 피도 이미 말라 있다.';
        } else if ('shotSkill' === deathCause && 2 === deathType) {
            return '머리가 원형이 남아있지 않을 정도로 날아가 있다... 명찰을 보고 간신히 이름을 알았을 정도다.';
        } else if ('shotSkill' === deathCause && 3 === deathType) {
            return '가슴에 몇발. 그리고, 뇌수가 흩뿌려져 있다. 죽인 후, 입에 총을 꽂아넣고 쏜 것이겠지. 쓸데없는 짓을 했다...';
        } else if ('shotSkill' === deathCause && 4 === deathType) {
            return '복부에 구멍이 뻥 뚤려있어, 반대쪽이 보인다. 이래선 절대 살아 있을 수 없겠구나...';
        } else if ('shotSkill' === deathCause && 5 === deathType) {
            return '얼굴에 몇발이나 탄흔이 있다... 원한이라도 있었던 것일까.';
        } else if ('shotSkill' === deathCause) {
            return '오른쪽 머리부분이 심하게 손상되어, 뇌가 흘러나와있다...';
        } else if ('bombSkill' === deathCause && 0 === deathType) {
            return '근처에 몸의 각 부분이 분산되어 있다. 화려하게 당한듯 보인다...';
        } else if ('bombSkill' === deathCause && 1 === deathType) {
            return '양발이 날아가 있다. 팔만으로 기어 도망가려고 한 것인가...';
        } else if ('bombSkill' === deathCause && 2 === deathType) {
            return '폭탄에라도 공격당한 것일까, 머리와 오른쪽 팔만 남아있다...';
        } else if ('bombSkill' === deathCause && 3 === deathType) {
            return '폭탄에 날아간 것일까, 머리가 반정도 사라져 안이 들여다 보인다...';
        } else if ('bombSkill' === deathCause && 4 === deathType) {
            return '폭풍으로 날아간 한쪽 팔이 5m정도 앞에 뒹굴고 있다...';
        } else if ('bombSkill' === deathCause && 5 === deathType) {
            return '시체라기보다, 살덩어리구나...';
        } else if ('bombSkill' === deathCause) {
            return '목과 손이 보이지않네... 폭풍으로 날아간 것일까...';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause) && 0 === deathType) {
            return '배를 움켜진 자세로, 웅크리고 있다... 아무래도, 그대로 숨이 끊긴듯하다...';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause) && 1 === deathType) {
            return '상대에게 엄청나게 맞은듯 보인다... 머리가 자주색으로 부풀어 올라있다...';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause) && 2 === deathType) {
            return '목뼈가 부러져, 목에서 뼈가 튀어나와 있다...';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause) && 3 === deathType) {
            return '땅에 얼굴을 대고, 많은 피를 얼굴쪽에서 흘리고 있다... 당한 직후, 후두부를 맞은 듯하다.';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause) && 4 === deathType) {
            return '뒤에서 둔기와 같은 것으로 맞은 것일까? 머리를 감싼채 죽어 있다...';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause) && 5 === deathType) {
            return '이마가 쪼개져, 피와 뇌수가 흐르고 있다. 정면에서 세게 맞은듯하구나...';
        } else if (-1 !== ['meleeSkill', 'fistSkill'].indexOf(deathCause)) {
            return '목이 정확히 옆을 향해 있다. 아무리 봐도, 목뼈가 부러져 있다...';
        } else if ('pokeSkill' === deathCause && 0 === deathType) {
            return '온몸에, 뭔가 예리한 날로 찔린 상처가, 많이 있다... 시체의 주변은, 피바다다...';
        } else if ('pokeSkill' === deathCause && 1 === deathType) {
            return '상대가 올라타서, 계속해서 찌른듯한 상처가 있다...';
        } else if ('pokeSkill' === deathCause && 2 === deathType) {
            return '심장을 한번 찔려, 아직 상처에서 피가 솟아 나오고 있다... 죽은 것은 바로전인 듯하다.';
        } else if ('pokeSkill' === deathCause && 3 === deathType) {
            return '목을 찔려 있다... 눈은 흰자위를 드러내고 있다...';
        } else if ('pokeSkill' === deathCause && 4 === deathType) {
            return '뒤에서 복부를 찔려 죽어 있다. 습격을 당한 것일까...?';
        } else if ('pokeSkill' === deathCause && 5 === deathType) {
            return '왼쪽 복부가 심하게 손상되어 있다. 찔린 후, 도려낸 듯한 상터가 있다...';
        } else if ('pokeSkill' === deathCause) {
            return '양쪽 눈이, 뭔가에 찔려 있다... 마치 피눈물을 흘리고 있는 것 같다...';
        } else if ('poison' === deathCause && 0 === deathType) {
            return '독을 먹은 것일까...? 구토한 흔적이 있다...';
        } else if ('poison' === deathCause && 1 === deathType) {
            return '입에서 한가닥 피가 흘러 있다. 얼핏보면, 자고 있는 걸로 보이는구나...';
        } else if ('poison' === deathCause && 2 === deathType) {
            return '시체에 얼굴을 가까이 대자 특유의 아몬드 냄새가 난다. 독살된 것인가...';
        } else if ('poison' === deathCause && 3 === deathType) {
            return '독살된 것인가. 입에서 피가 많이 섞인 거품을 물고 있다...';
        } else if ('poison' === deathCause && 4 === deathType) {
            return '독을 먹고 괴로워 했던 것일까. 스스로 목을 심하게 손톱으로 할퀸것 같다...';
        } else if ('poison' === deathCause && 5 === deathType) {
            return '누군가에게 독이라도 당한건가? 피부가 심하게 변색되어 있다.';
        } else if ('poison' === deathCause) {
            return '피부가 새까맣게 변해 있고, 입에서는 많은 피를 토한 듯이 보인다...';
        } else {
            return '무참하게 목이 돌아가 있다...';
        }
    }


    /**
     * 스킬레벨에 따른 데미지 계산
     *
     * @param skillLevel
     * @param weaponIdx
     * @returns {Number}
     */
    function getDamageBySkillLevel(skillLevel, weaponIdx) {
        var result = {
            0: 90,
            1: 95,
            2: 100,
            3: 105,
            4: 110,
            5: 115,
            6: 117,
            7: 119,
            8: 121,
            9: 123,
            10: 125,
            11: 127,
            12: 129,
            13: 131,
            14: 133,
            15: 135,
            16: 137,
            17: 139,
            18: 141,
            19: 143
        }[skillLevel];

        if (typeof result !== 'undefined') {
            result = 145;
        }

        if ('weaponDefault' === weaponIdx) {
            result = {
                0: 90,
                1: 95,
                2: 100,
                3: 105,
                4: 110,
                5: 115,
                6: 118,
                7: 121,
                8: 124,
                9: 127,
                10: 130,
                11: 133,
                12: 136,
                13: 139,
                14: 142,
                15: 145,
                16: 148,
                17: 151,
                18: 154,
                19: 157
            }[skillLevel];

            if (typeof result !== 'undefined') {
                result = 160;
            }
        }

        return result;
    }


    /**
     * 무기 소모율 계산
     *
     * @param items
     * @param weapon
     * @param skillType
     * @returns {{}}
     */
    function setConsumeWeapon(items, weapon, skillType) {
        var weaponInfo = items.getInfo(weapon.idx);

        if (true === weaponInfo.ammoRequire && 0 >= weapon.endurance) {
            skillType = 'meleeSkill';
        }

        if ('shotSkill' === skillType && -1 !== weaponInfo.attackType.indexOf('shot')) {
            weapon.endurance--;
        } else if ('bowSkill' === skillType && -1 !== weaponInfo.attackType.indexOf('bow')) {
            weapon.endurance--;
        } else if ('bombSkill' === skillType && -1 !== weaponInfo.attackType.indexOf('bomb')) {
            weapon.endurance--;
            if (0 >= weapon.endurance) {
                weapon = {idx: 'weaponDefault', point: 0, endurance: 0};
            }
        } else if ('throwSkill' === skillType && -1 !== weaponInfo.attackType.indexOf('throw')) {
            weapon.endurance--;
            if (0 >= weapon.endurance) {
                weapon = {idx: 'weaponDefault', point: 0, endurance: 0};
            }
        } else if ('cutSkill' === skillType && -1 !== weaponInfo.attackType.indexOf('cut')) {
            weapon.point -= dice(1) + 1;
            if (0 >= weapon.point) {
                weapon = {idx: 'weaponDefault', point: 0, endurance: 0};
            }
        }

        return weapon;
    }


    /**
     * 방어구 소모율 계산
     *
     * @param armor
     * @returns {{}}
     */
    function setConsumeBodyArmor(armor) {
        if ('armorDefault' !== armor.idx && 0 == dice(5)) {
            armor.endurance--;
        }

        if (0 >= armor.endurance) {
            armor = {idx: 'armorDefault', point: 0, endurance: 0};
        }

        return armor;
    }


    /**
     * 장소 관련된 정보 노출 최소화
     *
     * @param placeArrange
     * @param places
     * @returns {Array}
     */
    function arrangePlaceInfo(placeArrange, places) {
        var result = [];
        for (var i in placeArrange) {
            var idx = placeArrange[i];
            for (var j in places) {
                var place = places[j];
                if (idx === place.idx) {
                    result.push({
                        idx: idx,
                        name: place.name,
                        code: place.code,
                        restrict: place.restrict,
                        restrictReserve: place.restrictReserve
                    });
                }
            }
        }

        return result;
    }


    /**
     * 공격자 공방수치 계산
     *
     * @param items
     * @param tactics
     * @param specialize
     * @param injured
     * @param weapon
     * @param shotSkill
     * @param cutSkill
     * @param throwSkill
     * @param fistSkill
     * @param bowSkill
     * @param meleeSkill
     * @param bombSkill
     * @param pokeSkill
     * @param expPerSkillLevel
     * @returns {{find: number, ambush: number, attack: number, defence: number, longRangeEngage: boolean, accuracyRate}}
     */
    function getBattleRateByAttacker(items, tactics, specialize, injured, weapon, shotSkill, cutSkill, throwSkill,
                                     fistSkill, bowSkill, meleeSkill, bombSkill, pokeSkill, expPerSkillLevel) {
        var result = {
            find: 5,    // 적, 아이템 발견율
            ambush: 7,  // 선제공격율
            attack: 100,   // 공격율
            defence: 100,  // 방어율
            longRangeEngage: false,
            accuracyRate: 0
        };

        if (1 == tactics) {
            // 공격중시
            result.attack += 40;
            result.defence -= 40;
        } else if (2 == tactics) {
            // 방어중시
            result.attack -= 40;
            result.defence += 40;
            result.ambush -= 4;
        } else if (3 == tactics) {
            // 은밀행동
            result.attack -= 40;
            result.defence -= 40;
            result.find -= 4;
            result.ambush += 4;
        } else if (4 == tactics) {
            // 탐색행동
            result.attack -= 40;
            result.defence -= 40;
            result.find += 4;
            result.ambush += 4;
        } else if (5 == tactics) {
            // 연속공격
            result.defence -= 40;
            result.find += 6;
        }

        var merged = getBattleRateByPlace(specialize, result.attack, result.defence, result.find);
        result.attack = merged.attack;
        result.defence = merged.defence;
        result.find = merged.find;

        if (-1 !== injured.indexOf('arm')) {
            result.attack -= 20;
        }

        var weaponStatus = getBattleRateByWeapon(items, weapon, injured, shotSkill, cutSkill, throwSkill, fistSkill, bowSkill,
            meleeSkill, bombSkill, pokeSkill, expPerSkillLevel);

        result.longRangeEngage = weaponStatus.longRangeEngage;
        result.accuracyRate = weaponStatus.accuracyRate;

        return result;
    }


    /**
     * 방어자 공방수치 계산
     *
     * @param items
     * @param status
     * @param tactics
     * @param specialize
     * @param injured
     * @param weapon
     * @param shotSkill
     * @param cutSkill
     * @param throwSkill
     * @param fistSkill
     * @param bowSkill
     * @param meleeSkill
     * @param bombSkill
     * @param pokeSkill
     * @param expPerSkillLevel
     * @returns {{attack: number, defence: number, stealth: number, longRangeEngage: boolean, accuracyRate}}
     */
    function getBattleRateByDefender(items, status, tactics, specialize, injured, weapon, shotSkill, cutSkill,
                                     throwSkill, fistSkill, bowSkill, meleeSkill, bombSkill, pokeSkill, expPerSkillLevel) {
        var result = {
            attack: 100,   // 공격율
            defence: 100,  // 방어율
            stealth: 100,   // 발견당할 확율? (높을수록 발견되지 않음)
            longRangeEngage: false,
            accuracyRate: 0
        };

        if (5 == status) {
            // 치료중
            result.stealth -= 30;
        }

        if (1 == tactics) {
            // 공격중시
            result.attack += 40;
            result.defence -= 40;
        } else if (2 == tactics) {
            // 방어중시
            result.attack -= 40;
            result.defence += 40;
            result.stealth -= 20;
        } else if (3 == tactics) {
            // 은밀행동
            result.attack -= 40;
            result.defence -= 40;
            result.stealth += 40;
        } else if (4 == tactics) {
            // 탐색행동
            result.attack -= 40;
            result.defence -= 40;
            result.stealth -= 40;
        } else if (5 == tactics) {
            // 연속공격
            result.defence -= 40;
            result.stealth -= 30;
        }

        var merged = getBattleRateByPlace(specialize, result.attack, result.defence, 0);
        result.attack = merged.attack;
        result.defence = merged.defence;

        if (-1 !== injured.indexOf('arm')) {
            result.attack -= 20;
        }

        var weaponStatus = getBattleRateByWeapon(items, weapon, injured, shotSkill, cutSkill, throwSkill, fistSkill,
            bowSkill, meleeSkill, bombSkill, pokeSkill, expPerSkillLevel);

        result.longRangeEngage = weaponStatus.longRangeEngage;
        result.accuracyRate = weaponStatus.accuracyRate;

        return result;
    }


    /**
     * 지역에 따른 공방수치 계산
     *
     * @param specialize
     * @param attack
     * @param defence
     * @param find
     * @returns {{attack: *, defence: *, find: *}}
     */
    function getBattleRateByPlace(specialize, attack, defence, find) {
        var result = {
            attack: attack,
            defence: defence,
            find: find
        };

        if ('attack_plus' === specialize) {
            result.attack += 10;
        } else if ('attack_minus' === specialize) {
            result.attack -= 10;
        } else if ('defence_plus' === specialize) {
            result.defence += 10;
        } else if ('defence_minus' === specialize) {
            result.defence -= 10;
        } else if ('find_plus' === specialize) {
            result.find += 1;
        } else if ('find_minus' === specialize) {
            result.find -= 1;
        }

        return result;
    }


    /**
     * 무기+스킬에 따른 명중률 계산
     *
     * @param items
     * @param weapon
     * @param injured
     * @param shotSkill
     * @param cutSkill
     * @param throwSkill
     * @param fistSkill
     * @param bowSkill
     * @param meleeSkill
     * @param bombSkill
     * @param pokeSkill
     * @param expPerSkillLevel
     * @returns {{longRangeEngage: boolean, accuracyRate: number}}
     */
    function getBattleRateByWeapon(items, weapon, injured, shotSkill, cutSkill, throwSkill, fistSkill, bowSkill, meleeSkill,
                                   bombSkill, pokeSkill, expPerSkillLevel) {

        var result = {
            longRangeEngage: false,
            accuracyRate: 0
        };

        var weaponStatus = items.getInfo(weapon.idx);
        var skillRate = expPerSkillLevel;
        if (-1 !== weaponStatus.attackType.indexOf('melee')
            || ((-1 !== weaponStatus.attackType.indexOf('bow') || -1 !== weaponStatus.attackType.indexOf('shot'))
            && 0 == weapon.endurance)) {
            result.accuracyRate = 80 + parseInt(meleeSkill / skillRate);
        } else if (-1 !== weaponStatus.attackType.indexOf('bow')) {
            result.longRangeEngage = true;
            result.accuracyRate = 60 + parseInt(bowSkill / skillRate * 2);
        } else if (-1 !== weaponStatus.attackType.indexOf('throw')) {
            result.longRangeEngage = true;
            result.accuracyRate = 70 + parseInt(throwSkill / skillRate * 1.5);
        } else if (-1 !== weaponStatus.attackType.indexOf('bomb')) {
            result.longRangeEngage = true;
            result.accuracyRate = 60 + parseInt(bombSkill / skillRate * 2);
        } else if (-1 !== weaponStatus.attackType.indexOf('shot')) {
            result.longRangeEngage = true;
            result.accuracyRate = 60 + parseInt(shotSkill / skillRate * 2);
        } else if (-1 !== weaponStatus.attackType.indexOf('cut')) {
            result.accuracyRate = 80 + parseInt(cutSkill / skillRate);
        } else if (-1 !== weaponStatus.attackType.indexOf('poke')) {
            result.accuracyRate = 80 + parseInt(pokeSkill / skillRate);
        } else {
            result.accuracyRate = 70 + parseInt(fistSkill / skillRate * 1.5);
        }

        if (result.accuracyRate > 95) {
            result.accuracyRate = 95;
        }

        if (-1 !== injured.indexOf('head')) {
            result.accuracyRate -= 20;
        }

        return result;
    }


    function isCombine(itemInfo, itemInfo2) {
        var result = true;
        var allowEquip = ['health', 'stamina', '12gauge', '9mm', '22lr', '357mag', '38special', '45acp', 'apostle',
            'bow', 'weapon'];
        if (itemInfo.id !== itemInfo2.id) {
            result = false;
        } else {
            if (-1 === allowEquip.indexOf(itemInfo.equip)) {
                result = false;
            }

            if (true === result && 'weapon' === itemInfo.equip
                && (-1 === itemInfo.attackType.indexOf('bomb') && -1 === itemInfo.attackType.indexOf('throw'))) {
                result = false;
            }
        }

        return result;
    }


    return {
        dice: dice,
        getAttackPercent: getAttackPercent,
        getDefencePercent: getDefencePercent,
        getHealthStatus: getHealthStatus,
        getPoint: getPoint,
        getSkillByClubId: getSkillByClubId,
        appendSupplyItem: appendSupplyItem,
        arrangePlaceInfo: arrangePlaceInfo,
        isBattleOver: isBattleOver,
        moveConsumeStamina: moveConsumeStamina,
        exploreConsumeStamina: exploreConsumeStamina,
        getBattleRateByAttacker: getBattleRateByAttacker,
        getBattleRateByDefender: getBattleRateByDefender,
        getPersonSearch: getPersonSearch,
        getEmptyItemSlot: getEmptyItemSlot,
        findItemSlotById: findItemSlotById,
        findItemSlotByEquip: findItemSlotByEquip,
        getBattleResult: getBattleResult,
        getEquipCounter: getEquipCounter,
        setConsumeWeapon: setConsumeWeapon,
        setConsumeBodyArmor: setConsumeBodyArmor,
        getTotalDamage: getTotalDamage,
        getBattleExp: getBattleExp,
        setLevelUp: setLevelUp,
        setInjured: setInjured,
        setConsumeItem: setConsumeItem,
        getMixItem: getMixItem,
        battleInfoToVictim: battleInfoToVictim,
        deathInfoToVictim: deathInfoToVictim,
        broadcastToAll: broadcastToAll,
        getRecoverStamina: getRecoverStamina,
        getRecoverHealth: getRecoverHealth,
        setRecover: setRecover,
        getCorpseMessage: getCorpseMessage,
        getDeathCauseMessage: getDeathCauseMessage,
        isCombine: isCombine
    };
})();