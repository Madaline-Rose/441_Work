$(document).ready(function () {

    // IMAGE SYSTEM
    let images = [
        "adapt.jpg",
        "cloud.jpg",
        "connect.jpg",
        "dance.jpg",
        "grow.jpg",
        "learn.jpg",
        "reflect.jpg"
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

    // start image system
    $("#image").attr("src", images[0]).hide().fadeIn(1000);
    moveImage();
    setInterval(cycleImage, 5000);

    // TEXT SYSTEM
    let texts = [
        "breathe",
        "connect",
        "move",
        "learn",
        "reflect",
        "grow",
        "adapt"
    ];

    let textIndex = 0;

    function moveText() {
        let x = Math.random() * ($(window).width() - 200);
        let y = Math.random() * ($(window).height() - 50);

        $("#text").animate({
            left: x,
            top: y
        }, 3000);
    }

    function cycleText() {
        textIndex = (textIndex + 1) % texts.length;

        $("#text").fadeOut(500, function () {
            $(this).text(texts[textIndex]).fadeIn(500);
            moveText();
        });
    }

    // start text system
    $("#text").text(texts[0]);
    moveText();
    setInterval(cycleText, 4000);

    // SHAPE SYSTEM
    let shapes = [
        { color: "red", borderRadius: "0%" },
        { color: "blue", borderRadius: "50%" },
        { color: "green", borderRadius: "20%" }
    ];

    let shapeIndex = 0;

    function moveShape() {
        let x = Math.random() * ($(window).width() - 100);
        let y = Math.random() * ($(window).height() - 100);

        $("#shape").animate({
            left: x,
            top: y
        }, 3000);
    }

    function cycleShape() {
        shapeIndex = (shapeIndex + 1) % shapes.length;

        let current = shapes[shapeIndex];

        $("#shape").fadeOut(500, function () {
            $(this).css({
                background: current.color,
                borderRadius: current.borderRadius
            }).fadeIn(500);

            moveShape();
        });
    }

    // start shape system
    moveShape();
    setInterval(cycleShape, 3000);

});