
//footerNote


var candy = [
"I use Ricoh GRii for daily snaps.",
"My favourite J-rock band is Radwimps.",
"I am inspired most by Invisible Cities.",
"My favorite photographer is Moriyama Daido（森山大道）.",
"I like owls and cats.",
"My favorite Japanese writer is Morimi Tomihiko（森見登美彦）.",
"I always wear green.",
"My favourite movie director is Koreeda Yukikazu（是枝裕和）.",
"I am a maniac of Pokémon.",
"「夜は短し　歩けよ乙女」",
"My favourite post-rock band is Euphoria."
];
var n = Math.floor(Math.random() * candy.length + 1)-1; 
$(".footNote").text(candy[n]); 


//Logo Animation
$(document).ready (function() {
	$("a").attr("target", "_blank");
	// logo 晃动动画
	// $(".title").mouseover(function() {
	// 	$(".title").addClass("swing");
	// });
	// 悬浮，叶子上浮出现
	// $(".nav-list li").mouseenter(function() {
	// 	$(this).prepend("<img src='img/leaf.svg'");
	// });
});


//Eye Follow Animation, src="cdpn.io/rkcjt"

var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy){
  // Initialise core variables
  var r = $(pupil).width()/2;
  var center = {
    x: $(eyecontainer).width()/2 - r, 
    y: $(eyecontainer).height()/2 - r
  };
  var distanceThreshold = $(eyecontainer).width()/2 - r;
  var mouseX = 0, mouseY = 0;
  
  // Listen for mouse movement
  $(window).mousemove(function(e){ 
    var d = {
      x: e.pageX - r - eyeposx - center.x,
      y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
      mouseX = e.pageX - eyeposx - r;
      mouseY = e.pageY - eyeposy - r;
    } else {
      mouseX = d.x / distance * distanceThreshold + center.x;
      mouseY = d.y / distance * distanceThreshold + center.y;
    }
  });
  
  // Update pupil location
  var pupil = $(pupil);
  var xp = 0, yp = 0;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);
};

// var eyeX = parseInt(document.getElementById("eyeleft").style.left);
// var eyeY = parseInt(document.getElementById("eyeleft").style.top);
var pariseye1 = new DrawEye("#eyeleft", "#pupilleft", 440, 264);

//about
$("#nav-about").click(function() {
	$("#about-text").css("display", "initial");
	$(".nav-list").css("display", "none");
});

//qrcode
$("#wechat-link").mouseenter(function() {
	$("#qrcode").css("display", "initial");
});
$("#wechat-link").mouseleave(function() {
	$("#qrcode").css("display", "none");
});

//nav animation
$(".nav-item").mouseenter(function() {
	$(this).addClass("animated infinite swing");
});
$(".nav-item").mouseleave(function() {
	$(this).removeClass("animated infinite swing");
});

