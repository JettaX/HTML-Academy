var renderStatistics = function (ctx, names, times) {

    let cloudWidth = 420;
    let cloudHeight = 270;
    let cloudX = 130;
    let cloudY = 10;

    drawClouds(ctx, cloudWidth, cloudHeight, cloudX, cloudY, "rgba(255,255,255, 1)");
    drawClouds(ctx, cloudWidth, cloudHeight, cloudX + 10, cloudY + 10, "rgba(255,255,255, 0.7)");

    ctx.fillStyle = "black";
    ctx.font = "16px PT MONO";
    ctx.textAlign = "center";
    ctx.fillText("Вы победили!", ((cloudWidth / 2) + cloudX), (cloudY + 40))
    ctx.fillText("Список результатов:!", ((cloudWidth / 2) + cloudX), (cloudY + 60))

    let graphHeight = 120;
    let graphX = cloudX;
    let graphY = (cloudHeight + cloudY) - 30;
    let ColumnWidth = 40;
    let ColumnToColumn = 75;
    let scoreMax = 0;

    for (let i = 0; i < times.length; i++) {
        if (times[i] > scoreMax) {
            scoreMax = times[i];
        }
    }

    for (let i = 0; i < times.length; i++) {
        let scoreSource = Math.floor(times[i]);
        let score = (graphHeight * scoreSource) / scoreMax;
        graphX += ColumnToColumn;

        if (names[i] === "Вы") {
            ctx.fillStyle = "rgb(255,0,0)";
        } else {
            let color1 = getRandomArbitrary(0, 80);
            let color2 = getRandomArbitrary(29, 89);
            let color3 = getRandomArbitrary(90, 255);
            ctx.fillStyle = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
        }

        ctx.fillRect(graphX, graphY - 20, ColumnWidth, -score);
        ctx.textAlign = "start";
        ctx.fillStyle = "black";
        ctx.fillText(names[i], graphX, graphY);
        ctx.fillText(scoreSource + "", graphX, graphY - 30 - score);

    }
};

function drawClouds(ctx, width, height, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo((width / 2) + x, y + 20);
    ctx.lineTo((width + x), y);
    ctx.lineTo(width + x - 20, height / 2 + y);
    ctx.lineTo(width + x, height + y);
    ctx.lineTo(width / 2 + x, height + y - 20);
    ctx.lineTo(x, height + y);
    ctx.lineTo(x + 20, height / 2 + y);
    ctx.fill();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}