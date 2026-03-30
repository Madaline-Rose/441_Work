$(document).ready(function () {

  $.getJSON("data.json", function (data) {

    data.forEach(function (item) {

      let card = `
        <div class="card">
          <h2>${item.title}</h2>
          <p>Year: ${item.year}</p>
          <p>Genre: ${item.genre}</p>
        </div>
      `;

      $("#container").append(card);
    });

    // apply plugin AFTER elements are added
    $(".card").myPlugin();

  });

});


$.fn.myPlugin = function () {
  return this.each(function () {

    $(this).css({
      "background-color": "#f9f9f9",
      "transition": "0.3s"
    });

    $(this).hover(
      function () {
        $(this).css("background-color", "#d3f8d3");
      },
      function () {
        $(this).css("background-color", "#f9f9f9");
      }
    );

  });
};