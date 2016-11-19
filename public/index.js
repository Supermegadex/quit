/* global $Aud $Story Howl */
var nam;
var images = [];

var nopey = true;

function preload() {
  var i;
  for ( i = 0; i < arguments.length; i++ ) {
    images[ i ] = new Image();
    images[ i ].src = arguments[ i ];
  }
}
preload(
  "/az.gif",
  "/evil2.gif",
  "/grin.gif",
  "/rise.gif",
  "/sassy.gif",
  "/side.gif",
  "/sidesass.gif",
  "/sanschuckle.png",
  "/sans.png",
  "/sansblink.png"
);
var ybf = new Howl( {
  src: "/music/Your Best Friend.mp3",
  loop: true
} );

function canc() {
  $( "#nameCanc" ).hide();
  $( "#nameConf" ).html( "DONE" ).show();
  $( ".modal-content" ).html( '<form action="javascript:showS()"><label for="name"><span class="mon" id="namelabel">Name the fallen child.</label><input id="name" type="text" class="validate"></form>' );
  $( "#nameConf" ).off( "click", st );
  namecnt = false;
}

var st = function() {
  document.querySelector( "#story" ).name = nam;
  localStorage.charaName = nam;
  $( "#nameConf" ).hide();
  $( "#nameCanc" ).hide();
  $( ".modal-content" ).html( "<div class='shake-little shake-constant' style='width: 100%; text-align:center; padding:auto'><h1 class='mon centered' id='name'>" + nam + "</h1></div>" );
  $( ".white" ).fadeIn( 5000, function() {
    $( "#modal1" ).closeModal();
    window.setTimeout( function() {
      $( ".white" ).fadeOut( 40, function() {
        /* $Aud.play( "Memory" ); */
        ld();
      } );
      window.scrollTo( 0, 0 );
    }, 600 );
  } );
};
var namecnt = false;
var zToCont;

function showS() {
  if ( !namecnt ) {
    nam = $( "#name" ).val();
    $( "#nameConf" ).html( "YES" ).on( "click", st );
    $( ".modal-content" ).html( "<h5 class='mon' id='nameStatus' style='width:35%;'>Is this correct?</h5><div class='shake-little shake-constant' style='width: 100%; text-align:center; padding:auto'><h1 class='mon' id='name'>" + nam + "</h1></div>" );
    $( "#nameCanc" ).show();
  }
  namecnt = true;
  if ( nam.toLowerCase() == "frisk" ) {
    $( "#nameStatus" ).html( "WARNING: This name will make your life hell. Read anyway?" );
  }
  if ( nam.toLowerCase() == "chara" ) {
    $( "#nameStatus" ).html( "The true name." );
  }
  if ( nam.toLowerCase() == "asriel" ) {
    $( "#nameStatus" ).html( "..." );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "flowey" ) {
    $( "#nameStatus" ).html( "I already CHOSE that name." );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "sans" ) {
    $( "#nameStatus" ).html( "nope." );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "toriel" ) {
    $( "#nameStatus" ).html( "I think you should think of your own name, my child." );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "gaster" ) {
    $( "#white" ).fadeIn( 20, function() {
      location.reload();
    } );
  }
  if ( nam.toLowerCase() == "temmie" ) {
    $( "#nameStatus" ).html( "hOI!" );
  }
  if ( nam.toLowerCase() == "asgore" ) {
    $( "#nameStatus" ).html( "You cannot." );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "undyne" ) {
    $( "#nameStatus" ).html( "Get your OWN name!" );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "alphys" ) {
    $( "#nameStatus" ).html( "D-don't do that!" );
    $( "#nameConf" ).hide();
  }
  if ( nam.toLowerCase() == "shyren" ) {
    $( "#nameStatus" ).html( "...?" );
  }
  if ( nam.toLowerCase() == "aaron" ) {
    $( "#nameStatus" ).html( "Is this name correct? ;)" );
  }
  if ( nam.toLowerCase() == "mercy" ) {
    $( "#nameStatus" ).html( "That's a little on-the-nose, isn't it..?" );
  }
  if ( nam.toLowerCase() == "murder" ) {
    $( "#nameStatus" ).html( "That's a little on-the-nose, isn't it..?" );
  }
  if ( nam.toLowerCase() == "gerson" ) {
    $( "#nameStatus" ).html( "Wah ha ha! Why not?" );
  }
  if ( nam.toLowerCase() == "napsta" || nam.toLowerCase() == "napstablook" || nam.toLowerCase() == "blooky" ) {
    $( "#nameStatus" ).html( ".................<br>(They're powerless to stop you)" );
  }
}
var hrefVar = function( item ) {
  var svalue = location.search.match( new RegExp( "[\?\&]" + item + "=([^\&]*)(\&?)", "i" ) );
  return svalue ? svalue[ 1 ] : svalue;
};

$( document ).ready( function() {
  $( ".white" ).hide();
  $( ".blur" ).hide();
  $( ".red" ).hide();
  $( ".dropdown-button" ).dropdown();
  if ( localStorage.charaName == "undefined" || localStorage.charaName == undefined || localStorage.charaName == null ) {
    if ( location.search != "" ) {
      location.search = "";
    }
    $( '.modal-trigger' ).leanModal( {
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: 1, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    } );
    $( "#modal1" ).openModal( {
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: 1, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
    } );
    $( "#nameCanc" ).hide();
  } else {
    if ( location.search != "" ) {
      location.search = "";
    }
    $( '.modal-trigger' ).leanModal( {
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: 1, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    } );
    $( "#modal2" ).openModal( {
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: 1, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
    } );
    $( "#nameCanc" ).hide();
    $Story.name = localStorage.charaName;
    window.setInterval( function() {
      sSelect();
    }, 500 );
  }
  var mcJagger = new Hammer( document.getElementById( 'title' ) );
  document.getElementById( 'title' ).oncontextmenu = chS[ 0 ].yup;
  mcJagger.on( "swipeleft swiperight", function( ev ) {
    chS[ 0 ].yup();
  } );
  document.oncopy = function() {
    Materialize.toast( "Please don't just copy and paste my work! It's publised under the CC-BY-SA license, but please get the Word Document from my OneDrive or HTML from GitHub instead.", 5000 );
    return false
  };
} );
var chS = [ {
  forease: "of use",
  yup: function() {
    Materialize.toast( "<h1 class=\"shake-little shake-constant mon\">Don&apos;t QUIT</h1>", 5000, "primary" );
    return false;
  }
}, {
  woot: "nuttin' here now"
}, {
  fire: function() {
    $( "#music" ).animate( {
      volume: 0
    }, 2000 );
  }
}, {
  fire1: function() {
    $( ".nxt" ).on( "click", chS[ 3 ].clik );
    $( "#music" ).animate( {
      volume: .2
    }, 800 );
    window.setTimeout( function() {
      pa( "start", {
        name: "Don't Give Up"
      } );
      $( "#music" ).animate( {
        volume: 1.0
      }, 800 );
    }, 800 );
  },
  clik: function() {
    pa( "sfx", {
      name: "sf01"
    } );
    $( "#music" ).animate( {
      volume: .0
    }, 800 );
    $( ".nxt" ).off( "click", chS[ 3 ].clik );
  }
}, {
  fire: function() {
    $( "#music" ).animate( {
      volume: .0
    }, 4000 );
    window.setTimeout( function() {
      $( "#music" ).animate( {
        volume: 1.0
      }, 5 );
      pa( "start", {
        name: "His Theme"
      } );
    }, 4100 );
  },
  done: false,
} ];
var toasties = new Object();
/* global Materialize */
function sSelect() {
  window.setTimeout( function() {
    var st = window.getSelection().toString();
    if ( st.match( /Asriel/g ) != null && toasties.az != true ) {
      toasties.az = true;
      Materialize.toast( "<img src='http://vignette4.wikia.nocookie.net/undertale/images/f/f9/Asriel-0.png/revision/latest?cb=20151014093800'>&nbsp;Asriel", 4000, 'accent', function() {
        toasties.az = false;
      } );
    }
    if ( st.match( /Flowey/g ) != null && toasties.flowey != true ) {
      toasties.flowey = true;
      Materialize.toast( "<img src='http://vignette1.wikia.nocookie.net/undertale/images/3/3b/Flowey_Talk_normal.gif/revision/latest/scale-to-width-down/100?cb=20151202211124'>&nbsp;Flowey", 4000, "accent", function() {
        toasties.flowey = false;
      } );
    }
    if ( st.match( /Toriel/g ) != null && toasties.toriel != true ) {
      toasties.toriel = true;
      Materialize.toast( "<img src='http://vignette3.wikia.nocookie.net/undertale/images/0/01/Toriel.png/revision/latest/scale-to-width-down/100?cb=20151013235609'>&nbsp;Toriel", 4000, "accent", function() {
        toasties.toriel = false;
      } );
    }
    if ( st.match( /Asgore/g ) != null && toasties.asgore != true ) {
      toasties.asgore = true;
      Materialize.toast( "<img src='http://vignette2.wikia.nocookie.net/undertale/images/f/f1/Untitled-3.png/revision/latest/scale-to-width-down/100?cb=20151228183442'>&nbsp;Asgore", 4000, "accent", function() {
        toasties.asgore = false;
      } );
    }
    if ( st.match( document.querySelector( "#story" ).name ) != null && toasties.chara != true ) {
      toasties.chara = true;
      Materialize.toast( "<img src='http://vignette1.wikia.nocookie.net/undertale/images/4/45/Spr_Chara.png/revision/latest/scale-to-width-down/100?cb=20151025095809'>&nbsp;" + document.querySelector( "#story" ).name, 4000, "accent", function() {
        toasties.chara = false;
      } );
    }
    if ( st.match( /Frisk/g ) != null && toasties.frisk != true ) {
      toasties.frisk = true;
      Materialize.toast( "<img src='http://vignette4.wikia.nocookie.net/undertale/images/d/d3/Frisk.png/revision/latest/scale-to-width-down/100?cb=20151018200133'>&nbsp;Frisk", 4000, "accent", function() {
        toasties.frisk = false;
      } );
    }
    if ( st.match( /Alphys/g ) != null && toasties.alphys != true ) {
      toasties.alphys = true;
      Materialize.toast( "<img src='http://vignette4.wikia.nocookie.net/undertale/images/4/4b/Alphys.png/revision/latest/scale-to-width-down/100?cb=20160209204241'>&nbsp;Alphys", 4000, "accent", function() {
        toasties.alphys = false;
      } );
    }
    if ( st.match( /Papyrus/g ) != null && toasties.pap != true ) {
      toasties.pap = true;
      Materialize.toast( "<img src='http://vignette2.wikia.nocookie.net/undertale/images/2/21/Papyrus1.PNG/revision/latest/scale-to-width-down/100?cb=20151207170725'>&nbsp;Papyrus", 4000, "accent", function() {
        toasties.pap = false;
      } );
    }
    if ( st.match( /Undyne/g ) != null && toasties.undyne != true ) {
      toasties.undyne = true;
      Materialize.toast( "<img src='http://vignette2.wikia.nocookie.net/undertale/images/e/ed/Undyne.gif/revision/latest/scale-to-width-down/100?cb=20151206073203'>&nbsp;Undyne", 4000, "accent", function() {
        toasties.undyne = false;
      } );
    }
    if ( st.match( /Sans/g ) != null && toasties.sans != true ) {
      toasties.sans = true;
      Materialize.toast( "<img src='http://vignette2.wikia.nocookie.net/undertale/images/4/44/Sansanimated.gif/revision/latest/scale-to-width-down/100?cb=20151219105528'>&nbsp;Sans", 4000, "accent", function() {
        toasties.sans = false;
      } );
    }
    if ( st.match( /tumblr/g ) != null ) {
      window.location.href = "https://supermegadexter.tumblr.com";
    }
  }, 5 );
}

function reset(tru) {
  delete localStorage.charaName;
  delete localStorage.hasPlayed;
  $( ".white" ).fadeIn( 6000, function() {
    location.href = "/";
  } );
  if(tru){
    delete localStorage.times;
  }
}

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51745540-2', 'auto');
  ga('send', 'pageview');
