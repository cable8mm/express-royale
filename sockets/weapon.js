/**
 * Created by monoless on 2015-12-15.
 */
var itemPlugin = require('../support/itemPlugin');
module.exports = function (io, options, socket, req, res) {
    var util = options.container.get('util');
    var place = {};
    var places = res.place;
    for (var i in places) {
        place = places[i];
        if ('place' + res.account.place === place.idx) {
            break;
        }
    }

    var eventName = 'info';
    var eventLog = '';

    var emptySlot = util.getEmptyItemSlot(
        res.account.item0,
        res.account.item1,
        res.account.item2,
        res.account.item3,
        res.account.item4,
        res.account.item5
    );

    var itemInfo = {};

    if ('weaponDefault' === res.account.weapon.idx) {
        eventLog = [res.account.username, '은(는) 무기를 장비하고 있지 않습니다.'].join('');
    } else if (null === emptySlot && 'unequip' === req.value) {
        eventLog = '더 이상 배낭에 들어가지 않습니다.';
    } else if (null !== emptySlot && 'unequip' === req.value) {
        itemInfo = options.container.get('items').getInfo(res.account.weapon.idx);

        eventLog = [itemInfo.name, '을(를) 배낭에 넣었습니다.'].join('');

        res.account[emptySlot] = itemPlugin.toObject(
            res.account.weapon.idx,
            res.account.weapon.endurance,
            res.account.weapon.point,
            res.account.weapon.stats
        );
        res.account.weapon = itemPlugin.toObject('weaponDefault', 0, 0);
    } else if ('drop' === req.value) {
        // 아이템 추가
        place.items.push(itemPlugin.toObject(
            res.account.weapon.idx,
            res.account.weapon.endurance,
            res.account.weapon.point,
            res.account.weapon.stats
        ));
        place.save();

        itemInfo = options.container.get('items').getInfo(res.account.weapon.idx);

        eventLog = [itemInfo.name, '을(를) 버렸다.'].join('');

        res.account.weapon = itemPlugin.toObject('weaponDefault', 0, 0);
    }

    require('./finalize')(io, options, socket, req, res, eventName, true, eventLog);
};