var canvas = new fabric.Canvas('canvas', {
  isDrawingMode: true,
})
canvas.freeDrawingBrush.width = 5
  canvas.setWidth(1400)
  canvas.setHeight(600)
  canvas.setBackgroundColor("white")


var image = new Image();
image.src = 'jptwo.jpg';
$("#CutImageUp").on("click", function() {
  console.log("heard");
  cutImageUp()
})

var imagePieces = [];
function cutImageUp() {

    for(var x = 0; x < 40; ++x) {
        for(var y = 0; y < 40; ++y) {
            var canvastwo = document.createElement('canvas');
            canvastwo.width = 40;
            canvastwo.height = 40;
            var context = canvastwo.getContext('2d');
            context.drawImage(image, x * 40, y * 40, 40, 40, 0, 0, canvastwo.width, canvastwo.height);
            imagePieces.push(canvastwo.toDataURL());
        }
    }
    imagePieces.forEach((images) => {
      var randomLine = Math.floor(Math.random() * lines.length)
      console.log(randomLine);
      var randomIndex = Math.floor(Math.random() * lines[randomLine].length)
      var variation = Math.floor(Math.random() * 20) - 10
      fabric.Image.fromURL(images, function(oImg) {
        oImg.set('left', lines[randomLine][randomIndex].x - 45 + variation)
        oImg.set('top', lines[randomLine][randomIndex].y - 45 + variation)
        oImg.set('angle', Math.floor(Math.random() * 30))
        canvas.add(oImg)
      })
    })
}

//Record drawn line
var lastPoint = undefined;
canvas.on('mouse:down', function(options) {
    startRecording();
});

var lines = [];


function startRecording(){
    var line = [];
    canvas.on('mouse:move', recordMoment);
    canvas.on("mouse:up", stopRecording);

    function recordMoment(event){
        line.push({x: event.e.x, y: event.e.y});
        // console.log(event.e.x + " " + event.e.y);
        lastPoint = [event.e.x, event.e.y];
    }
    function stopRecording(){
        lines.push(line);
        canvas.off('mouse:move', recordMoment);
        canvas.off("mouse:up", stopRecording);
    }
}

//Save drawn image
var DrawnCanvas
$("#SaveImage").on("click", function() {
  console.log("heard save");
  DrawnCanvas = canvas.toDataURL()
  var w=window.open('about:blank','image from canvas');
  w.document.write("<img src='"+DrawnCanvas+"' alt='from canvas'/>")
})
