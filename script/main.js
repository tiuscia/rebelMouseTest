var imgPaths = ['disney-1.jpg', 'disney-2.jpg', 'disney-3.jpg', 'disney-4.jpg', 'disney-5.jpg', 'disney-6.jpg'];
var root = 'img/';
var currentShown = 0;

function openGallery(init) {
    console.log('init', init);
    setCurrentImg(init);
    $('.gallery').addClass('gallery--show');
}

$(".clickable").click(function (e) {
    let init = $(this).attr('aria-gallery') || 0;
    openGallery(init);
    e.stopPropagation();
});

function closeGallery() {
    $('.gallery').removeClass('gallery--show');
}

function setCurrentImg(init) {

    init = parseInt(init);

    if (init < 0) {
        init = imgPaths.length - 1;
    } else if (init === imgPaths.length) {
        init = 0;
    }

    currentShown = init;
    $('.gallery__img-counter').html((currentShown + 1) + "/" + imgPaths.length);
    $('.gallery__img-container').css('background-image', `url(${root}${imgPaths[init]})`);
}

$(".gallery__arrow").click(function (e) {
    if ($(this).hasClass("gallery__arrow--left")) {
        setCurrentImg(currentShown - 1);
    } else {
        setCurrentImg(currentShown + 1);
    }
});