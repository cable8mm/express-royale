var CurrentPlace = React.createClass({
    render: function () {
        var places = this.props.places;
        var current = this.props.current;
        if (typeof places == 'undefined') {
            places = [];
        }

        if (typeof current == 'undefined') {
            current = 0;
        }

        var place = {};
        for (var i in places) {
            place = places[i];
            if (place.idx == 'place' + current) {
                break;
            }
        }

        return (
            <span>{place.name} ({place.code})</span>
        );
    }
});

var PlaceSelector = React.createClass({
    handleChange: function (event) {
        //this.setState({value: event.target.value});
        ExpressRoyale.playerMove(event.target.value, this);
    },

    render: function () {
        var places = this.props.places;
        var current = this.props.current;
        if (typeof places == 'undefined') {
            places = [];
        }

        if (typeof current == 'undefined') {
            current = 0;
        }

        var mapped = [];
        for (var i in places) {
            var place = places[i];
            mapped.push({
                value: place.idx,
                className: (true === place.restrict) ?
                    'restrict' :
                    (true === place.restrictReserve) ?
                        'restrict-reserve' : '',
                subject: '(' + place.code + ')' + place.name
            });
        }

        return (
            <select value={'place' + current} onChange={this.handleChange}>
                {mapped.map(function (option) {
                    return <option value={option.value} className={option.className}>{option.subject}</option>;
                })}
            </select>
        );
    }
});

var Skills = React.createClass({
    render: function () {
        var mapped = [];
        var skillExp = this.props.skillExp;
        var skillNames = this.props.skillNames;
        var expPerSkillLevel = this.props.expPerSkillLevel;

        if (typeof skillExp == 'undefined') {
            skillExp = {};
        }

        if (typeof skillNames == 'undefined') {
            skillNames = {};
        }

        if (typeof expPerSkillLevel == 'undefined') {
            expPerSkillLevel = 1;
        }

        for (var i in skillNames) {
            mapped.push({
                name: skillNames[i],
                exp: skillExp[i],
                level: Math.floor(skillExp[i] / expPerSkillLevel)
            });
        }

        return (
            <ul className="list-inline solid-bordered padding3px">
                {mapped.map(function (option) {
                    return <li className='list-inline-custom'>{option.name} : {option.level} ({option.exp})</li>;
                })}
            </ul>
        );
    }
});

var CharacterInfo = React.createClass({
    render: function () {
        var colStyle = {width: '80px'};
        var data = this.props.data;
        var tactics = this.props.tactics;
        var currentTactics = '보통';
        if (typeof data == 'undefined') {
            data = {};
        }

        if (typeof tactics == 'undefined') {
            tactics = [];
        }

        if (typeof tactics[data.tactics] != 'undefined') {
            currentTactics = tactics[data.tactics].name;
        }

        return (
            <table className="table table-bordered">
                <colgroup>
                    <col style={colStyle}/>
                    <col />
                </colgroup>
                <tbody>
                <tr>
                    <td><img src={data.userIcon} alt=''/></td>
                    <td className="text-center">
                        {data.username}<br />
                        {'Lv ' + data.level}<br />
                        {'(Lv ' + (data.level + 1) + ' 까지 ' + data.requireExp + ' 남음)'}
                    </td>
                </tr>
                <tr>
                    <th>체력</th>
                    <td className="health">{data.health} / {data.maxHealth}</td>
                </tr>
                <tr>
                    <th>스테미너</th>
                    <td className="stamina">{data.stamina}</td>
                </tr>
                <tr>
                    <th>공격력</th>
                    <td>{data.attack} + {data.weapon.point}</td>
                </tr>
                <tr>
                    <th>방어력</th>
                    <td>{data.defence} + {data.armor.arm.point + data.armor.body.point + data.armor.foot.point +
                    data.armor.head.point + data.armor.accessory.point}</td>
                </tr>
                <tr>
                    <th>클럽</th>
                    <td>{data.clubName}</td>
                </tr>
                <tr>
                    <th>기본방침</th>
                    <td>{currentTactics}</td>
                </tr>
                <tr>
                    <th>부상부위</th>
                    <td>{data.injured.map(function (o) {
                        return <span>{o}</span>
                    })}</td>
                </tr>
                </tbody>
            </table>
        );
    }
});

var EquipItem = React.createClass({
    render: function () {
        var items = this.props.items;
        var itemSchema = this.props.itemSchema;

        if (typeof items == 'undefined') {
            items = {armor: {}};
        }

        if (typeof itemSchema == 'undefined') {
            itemSchema = {};
        }

        var equipMapped = [
            {className: 'equip-weapon', category: '[무기]', status: items.weapon},
            {className: 'equip-armor', category: '[방어]', status: items.armor.body},
            {className: 'equip-armor', category: '[머리]', status: items.armor.head},
            {className: 'equip-armor', category: '[팔]', status: items.armor.arm},
            {className: 'equip-armor', category: '[다리]', status: items.armor.foot},
            {className: 'equip-armor', category: '[장식]', status: items.armor.accessory}
        ];
        var itemMapped = ExpressRoyale.showItems(
            [items.item0, items.item1, items.item2, items.item3, items.item4, items.item5],
            itemSchema
        );

        return (
            <div>
                {equipMapped.map(function (o) {
                    var desc = ['-'];

                    if ('' !== o.status.idx) {
                        desc = [
                            ExpressRoyale.getItemName(o.status.idx, itemSchema),
                            '/',
                            o.status.point,
                            '/',
                            o.status.endurance
                        ];
                    }

                    return (
                        <dl className="dl-horizontal small-dl bg-equip">
                            <dt className={o.className}>{o.category}</dt>
                            <dd>{desc.join('')}</dd>
                        </dl>
                    );
                })}
                <ul className="list-unstyled">
                    {itemMapped.map(function (o) {
                        return (
                            <li className={o.className}>{o.desc}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});

var Commander = React.createClass({
    getCommand: function(){
        var command = this.props.command;

        if (typeof command == 'undefined') {
            command = '';
        }

        return command;
    },

    getAccount: function() {
        var account = this.props.account;

        if (typeof account == 'undefined') {
            account = {};
        }

        return account;
    },

    getServerFlag: function() {
        var serverFlag = this.props.serverFlag;

        if (typeof serverFlag == 'undefined') {
            serverFlag = {};
        }

        return serverFlag;
    },

    getItemSchema: function() {
        var itemSchema = this.props.itemSchema;

        if (typeof itemSchema == 'undefined') {
            itemSchema = {};
        }

        return itemSchema;
    },

    getExecuteName: function(command) {
        var executeName;
        if ('info' == command) {
            executeName = '확인';
        }

        return executeName;
    },

    getCommandDesc: function(command) {
        var commandDesc;
        if ('info' == command) {
            commandDesc = '무엇을 합니까?';
        }

        return commandDesc;
    },

    getCommandList: function(command, placeId, serverStatus, item0, item1, item2, item3, item4, item5, itemSchema) {
        var commandList;
        if ('info' == command) {
            commandList = [
                {name:'아이템 정리/합성/장비', value:'items', className:'', item:false},
                {name:'응급처치', value:'injured', className:'', item:false},
                {name:'특수커맨드', value:'special', className:'', item:false}
            ];

            if (0 != placeId) {
                commandList.splice(1, 0, {name:'치료', value:'health', className:'health', item:false},
                    {name:'수면', value:'stamina', className:'stamina', item:false});
            }

            var itemList = this.getItemCommandList(item0, item1, item2, item3, item4, item5, itemSchema);
            var itemLength = itemList.length;
            if (0 < itemLength) {
                for (var i = itemLength; i > 0; i--) {
                    commandList.unshift(itemList[(i - 1)]);
                }
            }

            if (0 != placeId || (0 == placeId && 'hacked' == serverStatus)) {
                commandList.unshift({name:'탐색', value:'search', className:'', item:false});
            }
        }

        return commandList;
    },

    getItemCommandList: function(item0, item1, item2, item3, item4, item5, itemSchema) {
        var result = [];
        var mapped = [item0, item1, item2, item3, item4, item5];
        for (var i in mapped) {
            var item = mapped[i];
            if ('' !== item.idx) {
                result.push({
                    name:[ExpressRoyale.getItemName(item.idx, itemSchema), item.point, item.endurance].join('/'),
                    value:'item' + i,
                    className:ExpressRoyale.getItemType(item.idx, itemSchema),
                    item:true
                });
            }
        }

        return result;
    },

    render: function(){
        var command = this.getCommand();
        var account = this.getAccount();
        var serverFlag = this.getServerFlag();
        var itemSchema = this.getItemSchema();

        var executeName = this.getExecuteName(command);
        var commandDesc = this.getCommandDesc(command);
        var commandList = this.getCommandList(command, account.place, serverFlag.status, account.item0,
            account.item1, account.item2, account.item3, account.item4, account.item5, itemSchema);

        return (
            <div>
                <p className="padding5px">{commandDesc}</p>
                <ul className="list-unstyled">
                    {commandList.map(function(o){
                        return (
                            <li className={o.className}>
                                <label>
                                    <input type="radio" name="cmd" value={o.value} />
                                    <span className="padding5px">{o.name}</span>
                                </label>
                                {(() => {
                                    if (o.item) {
                                        return (
                                            <label>
                                                &nbsp;(
                                                <span className="padding5px">버림</span>
                                                <input type="radio" name="cmd"
                                                       className="vertical-text-bottom" value={'drop_' + o.value} />
                                                &nbsp;)
                                            </label>
                                        );
                                    }
                                })()}
                            </li>
                        );
                    })}
                </ul>
                <button className="input btn btn-warning bg-red">{executeName}</button>
            </div>
        );
    }
});

var ExpressRoyale = (function () {
    var that = this;
    var socket = io();

    function initialize() {
        observeEvent();
    }

    function observeEvent() {
        socket.on('recv', receivePacket);
    }

    function getItemName(itemId, itemSchema) {
        var currentItem = itemSchema[itemId];
        var itemName = '';
        if (typeof currentItem == 'undefined') {
            currentItem = {};
        }

        if (typeof currentItem.name != 'undefined') {
            itemName = currentItem.name;
        }

        return itemName;
    }

    function getItemType(itemId, itemSchema) {
        var currentItem = itemSchema[itemId];
        var itemType = '';
        if (typeof currentItem == 'undefined') {
            currentItem = {};
        }

        if (typeof currentItem.equip != 'undefined') {
            itemType = currentItem.equip;
        }

        return itemType;
    }

    function showItems(itemList, itemSchema) {
        var result = [];
        for (var i in itemList) {
            var item = itemList[i];
            var desc = [];
            var className = '';

            if ('' !== item.idx) {
                desc = [
                    getItemName(item.idx, itemSchema),
                    '/',
                    item.point,
                    '/',
                    item.endurance
                ];

                className = getItemType(item.idx, itemSchema);
            }

            result.push({
                className:className,
                desc:desc.join('')
            });
        }

        return result;
    }

    function receivePacket(data) {
        // check server-flag

        // check account status

        // check data.type
        if (0) {

        } else {
            renderCharacterInfo(data.account, data.config.tactics);
            renderPlace(data.place, data.account.place);
            renderSkill(data.account, data.config.skills, data.config.expPerSkillLevel);
            renderItem(data.account, data.itemList);
            renderCommander(data.type, data.account, data.server, data.itemList);
        }
    }

    function renderCharacterInfo(data, tactics) {
        React.render(
            <CharacterInfo data={data} tactics={tactics}/>,
            document.getElementById('characterInfo')
        );
    }

    function renderSkill(data, skills, expPerSkillLevel) {
        React.render(
            <Skills
                skillExp={data}
                skillNames={skills}
                expPerSkillLevel={expPerSkillLevel}/>,
            document.getElementById('currentSkills')
        );
    }

    function renderPlace(places, current) {
        React.render(
            <CurrentPlace
                places={places}
                current={current}/>,
            document.getElementById('currentPlace')
        );

        React.render(
            <PlaceSelector
                places={places}
                current={current}/>,
            document.getElementById('placeSelector')
        );
    }

    function renderItem(items, itemSchema) {
        React.render(
            <EquipItem
                items={items}
                itemSchema={itemSchema}/>,
            document.getElementById('equipItem')
        );
    }

    function renderCommander(command, account, serverFlag, itemSchema) {
        React.render(
            <Commander
                command={command}
                account={account}
                serverFlag={serverFlag}
                itemSchema={itemSchema} />,
            document.getElementById('commander')
        );
    }

    function playerMove(moveTo, caller) {
        console.log(caller.setState);
    }

    initialize();

    return {
        getItemName: getItemName,
        getItemType: getItemType,
        showItems: showItems,
        playerMove: playerMove
    };
})();