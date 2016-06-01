var script2;
$(function() {
    script2 = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-theme-dark'
        }
    });

    script2.addStep('01', {
        title: 'Howdy!',
        text: function() {
            $(".blur").fadeIn(500);
            write("* Hey, there! I told you I'd see you, soon!   \\n* Are you enjoying the story?", "01", "talk", function() {
              $( ".shepherd-content" ).click( function() {
                tour.next();
              } );
            });
            return ("<span class='mon 01' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('015', {
        title: 'Howdy!',
        text: function() {
            write("* This next bit isn't my favorite.   \\n* I kinda do some stupid stuff.", "015", "talk", function() {
              $( ".shepherd-content" ).click( function() {
                tour.next();
              } );
            });
            return ("<span class='mon 015' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('02', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* But that's alright!   \\n* You're okay, now, aren't you?", "02", "az", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<img class='asriel' src='/az.gif' /><span class='mon 02' style='width: 300px; float:right;'></span>");
        },
    });

    script2.addStep('025', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* Howdy!   \\n* So you're who " + $Story.name + " was talking to earlier!", "025", "az");
            }, 100);
            return ("<img class='asriel' src='/az.gif' /><span class='mon 025' style='width: 300px; float:right;'></span>");
        },
    });

    script2.addStep('03', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* Hey, Az!   \\n* Yep. This would be them!", "03", "talk", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<span class='mon 03' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('035', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* I'm showing them my story.", "035", "talk", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<span class='mon 035' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('04', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* Well, I hope they like it!   \\n* After all, It is my and Frisk's story, too.", "04", "az", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<img class='asriel' src='/az.gif' /><span class='mon 04' style='width: 300px; float:right;'></span>");
        },
    });

    script2.addStep('05', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* Very true.   \\n* Anyway, SOMEONE replaced this with some non-canon stuff.", "05", "talk", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<span class='mon 05' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('055', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* It portrays me as even WORSE than I actually was.   \\n* Isn't that right, 'Dubs?", "055", "talk", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<span class='mon 055' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('06', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("THAT'S TRUE, ACTUALLY; DESPITE WHAT MANY MAY BE LED TO BELIEVE.", "06", "WD", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                }, { delay: 100 });
            }, 100);
            return ("<span class='wd 06' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('065', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write($Story.name.toUpperCase() + " WAS VERY GOOD COMPANY, AS WAS LITTLE FLUFFY AZ, HERE.", "065", "WD", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                }, { delay: 100 });
            }, 100);
            return ("<span class='wd 065' style='width: 100%; float:right;'></span>");
        },
    });

    script2.addStep('07', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* Aw, that's kind of you, 'Dubs!", "07", "az", function() {
                  $( ".shepherd-content" ).click( function() {
                    tour.next();
                  } );
                });
            }, 100);
            return ("<img class='asriel' src='/az.gif' /><span class='mon 07' style='width: 300px; float:right;'></span>");
        },
    });

    script2.addStep('08', {
        title: 'Howdy!',
        text: function() {
            setTimeout(function() {
                write("* Ah, hello, there!   \\n* I am \\yToriel\\//span;, the caretaker of these children.", "08", "az");
            }, 100);
            return ("<img class='asriel' style='z-index: 100' src='/torieltalk1.gif' /><img src='/torielbody.png' style='position: absolute; bottom: 25px; z-index: 90;' /><span class='mon 08' style='width: 290px; float:right;'></span>");
        },
    });

        script2.addStep('09', {
            title: 'Howdy!',
            text: function() {
                setTimeout(function() {
                    write("* Uh... Hi, mom.", "09", "talk");
                }, 100);
                return ("<span class='mon 09' style='width: 100%; float:right;'></span>");
            },
        });


            script2.addStep('010', {
                title: 'Howdy!',
                text: function() {
                    setTimeout(function() {
                        write("* Aw, that's kind of you, 'Dubs!", "07", "az");
                    }, 100);
                    return ("<img class='asriel' src='/az.gif' /><span class='mon 07' style='width: 300px; float:right;'></span>");
                },
            });


    script2.addStep('ender', {
        title: '',
        text: function() {
            tour.complete();
            $(".nxt").off("click", nopeyFlowey);
            $(".blur").fadeOut(2000).off("click");
        },
    });
});
