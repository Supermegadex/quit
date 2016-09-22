var dialogue;
Polymer({
  is: "dialog-box",
  properties:{

    // setting this sets the position of the dialog box
    position: {
      type: String,
      value: "bottom",
      observer: "_move"
    },

    // sets the portrait of the speaking character as enabled or disabled
    face: {
      type: Boolean,
      value: false,
      observer: "_update"
    },

    // sets the portrait image of the speaking character
    sprite: {
      type: String,
      observer: "_update",
      value: null
    },

    // whether or not the dialog box is visible
    visible: {
      type: Boolean,
      value: false,
      observer: "_update"
    }
  },
  ready: function(){

    // sets window.dialogue as this object
    dialogue = this;

    // prepares the visibility and size of the dialog box
    this._update();
  },

  // updates the position of the dialog box
  _move: function(x){
    x ? this.position = x : false
    switch(this.position){
      case "top":
        this.style.top = "10px"
        this.style.left = 0
        this.style.right = 0;
        this.style.margin = "auto";
        this.style.bottom = "initial";
        break;
      case "bottom":
        this.style.margin = "0";
        this.style.top = "initial";
        this.style.right = "initial";
        this.style.bottom = "5px";
        if(window.innerWidth >= 400){
          this.style.left = String(window.innerWidth / 2 - 200) + "px";
        }
        else{
          this.style.left = "initial";
        }
        break;
      case "center":
        this.style.top = "0";
        this.style.bottom = "0";
        this.style.right = "0";
        this.style.left = "0";
        this.style.margin = "auto";
        break;
      default:
        $(dialogue).css(JSON.parse(this.position));
        break;
    }
  },
  _update: function(){
    if(this.face){
      speechc.style.width = "275px";
    }
    else{
      speechc.style.width = "350px";
    }
    if(this.visible){
      $(dialogue).show();
    }
    else{
      $(dialogue).hide();
    }
  },
  html: "",
  str: null,
  loc: {},
  find: function(string){
    function get(searchStr, str, caseSensitive){
      var startIndex = 0, searchStrLen = searchStr.length;
      var index, indices = [];
      if (!caseSensitive) {
          str = str.toLowerCase();
          searchStr = searchStr.toLowerCase();
      }
      while ((index = str.indexOf(searchStr, startIndex)) > -1) {
          indices.push(index);
          startIndex = index + searchStrLen;
      }
      return indices;
    }
    return([get("\\", string, false), get(";", string, false)])
  },

  changeSprite: function(spr){
    dialogue.sprite = spr;
    return(this);
  },

  enableFace: function(){
    dialogue.face = true;
    return(this);
  },

  skipSlides: function(j){
    var i;
    for (i = 0; i++; i < j){
      this.waiting.pop();
      this.funcs.pop();
    }
    this.start();
  },

  disableFace: function(){
    dialogue.face = false;
    return(this);
  },

  funcs: [],

  voice: {
    add: function(ab, ft){
      for(var i in ab){
        if(typeof this.s[ab[i]] != "object"){
          this.s[ab[i]] = new Howl({
            src: ["/voices/" + ab[i] + "." + ft],
            loop: false
          });
        }
      }
    },

    s: {},

    addRand: function(ab, ft, hm){
      for(var i in ab){
        this.s[ab] = {
          num: hm,
          play: function(){
            this.s[Math.floor(Math.random()*this.num)].play();
          },
          s: [],
        }
        var j = 0;
        while (j < hm) {
          this.s[ab].s[j] = new Howl({
            src: "/voices/" + ab + "/" + String(j+1) + "." + ft,
            loop: false
          });
          j++;
        }
      }
    },
  },

  write: function(string, func){
    var locations = this.find(string);
    this.element = document.querySelector("#speechc");
    this.loc = {};
    var i = 0;
    while (i < locations[0].length){
      this.loc[locations[0][0]] = string.slice(locations[0].shift(), Number(locations[1].shift())+1);
    }
    this.funcs.push(func);
    var subt = 0;
    var first = true;
    for (var i in this.loc){
      string = string.replace(this.loc[i], "");
    }
    for (var i in this.loc){
      if(first){
        first = false;
        subt += this.loc[i].length - 1;
      }
      else{
        this.loc[i-subt] = this.loc[i];
        subt += this.loc[i].length - 1;
        delete this.loc[i];
      }
    }
    var tarr = string.split("");
    for (var i in this.loc){
      tarr.splice(i, 0, this.loc[i]);
    }
    this.waiting.push(tarr);
    return(this);
  },

  resetDefaults: function(){
    this.options = undefined;
    return(this);
  },

  defaults: {
    delay: 50,
    voice: "none",
    next: "z",
    skip: "x",
    noskip: false,
    nonext: false,
  },

  test: function(s, j){
    return s < j ? "something" : "nope"
  },

  keys: new window.keypress.Listener(),

  start: function(options){
    dialogue.arr = dialogue.waiting.shift();
    dialogue.visible = true;
    dialogue.element.innerHTML = "";
    if(typeof options == "object"){
      dialogue.options = Object.assign(this.defaults, options);
    }
    else if(typeof this.options == "undefined"){
      dialogue.options = this.defaults;
    }
    var func = dialogue.funcs.shift();
    if(typeof func == "function"){
      func();
    }
    dialogue.runner(dialogue.options.delay);
    if(!dialogue.options.noskip){
      dialogue.keys.simple_combo(dialogue.options.skip, function(){
        dialogue.skip = true;
      });
    }
    return(this);
  },

  options: undefined,

  callback: null,

  waiting: [],

  editOptions: function(o){
    this.options = Object.assign(this.options, o);
    return(this);
  },

  done: function(callback){
    this.callback = callback;
    return(this);
  },

  runner: function(ms){
    if(this.arr[0] != null && this.arr[0] != undefined && this.arr[0] != "undefined"){
      if(ms != null && ms != undefined && ms != "undefined"){
        this.print(ms);
      }
      else if(!this.skip){
        this.print(this.options.delay);
      }
      else{
        this.go();
      }
    }
    else{
      dialogue.html = "";
      this.skip = false;
      dialogue.keys.unregister_combo(this.options.skip);
      if(dialogue.waiting.length > 0){
        if(!this.options.nonext){
          this.keys.simple_combo(this.options.next, function(){
            dialogue.start();
            dialogue.keys.unregister_combo(dialogue.options.next);
            $(dialogue).off("click");
          });
          $(dialogue).click(function(){
            dialogue.start();
            $(dialogue).off("click");
            dialogue.keys.unregister_combo(dialogue.options.next);
          })
        }
      }
      else{
        dialogue.keys.unregister_combo(this.options.next);
        if(!this.options.nonext){
          this.keys.simple_combo(this.options.next, function(){
            dialogue.keys.unregister_combo(dialogue.options.next);
            $(dialogue).off("click");
            dialogue.visible = false;
            dialogue.callback();
            dialogue.callback = function(){};
          });
          $(dialogue).click(function(){
            $(dialogue).off("click");
            dialogue.visible = false;
            dialogue.keys.unregister_combo(dialogue.options.next);
            dialogue.callback();
            dialogue.callback = function(){};
          });
        }
        else{
          dialogue.callback();
          dialogue.callback = function(){};
        }
        dialogue.id = undefined;
      }
    }
  },

  print: function(ms){
    window.setTimeout(this.go, ms);
    return(this);
  },

  skip: false,

  commands: {
    "w": function(ms){
      if(dialogue.skip){
        dialogue.runner(0);
      }
      else{
        dialogue.runner(ms);
      }
      return(false);
    },

    "c": function(color){
      switch (color){
        case "y":
          return("<span class='y'>");
          break;
        default:
          return(false);
      }
    },

    "b": function(){
      return("<br>");
    },

    "shake": function(time){
      $(dialogue).addClass("shake");
      $(dialogue).addClass("shake-constant");
      window.setTimeout(function(){
        $(dialogue).removeClass("shake");
        $(dialogue).removeClass("shake-constant");
      }, time);
      dialogue.go();
      return(false);
    },

    " ": function(num){
      var i = 0;
      var r = "";
      while (i < num){
        r += "&nbsp;"
        i++;
      }
      return(r);
    },

    voice: function(v){
      dialogue.editOptions({voice: v});
      dialogue.go();
      return(false);
    },

    face: function(f){
      dialogue.enableFace();
      dialogue.changeSprite(f);
      dialogue.go();
      return(false);
    },

    playMusic: function(m){
      $Aud.play(m);
      dialogue.go();
      return(false);
    },

    stopMusic: function(m){
      $Aud.stop(m);
      dialogue.go();
      return(false);
    },

    pauseMusic: function(m){
      $Aud.pause(m);
      dialogue.go();
      return(false);
    },

    next: function(x) {
      dialogue.html = ""
      setTimeout(function(){ dialogue.start() }, x || 0);
    },

    speed: function(ms) {
      dialogue.editOptions({delay: ms});
      dialogue.go();
      return(false);
    }
  },

  id: undefined,

  go: function(){
    var r = dialogue.checker();
    if(!r){
    }
    else{
      if(dialogue.options.voice != "none" && typeof dialogue.voice.s[dialogue.options.voice] == "object" && r != " " && !this.skip){
        dialogue.voice.s[dialogue.options.voice].play();
      }
      dialogue.html += r;
      dialogue.element.innerHTML = dialogue.html;
      dialogue.runner();
    }
  },

  checker: function(){
    var r = this.arr.shift();
    if(r[0] == "\\"){
      var imp = r.replace("\\", "");
      imp = imp.replace(";", "");
      var run = imp.split(":");
      if(run[1] == undefined || run[1] == "undefined" || run[1] == null){
        if(imp[0] == "<"){
          r = imp;
        }
        else{
          r = Function("return(" + imp + ")")();
        }
      }
      else{
        var r = this.commands[run[0]](run[1]);
      }
    }
    return(r);
  },

  arr: [],
  element: null,
  interval: null,
});
