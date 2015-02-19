function Draw(context, config)
{
    var me = this;

    me.context = context;
    me.config = config;

    me.clear = function ()
    {
        me.context.clearRect(0, 0, me.context.canvas.width, me.context.canvas.height);
        me.context.fillStyle = "black";
        me.context.fillRect(0, 0, me.context.canvas.width, me.context.canvas.height);
    };

    me.drawBlock = function (x, y, colour)
    {
        context.fillStyle = colour;

        var left = (x * me.config.blockSize) + ((x + 1) * me.config.blockPadding);
        var top = (y * me.config.blockSize) + ((y + 1) * me.config.blockPadding);

        context.fillRect(left, top, me.config.blockSize, me.config.blockSize);
    };
}