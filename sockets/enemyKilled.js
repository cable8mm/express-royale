/**
 * Created by monoless on 2015-12-16.
 */
module.exports = function (io, options, socket, req, res, eventName, eventResult, eventLog) {
    var async = require('async');
    var util = options.container.get('util');
    var userModel = options.models.getModel('user');
    var newsModel = options.models.getModel('news');

    if (typeof eventLog === 'string') {
        eventLog = [eventLog];
    }

    if (0 >= res.enemy.health) {
        async.waterfall([
            function (callback) {
                userModel.count({npc: false}, callback);
            },

            function (counted, callback) {
                eventLog.push([
                    '<strong class="red">',
                    res.enemy.username,
                    '(',
                    res.enemy.groupName,
                    ' ',
                    0 == res.enemy.userGender ? '남자' : '여자',
                    res.enemy.studentNo,
                    '번)을(를) 살해했다.【남은 인원 ',
                    counted,
                    '명】</strong>'
                ].join(''));

                if ('' !== res.enemy.messageDying) {
                    eventLog.push([
                        '<strong style="color:#ffff00">',
                        res.enemy.username,
                        '『',
                        res.enemy.messageDying,
                        '』'
                    ].join(''));
                }

                if ('' !== res.account.message) {
                    eventLog.push([
                        '<strong style="color:#00ff00">',
                        res.account.username,
                        '『',
                        res.account.message,
                        '』'
                    ].join(''));
                }

                res.enemy.deathCause = req.command;
                res.enemy.deathType = util.dice(7);
                res.enemy.health = 0;
                res.account.killCount += 1;

                util.broadcastToAll(socket, res.account.place, 'killed');

                var news = new newsModel({
                    registerAt: new Date(),
                    type: 'KILLED',
                    message: '',
                    murder: {
                        username: res.account.username,
                        userGender: res.account.userGender,
                        groupName: res.account.groupName,
                        studentNo: res.account.studentNo,
                        weaponName: res.account.weapon.idx,
                        weaponMethod: req.command
                    },
                    victim: {
                        username: res.enemy.username,
                        userGender: res.enemy.userGender,
                        groupName: res.enemy.groupName,
                        studentNo: res.enemy.studentNo
                    }
                });

                news.save();

                callback(null, counted);
            },

            function (counted) {
                if ('start' === res.server.status && 0 >= counted) {
                    // TODO 대회우승
                } else {
                    req.value = undefined;
                    require('./deathGet')(io, options, socket, req, res, eventName, eventResult, eventLog);
                }
            }
        ]);
    } else {
        require('./finalize')(io, options, socket, req, res, eventName, eventResult, eventLog);
    }
};