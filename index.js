var nam;
var musics = new Object();
var astate = document.querySelector("#audio-controls");
console.log("Hello, fellow developers! Prepare for error hell! If someone would help me with some stuff, I would be grateful! I am talking about some weird Polymer element attribute stuff. If you can help, my information is in the Afterword or the last chapter.");
var mute = false;
function chapter(c){
document.querySelector("#story").chapter = c;
}
function pa(action, options){
if(!mute){
  if(action == "start"){
    document.querySelector("#music").src = "/music/" + options.name + ".mp3";
    document.querySelector("#music").play();
    astate.audio = options.name;
    astate.playing = 1;
  }
  if(action == "play"){
    document.querySelector("#music").play();
    astate.playing = 1;
  }
}
if(action == "stop"){
  document.querySelector("#music").src = "";
  astate.playing = 0;
    astate.audio = "";
}
if(action == "pause"){
  document.querySelector("#music").pause();
  astate.playing = 2;
}
if(action == "sfx"){
  document.querySelector("#" + options.name).play();
}
}
function canc(){
$("#nameCanc").hide();
$("#nameConf").html("DONE").show();
$(".modal-content").html('<form action="javascript:showS()"><label for="name"><span class="mon" id="namelabel">Name the fallen child.</label><input id="name" type="text" class="validate"></form>');
$("#nameConf").off("click", st);
namecnt = false;
}
var st = function(){
document.querySelector("#story").name=nam;
$("#nameConf").hide();
$("#nameCanc").hide();
$(".modal-content").html("<div class='shake-little shake-constant' style='width: 100%; text-align:center; padding:auto'><h1 class='mon centered' id='name'>" + nam + "</h1></div>");
$(".white").fadeIn(5000, function(){
  $("#modal1").closeModal();
  window.setTimeout(function(){
    $(".white").fadeOut(40, function(){
      window.setTimeout(function(){
        pa("play");
      }, 1000)
    });
    window.scrollTo(0, 0);
  }, 600);
});
window.setInterval(function() {
    sSelect();
}, 500);
};
var namecnt = false;
function showS(){
if(!namecnt){
nam = $("#name").val();
$("#nameConf").html("YES").on("click", st);
$(".modal-content").html("<h5 class='mon' id='nameStatus' style='width:35%;'>Is this correct?</h5><div class='shake-little shake-constant' style='width: 100%; text-align:center; padding:auto'><h1 class='mon' id='name'>" + nam + "</h1></div>");
$("#nameCanc").show();
}
namecnt = true;
if(nam.toLowerCase() == "frisk"){
  $("#nameStatus").html("WARNING: This name will make your life hell (Especially in Part 4). Read anyway?");
}if(nam.toLowerCase() == "chara"){
  $("#nameStatus").html("The true name.");
}if(nam.toLowerCase() == "asriel"){
  $("#nameStatus").html("...");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "flowey"){
  $("#nameStatus").html("I already CHOSE that name.");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "sans"){
  $("#nameStatus").html("nope.");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "toriel"){
  $("#nameStatus").html("I think you should think of your own name, my child.");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "gaster"){
  $("#white").fadeIn(20, function(){
    location.reload();
  });
}if(nam.toLowerCase() == "temmie"){
  $("#nameStatus").html("hOI!");
}if(nam.toLowerCase() == "asgore"){
  $("#nameStatus").html("You cannot.");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "undyne"){
  $("#nameStatus").html("Get your OWN name!");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "alphys"){
  $("#nameStatus").html("D-don't do that!");
  $("#nameConf").hide();
}if(nam.toLowerCase() == "shyren"){
  $("#nameStatus").html("...?");
}if(nam.toLowerCase() == "aaron"){
  $("#nameStatus").html("Is this name correct? ;)");
}if(nam.toLowerCase() == "mercy"){
  $("#nameStatus").html("That's a little on-the-nose, isn't it..?");
}if(nam.toLowerCase() == "gerson"){
  $("#nameStatus").html("Wah ha ha! Why not?");
}if(nam.toLowerCase() == "napsta" || nam.toLowerCase() == "napstablook" || nam.toLowerCase() == "blooky"){
  $("#nameStatus").html(".................<br>(They're powerless to stop you)");
}
}
$( document ).ready(function(){
$(".dropdown-button").dropdown();
    
 $('.modal-trigger').leanModal({
dismissible: false, // Modal can be dismissed by clicking outside of the modal
opacity: 1, // Opacity of modal background
in_duration: 300, // Transition in duration
out_duration: 200, // Transition out duration
}
);
$("#modal1").openModal({
dismissible: false, // Modal can be dismissed by clicking outside of the modal
opacity: 1, // Opacity of modal background
in_duration: 100, // Transition in duration
out_duration: 100, // Transition out duration
});
$("#nameCanc").hide();
$(".white").hide();
});

var chS = [
{
  forease: "of use",
},
{
  woot: "nuttin' here now"
},
{
  fire: function(){
    $("#music").animate({volume: 0}, 2000);
  }
},
{
  fire1: function(){
    $(".nxt").on("click", chS[3].clik);
    $("#music").animate({volume: .2}, 800);
    window.setTimeout(function(){
      pa("start", {name: "Don't Give Up"});
      $("#music").animate({volume: 1.0}, 800);
    }, 800);
  },
  clik: function(){
    pa("sfx", {name: "sf01"});
    $("#music").animate({volume: .0}, 800);
    $(".nxt").off("click", chS[3].clik);
  }
},
{
  fire: function(){
    $("#music").animate({volume: .0}, 4000);
    window.setTimeout(function(){
      $("#music").animate({volume: 1.0}, 5);
      pa("start", {name: "His Theme"});
    }, 4100);
  },
  done: false,
}
];

var toasties = new Object();
/* global Materialize */

function sSelect() {
window.setTimeout(function(){
  var st = window.getSelection().toString();
  if(st.match(/Asriel/g) != null && toasties.az != true){
    toasties.az = true;
    Materialize.toast("<img src='http://vignette4.wikia.nocookie.net/undertale/images/f/f9/Asriel-0.png/revision/latest?cb=20151014093800'>&nbsp;Asriel", 4000, 'AzT', function(){
      toasties.az = false;
    });
  }
  if(st.match(/Flowey/g) != null && toasties.flowey != true){
    toasties.flowey = true;
    Materialize.toast("<img src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'>&nbsp;Flowey", 4000, "FloweyT", function(){
      toasties.flowey = false;
    });
  }
  if(st.match(/Toriel/g) != null && toasties.toriel != true){
    toasties.toriel = true;
    Materialize.toast("<img src='http://vignette3.wikia.nocookie.net/undertale/images/0/01/Toriel.png/revision/latest/scale-to-width-down/100?cb=20151013235609'>&nbsp;Toriel", 4000, "TorielT", function(){
      toasties.toriel = false;
    });
  }
  if(st.match(/Asgore/g) != null && toasties.asgore != true){
    toasties.asgore = true;
    Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/f/f1/Untitled-3.png/revision/latest/scale-to-width-down/100?cb=20151228183442'>&nbsp;Asgore", 4000, "AsgoreT", function() {
        toasties.asgore = false;
    });
  }
  if(st.match(document.querySelector("#story").name) != null && toasties.chara != true){
    toasties.chara = true;
    Materialize.toast("<img src='http://vignette1.wikia.nocookie.net/undertale/images/4/45/Spr_Chara.png/revision/latestscale-to-width-down/100?cb=20151025095809'>&nbsp;" + document.querySelector("#story").name, 4000, "CharaT", function() {
        toasties.chara = false;
    });
  }
  if(st.match(/Frisk/g) != null && toasties.frisk != true){
    toasties.frisk = true;
    Materialize.toast("<img src='http://vignette4.wikia.nocookie.net/undertale/images/d/d3/Frisk.png/revision/latest/scale-to-width-down/100?cb=20151018200133'>&nbsp;Frisk", 4000, "friskT", function() {
        toasties.frisk = false;
    });
  }
  if(st.match(/Papyrus/g) != null && toasties.pap != true){
    toasties.pap = true;
    Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/2/21/Papyrus1.PNG/revision/latest/scale-to-width-down/100?cb=20151207170725'>&nbsp;Papyrus", 4000, "PapyrusT", function() {
        toasties.pap = false;
    });
  }
  if(st.match(/Sans/g) != null && toasties.sans != true){
    toasties.sans = true;
    Materialize.toast("<img src='http://vignette2.wikia.nocookie.net/undertale/images/4/44/Sansanimated.gif/revision/latest/scale-to-width-down/100?cb=20151219105528'>&nbsp;Sans", 4000, "PapyrusT", function() {
        toasties.sans = false;
    });
  }
}, 5);
}