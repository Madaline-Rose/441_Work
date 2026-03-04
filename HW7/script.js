// array of image tag ids
var imageTags = [
    "image1","image2","image3","image4",
    "image5","image6","image7","image8",
    "image9","image10","image11","image12"
];

// blank image card
var blankImagePath = "images/card.jpg";

// array for shuffled images
var actualImages = [];

// tracking variables
var firstFlipped = -1;
var secondFlipped = -1;
var lockBoard = false;
var attempts = 0;
var matches = 0;

function printBlanks()
{
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }

    // attempts
    document.getElementById("attemptDisplay").innerHTML = attempts;
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
    if(lockBoard) return;                
    if(number == firstFlipped) return;  

    document.getElementById(imageTags[number]).src = actualImages[number];

    if(firstFlipped == -1)
    {
        firstFlipped = number;
    }
    else
    {
        secondFlipped = number;
        lockBoard = true;

        attempts++;  
        document.getElementById("attemptDisplay").innerHTML = attempts;

        checkMatch(); 
    }
}

// check match
function checkMatch()
{
    if(actualImages[firstFlipped] == actualImages[secondFlipped])
    {
        matches++;
        resetTurn();
        checkGameOver();
    }
    else
    {
        setTimeout(function()
        {
            document.getElementById(imageTags[firstFlipped]).src = blankImagePath;
            document.getElementById(imageTags[secondFlipped]).src = blankImagePath;
            resetTurn();
        }, 1000);
    }
}

// reset
function resetTurn()
{
    firstFlipped = -1;
    secondFlipped = -1;
    lockBoard = false;
}

// game over
function checkGameOver()
{
    if(matches == 6)
    {
        var playerString = localStorage.getItem("playerData");
        var player = JSON.parse(playerString);

        player.attempts = attempts;

        localStorage.setItem("playerData", JSON.stringify(player));

        window.location.href = "results.html";
    }
}