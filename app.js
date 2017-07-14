var index = 1;
var index2;
var index3;
slides(index);
function slides(ind) {
    var slides = document.getElementsByClassName('slides');
    if (ind > slides.length) {
        index = 1;
    }
    if (ind < 1) {
        index = slides.length;
    }
    index2= index +1;
    if (index2 > slides.length) {
        index2 = 1;
    }
    if (index2 < 1) {
        index2 = slides.length;
    }
    index3= index2 +1;
    if (index3 > slides.length) {
        index3 = 1;
    }
    if (index3 < 1) {
        index3 = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // console.log(index - 1)
    slides[index - 1].style.display = 'block';
    slides[index2 - 1].style.display = 'block';
    slides[index3 - 1].style.display = 'block';
    slides[index - 1].style.left = '0%';
    slides[index2 - 1].style.left = '33.45%';
    slides[index3 - 1].style.left = '66.75%';
}
function incrementIndex() {
    index++;
    slides(index)
}

function decrementIndex() {
    index--;
    slides(index)
}
//setInterval(incrementIndex, 1000)