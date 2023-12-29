document.getElementById('fileInput').addEventListener('change', function (e) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);

    img.onload = function () {
        var maxWidth = window.innerWidth;
        var maxHeight = window.innerHeight;

        var ratio = 0;
        var width = img.width;
        var height = img.height;

        // Calculate ratio for height and width
        if (width > height) {
            ratio = maxWidth / width;
        } else {
            ratio = maxHeight / height;
        }

        // New dimensions for image
        width = width * ratio;
        height = height * ratio;

        // Set new canvas dimensions
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);
        document.getElementById('fileInput').classList.add('hidden')
    };
});

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 100, 100);

// var img = new Image();
// img.src = 'path-to-image';
// img.onload = function() {
//     ctx.drawImage(img, 0, 0, 300, 150);
// };