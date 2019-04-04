"use strict";

function openCreateChallengeModal(){

}

function switchView(viewName) {
  switch(viewName){
    case 'challenges':
      document.getElementById("userPage").setAttribute("hidden");
      document.getElementById("challengePage").removeAttribute("hidden");
      break;
    case 'users':
      document.getElementById("challengePage").setAttribute("hidden", "hidden");
      document.getElementById("userPage").removeAttribute("hidden");
      break;
  }
}

$(document).on('ready', function () {
  $('#challengeNav').on('click', function (e) {
    switchView('challenges');
  })

  $('#userNav').on('click', function (e) {
    switchView('users');
  })

});
