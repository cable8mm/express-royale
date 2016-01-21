/**
 * Created by monoless on 2015-12-15.
 */
module.exports = function (io, options, socket, req, res) {
    var util = options.container.get('util');
    var eventName = 'info';
    var eventLog = [];
    var speakerSlot = util.findItemSlotByEquip(
        options.container.get('items'),
        'speaker',
        res.account.item0,
        res.account.item1,
        res.account.item2,
        res.account.item3,
        res.account.item4,
        res.account.item5
    );

    if (typeof req.value !== 'undefined' && null !== speakerSlot) {
        var message = req.value[0];

        util.broadcastToAll(
            socket,
            res.account.place,
            options.container.get('properties').places['place' + res.account.place].name,
            'speaker',
            res.account.username,
            message
        );

        eventLog.push(message);
        eventLog.push('확실히 전해졌을까?');

        options.repositories.addNews(
            null,
            new Date(),
            'SPEAKER',
            message,
            {
                username: res.account.username,
                userGender: res.account.userGender,
                groupName: res.account.groupName,
                studentNo: res.account.studentNo
            }
        );
    }

    require('./finalize')(io, options, socket, req, res, eventName, true, eventLog);
};