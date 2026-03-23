$(document).ready(function () {

    //Image
    let images = [

    ];

    let imgIndex = 0;

    function moveImage() {
        let x = Math.random() * ($(window).width() - 300);
        let y = Math.random() * ($(window).height() - 300);

        $("#image").animate({
            left: x,
            top: y
        }, 4000);
    }

    function cycleImage() {
        $("#image").fadeOut(1000, function () {


            imgIndex = (imgIndex + 1) % images.length;
            $("#image").attr("src", images[imgIndex]);

            moveImage();

            $("#image").fadeIn(1000);
        });
    }
    
    $("#image").attr("src", images[0]).hide().fadeIn(1000);
    setInterval(cycleImage, 5000);

    //Text System
    let texts = [
        "breathe",
        "connect",
        "move",
        "learn",
        "reflect",
        "grow",
        "adapt",
    ];

    let textIndex = 0;

    function cycleText() {
        let x = Math.random() * ($(window).width() - 200);
        let y = Math.random() * ($(window).height() - 50);

        $("#text").animate({
            left: x,
            top: y
        }, 3000)
    }

    function cycleText() {
        textIndex = (textIndex + 1) % texts.length;

        $("#text").fadeOut(500, function () {
            $(this).text(texts[textIndex]).fadeIn(500);
            moveText();
        });
    }

    $("#text".text(texts[0]);
    moveText();
    setInterval(cycleText, 4000);
    )