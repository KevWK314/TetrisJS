function Board(config)
{
    var me = this;

    me.config = config;
    me.blocks = [[]];

    me.draw = function (draw)
    {
        for (var y = 0; y < me.config.boardHeight; y++)
        {
            for (var x = 0; x < me.config.boardWidth; x++)
            {
                if (me.blocks[y][x].filled)
                {
                    draw.drawBlock(x, y, me.blocks[y][x].colour);
                }
            }
        }
    };

    me.isFree = function (x, y)
    {
        var isFree = x < me.config.boardWidth && y < me.config.boardHeight && x >= 0;
        if (isFree && y >= 0)
        {
            isFree = !me.blocks[y][x].filled;
        }
        return isFree;
    };

    me.setBlock = function (x, y, colour)
    {
        if (x < me.config.boardWidth && y < me.config.boardHeight
            && x >= 0 && y >= 0)
        {
            me.blocks[y][x].filled = true;
            me.blocks[y][x].colour = colour;
        }
    };

    me.clearFilledRows = function ()
    {
        for (var y = 0; y < me.config.boardHeight; y++)
        {
            var filled = true;
            for (var x = 0; x < me.config.boardWidth; x++)
            {
                filled &= me.blocks[y][x].filled;
            }
            if (filled)
            {
                var row = me.blocks[y];
                for (x = 0; x < me.config.boardWidth; x++)
                {
                    row[x].filled = false;
                }

                me.blocks.splice(y, 1);
                me.blocks.splice(0, 0, row);
            }
        }
    };

    me.isFull = function ()
    {
        for (var x = 0; x < me.config.boardWidth; x++)
        {
            if (me.blocks[0][x].filled)
            {
                return true;
            }
        }
        return false;
    };

    me.clear = function ()
    {
        for (var y = 0; y < me.config.boardHeight; y++)
        {
            me.blocks[y] = [];
            for (var x = 0; x < me.config.boardWidth; x++)
            {
                me.blocks[y][x] = { filled: false, colour: 'white' };
            }
        }
    };
}