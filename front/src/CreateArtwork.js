/* globals fabric, net, $, sumLeft, sumRight */

var canvas
//Canvas setup
var sumLeft = 0;
var sumRight = 0;

function init(el){
canvas = this.__canvas = new fabric.Canvas(el, {
  isDrawingMode: true,
})
canvas.freeDrawingBrush.width = 20
  canvas.setWidth(500)
  canvas.setHeight(500)

  canvas.on('mouse:down', function(options) {
    startRecording();
});

}
//requiring in Color.js
var Color = net.brehaut.Color;

//prepares artwork for generation
// $("#CutImageUp").on("click", function() {
//   prepareSquares()
//   console.log('cut working')
// })

// //creates the procedurally generated artwork
// $("#GenerateArtwork").on("click", function() {
//   creArtivity()
//   console.log('generate working')
// })

// //saves current state of canvas
// $("#SaveImage").on("click", function() {
//   saveCanvasImage()
//   console.log('save working')
// })

//calls all necessary functions needed to create squares and
function prepareSquares() {
  createSquares()
  GetImageData(imagePieceData)
}

//procedurally generates artwork
function creArtivity() {
  coverCanvasBackground()
  buildDrawnLines(fourBorders, rightBorders, leftBorders)
  canvas.isDrawingMode = !canvas.isDrawingMode;
}

//Given the image, create 100 40px by 40px squares
//for each iteration generates a Url to the locally stored image
//and produces Image data that can be used for comparison purposes
var image = new Image();
image.src = '/jptwo.png';
function createSquares() {
    for(var x = 0; x < 20; ++x) {
        for(var y = 0; y < 20; ++y) {
            var splitCanvas = document.createElement('canvas')
            splitCanvas.width = 40
            splitCanvas.height = 40
            var context = splitCanvas.getContext('2d')
            context.drawImage(image, x * 40, y * 40, 40, 40, 0, 0, splitCanvas.width, splitCanvas.height);
            getImagePieceUrls(splitCanvas.toDataURL())
            getImagePieceData(context.getImageData(0, 0, splitCanvas.width, splitCanvas.height))
        }
    }
}

//Used to store image data from createSquares
var imagePieceData = [];
function getImagePieceData(data) {
  imagePieceData.push(data);
}

//Used to store image Urls for placement
var imagePieceUrls = {};
var imageCount = 0
function getImagePieceUrls(image) {
  imagePieceUrls[imageCount] = {
    "url" : image,
    "dark_border" : [],
    "luminosityAverage" : undefined //will be used later for upcoming feature
  }
  imageCount++
}



//stores luminosity of the grayscale of each pixel of a square
var pixelLightnessData = {}

//finds the RGB values for each pixel of a square
//converts RGB to grayscale
//finds the HSL for each pixel as well.
//Passes pixel information to function that Stores RGB and luminosity
var count = 0
function GetImageData(images) {
  images.forEach((imageFound) => {
    pixelLightnessData[count] = []
    for (var i = 0; i < imageFound.data.length; i+=4) {
      //stores RGB data prior to grayscale conversion
      //converts color data into grayscale
      var avg = (imageFound.data[i] + imageFound.data[i + 1] + imageFound.data[i + 2]) / 3;
      imageFound.data[i]     = avg; // red
      imageFound.data[i + 1] = avg; // green
      imageFound.data[i + 2] = avg; // blue
      var tempData = []
      tempData.push(imageFound.data[i], imageFound.data[i + 1], imageFound.data[i + 2])
      var tempRGB = Color(tempData)
      populateColorArrays(count, tempRGB)
    }
    count++
  })
  var keyOfLightData = Object.keys(pixelLightnessData)
  for (var l = 0; l < keyOfLightData.length; l++) {
    getBorderData(pixelLightnessData[l]);
  }
}

//stores RGB and luminosity of each square
function populateColorArrays(index, data) {
  pixelLightnessData[index].push(data.toHSL().lightness)
}

//pixelBorderColors is not necessary and is not used past this function
//I was using it to evaluate and learn from what getBorderData was doing
//getBorderData collects the luminosity of every pixel along each squares border
var pixelBorderColors = {}
var borderCount = 0;
function getBorderData(data) {
  pixelBorderColors["top"] = []
  var sumTop = 0
  for (var i = 0; i <= 39; i++) {
      sumTop = sumTop + data[i]
  }
  pixelBorderColors["top"].push(sumTop / 40)

  pixelBorderColors["bottom"] = []
  var sumBottom = 0
  for (var j = 1560; j <= 1599; j++) {
    sumBottom = sumBottom + data[j]
  }
  pixelBorderColors["bottom"].push(sumBottom / 40)

  pixelBorderColors["left"] = []
  pixelBorderColors["right"] = []
  sumLeft = 0
  sumRight = 0
  for (var k = 0; k <=1560; k += 40) {
    sumLeft = sumLeft + data[k]
    sumRight = sumRight + data[k + 39]
  }
  pixelBorderColors["left"].push(sumLeft / 40)
  pixelBorderColors["right"].push(sumRight / 40)
  borderTagger(borderCount, sumTop, sumRight, sumBottom, sumLeft)
  borderCount++
}

//Arrays containing image urls for images that fit the border description
var noBorder = []
var fourBorders = []
var leftBorders = []
var rightBorders = []
//This function sorts and tags the images. I've done this twice right now as I was experimenting with the best way to go about this. borderTagger creates arrays for the border types I needed for buildDrawnLines and also adds tags to the object imagePieceUrls
function borderTagger(index, top, right, bottom, left) {
  var topAvg = top / 40 * 225
  var rightAvg = right / 40 * 225
  var bottomAvg = bottom / 40 * 225
  var leftAvg = left / 40 * 255
  if (70 < topAvg && 70 < rightAvg && 70 < bottomAvg && 70 < leftAvg) {
    noBorder.push(imagePieceUrls[index].url)
  }
  if (70 > topAvg && 70 > rightAvg && 70 > bottomAvg && 70 > leftAvg) {
    fourBorders.push(imagePieceUrls[index].url)
  }
  if (70 < topAvg && 70 > rightAvg && 70 < bottomAvg && 70 < leftAvg) {
    rightBorders.push(imagePieceUrls[index].url)
  }
  if (70 < topAvg && 70 < rightAvg && 70 < bottomAvg && 70 > leftAvg) {
    leftBorders.push(imagePieceUrls[index].url)
  }
  if (70 > topAvg) {
    imagePieceUrls[index].dark_border.push("top")
  }
  if (70 > rightAvg) {
    imagePieceUrls[index].dark_border.push("right")
  }
  if (70 > bottomAvg) {
    imagePieceUrls[index].dark_border.push("bottom")
  }
  if (70 > leftAvg) {
    imagePieceUrls[index].dark_border.push("left")
  }
}

//iterates over the canvas and places a single noBorder square every 10px
function coverCanvasBackground() {
 for (let x = 0; x < canvas.width; x+=10) {
   for (let y = 0; y < canvas.height; y+=10) {
     let lightSquare = getRandomSquare(noBorder)
     fabric.Image.fromURL(lightSquare, function(oImg) {
       oImg.set('left', x) //x
       oImg.set('top', y) //y
       oImg.set('angle', Math.random() * 360)
       canvas.add(oImg)
     })
   }
 }
}

//finds a random square for the type of square input
//valid inputs: noBorder, fourBorders, rightBorders, leftBorders
function getRandomSquare(typeOfsquare) {
  let randomSelection = Math.floor(getRandomArbitrary(0, typeOfsquare.length))
    return typeOfsquare[randomSelection]
}

//helper function to find a random number between two parameters
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//Record the coordinates for the user drawn lines
var userDrawnLines = [];
var lastPoint = undefined;

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
        userDrawnLines.push(line);
        canvas.off('mouse:move', recordMoment);
        canvas.off("mouse:up", stopRecording);
    }
}

//Finds the user drawn lines
//Populates each coordinate with three squares to create a top, bottom, and filler
function buildDrawnLines(filler, top, bottom) {
  userDrawnLines.forEach((line) => {
    line.forEach((coordinate) => {
      let topPiece = getRandomSquare(top)
      fabric.Image.fromURL(topPiece, function(oImg) {
        oImg.set('left', coordinate.x - 55)
        oImg.set('top', coordinate.y - 55)
        oImg.set('angle', getRandomArbitrary(40,50))
        canvas.add(oImg)
      })
      let fillerPiece = getRandomSquare(filler)
      fabric.Image.fromURL(fillerPiece, function(oImg) {
        oImg.set('left', coordinate.x - 35)
        oImg.set('top', coordinate.y - 35)
        oImg.set('angle', getRandomArbitrary(0,50))
        canvas.add(oImg)
      })
      let bottomPiece = getRandomSquare(bottom)
      fabric.Image.fromURL(bottomPiece, function(oImg) {
        oImg.set('left', coordinate.x - 10)
        oImg.set('top', coordinate.y - 10)
        oImg.set('angle', getRandomArbitrary(40,50))
        canvas.add(oImg)
      })
    })
  })
}

//Save drawn image
//The DrawnCanvas variable contains the finished canvas
var DrawnCanvas
function saveCanvasImage() {
  DrawnCanvas = canvas.toDataURL()
  var w=window.open('about:blank','image from canvas');
  w.document.write("<img src='"+DrawnCanvas+"' alt='from canvas'/>")
}

export default {prepareSquares, creArtivity, saveCanvasImage, init, createSquares}