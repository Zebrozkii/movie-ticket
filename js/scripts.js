function Movie(){
this.movies=[],
this.currentId=0
}

Movie.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movie.push(movie);
}

Movie.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Movie.prototype.findMovie = function(id) {
  for (var i=0; i< this.movies.length; i++) {
    if (this.movies[i]) {
      if (this.movies[i].id == id) {
        return this.movies[i];
      }
    }
  };
  return false;
}

Movie.prototype.deleteMovie = function(id) {
  for (var i=0; i< this.movies.length; i++) {
    if (this.movies[i]) {
      if (this.movies[i].id == id) {
        delete this.movies[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Movies ---------

function Ticket(nameMovie, personAge, movieTime) {
  this.nameMovie = nameMovie,
  this.personAge = personAge,
  this.movieTime = movieTime
}

// User Interface Logic ---------
var movie = new Movie();

function displayMovieDetails(movieToDisplay) {
  var movieList = $("ul#movie");
  var htmlForMovieInfo = "";
  movieToDisplay.movies.forEach(function(movie) {
    htmlForMovieInfo += "<li id="  movie.id + ">" + movie.name + "</li>"; //htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  }
  moviesList.html(htmlForMovieInfo);
});

function showMovie(movieId) {
  var movie = movie.findMovie(movieId);
  $("#show-movie").show();
  $(".movie-name").html(movie.name);
  $(".person-age").html(person.age);
  $(".movie-time").html(movie.time);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + movie.id + ">Delete</button>");
}

function attachMovieListeners() {
  $("ul#movies").on("click", "li", function() {
    showMovie(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    movie.deleteMovie(this.id);
    $("#show-movie").hide();
    displayMovieDetails(movie);
  });
};

$(document).ready(function() {
  attachMovieListeners();
  $("form#new-movie").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("input#new-movie-name").val();
    var inputtedPersonAge = $("input#new-person-age").val();
    var inputtedMovieTime = $("input#new-movie-time").val();
    $("input#new-movie-name").val("");
    $("input#new-person-age").val("");
    $("input#new-movie-time").val("");

    var newTicket = new Ticket(inputtedMovieName, inputtedPersonAge, inputtedMovieTime);
    movie.addMovie(newTicket);
    displayMovieDetails(movie);
  })
})
