
function Tetris(window, context, config)
{
    var me = this;

    me.window = window;
    me.context = context;
    me.config = config;

    me.shape = new Shape(me.config);
    me.board = new Board(me.config);
    me.draw = new Draw(me.context, me.config);

    me.start = function ()
    {
        setInterval(me.redraw, 10);
        setInterval(function () { me.moveShapeDown(); }, 1000);
        me.window.addEventListener("keydown", me.keyPress, false);

        me.board.clear();
        me.loadNewShape();
    };

    me.redraw = function ()
    {
        me.draw.clear();
        me.board.draw(me.draw);
        me.shape.draw(me.draw);
    };

    me.loadNewShape = function ()
    {
        var newShape = Math.floor((Math.random() * 10)) % me.config.shapes.length;
        me.shape.load(config.shapes[newShape]);
    };

    me.moveShapeDown = function ()
    {
        var moved = me.moveShape(0, 1);
        if (!moved)
        {
            me.shape.addShapeToBoard(me.board);
            me.board.clearFilledRows();

            if (me.board.isFull())
            {
                me.board.clear();
            }
            me.loadNewShape();
        }
    };

    me.moveShape = function (xdiff, ydiff)
    {
        return me.shape.move(xdiff, ydiff, me.board);
    };

    me.keyPress = function (e)
    {
        if (e.keyCode === 37) // Left
        {
            me.moveShape(-1, 0);
        }
        else if (e.keyCode === 39) // Right
        {
            me.moveShape(1, 0);
        }
        else if (e.keyCode === 40) // Down
        {
            me.moveShape(0, 1);
        }
        else if (e.keyCode === 32) // Space
        {
            me.shape.rotate(me.board);
        }
    };
}


function init()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    var config = new Config();
    context.canvas.width = config.getBoardWidth();
    context.canvas.height = config.getBoardHeight();

    var tetris = new Tetris(window, context, config);
    tetris.start();
}