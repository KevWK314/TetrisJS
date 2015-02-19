function Config()
{
    var me = this;

    me.blockSize = 20;
    me.blockPadding = 1;
    me.boardHeight = 20;
    me.boardWidth = 10;

    me.getBoardWidth = function ()
    {
        var width = me.blockSize * me.boardWidth;
        width += me.blockPadding * (me.boardWidth + 1);
        return width;
    };

    me.getBoardHeight = function ()
    {
        var height = me.blockSize * me.boardHeight;
        height += me.blockPadding * (me.boardHeight + 1);
        return height;
    };

    me.shapes = [];

    me.shapes[0] = {
        name: "T",
        colour: 'purple',
        positions: [
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 0 }],
            [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }]
        ]
    };

    me.shapes[1] = {
        name: "O",
        colour: 'yellow',
        positions: [
            [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }],
        ]
    };

    me.shapes[2] = {
        name: "S",
        colour: 'green',
        positions: [
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: -1 }],
            [{ x: 0, y: 0 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 1 }]
        ]
    };

    me.shapes[3] = {
        name: "Z",
        colour: 'red',
        positions: [
            [{ x: 0, y: 0 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: 0 }],
            [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }]
        ]
    };

    me.shapes[4] = {
        name: "I",
        colour: 'cyan',
        positions: [
            [{ x: 0, y: 0 }, { x: 0, y: -2 }, { x: 0, y: -1 }, { x: 0, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]
        ]
    };

    me.shapes[5] = {
        name: "L",
        colour: 'orange',
        positions: [
            [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }],
            [{ x: 0, y: 0 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 0, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }]
        ]
    };

    me.shapes[6] = {
        name: "J",
        colour: 'blue',
        positions: [
            [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
            [{ x: 0, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: 0, y: 1 }],
            [{ x: 0, y: 0 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: 1, y: 0 }]
        ]
    };
}