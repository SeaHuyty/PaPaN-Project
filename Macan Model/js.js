let slide = document.querySelectorAll("input[type='radio']");
let contaianer = document.getElementById("headContainer");
for (let i=0;i<slide.length;i++) {
    slide[i].addEventListener('change', function(){
        changeColor(i);
    });
}

function changeColor(index){
    let bg = [
        "radial-gradient(circle, rgb(126, 141, 227) 0%, rgb(2, 48, 173) 42%)", // Slide 1
        "radial-gradient(circle, rgb(142, 142, 142) 0%, rgb(101, 101, 100) 42%", // Slide 2
        "radial-gradient(circle, rgb(94, 107, 108) 0%, rgb(60, 82, 84) 42%)", // Slide 3
        "radial-gradient(circle, rgb(221, 165, 188) 0%, rgb(234, 74, 154) 42%)", // Slide 4
    ]
    contaianer.style.backgroundImage = bg[index];
}
