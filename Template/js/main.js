
$(function () {
    Fancybox.bind("[data-fancybox]", {
    });

    $('#module1').on('click', function () {
        $('.sub-module').toggleClass('sub-module--active');
        $('#module-icon1').toggleClass('link-icon--active');
    });

    $('#module-icon1').on('click', function () {
        $('.sub-module').toggleClass('sub-module--active');
        $('#module-icon1').toggleClass('link-icon--active');
    });
    $('#module2').on('click', function () {
        $('#module-icon2').toggleClass('link-icon--active');
    });

    $('#module-icon2').on('click', function () {
        $('#module-icon2').toggleClass('link-icon--active');
    });
    $('#module3').on('click', function () {
        $('#module-icon3').toggleClass('link-icon--active');
    });

    $('#module-icon3').on('click', function () {
        $('#module-icon3').toggleClass('link-icon--active');
    });
    $('#module4').on('click', function () {
        $('#module-icon4').toggleClass('link-icon--active');
    });

    $('#module-icon4').on('click', function () {
        $('#module-icon4').toggleClass('link-icon--active');
    });
    $('#module5').on('click', function () {
        $('#module-icon5').toggleClass('link-icon--active');
    });

    $('#module-icon5').on('click', function () {
        $('#module-icon5').toggleClass('link-icon--active');
    });
    $('#module6').on('click', function () {
        $('#module-icon6').toggleClass('link-icon--active');
    });

    $('#module-icon6').on('click', function () {
        $('#module-icon6').toggleClass('link-icon--active');
    });
    $('#module7').on('click', function () {
        $('#module-icon7').toggleClass('link-icon--active');
    });

    $('#module-icon7').on('click', function () {
        $('#module-icon7').toggleClass('link-icon--active');
    });
    $('#module8').on('click', function () {
        $('#module-icon8').toggleClass('link-icon--active');
    });

    $('#module-icon8').on('click', function () {
        $('#module-icon8').toggleClass('link-icon--active');
    });
    $('#module9').on('click', function () {
        $('#module-icon9').toggleClass('link-icon--active');
    });

    $('#module-icon9').on('click', function () {
        $('#module-icon9').toggleClass('link-icon--active');
    });
    $('#module10').on('click', function () {
        $('#module-icon10').toggleClass('link-icon--active');
    });

    $('#module-icon10').on('click', function () {
        $('#module-icon10').toggleClass('link-icon--active');
    });
    $('.burger').on('click', function () {
        $('.header-top__list').toggleClass('header-top__list--active');
        $('.burger').toggleClass('burger--active');
        $('body').toggleClass('hidden');
    });
    $('.myBtn').on('click', function () {
        $('body').toggleClass('hidden');
    });
    $('.close,.modal').on('click', function () {
        $('body').removeClass('hidden');
    });



    const swiper = new Swiper('.experts__topslider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 6000,
        },
        speed: 1500,
        spaceBetween: 60,
    });
    const swip = new Swiper('.experts__slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // autoplay: {
        //     delay: 6000,
        // },
        speed: 1500,
        spaceBetween: 60,
        navigation: true,

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });
});
var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close");

function buttonClick(event) {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'block';
}

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = buttonClick;
}

function spanClick() {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'none';
}

for (var i = 0; i < span.length; i++) {
    span[i].onclick = spanClick;
}

window.onclick = function (event) {
    var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
    if (isModal) {
        event.target.style.display = "none";
    }
}
