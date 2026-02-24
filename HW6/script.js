// array of image tag ids
var imageTags = [
    "image1","image2","image3","image4",
    "image5","image6","image7","image8",
    "image9","image10","image11","image12"
];

// blank image card
var blankImagePath = "images/card.jpg";

// array for shuffled images
var actualImages = new Array();

function printBlanks()
{
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

function createRandomImageArray()
{
    // My 6 images
    var actualImagePath = [
        "images/katara.jpg",
        "images/sokka.jpg",
        "images/aang.jpg",
        "images/toph.jpg",
        "images/zuko.jpg",
        "images/gang.jpg"
    ];

    // track how many times each image is used
    var count = [0,0,0,0,0,0];

    // 12 spots
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src = actualImages[number];
}