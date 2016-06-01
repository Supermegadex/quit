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
    }
  },
  ready: function(){
    dialogue = this;
  },
  _move: function(){
    switch(this.position){
      case "top":
        break;
      default:
        break;
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
  write: function(string, ele){
    var locations = this.find(string);
    this.element = document.createElement("span");
    document.querySelector(ele).appendChild(this.element);
    this.loc = {};
    var i = 0;
    while (i < locations[0].length){
      this.loc[locations[0][0]] = string.slice(locations[0].shift(), Number(locations[1].shift())+1);
    }
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
    this.arr = string.split("");
    for (var i in this.loc){
      this.arr.splice(i, 0, this.loc[i]);
    }
    return(this);
  },

  defaults: {
    delay: 100,
    voice: "none",
  },

  start: function(options){
    if (this.element != null){
      options = Object.assign(this.defaults, options);
      console.log(options);
      this.options = options;
      this.runner(this.options.delay);
      console.log(this.arr);
      return(this);
    }
    else{
      console.error("Uh oh! You need to initialize the framework first!\nBest method: dialogue.write(dialogue, element).start(options)\nOtherwise, you can run dialogue.write() first.")
    }
  },

  options: {},

  callback: null,

  done: function(callback){
    this.callback = callback;
  },

  runner: function(ms){
    if(this.arr[0] != null && this.arr[0] != undefined && this.arr[0] != "undefined"){
      if(ms != null && ms != undefined && ms != "undefined"){
        this.print(ms);
      }
      else{
        this.print(this.options.delay);
      }
    }
    else{
      dialogue.html = "";
      this.callback();
    }
  },

  print: function(ms){
    window.setTimeout(this.go, ms);
  },

  commands: {
    "w": function(ms){
      dialogue.runner(ms);
      return(false);
    },
    "c": function(color){
      switch (color){
        case "y":
          return("<span class='yellow'>")
      }
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
        }
        else{
          r = Function(imp)();
          if(r == undefined || r == "undefined"){
            r = false;
            dialogue.runner();
          }
        }
      }
      else{
        var undyne = this.commands[run[0]](run[1]);
        if(undyne){
          r = "";
        }
        else{
          r = false;
        }
      }
    }
    return(r);
  },

  arr: [],
  element: null,
  interval: null,
});
