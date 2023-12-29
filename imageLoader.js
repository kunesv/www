document.getElementById('fileInput').addEventListener('change', function (e) {
    var canvas = document.getElementById('myCanvas');
    canvas.classList.remove('hidden')
    
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);

    img.onload = function () {        
        document.getElementById('loadImage').classList.add('hidden')

        var ratio = 1;
        var width = img.width;
        var height = img.height;

        var maxWidth = window.innerWidth
        var maxHeight = window.innerHeight

        if (width > height) {
            ratio = maxWidth / width;
        } else {
            ratio = maxHeight / height;
        }

        width = width * ratio;
        height = height * ratio;

        canvas.width = width;
        canvas.height = height;

        ctx.translate(width/2, height/2);
        ctx.drawImage(img, -width/2, -height/2, width, height);

        var dataURL = canvas.toDataURL('image/jpeg', 0.25);
        var newImage = new Image();
        newImage.src = dataURL;

        newImage.onload = function () {
            canvas.width = newImage.width;
            canvas.height = newImage.height;
            ctx.drawImage(newImage, 0, 0, newImage.width, newImage.height);
        }

        var rotationCount = 0;
        
        canvas.addEventListener('click', function (e) {
            rotationCount++;

            ratio = 1;
            width = img.width;
            height = img.height;

            maxWidth = window.innerWidth
            maxHeight = window.innerHeight
            

            if (rotationCount%2 === 1) {
                if (width > height) {
                    ratio = maxWidth / height;
                } else {
                    ratio = maxHeight / width;
                }

                width = width * ratio;
                height = height * ratio;

                canvas.width = height 
                canvas.height = width
                
                ctx.translate(height/2, width/2);
            } else {
                if (width > height) {
                    ratio = maxWidth / width;                    
                } else {
                    ratio = maxHeight / height;
                }

                width = width * ratio;
                height = height * ratio;

                canvas.width = width 
                canvas.height = height
                
                ctx.translate(width/2, height/2);
            }

            ctx.rotate(Math.PI/2 * rotationCount);
            ctx.drawImage(img, -width/2, -height/2, width, height);

            dataURL = canvas.toDataURL('image/jpeg', 0.25);
            newImage = new Image();
            newImage.src = dataURL;
            newImage.onload = function () {
                canvas.width = newImage.width;
                canvas.height = newImage.height;
                ctx.drawImage(newImage, 0, 0, newImage.width, newImage.height);
            }
        });

        
    };
});
document.getElementById('loadImage').addEventListener('click', function (e) {
    document.getElementById('fileInput').click();
});