simplySlider = () => {
    var nextBtn = document.querySelector(".gallerys .buttons01 .next01");
    var prevBtn = document.querySelector(".gallerys .buttons01 .prev01");
    var slide = document.querySelectorAll(".gallerys .photos01 .block01");
    var i = 0;

    function sliderAuto(time) {
        setInterval(next, time);
    };


    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        previous();
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        next();
    });

    function previous() {
        slide[i].classList.remove("active");
        i--;
        if (i < 0) {
            i = slide.length - 1;
        }
        slide[i].classList.add("active");
    }


    function next() {
        slide[i].classList.remove("active");
        i++;
        if (i >= slide.length) {
            i = 0;
        }
        slide[i].classList.add("active");
    }

    slider(2800);
}

document.addEventListener('DOMContentLoaded', simplySlider);