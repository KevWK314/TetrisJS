function Shape(config)
{
    var me = this;

    me.config = config;
    me.loaded = false;
    me.shape = null;

    me.x = 0;
    me.y = 0;
    me.pos = 0;

    me.load = function (shape)
    {
        me.loaded = true;
        me.shape = shape;

        me.pos = 0;
        me.y = 0;
        me.x = Math.floor(me.config.boardWidth / 2) - 1;
    };

    me.clear = function ()
    {
        me.loaded = false;
        me.shape = null;
    };

    me.draw = function (draw)
    {
        if (me.loaded)
        {
            var blocks = me.shape.positions[me.pos];
            for (var loop = 0; loop < blocks.length; loop++)
            {
                var blockPos = blocks[loop];
                draw.drawBlock(me.x + blockPos.x, me.y + blockPos.y, me.shape.colour);
            }
        }
    };

    me.move = function (xdiff, ydiff, board)
    {
        if (me.loaded)
        {
            var canMove = true;
            var newx = me.x + xdiff;
            var newy = me.y + ydiff;

            var blocks = me.shape.positions[me.pos];
            for (var loop = 0; loop < blocks.length; loop++)
            {
                var blockPos = blocks[loop];
                canMove = canMove && board.isFree(newx + blockPos.x, newy + blockPos.y);
            }

            if (canMove)
            {
                me.x = newx;
                me.y = newy;
                return true;
            }
        }
        return false;
    };

    me.rotate = function (board)
    {
        if (me.loaded)
        {
            var newPos = me.pos + 1;
            if (newPos >= me.shape.positions.length)
            {
                newPos = 0;
            }

            var canRotate = true;
            var blocks = me.shape.positions[newPos];
            for (var loop = 0; loop < blocks.length; loop++)
            {
                var blockPos = blocks[loop];
                canRotate = canRotate && board.isFree(me.x + blockPos.x, me.y + blockPos.y);
            }

            if (canRotate)
            {
                me.pos = newPos;
            }
        }
    };

    me.addShapeToBoard = function (board)
    {
        var blocks = me.shape.positions[me.pos];
        for (var loop = 0; loop < blocks.length; loop++)
        {
            var blockPos = blocks[loop];
            board.setBlock(me.x + blockPos.x, me.y + blockPos.y, me.shape.colour);
        }
    };
}








