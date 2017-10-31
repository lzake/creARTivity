var canvas = new fabric.Canvas('canvas')
var c = canvas.getContext('2d')
  canvas.setWidth(400)
  canvas.setHeight(400)


var image = new Image();
image.src = 'jptwo.jpg';
$("#CutImageUp").on("click", function() {
  console.log("Cut Image Called");
  cutImageUp()
})

var imagePieces = [];
var imageData = []
function cutImageUp() {
    for(var x = 0; x < 10; ++x) {
        for(var y = 0; y < 10; ++y) {
            var splitCanvas = document.createElement('canvas');
            splitCanvas.width = 40;
            splitCanvas.height = 40;
            var context = splitCanvas.getContext('2d');
            context.drawImage(image, x * 40, y * 40, 40, 40, 0, 0, splitCanvas.width, splitCanvas.height);
            imagePieces.push(splitCanvas.toDataURL());
            imageData.push(context.getImageData(0, 0, splitCanvas.width, splitCanvas.height))
        }
    }
}

$("#GetImageData").on("click", function () {
  console.log("Get Image Data Called");
  console.log(imagePieces[49]);
  c.putImageData(imageData[49], 50, 50)
})

//Save drawn image
var imageData
$("#SaveImage").on("click", function() {
  console.log("heard save");
  var DrawnCanvas = imagePieces[49]
  var w=window.open('about:blank','image from canvas');
  w.document.write("<img src='"+DrawnCanvas+"' alt='from canvas'/>")
})

$("#getGrayScale").on("click", function() {
  console.log("heard grayscale");
  var data = imageData[49].data
  for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
  c.putImageData(imageData[49], 50, 100)
  }
})
