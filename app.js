var circles = [];
var x=  Math.floor(Math.random() * 3);
var background = document.querySelector("body");
var cap = document.querySelector("p");
var sounds ={
    1: new Howl({
        src: ["Sounds/corona.mp3"]
    }), 
    2: new Howl({
        src: ["Sounds/clay.mp3"]
    }), 
    3: new Howl({
        src: ["Sounds/bubbles.mp3"]
    }),
    4: new Howl({
        src: ["Sounds/confetti.mp3"]
    }),
    5: new Howl({
        src: ["Sounds/flash-1.mp3"]
    }),
    6: new Howl({
        src: ["Sounds/flash-2.mp3"]
    }),
    7: new Howl({
        src: ["Sounds/flash-3.mp3"]
    }),
    8: new Howl({
        src: ["Sounds/glimmer.mp3"]
    }),
    9: new Howl({
        src: ["Sounds/moon.mp3"]
    }),
    10: new Howl({
        src: ["Sounds/pinwheel.mp3"]
    }),
    11: new Howl({
        src: ["Sounds/piston-1.mp3"]
    }),
    12: new Howl({
        src: ["Sounds/piston-2.mp3"]
    }),
    13: new Howl({
        src: ["Sounds/prism-1.mp3"]
    }),
    14: new Howl({
        src: ["Sounds/prism-2.mp3"]
    }),
    15: new Howl({
        src: ["Sounds/splits.mp3"]
    }),
    16: new Howl({
        src: ["Sounds/squiggle.mp3"]
    }),
    17: new Howl({
        src: ["Sounds/strike.mp3"]
    }),
    18: new Howl({
        src: ["Sounds/suspension.mp3"]
    }),
    19: new Howl({
        src: ["Sounds/timer.mp3"]
    }),
    20: new Howl({
        src: ["Sounds/ufo.mp3"]
    }),
    21: new Howl({
        src: ["Sounds/veil.mp3"]
    }),

    22: new Howl({
        src: ["Sounds/wipe.mp3"]
    }),
    23: new Howl({
        src: ["Sounds/zig-zag.mp3"]
    }),
    24: new Howl({
        src: ["Sounds/B/corona.mp3"]
    }), 
    25: new Howl({
        src: ["Sounds/B/clay.mp3"]
    }), 
    26: new Howl({
        src: ["Sounds/B/bubbles.mp3"]
    }),
    27: new Howl({
        src: ["Sounds/B/confetti.mp3"]
    }),
    28: new Howl({
        src: ["Sounds/B/flash-1.mp3"]
    }),
    29: new Howl({
        src: ["Sounds/B/flash-2.mp3"]
    }),
    30: new Howl({
        src: ["Sounds/B/flash-3.mp3"]
    }),
    31: new Howl({
        src: ["Sounds/B/glimmer.mp3"]
    }),
    32: new Howl({
        src: ["Sounds/B/moon.mp3"]
    }),
    33: new Howl({
        src: ["Sounds/B/pinwheel.mp3"]
    }),
    34: new Howl({
        src: ["Sounds/B/piston-1.mp3"]
    }),
    35: new Howl({
        src: ["Sounds/B/piston-2.mp3"]
    }),
    36: new Howl({
        src: ["Sounds/B/prism-1.mp3"]
    }),
    37: new Howl({
        src: ["Sounds/B/prism-2.mp3"]
    }),
    38: new Howl({
        src: ["Sounds/B/splits.mp3"]
    }),
    39: new Howl({
        src: ["Sounds/B/squiggle.mp3"]
    }),
    40: new Howl({
        src: ["Sounds/B/strike.mp3"]
    }),
    41: new Howl({
        src: ["Sounds/B/suspension.mp3"]
    }),
    42: new Howl({
        src: ["Sounds/B/timer.mp3"]
    }),
    43: new Howl({
        src: ["Sounds/B/ufo.mp3"]
    }),
    44: new Howl({
        src: ["Sounds/B/veil.mp3"]
    }),

    45: new Howl({
        src: ["Sounds/B/wipe.mp3"]
    }),
    46: new Howl({
        src: ["Sounds/B/zig-zag.mp3"]
    }),
    47: new Howl({
        src: ["Sounds/B/corona.mp3"]
    }), 
    48: new Howl({
        src: ["Sounds/B/clay.mp3"]
    }), 
    49: new Howl({
        src: ["Sounds/B/bubbles.mp3"]
    }),
    50: new Howl({
        src: ["Sounds/B/confetti.mp3"]
    }),
    60: new Howl({
        src: ["Sounds/B/flash-1.mp3"]
    }),
    61: new Howl({
        src: ["Sounds/B/flash-2.mp3"]
    }),
    62: new Howl({
        src: ["Sounds/B/flash-3.mp3"]
    }),
    63: new Howl({
        src: ["Sounds/B/glimmer.mp3"]
    }),
    64: new Howl({
        src: ["Sounds/B/moon.mp3"]
    }),
    65: new Howl({
        src: ["Sounds/B/pinwheel.mp3"]
    }),
    66: new Howl({
        src: ["Sounds/B/piston-1.mp3"]
    }),
    67: new Howl({
        src: ["Sounds/B/piston-2.mp3"]
    }),
    68: new Howl({
        src: ["Sounds/B/prism-1.mp3"]
    }),
    69: new Howl({
        src: ["Sounds/B/prism-2.mp3"]
    }),
    70: new Howl({
        src: ["Sounds/B/splits.mp3"]
    }),
    80: new Howl({
        src: ["Sounds/B/squiggle.mp3"]
    }),
    81: new Howl({
        src: ["Sounds/B/strike.mp3"]
    }),
    82: new Howl({
        src: ["Sounds/B/suspension.mp3"]
    }),
    83: new Howl({
        src: ["Sounds/B/timer.mp3"]
    }),
    84: new Howl({
        src: ["Sounds/B/ufo.mp3"]
    }),
    85: new Howl({
        src: ["Sounds/B/veil.mp3"]
    }),

    86: new Howl({
        src: ["Sounds/B/wipe.mp3"]
    }),
    87: new Howl({
        src: ["Sounds/B/zig-zag.mp3"]
    }),


    
}

function onKeyDown(event){
    cap.style.display = "none";
    x=  Math.floor(Math.random() * 88);
    sounds[x].play();
    var point = Point.random() * (new Point(view.size.width, view.size.height));
    var newCircle= new Path.Circle(point, Math.ceil(Math.random() * 1000));
    var r= Math.ceil(Math.random() * 255);
    var g= Math.ceil(Math.random() * 255);
    var b= Math.ceil(Math.random() * 255);
    newCircle.fillColor= "rgb(" + r + ", " + g + ", " + b + ")";

    var a= Math.ceil(Math.random() * 255);
    var d= Math.ceil(Math.random() * 255);
    var c= Math.ceil(Math.random() * 255);
    background.style.background="rgb(" + a + ", " + d + ", " + c + ")";
    
    circles.push(newCircle);
    

}

function onFrame(event){
    for ( var i=0 ; i<circles.length;  i++){
        circles[i].fillColor.hue +=1;
        circles[i].scale(0.9);
    }
}








