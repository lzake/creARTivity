var image = new Image();
image.onload = cutImageUp;
image.src = 'jptwo.jpg';

function cutImageUp() {
    var imagePieces = [];
    for(var x = 0; x < 20; ++x) {
        for(var y = 0; y < 20; ++y) {
            var canvas = document.createElement('canvas');
            canvas.width = 80;
            canvas.height = 80;
            var context = canvas.getContext('2d');
            context.drawImage(image, x * 80, y * 80, 80, 80, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }
    // imagePieces now contains data urls of all the pieces of the image

    // load one piece onto the page
    var anImageElement = document.getElementById('one');
    var count = 0
    console.log(imagePieces);
    imagePieces.forEach((image) => {

      $('#splitImages').append(`
        <img src="${image}" id="${count}" alt="" class="imagepiece">
        `)
        count++
    })
    $('#stats').append(`
      <h4>image split into ${imagePieces.length} pieces</h4>
    `)
}
