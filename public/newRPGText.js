var dialogue;
Polymer({
  is: "dialog-box",
  properties:{
    position: {
      type: String,
      value: "bottom",
      observer: "_move"
    },
    face: {
      type: Boolean,
      value: false,
      observer: "_update"
    },
    sprite: {
      type: String,
      observer: "_update",
      value: null
    },
    visible: {
      type: Boolean,
      value: false,
      observer: "_update"
    }
  },
  ready: function(){
    dialogue = this;
    this._update();
  },
  _move: function(){
    switch(this.position){
      case "top":
        this.style.top = "5px";
        if(window.innerWidth >= 400){
          this.style.left = String(window.innerWidth / 2 - 200) + "px";
        }
        else{
          this.style.left = "initial";
        }
        this.style.bottom = "initial";
        break;
      case "bottom":
        this.style.top = "initial";
        this.style.bottom = "5px";
        if(window.innerWidth >= 400){
          this.style.left = String(window.innerWidth / 2 - 200) + "px";
        }
        else{
          this.style.left = "initial";
        }
      default:
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

  disableFace: function(){
    dialogue.face = false;
    return(this);
  },

  funcs: [],

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
  },

  keys: new window.keypress.Listener(),

  start: function(options){
    this.arr = this.waiting.shift();
    dialogue.visible = true;
    this.element.innerHTML = "";
    if(typeof options == "object"){
      options = Object.assign(this.defaults, options);
    }
    else if(typeof this.options == "undefined"){
      options = this.defaults;
    }
    var func = this.funcs.shift();
    if(typeof func == "function"){
      func();
    }
    this.options = options;
    this.runner(this.options.delay);
    return(this);
  },

  options: undefined,

  callback: null,

  waiting: [],

  editOptions: function(o){
    this.options.assign(o);
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
      this.callback();
    }
  },

  print: function(ms){
    window.setTimeout(this.go, ms);
    return(this);
  },

  skip: false,

  commands: {
    "w": function(ms){
      dialogue.runner(ms);
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
    }
  },

  go: function(){
    var r = dialogue.checker();
    if(!r){
    }
    else{
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
        console.log(imp, imp[0]);
        if(imp[0] == "<"){
          r = imp;
          console.log("Returning an HTML element: " + r);
        }
        else{
          r = Function(imp)();
          if(r == undefined || r == "undefined"){
            r = false;
          }
          console.log("Returning a JavaScript function: " + r);
        }
      }
      else{
        var r /* This code must have been written by Alphys. */ = this.commands[run[0]](run[1]);
        console.log("Returning a custom command: " + r);
      }
    }
    return(r);
  },

  arr: [],
  element: null,
  interval: null,
});
