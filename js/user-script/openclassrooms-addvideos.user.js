// ==UserScript==
// @name     openclassrooms-addvideos
// @version  0.1
// @grant    none
// @include	 https://openclassrooms.com/*/courses/*
// ==/UserScript==

var div = document.createElement('div')
var re = /https:\/\/vimeo.com\/(\d+)/
var id_video = re.exec(document.getElementsByTagName('video')[0].src)[1]

div.innerHTML = '<iframe src="https://player.vimeo.com/video/'+id_video+'?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'

document.body.insertBefore(div,document.body.firstChild)
