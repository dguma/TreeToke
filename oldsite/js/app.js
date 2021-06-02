// JavaScript Document

const logo = document.getElementById('logo');
const logoContainer = document.querySelector('.logoContainer');
const body = document.body;
const navBar = document.getElementById('navBar');
const mainVideoContainer = document.querySelector('.mainVideoContainer');
const videoPlayer  = document.querySelector('video');

body.onclick = function(){
//	logo.classList.add('logoPosition');
	logoContainer.classList.add('logoPosition');
	navBar.classList.add('navBarVisibility');
}

//videoPlayer.play();
//document.ready(function(){
//    // Target your .container, .wrapper, .post, etc.
//    mainVideoContainer.fitVids();
//  });

