
var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//allows us to draw and manipulate 2d elements
var c = canvas.getContext('2d')

//draw on canvas code
var previousX = 0
var previousY = 0
var currentX = 0
var currentY = 0
var flag = false
var dot_flag = false;

function init(){
  w = canvas.width
  h = canvas.height

document.addEventListener("mousemove", function (e) {
  findxy('move', e)
}, false)
document.addEventListener("mousedown", function (e) {
  findxy('down', e)
}, false)
document.addEventListener("mouseup", function (e) {
  findxy('up', e)
}, false)
document.addEventListener("mouseout", function (e) {
  findxy('out', e)
}, false)
}
init()

function draw() {
  c.beginPath()
  c.moveTo(previousX, previousY)
  c.lineTo(currentX, currentY)
  c.strokeStyle = "black"
  c.lineWidth = 7
  c.stroke()
  c.closePath()
}

function findxy(res, e) {
  if (res == 'down') {
    previousX = currentX
    previousY = currentY
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop

    flag = true
    dot_flag = true
    if (dot_flag) {
      c.beginPath()
      c.fillStyle = "black"
      c.fillRect(currentX, currentY, 2, 2)
      c.closePath()
      dot_flag = false
    }
  }
  if (res == "up" || res == "out"){
    flag = false
  }
  if (res == "move") {
    if (flag) {
      previousX = currentX
      previousY = currentY
      currentX = e.clientX - canvas.offsetLeft
      currentY = e.clientY - canvas.offsetTop
      draw()
    }
  }
}


//can be used to find a randomColor
function randomColor() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}




// //rectangle
// c.fillStyle = "red"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "blue"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "green"
// c.fillRect(100, 100, 100, 100)


// //drawing a line
// //beginPath starts a new line, if you want to draw a seperate line you must call it again
// c.beginPath()
// c.moveTo(50, 50)
// c.lineTo(50, 100)
// //setting color of stroke
// c.strokeStyle = "red"
// c.stroke()
// c.lineTo(100, 100)
// //can set different color of stroke by calling strokeStyle before c.stroke()
// c.strokeStyle = "blue"
// c.stroke()
//
//
// //arc or circle
// //c.arc (x, y, radius, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false))
// c.beginPath()
// c.arc(400, 400, 30, 0, Math.PI * 2, false)
// c.strokeStyle = "green"
// c.fillStyle = "red"
// c.stroke()
//
// //creating multiple drawings at once
// for (var i = 0; i < 1000; i++) {
//   var x = Math.random() * window.innerWidth
//   var y = Math.random() * window.innerHeight
//   c.beginPath()
//   c.arc(x, y, 30, 0, Math.PI * 2, false)
//   c.strokeStyle = "green"
//   c.fillStyle = "red"
//   c.stroke()
// }
