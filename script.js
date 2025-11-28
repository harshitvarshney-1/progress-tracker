document.addEventListener("DOMContentLoaded", function () {
    const slidebar = document.querySelector('.line');
    const progress = document.querySelector('.line .progress');
    const circle1 = document.querySelector('.cir1');
    const circle2 = document.querySelector('.cir2');
    const circle3 = document.querySelector('.cir3');
    const circle4 = document.querySelector('.cir4');
    const prevBTN = document.getElementById('prev');
    const nextBTN = document.getElementById('next');

    let current = 1;

    circle1.style.backgroundColor = "green";
    progress.style.width = '0%';

    nextBTN.addEventListener('click', function () {
        switch (current) {
            case 1:
                circle2.style.backgroundColor = "green";
                progress.style.width = "38%";
                current = 2;
                break;
            case 2:
                circle3.style.backgroundColor = "green";
                progress.style.width = "66%";
                current = 3;
                break;
            case 3:
                circle4.style.backgroundColor = "green";
                progress.style.width = "100%";
                current = 4;
                break;
        }
    });

    prevBTN.addEventListener('click', function () {
        switch (current) {
            case 4:
                circle4.style.backgroundColor = "blue";
                progress.style.width = "66%";
                current = 3;
                break;
            case 3:
                circle3.style.backgroundColor = "blue";
                progress.style.width = "38%";
                current = 2;
                break;
            case 2:
                circle2.style.backgroundColor = "blue";
                progress.style.width = "0%";
                current = 1;
                break;
        }
    });
});
