$(document).ready(function () {

  const data = [
    { "title": "Inception", "year": 2010, "genre": "Sci-Fi" },
    { "title": "Parasite", "year": 2019, "genre": "Thriller" },
    { "title": "La La Land", "year": 2016, "genre": "Romance" }
  ];

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

  $(".card").myPlugin();

});

$.fn.myPlugin = function () {
  return this.each(function () {
    $(this).css({
      "background-color": "#f9f9f9",
      "transition": "0.3s"
    });
    $(this).hover(
      function () { $(this).css("background-color", "#d3f8d3"); },
      function () { $(this).css("background-color", "#f9f9f9"); }
    );
  });
};