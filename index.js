/* global $Aud $Story Howl */
var nam;
var images = new Array();
function preload() {
	var i;
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}
preload(
	"/az.gif",
	"/evil2.gif",
	"/grin.gif",
	"/rise.gif",
	"/sassy.gif",
	"/side.gif",
	"/sidesass.gif"
);
var ybf = new Howl({
	src: "/music/Your Best Friend.mp3",
	loop: true,
});
var z, j, inte, call, writeoptions, writetemp;
var write = function(text, title, grunt, callback, options){
	if(grunt == null || grunt == undefined || grunt == "undefined"){
		grunt = "talk";
	}
	text = text.replace(/(\\y)/g, "ŷ");
	text = text.replace(/(\\n)/g, "β");
	text = text.replace(/(\\func:)/g, "Σ");
	text = text.replace(/(\\span:)/g, "Ξ");
	text = text.replace(/(\\\/\/)/g, "ι");
	writeoptions = options;
zToCont.unregister_combo("z");
zToCont.simple_combo("x", function(){
	window.clearInterval(inte);
	while(j[0] != null && j != undefined && j != "undefined"){
	  var k = j.shift();
	  if(k == "ŷ"){
	  	k = "<span class='y'>";
	  }
	  if(k == "ƨ"){
	  	k = "</span>";
	  }
	  if(k == "β"){
	  	k = "<br>";
	  }
	  if(k == "κ"){
	  	k = "<a href='//undertale.com'>";
	  }
	  if(k == "ρ"){
	  	k = "</a>";
	  }
	  if(k == "Σ"){
	  	var tmp = "";
	  	var tmp2 = "";
	  	while(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
	  		tmp = j.shift();
	  		tmp2 += tmp;
	  	}
	  	Function(tmp2);
	  	k = j.shift();
	  }
	  if(k == "Ξ"){
	  	var tmp = "";
	  	var tmp2 = "";
	  	while(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
	  		tmp = j.shift();
	  		if(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
	  			tmp2 += tmp;
	  		}
	  	}
	  	k = "<span class='" + tmp2 + "'>";
	  }
	  if(k == "ι"){
	  	var tmp = "";
	  	var tmp2 = "";
	  	while(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
	  		tmp = j.shift();
	  		tmp2 += tmp;
	  	}
	  	k = "</" + tmp2 + ">";
	  }
	  z += k;
	  $("." + title)[0].innerHTML = z;
	 }
	 	$(".flower").last().click(function(){
	 		tour.next();
	 	});
	  	zToCont.simple_combo("z", function() {
	  	    $(".flower").last().click();
	  	});
	  	if(call != undefined && call != "undefined" && call != null){
	  		console.log("Trying to run...");
	  		call();
	  	}
	 	window.clearInterval(inte);
	 	zToCont.unregister_combo("x");
	});
$(".flower").off("click");
j = text.split("");
z = "";
call = callback;
inte = window.setInterval(function(){
 if(j[0] != null && j != undefined && j != "undefined"){
  var k = j.shift();
  if(k == "ŷ"){
  	k = "<span class='y'>";
  }
  if(k == "ƨ"){
  	k = "</span>";
  }
  if(k == "β"){
  	k = "<br>";
  }
  if(k == "κ"){
  	k = "<a href='//undertale.com'>";
  }
  if(k == "ρ"){
  	k = "</a>";
  }
  if(k != " "){
	  $Aud.sfx(grunt);
  }
  if(k == "Σ"){
  	var tmp = "";
  	var tmp2 = "";
  	while(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
  		tmp = j.shift();
  		tmp2 += tmp;
  	}
  	Function(tmp2)();
  	k = j.shift();
  }
  if(k == "Ξ"){
  	var tmp = "";
  	var tmp2 = "";
  	while(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
  		tmp = j.shift();
  		if(tmp != ";"){
  			tmp2 += tmp;
  		}
  	}
  	k = "<span class='" + tmp2 + "'>";
  }
  if(k == "ι"){
  	var tmp = "";
  	var tmp2 = "";
  	while(tmp != ";" && tmp != null && tmp != undefined && tmp != "undefined"){
  		tmp = j.shift();
  		tmp2 += tmp;
  	}
  	k = "</" + tmp2 + ">";
  }
  z += k;
  $("." + title)[0].innerHTML = z;
 }
 else {
 	$(".flower").last().click(function(){
 		tour.next();
 	});
  	zToCont.simple_combo("z", function() {
  	    $(".flower").last().click();
  	});
  	if(call != undefined && call != "undefined" && call != null){
  		console.log("Trying to run...");
  		call();
  	}
 	window.clearInterval(inte);
 	zToCont.unregister_combo("x");
 }
}, 60);
};
var tour = new Shepherd.Tour({
		  defaults: {
		    classes: 'shepherd-theme-dark'
		  }
		});
	
	tour.addStep('intro', {
	  title: 'Howdy!',
	  text: function(){
	  	window.setTimeout(function(){
	  		$(".flower").attr("src", "http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124");
	  	}, 400);
	  	$(".nxt").on("click", ohShitFlowey);
		$(".blur").show();
		$Aud.mute = true;
		$Aud.show1 = true;
		ybf.play();
		setTimeout(function(){
			write("* Howdy! I'm \\yFLOWEYƨ!   \\n* ŷFLOWEYƨ the ŷFLOWERƨ!   β* Press me or press 'z’ to continue.", "intro", "01t");
		}, 100);
	  	return("<img style='width:50px; float:left' class='flower' src='/rise.gif'><span class='mon intro' style='width: 300px; float:right;'></span>");
	  },
	});
	tour.addStep('intro2', {
	  title: 'Howdy!',
	  text: function(){
	  	write("* Great job!   β* Now, if you don't already know me, I'd like to have some fun with you first!", "intro2", "01t");
	  	return("<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon intro2' style='width: 300px; float:right;'></span>");
	  },
	});
	tour.addStep('intro3', {
	  title: 'Howdy!',
	  text: function(){
	  	write("* So why don't you go play κUNDERTALEρ before you read this?   β* Thanks, pal!", "intro3", "01t");
	  	return("<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon intro3' style='width: 300px; float:right;'></span>");
	  },
	});
	tour.addStep('num2', {
	  title: 'Next & Previous',
	  text: function(){
	  	write("* Eager to get started, huh?", "num2", "01t");
	  	return("<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon num2' style='width: 300px; float:right;'></span>");
	  },
	});
	tour.addStep('num25', {
	  title: 'Next & Previous',
	  text: function(){
	  	write("* Well, little old me will have to show you around!", "num25", "01t", function(){
	  		console.log("I've been run!");
	  		$(".flower").last().off("click");
	  		$(".flower").last().click(function(){
	  			$(".flower").last().attr("src", "/unrise.gif");
		  		window.setTimeout(function(){
		  			tour.next();
		  		}, 450);
	  		});
		  	zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  		$(".flower").last().attr("src", "/unrise.gif");
		  		window.setTimeout(function(){
		  			tour.next();
		  		}, 450);
		  	});
	  	});
	  	return("<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon num25' style='width: 300px; float:right;'></span>");
	  },
	});
	tour.addStep('num3', {
	  title: 'Next & Previous',
	  text: function(){
	  	window.setTimeout(function(){
	  		$(".flower").attr("src", "http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124");
	  	}, 400);
	  	$(".action-strip").addClass("raisedImportance");
	  	$(".nxt").off("click", ohShitFlowey);
	  	$(".nxt").on("click", nopeyFlowey);
	  	write("* This is the navigation bar.   β* The next button goes to the next page.", "num3", "01t");
	  	return("<img style='width:50px; float:left' class='flower' src='/rise.gif'><span class='mon num3' style='width: 300px; float:right;'></span>");
	  	},
	  attachTo: '.action-strip top',
	});
	tour.addStep('num35', {
	  title: 'Next & Previous',
	  text: function(){
	  	write("* The previous button also does exactly what you'd expect!", "num35", "01t");
	  	return("<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon num35' style='width: 300px; float:right;'></span>");
	  },
	  attachTo: '.action-strip top',
	});
	tour.addStep('num4', {
	  title: 'Next & Previous',
	  text: function(){
	  	write("* If you have a ŷCELL PHONEƨ or any other touch device, you can also swipe the page back and forth like a book.", "num4", "01t");
	  	return("<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon num4' style='width: 300px; float:right;'></span>");
	  },
	  attachTo: '.action-strip top',
	});
	tour.addStep('num5', {
	  title: 'Next & Previous',
	  text: function(){
	  	write("* Finally, if you have a keyboard, you can use the left and right arrow keys.", "num5", "01t");
	  	return( "<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon num5' style='width:300px; float:right;'></span>" );
	  	},
	  attachTo: '.action-strip top',
	});
	tour.addStep('num66', {
	  title: 'Next & Previous',
	  text: function(){
	  	write("* Cool, right?", "num66", "01t", function(){
	  		console.log("I've been run!");
	  		$(".flower").last().off("click");
	  		$(".flower").last().click(function(){
	  			$(".flower").last().attr("src", "/unrise.gif");
		  		window.setTimeout(function(){
		  			tour.next();
		  		}, 400);
	  		});
		  	zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  		$(".flower").last().attr("src", "/unrise.gif");
		  		window.setTimeout(function(){
		  			tour.next();
		  		}, 400);
		  	});
	  	});
	  	return( "<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon num66' style='width:300px; float:right;'></span>" );
	  	},
	  attachTo: '.action-strip top',
	});
	tour.addStep('sound', {
	  title: 'Audio Controls',
	  classes: "trans100",
	  text: function(){
	  	window.setTimeout(function(){
	  		$(".flower").attr("src", "/side.gif");
	  	}, 400);
	  	$(".action-strip").removeClass("raisedImportance");
	  	$("audio-controls").addClass("raisedImportance");
	  	$("audio-controls")[0].show2 = true;
	  	setTimeout(function(){
		  	$("audio-controls")[0].show3 = true;
		  	$("audio-controls")[0].show2 = false;
		  	ybf.pause();
	  	}, 1500);
	  	setTimeout(function(){
		  	$("audio-controls")[0].show3 = false;
		  	$("audio-controls")[0].show2 = true;
		  	ybf.play();
	  	}, 4500);
	  	write("* This little circle controls the music.   β* Tap or click it to pause the music.", "sound", "01t");
	  	return( "<img style='width:50px; float:left' class='flower' src='/rise.gif'><span class='mon sound' style='width:300px; float:right;'></span>" );
	  },
	  attachTo: '#ctrl left',
	});
	tour.addStep('sound15', {
	  title: 'Audio Controls',
	  classes: "trans100",
	  text: function(){
	  	write("* Some browsers even let you mute the audio altogether!", "sound15", "01t");
	  	return( "<img style='width:50px; float:left' class='flower' src='/side.gif'><span class='mon sound15' style='width:300px; float:right;'></span>" );
	  },
	  attachTo: '#ctrl left',
	});
	var isUserAgentChrome = function(){if(navigator.userAgent.match("Chrome") != null){return(true)}else{return(false)}};
	tour.addStep('sound2', {
	  title: 'Audio Controls',
	  classes: "trans100",
	  text: function(){
	  	write("* Actually, the mute button is SUPPOSED to show up on ALL browsers.", "sound2", "01t", function(){
		  	$("audio-controls").removeClass("raisedImportance");
	  	});
	  	return( "<img style='width:50px; float:left' class='flower' src='/sidesass.gif'><span class='mon sound2' style='width:300px; float:right;'></span>" );
	  },
	  attachTo: '#ctrl left',
	  buttons: [
	  	{
	  		text: function(){if(isUserAgentChrome()){return("Next")}else{return("Done")}}(),
	  		action: function(){ if(isUserAgentChrome()){tour.next()}else{tour.show(["end05"])} }
	  	}
	  ]
	});
	tour.addStep('sound3', {
	  title: 'Audio Controls',
	  classes: "trans100",
	  text: function(){
	  	write(function(){if(isUserAgentChrome()){return("* But, hey, it looks like YOU won't be running into THAT problem!    \\nHee hee hee!")}else{return("* Whatever.")}}(), "sound3", "01t", function(){
	  		$(".flower").last().off("click");
	  		$(".flower").last().click(function(){
	  			$(".flower").last().attr("src", "/unrise.gif");
		  		window.setTimeout(function(){
		  			tour.next();
		  		}, 400);
	  		});
		  	zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  		$(".flower").last().attr("src", "/unrise.gif");
		  		window.setTimeout(function(){
		  			tour.next();
		  		}, 400);
		  	});
	  	});
	  	return( "<img style='width:50px; float:left' class='flower' src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'><span class='mon sound3' style='width:300px; float:right;'></span>" );
	  },
	  attachTo: '#ctrl left',
	  buttons: [
	  	{
	  		text: "Done",
	  		action: tour.next
	  	}
	  ]
	});
	tour.addStep('end05', {
	  title: '',
	  text: function(){
	  	window.setTimeout(function(){
	  		$(".flower").attr("src", "//vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124");
	  		write("* Well, I guess this is the end of my little tour, and you could start reading the story!", "end05", "01t");
	  	}, 400);
	  	return( "<img style='width:50px; float:left' class='flower' src='/rise.gif'><span class='mon end05' style='width:300px; float:right;'></span>" );
	  },
	});
	tour.addStep('end1', {
	  title: '',
	  text: function(){
	  	ybf.stop();
	  	write("* But I'm not going to let you!", "end1", "02t", function(){
	  		console.log("I've been run!");
	  		$(".blur").click(function(){tour.next()});
	  		$("#kill-flowey").click(function(){tour.next()});
	  		$(".flower").last().off("click");
		  	zToCont.unregister_combo("z");
		  	zToCont.simple_combo("x", function() {
		  	    tour.next();
		  	});
	  	}, {shake: true});
	  	return( "<img style='width:50px; float:left' src='/evil2.gif'><span class='mon end1 shake shake-small shake-little shake-constant' style='width:300px; float:right;'></span><i class='material-icons' id='kill-flowey' style='position: absolute; right: 2px; top: 2px;'>highlight_off</i>" );
	  },
	});
	tour.addStep('end2', {
	  title: '',
	  text: function(){
	  	zToCont.unregister_combo("x");
	  	write("* Did you think that you could just press the little 'x' and all your worries would be gone?   β* Wow. You really ARE an-", "end2", "02t", null, {shake: true});
	  	return( "<img style='width:50px; float:left' class='flower' src='/grin.gif'><span class='mon end2 shake shake-small shake-little shake-constant' style='width:300px; float:right;'></span>" );
	  },
	});
	tour.addStep('end3', {
	  title: '',
	  text: function(){
	  	ybf.stop();
	  	zToCont.unregister_combo("z");
	  	$(".flower").off("click");
	  	$Aud.mute = false;
	  	window.setTimeout(function(){$Aud.play("Memory");}, 1000);
	  	write("* " + $Story.name + "? What's going on?   β* Who are you talking to?", "end3", "az", function(){
	  		zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  	    tour.next();
		  	});
		  	$(".shepherd-content").click(function(){
		  		tour.next();
		  	});
	  	});
	  	return("<img class='asriel' src='/az.gif'><span class='mon end3' style='width:290px; float:right;'></span>");
	  },
	});
	tour.addStep('end4', {
	  title: '',
	  text: function(){
	  	$(".shepherd-content").on("click", function(){tour.next();});
	  	$(".shepherd-text").on("click", function(){tour.next();});
	  	write("* NOTHING!! NO ONE!!!", "end4", "talk", function(){
	  		zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  	    tour.next();
		  	});
		  	$(".shepherd-content").click(function(){
		  		tour.next();
		  	});
	  	});
	  	return("<span class='mon end4'></span>");
	  },
	});
	tour.addStep('end5', {
	  title: '',
	  text: function(){
	  	write("* Come on, then; Mom, Dad, and Frisk are at the table! Let's eat!", "end5", "az", function(){
	  		zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  	    tour.next();
		  	});
		  	$(".shepherd-content").click(function(){
		  		tour.next();
		  	});
	  	});
	  	return("<img class='asriel' src='/az.gif'><span class='mon end5' style='width:290px; float:right;'></span>");
	  },
	});
	tour.addStep('end6', {
	  title: '',
	  text: function(){
	  	$(".shepherd-content").on("click", function(){tour.next();});
	  	$(".shepherd-text").on("click", function(){tour.next();});
	  	write("* On my way, Az!   β* (Sorry about that, I'll leave.   β* Enjoy the story. See you soon!)", "end6", "talk", function(){
	  		zToCont.unregister_combo("z");
		  	zToCont.simple_combo("z", function() {
		  	    tour.next();
		  	});
		  	$(".shepherd-content").click(function(){
		  		tour.next();
		  	});
	  	});
	  	return("<span class='mon end6'></span>");
	  },
	});
	tour.addStep('ender', {
	  title: '',
	  text: function(){
	  	tour.complete();
	  	$(".nxt").off("click", nopeyFlowey);
	  	$(".blur").fadeOut(2000).off("click");
	  },
	});
var musics = new Object();
var astate = document.querySelector("#audio-controls");
console.log("Welp, ya found me.");
var mute = false;
var nopeyFlowey = function(){
	$(".flower").last().off("click");
	write("* Hey, there, buddy.   β* Don't you know it's rude to interrupt someone while they're talking?", tour.currentStep.id, "01t", function() {
		$Story._previous();
	});
	$(".flower").attr("src", "/sassy.gif");
};
var ohShitFlowey = function(){
	$(".flower").last().off("click");
	write("* So you think you know how to do this, do you?   β* You little-", tour.currentStep.id, "02t");
	$(".flower").attr("src", "/evil2.gif");
	$(".flower").off("click"); 
	$(".flower").click(function(){tour.show("end3")});
	$Story._previous();
	zToCont.unregister_combo("z");
	zToCont.simple_combo("z", function() {
	  	    tour.show("end3");
	  	});
	  	window.setTimeout(function(){
		  	$(".shepherd-content").on("click", function(){tour.next();});
		  	$(".shepherd-text").on("click", function(){tour.next();});
	  	}, 100);
	  	$(".blur").click(function(){tour.next()});
}

function pa(action, options) {
	if (action == "sfx") {
		document.querySelector("#" + options.name).play();
	}
}

function canc() {
	$("#nameCanc").hide();
	$("#nameConf").html("DONE").show();
	$(".modal-content").html('<form action="javascript:showS()"><label for="name"><span class="mon" id="namelabel">Name the fallen child.</label><input id="name" type="text" class="validate"></form>');
	$("#nameConf").off("click", st);
	namecnt = false;
}
var st = function() {
	$Aud.loadSFX(["01t", "02t", "az", "talk"], ".wav");
	document.querySelector("#story").name = nam;
	localStorage.charaName = nam;
	$("#nameConf").hide();
	$("#nameCanc").hide();
	$(".modal-content").html("<div class='shake-little shake-constant' style='width: 100%; text-align:center; padding:auto'><h1 class='mon centered' id='name'>" + nam + "</h1></div>");
	$(".white").fadeIn(5000, function() {
		$("#modal1").closeModal();
		window.setTimeout(function() {
			$(".white").fadeOut(40, function() {
				$Aud.play("Memory");
				window.setTimeout(function(){
					tour.start();
				}, 1000);
			});
			window.scrollTo(0, 0);
		}, 600);
	});
};
var namecnt = false;
var zToCont;

function showS() {
	if (!namecnt) {
		nam = $("#name").val();
		$("#nameConf").html("YES").on("click", st);
		$(".modal-content").html("<h5 class='mon' id='nameStatus' style='width:35%;'>Is this correct?</h5><div class='shake-little shake-constant' style='width: 100%; text-align:center; padding:auto'><h1 class='mon' id='name'>" + nam + "</h1></div>");
		$("#nameCanc").show();
	}
	namecnt = true;
	if (nam.toLowerCase() == "frisk") {
		$("#nameStatus").html("WARNING: This name will make your life hell (Especially in Part 4). Read anyway?");
	}
	if (nam.toLowerCase() == "chara") {
		$("#nameStatus").html("The true name.");
	}
	if (nam.toLowerCase() == "asriel") {
		$("#nameStatus").html("...");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "flowey") {
		$("#nameStatus").html("I already CHOSE that name.");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "sans") {
		$("#nameStatus").html("nope.");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "toriel") {
		$("#nameStatus").html("I think you should think of your own name, my child.");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "gaster") {
		$("#white").fadeIn(20, function() {
			location.reload();
		});
	}
	if (nam.toLowerCase() == "temmie") {
		$("#nameStatus").html("hOI!");
	}
	if (nam.toLowerCase() == "asgore") {
		$("#nameStatus").html("You cannot.");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "undyne") {
		$("#nameStatus").html("Get your OWN name!");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "alphys") {
		$("#nameStatus").html("D-don't do that!");
		$("#nameConf").hide();
	}
	if (nam.toLowerCase() == "shyren") {
		$("#nameStatus").html("...?");
	}
	if (nam.toLowerCase() == "aaron") {
		$("#nameStatus").html("Is this name correct? ;)");
	}
	if (nam.toLowerCase() == "mercy") {
		$("#nameStatus").html("That's a little on-the-nose, isn't it..?");
	}
	if (nam.toLowerCase() == "murder") {
		$("#nameStatus").html("That's a little on-the-nose, isn't it..?");
	}
	if (nam.toLowerCase() == "gerson") {
		$("#nameStatus").html("Wah ha ha! Why not?");
	}
	if (nam.toLowerCase() == "napsta" || nam.toLowerCase() == "napstablook" || nam.toLowerCase() == "blooky") {
		$("#nameStatus").html(".................<br>(They're powerless to stop you)");
	}
}
var hrefVar = function(item){
  var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
  return svalue ? svalue[1] : svalue;
};
	
$(document).ready(function() {
	$(".white").hide();
	$(".blur").hide();
	$(".dropdown-button").dropdown();
	window.setInterval(function() {
		sSelect();
	}, 500);
	zToCont = new window.keypress.Listener();
	zToCont.simple_combo("z", function() {
		tour.next();
	});
	if(localStorage.charaName == "undefined" || localStorage.charaName == undefined || localStorage.charaName == null){
		if(location.search != ""){
			location.search = "";
		}
		$('.modal-trigger').leanModal({
			dismissible: false, // Modal can be dismissed by clicking outside of the modal
			opacity: 1, // Opacity of modal background
			in_duration: 300, // Transition in duration
			out_duration: 200, // Transition out duration
		});
		$("#modal1").openModal({
			dismissible: false, // Modal can be dismissed by clicking outside of the modal
			opacity: 1, // Opacity of modal background
			in_duration: 100, // Transition in duration
			out_duration: 100, // Transition out duration
		});
		$("#nameCanc").hide();
	}
	else{
		if(location.search != ""){
			location.search = "";
		}
		$('.modal-trigger').leanModal({
			dismissible: false, // Modal can be dismissed by clicking outside of the modal
			opacity: 1, // Opacity of modal background
			in_duration: 300, // Transition in duration
			out_duration: 200, // Transition out duration
		});
		$("#modal2").openModal({
			dismissible: false, // Modal can be dismissed by clicking outside of the modal
			opacity: 1, // Opacity of modal background
			in_duration: 100, // Transition in duration
			out_duration: 100, // Transition out duration
		});
		$("#nameCanc").hide();
	$Story.name = localStorage.charaName;
	}
	var mcJagger = new Hammer(document.getElementById('title'));
	document.getElementById('title').oncontextmenu = chS[0].yup;
	mcJagger.on("swipeleft swiperight", function(ev) {
		chS[0].yup();
	});
	document.oncopy=function(){Materialize.toast("Please don't just copy and paste my work! It's publised under the CC-BY-SA license, but please get the Word Document from my OneDrive or HTML from GitHub instead.", 5000); return false};
});
var chS = [{
	forease: "of use",
	yup: function(){
		Materialize.toast("<h1 class=\"shake-little shake-constant mon\">The Ones Who Don&apos;t QUIT</h1>", 5000, "primary");return false;
	}
}, {
	woot: "nuttin' here now"
}, {
	fire: function() {
		$("#music").animate({
			volume: 0
		}, 2000);
	}
}, {
	fire1: function() {
		$(".nxt").on("click", chS[3].clik);
		$("#music").animate({
			volume: .2
		}, 800);
		window.setTimeout(function() {
			pa("start", {
				name: "Don't Give Up"
			});
			$("#music").animate({
				volume: 1.0
			}, 800);
		}, 800);
	},
	clik: function() {
		pa("sfx", {
			name: "sf01"
		});
		$("#music").animate({
			volume: .0
		}, 800);
		$(".nxt").off("click", chS[3].clik);
	}
}, {
	fire: function() {
		$("#music").animate({
			volume: .0
		}, 4000);
		window.setTimeout(function() {
			$("#music").animate({
				volume: 1.0
			}, 5);
			pa("start", {
				name: "His Theme"
			});
		}, 4100);
	},
	done: false,
}];
var toasties = new Object();
/* global Materialize */
function sSelect() {
	window.setTimeout(function() {
		var st = window.getSelection().toString();
		if (st.match(/Asriel/g) != null && toasties.az != true) {
			toasties.az = true;
			Materialize.toast("<img src='http://vignette4.wikia.nocookie.net/undertale/images/f/f9/Asriel-0.png/revision/latest?cb=20151014093800'>&nbsp;Asriel", 4000, 'accent', function() {
				toasties.az = false;
			});
		}
		if (st.match(/Flowey/g) != null && toasties.flowey != true) {
			toasties.flowey = true;
			Materialize.toast("<img src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'>&nbsp;Flowey", 4000, "accent", function() {
				toasties.flowey = false;
			});
		}
		if (st.match(/Toriel/g) != null && toasties.toriel != true) {
			toasties.toriel = true;
			Materialize.toast("<img src='http://vignette3.wikia.nocookie.net/undertale/images/0/01/Toriel.png/revision/latest/scale-to-width-down/100?cb=20151013235609'>&nbsp;Toriel", 4000, "accent", function() {
				toasties.toriel = false;
			});
		}
		if (st.match(/Asgore/g) != null && toasties.asgore != true) {
			toasties.asgore = true;
			Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/f/f1/Untitled-3.png/revision/latest/scale-to-width-down/100?cb=20151228183442'>&nbsp;Asgore", 4000, "accent", function() {
				toasties.asgore = false;
			});
		}
		if (st.match(document.querySelector("#story").name) != null && toasties.chara != true) {
			toasties.chara = true;
			Materialize.toast("<img src='http://vignette1.wikia.nocookie.net/undertale/images/4/45/Spr_Chara.png/revision/latest/scale-to-width-down/100?cb=20151025095809'>&nbsp;" + document.querySelector("#story").name, 4000, "accent", function() {
				toasties.chara = false;
			});
		}
		if (st.match(/Frisk/g) != null && toasties.frisk != true) {
			toasties.frisk = true;
			Materialize.toast("<img src='http://vignette4.wikia.nocookie.net/undertale/images/d/d3/Frisk.png/revision/latest/scale-to-width-down/100?cb=20151018200133'>&nbsp;Frisk", 4000, "accent", function() {
				toasties.frisk = false;
			});
		}
		if (st.match(/Alphys/g) != null && toasties.alphys != true) {
			toasties.alphys = true;
			Materialize.toast("<img src='http://vignette4.wikia.nocookie.net/undertale/images/4/4b/Alphys.png/revision/latest/scale-to-width-down/100?cb=20160209204241'>&nbsp;Alphys", 4000, "accent", function() {
				toasties.alphys = false;
			});
		}
		if (st.match(/Papyrus/g) != null && toasties.pap != true) {
			toasties.pap = true;
			Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/2/21/Papyrus1.PNG/revision/latest/scale-to-width-down/100?cb=20151207170725'>&nbsp;Papyrus", 4000, "accent", function() {
				toasties.pap = false;
			});
		}
		if (st.match(/Undyne/g) != null && toasties.undyne != true) {
			toasties.undyne = true;
			Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/e/ed/Undyne.gif/revision/latest/scale-to-width-down/100?cb=20151206073203'>&nbsp;Undyne", 4000, "accent", function() {
				toasties.undyne = false;
			});
		}
		if (st.match(/Sans/g) != null && toasties.sans != true) {
			toasties.sans = true;
			Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/4/44/Sansanimated.gif/revision/latest/scale-to-width-down/100?cb=20151219105528'>&nbsp;Sans", 4000, "accent", function() {
				toasties.sans = false;
			});
		}
		if (st.match(/tumblr/g) != null) {
			window.location.href = "https://supermegadexter.tumblr.com";
		}
	}, 5);
}
function reset(){
	localStorage.charaName = undefined;
	$(".white").fadeIn(6000, function(){
		location.href="/";
	});
}