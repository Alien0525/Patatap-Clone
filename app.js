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
        src: ["Sounds/.mp3"]
    }),
    25: new Howl({
        src: ["Sounds/.mp3"]
    }),
    26: new Howl({
        src: ["Sounds/.mp3"]
    }),
    27: new Howl({
        src: ["Sounds/.mp3"]
    }),
    28: new Howl({
        src: ["Sounds/.mp3"]
    }),
    29: new Howl({
        src: ["Sounds/.mp3"]
    }),
    30: new Howl({
        src: ["Sounds/.mp3"]
    }),

    
}

function onKeyDown(event){
    cap.style.display = "none";
    x=  Math.floor(Math.random() * 24);
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

function onKeyUp(event){
    
}





