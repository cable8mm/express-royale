/**
 * Created by monoless on 2015-12-15.
 */
module.exports = function (io, options, socket, req, res) {
    var async = require('async');
    var util = options.container.get('util');
    var serverModel = options.models.getModel('server');
    var placeModel = options.models.getModel('place');

    var eventName = 'info';
    var eventLog = [];
    var isDeath = false;

    var pcSlot = util.findItemSlotByEquip(
        'mobilepc',
        res.account.item0,
        res.account.item1,
        res.account.item2,
        res.account.item3,
        res.account.item4,
        res.account.item5
    );

    if (null !== pcSlot) {
        var pc = res.account[pcSlot];
        if (0 >= pc.endurance) {
            eventLog.push('모바일PC에 전원이 들어오지 않는다. 배터리가 없는걸까...');
        } else {
            res.account[pcSlot].endurance -= 1;

            var hackPoint = 0;
            var hackDice = util.dice(10);
            if (12 === res.account.clubId) {
                hackPoint += 5;
            }

            if (hackDice <= hackPoint) {
                eventLog.push('해킹 성공! 모든 금지지역이 해제되었다!!');
                async.waterfall([
                    function (callback) {
                        serverModel.findOne({}, function(err, server){
                            if (err) {
                                console.log(err);
                                throw new Error(err);
                            } else {
                                callback(null, server);
                            }
                        });
                    },
                    function (server, callback) {
                        server.status = 'hacking';
                        server.save();

                        placeModel.find({}, function(err, places){
                            if (err) {
                                console.log(err);
                                throw new Error(err);
                            } else {
                                callback(null, places);
                            }
                        });
                    },
                    function (places, callback) {
                        for (var i in places) {
                            var place = places[i];
                            place.restrict = false;
                            place.restrictReserve = false;
                            place.save();
                        }
                    }
                ]);
            } else {
                eventLog.push('해킹은 실패했다...');
            }

            if (hackDice >= 9) {
                res.account[pcSlot] = {idx: '', endurance: 0, point: 0};
                eventLog.push('왜이러지! 장치가 부서지고 말았다.');

                if (util.dice(10) >= 9) {
                    eventLog.push('...뭐지?...목걸이에서 경고음이...!?');
                    //isDeath = true;
                }
            } else if (0 >= res.account[pcSlot].endurance) {
                eventLog.push('모바일PC의 배터리를 다 써버렸다.');
            }
        }
    }

    if (true === isDeath) {
        // TODO 해킹 실패 사망
    } else {
        require('./finalize')(io, options, socket, req, res, eventName, true, eventLog);
    }
};