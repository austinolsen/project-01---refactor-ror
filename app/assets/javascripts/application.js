// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require_tree .


var tvShow = "https://api.themoviedb.org/3/search/tv?api_key=6025f52370c757b643d72da9d2e397d0&language=en-US&page=1&"
var imgLocation = "https://image.tmdb.org/t/p/w90_and_h134_bestv2"
var imgPoster = "https://image.tmdb.org/t/p/w150_and_h225_bestv2"
var backdropLocation = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2"
var $showList;
var allShows = [];

$(document).ready(function () {
  console.log("JS is working")



  $('#showCheck').on('submit', function (e) {
    e.preventDefault();
    showData = $(this).serialize();
    search = (tvShow + showData);
    $.ajax({
      method: "GET",
      url: tvShow + showData,
      success: onSuccess,
      error: onError
    });
  });

  $('#showCheck1').on('submit', function (e) {
  e.preventDefault();
  showData = $(this).serialize();
  search = (tvShow + showData);
  $.ajax({
    method: "GET",
    url: tvShow + showData,
    success: onSuccess1,
    error: onError
    });
  });

  $('#showCheck2').on('submit', function (e) {
  e.preventDefault();
  showData = $(this).serialize();
  search = (tvShow + showData);
  $.ajax({
    method: "GET",
    url: tvShow + showData,
    success: onSuccess2,
    error: onError
    });
  });
});

function onSuccess(json) {
  console.log("SUCCESS: ", json.results[0]);
  $("#showTarget").empty();
  $("#showTarget").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget").append('</br>')
  $("#showTarget").append(json.results[0].name);
  $("#Show").empty();
  $("#Date").empty();
  $('#Img').empty();
  $('#Poster').empty();
  $("#Overview").empty();
  $('#Backdrop').empty();
  $("#Show").val(json.results[0].name);
  $("#Date").val(json.results[0].first_air_date);
  $('#Img').val('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $('#Poster').val('<img class="resize" src="' + imgPoster + json.results[0].poster_path + '">');
  $("#Overview").val(json.results[0].overview + ' ^');
  $('#Backdrop').val('<img src="' + backdropLocation + json.results[0].backdrop_path + '">');
  $("#vote").attr('hidden', false);
};

function onSuccess1(json) {
  console.log("SUCCESS: ", json.results[0]);
  $("#showTarget1").empty();
  $("#showTarget1").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget1").append('</br>')
  $("#showTarget1").append(json.results[0].name);
  $("#1Show").empty();
  $("#1Date").empty();
  $('#1Img').empty();
  $("#1Overview").empty();
  $('#1Backdrop').empty();
  $("#1Show").val(json.results[0].name);
  $("#1Date").val(json.results[0].first_air_date);
  $('#1Img').val('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $('#1Poster').val('<img class="resize" src="' + imgPoster + json.results[0].poster_path + '">');
  $("#1Overview").val(json.results[0].overview + ' ^');
  $('#1Backdrop').val('<img src="' + backdropLocation + json.results[0].backdrop_path + '">');
  $('#1vote').attr('hidden', false);
};

function onSuccess2(json) {
  console.log("SUCCESS: ", json.results[0]);
  $("#showTarget2").empty();
  $("#showTarget2").append('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $("#showTarget2").append('</br>')
  $("#showTarget2").append(json.results[0].name);
  $("#2Show").empty();
  $("#2Date").empty();
  $('#2Img').empty();
  $("#2Overview").empty();
  $('#2Backdrop').empty();
  $("#2Show").val(json.results[0].name);
  $("#2Date").val(json.results[0].first_air_date);
  $('#2Img').val('<img src="' + imgLocation + json.results[0].poster_path + '">');
  $('#2Poster').val('<img class="resize" src="' + imgPoster + json.results[0].poster_path + '">');
  $("#2Overview").val(json.results[0].overview);
  $('#2Backdrop').val('<img src="' + backdropLocation + json.results[0].backdrop_path + '">');
  $('#2vote').attr('hidden', false);
};

function onError(a, b, c) {
  console.log(b);
  console.log(c);
}
