const MAX_WIDTH = 840
const MAX_HEIGHT = 1188
const MM_TO_PX = 4
const font = "20px Arial"
const strokeThickness = 2


document.addEventListener('DOMContentLoaded', () => {
    const canva = document.querySelector("#myCanvas");
    const context = canva.getContext('2d');

    canva.width = (MAX_WIDTH * MM_TO_PX);
    canva.height = (MAX_HEIGHT * MM_TO_PX);

    //Bordas
    context.beginPath();
    context.lineWidth = 2
    context.moveTo((25 * MM_TO_PX), (7 * MM_TO_PX));
    context.lineTo((25 * MM_TO_PX), (MAX_HEIGHT - (7 * MM_TO_PX)));
    context.stroke();

    context.beginPath();
    context.moveTo((MAX_WIDTH - (7 * MM_TO_PX)), (7 * MM_TO_PX));
    context.lineTo((MAX_WIDTH - (7 * MM_TO_PX)), (MAX_HEIGHT - (7 * MM_TO_PX) ));
    context.stroke();

    context.beginPath();
    context.moveTo((25 * MM_TO_PX), (7 * MM_TO_PX));
    context.lineTo((MAX_WIDTH - (7 * MM_TO_PX)), (7 * MM_TO_PX));
    context.stroke();

    context.beginPath();
    context.moveTo((25 * MM_TO_PX), (MAX_HEIGHT - (7 * MM_TO_PX)));
    context.lineTo((MAX_WIDTH - (7 * MM_TO_PX)), (MAX_HEIGHT - (7 * MM_TO_PX)));
    context.stroke();

    context.beginPath();
    context.moveTo((25 * MM_TO_PX), (MAX_HEIGHT - (17 * MM_TO_PX)));
    context.lineTo((MAX_WIDTH - (7 * MM_TO_PX)), (MAX_HEIGHT - (17 * MM_TO_PX)));
    context.stroke();

    context.beginPath();
    context.moveTo((25 * MM_TO_PX), (MAX_HEIGHT - (27 * MM_TO_PX)));
    context.lineTo((MAX_WIDTH - (7 * MM_TO_PX)), (MAX_HEIGHT - (27 * MM_TO_PX)));
    context.stroke();

    context.beginPath();
    context.moveTo((25 * MM_TO_PX), (MAX_HEIGHT - (37 * MM_TO_PX)));
    context.lineTo((MAX_WIDTH - (7 * MM_TO_PX)), (MAX_HEIGHT - (37 * MM_TO_PX)));
    context.stroke();

    context.beginPath();
    context.moveTo((125 * MM_TO_PX), (MAX_HEIGHT - (7 * MM_TO_PX)));
    context.lineTo((125 * MM_TO_PX), (MAX_HEIGHT - (37 * MM_TO_PX)));
    context.stroke();

    //Legenda
    context.font = font;
    context.fillText("Aluno: Felipe Alafy Rodrigues Silva", (27 * MM_TO_PX), (MAX_HEIGHT - (30.5 * MM_TO_PX)))
    context.fillText("Esc:", (27 * MM_TO_PX), (MAX_HEIGHT - (20.5 * MM_TO_PX)))
    context.fillText("Diedro:", (27 * MM_TO_PX), (MAX_HEIGHT - (10.5 * MM_TO_PX)))
    context.fillText("Desenho: 7", (127 * MM_TO_PX), (MAX_HEIGHT - (30.5 * MM_TO_PX)))
    context.fillText("Data: 30/05/2024", (127 * MM_TO_PX), (MAX_HEIGHT - (20.5 * MM_TO_PX)))
    context.fillText("SENAI", (127 * MM_TO_PX), (MAX_HEIGHT - (10.5 * MM_TO_PX)))

    //Primeiro desenho
    draw(76, 127, 99.5, 99.5, 25, context)
    quoteLeft(68, 74, 99.5, 99.5, 7.5, context, "7,5")
    quoteLeft(68, 74, 117, 117, 7.5, context, "7,5")
    quoteBottom(76, 127, 126.5, 132.5, 51, context, "51")
    draw(76, 91, 107, 107, 10, context)
    draw(76, 76, 99.5, 107, 17.5, context)
    draw(91, 91, 107, 117, 0, context)
    draw(127, 127, 99.5, 124.5, 0, context)
    context.beginPath()
    context.arc((111 * 4), (112 * 4), (7 * 4), 0, 2 * Math.PI, false)
    context.stroke()

    //Segundo desenho
    draw(147.25, 156.25, 99.5, 99.5, 25, context)
    quoteBottom(147.25, 156.25, 127.5, 133.5, 0, context, "9")
    draw(147.5, 147.5, 99.5, 124.5, 0, context)
    draw(156, 156, 99.5, 124.5, 0, context)
    quoteRight(158, 164, 99.5, 99.5, 25, context, "25")
    draw(147.5, 156.25, 107, 107, 10, context)
    quoteLeft(139.5, 145.5, 107, 107, 10, context, "10")
    drawSegmentedLineHorizontal(147.25, 156.25, 105, context)
    drawSegmentedLineHorizontal(147.25, 156.25, 119, context)
    
    
    //Terceiro desenho
    draw(76, 127, 144.5, 144.5, 9, context)
    draw(76, 76, 144.5, 153.5, 0, context)
    draw(127, 127, 144.5, 153.5, 0, context)
    drawSegmentedLineVertical(91, 144.5, 153.5, context)
    quoteTop(76, 91, 138.5, 142.5, 0, context, "15")
    drawSegmentedLineVertical(102, 144.5, 153.5, context)
    quoteBottom(91, 102, 155.5, 161.5, 0, context, "11")
    drawSegmentedLineVertical(116, 144.5, 153.5, context)
    quoteTop(102, 116, 138.5, 142.5, 0, context, "14")
});

//Paramenters are required in mm
function draw(lineXStart, lineXEnd, lineYStart, lineYEnd, spaccing, context) {
    lineXStart  = lineXStart * MM_TO_PX
    lineXEnd    = lineXEnd * MM_TO_PX
    lineYStart  = lineYStart * MM_TO_PX
    lineYEnd    = lineYEnd * MM_TO_PX

    context.beginPath()
    context.lineWidth = strokeThickness
    context.moveTo(lineXStart, lineYStart)
    context.lineTo(lineXEnd, lineYEnd)

    var line2YStart  = lineYStart + (spaccing * MM_TO_PX)
    var line2YEnd    = lineYEnd + (spaccing * MM_TO_PX)

    context.moveTo(lineXStart, line2YStart)
    context.lineTo(lineXEnd, line2YEnd)
    context.stroke()
}

function drawSegmentedLineVertical(lineX, lineYStart, lineYEnd, context) {
    lineX  = lineX * MM_TO_PX
    lineYStart  = lineYStart * MM_TO_PX
    lineYEnd    = lineYEnd * MM_TO_PX
    
    context.beginPath()
    context.lineWidth = 1

    while(lineYStart < lineYEnd) {
        context.moveTo(lineX, lineYStart)
        lineYStart = lineYStart + 12
        context.lineTo(lineX, lineYStart)
        lineYStart = lineYStart + 8
    }
    context.stroke()
}

function drawSegmentedLineHorizontal(lineXStart, lineXEnd, lineY, context) {
    lineY  = lineY * MM_TO_PX
    lineXStart  = lineXStart * MM_TO_PX
    lineXEnd    = lineXEnd * MM_TO_PX
    
    context.beginPath()
    context.lineWidth = 1

    while(lineXStart < lineXEnd) {
        context.moveTo(lineXStart, lineY)
        lineXStart = lineXStart + 12
        context.lineTo(lineXStart, lineY)
        lineXStart = lineXStart + 8
    }
    context.stroke()
}

function quoteLeft (lineXStart, lineXEnd, lineYStart, lineYEnd, spaccing, context, text) {
    lineXStart  = lineXStart * MM_TO_PX
    lineXEnd    = lineXEnd * MM_TO_PX
    lineYStart  = lineYStart * MM_TO_PX
    lineYEnd    = lineYEnd * MM_TO_PX

    context.beginPath()
    context.lineWidth = 1
    context.moveTo(lineXStart, lineYStart)
    context.lineTo(lineXEnd, lineYEnd)

    var line2YStart  = lineYStart + (spaccing * MM_TO_PX)
    var line2YEnd    = lineYEnd + (spaccing * MM_TO_PX)

    context.moveTo(lineXStart, line2YStart)
    context.lineTo(lineXEnd, line2YEnd)

    context.moveTo(lineXStart + (2 * MM_TO_PX), lineYStart)
    context.lineTo(lineXStart + (2 * MM_TO_PX), line2YStart)
    context.stroke()

    //Arrow UP
    context.closePath()
    context.beginPath()
    context.moveTo((lineXStart + (2 * MM_TO_PX)), lineYEnd)
    context.lineTo((lineXStart + (1 * MM_TO_PX)), (lineYEnd + (3 * MM_TO_PX)))
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (lineYEnd + (3 * MM_TO_PX)))
    context.lineTo((lineXStart + (2 * MM_TO_PX)), (lineYEnd + (0 * MM_TO_PX)))
    context.fill()
    context.stroke()
    context.closePath()
    
    //Arrow Down
    context.closePath()
    context.beginPath()
    context.moveTo((lineXStart + (2 * MM_TO_PX)), line2YStart)
    context.lineTo((lineXStart + (1 * MM_TO_PX)), (line2YStart - (3 * MM_TO_PX)))
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (line2YStart - (3 * MM_TO_PX)))
    context.lineTo((lineXStart + (2 * MM_TO_PX)), (line2YStart - (0 * MM_TO_PX)))
    context.fill()
    context.stroke()
    context.closePath()

    context.stroke()
    context.save()
    context.translate(lineXStart, lineYStart)
    context.rotate(-Math.PI/2)
    context.textAlign = "center"
    context.font = "15px Aril"
    context.fillText(text, (((line2YStart - lineYStart)/2) * -1), -10)
    context.restore()
}

function quoteRight (lineXStart, lineXEnd, lineYStart, lineYEnd, spaccing, context, text) {
    lineXStart  = lineXStart * MM_TO_PX
    lineXEnd    = lineXEnd * MM_TO_PX
    lineYStart  = lineYStart * MM_TO_PX
    lineYEnd    = lineYEnd * MM_TO_PX

    context.beginPath()
    context.lineWidth = 1
    context.moveTo(lineXStart, lineYStart)
    context.lineTo(lineXEnd, lineYEnd)

    var line2YStart  = lineYStart + (spaccing * MM_TO_PX)
    var line2YEnd    = lineYEnd + (spaccing * MM_TO_PX)

    context.moveTo(lineXStart, line2YStart)
    context.lineTo(lineXEnd, line2YEnd)

    context.moveTo(lineXEnd - (2 * MM_TO_PX), lineYStart)
    context.lineTo(lineXEnd - (2 * MM_TO_PX), line2YStart)
    context.stroke()

    //Arrow UP
    context.closePath()
    context.beginPath()
    context.moveTo((lineXEnd - (2 * MM_TO_PX)), lineYEnd)
    context.lineTo((lineXEnd - (1 * MM_TO_PX)), (lineYEnd + (3 * MM_TO_PX)))
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (lineYEnd + (3 * MM_TO_PX)))
    context.lineTo((lineXEnd - (2 * MM_TO_PX)), (lineYEnd + (0 * MM_TO_PX)))
    context.fill()
    context.stroke()
    context.closePath()
    
    //Arrow Down
    context.closePath()
    context.beginPath()
    context.moveTo((lineXEnd - (2 * MM_TO_PX)), line2YStart)
    context.lineTo((lineXEnd - (1 * MM_TO_PX)), (line2YStart - (3 * MM_TO_PX)))
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (line2YStart - (3 * MM_TO_PX)))
    context.lineTo((lineXEnd - (2 * MM_TO_PX)), (line2YStart - (0 * MM_TO_PX)))
    context.fill()
    context.stroke()
    context.closePath()
    
    context.beginPath()
    context.stroke()
    context.save()
    context.translate(lineXStart, lineYStart)
    context.rotate(-Math.PI/2)
    context.textAlign = "center"
    context.font = "15px Aril"
    context.fillText(text, (((line2YStart - lineYStart)/2) * -1), 10)
    context.restore()
}

function quoteTop (lineXStart, lineXEnd, lineYStart, lineYEnd, spaccing, context, text) {
    lineXStart  = lineXStart * MM_TO_PX
    lineXEnd    = lineXEnd * MM_TO_PX
    lineYStart  = lineYStart * MM_TO_PX
    lineYEnd    = lineYEnd * MM_TO_PX

    context.beginPath()
    context.lineWidth = 1
    context.moveTo(lineXStart, (lineYStart - (2 * MM_TO_PX)))
    context.lineTo(lineXStart, lineYEnd)

    context.moveTo(lineXStart, lineYStart)
    context.lineTo(lineXEnd, lineYStart)

    context.moveTo(lineXEnd, (lineYStart - (2 * MM_TO_PX)))
    context.lineTo(lineXEnd, lineYEnd)

    //Arrow Right
    context.stroke()
    context.closePath()
    context.beginPath()
    context.moveTo(lineXEnd, lineYStart)
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (lineYStart - (1 * MM_TO_PX)))
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (lineYEnd - (3 * MM_TO_PX)))
    context.moveTo((lineXEnd - (3 * MM_TO_PX)), (lineYStart - (1.01 * MM_TO_PX)))
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (lineYEnd - (3.1 * MM_TO_PX)))
    context.fill()

    //Arrow Left
    context.stroke()
    context.closePath()
    context.beginPath()
    context.moveTo(lineXStart, lineYStart)
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (lineYStart - (1 * MM_TO_PX)))
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (lineYEnd - (3 * MM_TO_PX)))
    context.moveTo((lineXStart + (3 * MM_TO_PX)), (lineYStart - (1.01 * MM_TO_PX)))
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (lineYEnd - (3.1 * MM_TO_PX)))
    context.fill()

    context.stroke()
    context.textAlign = "center"
    context.font = "15px Aril"
    context.fillText(text, ((lineXEnd - lineXStart)/2 + lineXStart), (lineYStart + (-2 * MM_TO_PX)))
    context.restore()
}

function quoteBottom (lineXStart, lineXEnd, lineYStart, lineYEnd, spaccing, context, text) {
    lineXStart  = lineXStart * MM_TO_PX
    lineXEnd    = lineXEnd * MM_TO_PX
    lineYStart  = lineYStart * MM_TO_PX
    lineYEnd    = lineYEnd * MM_TO_PX

    context.beginPath()
    context.lineWidth = 1
    context.moveTo(lineXStart, (lineYEnd + (2 * MM_TO_PX)))
    context.lineTo(lineXStart, lineYStart)

    context.moveTo(lineXStart, lineYEnd)
    context.lineTo(lineXEnd, lineYEnd)

    context.moveTo(lineXEnd, (lineYEnd + (2 * MM_TO_PX)))
    context.lineTo(lineXEnd, lineYStart)

    //Arrow Right
    context.stroke()
    context.closePath()
    context.beginPath()
    context.moveTo(lineXEnd, lineYEnd)
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (lineYEnd - (1 * MM_TO_PX)))
    context.lineTo((lineXEnd - (3 * MM_TO_PX)), (lineYEnd + (1 * MM_TO_PX)))
    context.lineTo(lineXEnd, lineYEnd)
    context.fill()
    context.closePath()

    //Arrow Left
    context.stroke()
    context.closePath()
    context.beginPath()
    context.moveTo(lineXStart, lineYEnd)
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (lineYEnd - (1 * MM_TO_PX)))
    context.lineTo((lineXStart + (3 * MM_TO_PX)), (lineYEnd + (1 * MM_TO_PX)))
    context.lineTo(lineXStart, lineYEnd)
    context.fill()
    context.closePath()

    context.stroke()
    context.textAlign = "center"
    context.font = "15px Aril"
    context.fillText(text, ((lineXEnd - lineXStart) / 2 + lineXStart), (lineYEnd + (-2 * MM_TO_PX)))
    context.restore()
}