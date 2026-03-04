function startGame()
{
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    // validate
   if(first == "" || last == "" || age == "")
   {
    alert("Please fill in all fields");
    return;
   }

   if(isNaN(age))
   {
    alert("Age must be a number")
    return;
   }

   // player object
   var player = {
    firstName: first,
    lastName: last,
    age: age,
    attempts: 0
   };

   // convert to JSON string
   var playerString = JSON.stringify(player);

   // save to localStorage
   localStorage.setItem("playerData", playerString);

   // back to game page
   window.location.href = "game.html";
}