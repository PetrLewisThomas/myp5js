// function setup(){
//     createCanvas(1800,1800,WEBGL);
//     angleMode(DEGREES)
// }

// function draw(){
    // background(30);

    // rotateX(120);
    // rotateX(10);
    // rotateX(20);
    // rotateX(30);
    // rotateX(30);
    // rotateX(50);
    // rotateX(60);
    // rotateX(70);
    // rotateX(130);
    // rotateX(150);
    // rotateX(70);
    // rotateX(360);
    // rotateX(320);
    // rotateX(360);
    // rotateY(90);
    // rotateY(360);

    // noFill();
    // stroke(255);
    // stroke(205);

    // for(var i=0;i<150;i++){
        // var r = map(sin(frameCount/2),-1,1,255);
        // var g = map(i,0,20,100,255)
        // var b = map(cos(frameCount),-1,1,200,100);
        // var b = map(cos(frameCount),-1,1,255,0);
        // randomizeColors();
        // var red = [153,0,0];
        // // var cyan = map[0,128,128];

        // stroke(r,g,b);
        // stroke(red);

        // rotate(frameCount/3.25);
        // rotate(frameCount/10);


//         beginShape();
//         for(var j=0;j<220;j+=25){
//             var rad = i * 3.5;
//             var x = rad * cos(j);
//             var y = rad * sin(j);
//             // var z = sin(frameCount*2+i*10) * 50;
//             var z = sin(frameCount*0.75+i*120) * 2.5;

//             vertex(x,y,z);
//         }
//         endShape(CLOSE);
//     }
// }

// function randomizeColors() {
//     r = random(255);
//     g = random(255);
//     b = random(255);
// }

//spirograph

// var r1 
// var r2 

// var a1 = 0
// var a2 = 0

// var a1Inc
// var a2Inc

// var prevX
// var prevY

// var col= 100;
// var c= 80;
// var d= 100;


// function setup(){
//     createCanvas(1850,900);
//     angleMode(DEGREES);
//     background(30)

//     r1 = random(150,25)
//     r2 = random(150,25)

//     a1Inc = random(0.1,5)
//     a2Inc = random(0.1,5)
// }

// function draw(){
//     // col,c,d = mouseX/3;
//     // background(col,c,d);
//     translate(width/2,height/2);
//     stroke(255)
//     // fill (250,188, 222);

//     for(var i=0;i<100;i++){
//         var x1 = r1 * cos(a1)
//         var y1 = r1 * sin(a1)
    
//         var x2 = x1 + r2 * cos(a2)
//         var y2 = y1 + r2 * sin(a2)

//         // var r = map(sin(frameCount),-1,1,100,200)
//         // var g = map(cos(frameCount),-1,1,100,200)
//         // var b = map(sin(frameCount),-1,1,200,100)
        
//         // stroke(r,g,b)
    
    
//         line(prevX,prevY,x2,y2)
    
//         prevX = x2
//         prevY = y2
    
//         a1 += a1Inc
//         a2 += a2Inc
//     }


// }

//colorful 3D sphere with circles

function setup(){
    createCanvas(1200,1000,WEBGL);
    angleMode(DEGREES);
}

function draw(){
    background(30)

    // noFill()
    stroke(255)

    var x = sin(frameCount*2)*50
    var y = cos(frameCount)*50
    var z = sin(frameCount*4)*50

    translate(x,y,z)

    rotateX(frameCount)
    rotateY(frameCount/2)
    rotateZ(frameCount/4)


    for(var i=0;i<360;i++){
        push()

        var r = map(sin(i+frameCount),-1,1,200,50)
        var g = map(sin(i+frameCount/3),-1,1,50,200)
        var b = map(cos(i+frameCount/7),-1,1,50,200)

        var magenta = [255,0,255]
        var white = [0,0,0]

        stroke(r,g,b)
        // stroke()

        rotateY(i/2)

        ellipse(0,0,200,200,50)

        pop()
    }

    // ellipse(0,0,200)
}
