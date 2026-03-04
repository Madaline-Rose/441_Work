function showResults()
{
    var playerString = localStorage.getItem("playerData");
    var player = JSON.parse(playerString);

    document.getElementById("playerName").innerHTML =
        "Name: " + player.firstName + " " + player.lastName;

    document.getElementById("playerAge").innerHTML =
        "Age: " + player.age;

    document.getElementById("playerAttempts").innerHTML =
        "Total Attempts: " + player.attempts;
}

function playAgain()
{
    window.location.href = "index.html";
}