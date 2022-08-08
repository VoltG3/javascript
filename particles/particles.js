const options = {
    
    maxSpeed : 5,
    spacing : 5,     
    particleWidth : 1,
    particleHeight : 100,
    weather : 0,
    color1 : '#3B8686',
    color2 : '#79BD9A',
    color3 : '#A8DBA8',
    color4 : '#0B486B'  
}

function setSpeed(x){ options.maxSpeed = x }
function setSpacing(x) { options.spacing = x }
function setWeather(x) { options.weather = x }
function setParticleWidth(x) { options.particleWidth = x }
function setParticleHeight(x) { options.particleHeight = x }

function getSpeed(){ return options.maxSpeed }
function getSpacing() { return options.spacing }
function getWeather() { return options.weather }
function getParticleWidth() { return options.particleWidth }
function getParticleHeight() { return options.particleHeight }

let count = null;
function counter(x){
    console.log('counter -> ', x)
}

function EXECUTE(){
    (function(){

        // DECLARE variables
        const c = document.getElementById("landscape"),
        ctx = c.getContext("2d");

            c.width = innerWidth;
            c.height = innerHeight;
        
        console.log('c.width  ->', c.width)
        console.log('c.height ->', c.height)

        let lines = [],
            xSpacing = 0, // padding
            n = innerWidth / getSpacing(),
            colors = [ options.color1, options.color2, options.color3, options.color4 ]
        
        // CONSTRUCT particles
      
        for (let i = 0; i < n; i++){
            xSpacing += getSpacing();

            lines.push({
                x: xSpacing,
                y: Math.round(Math.random()*c.height),
                width: getParticleWidth(),
                height: Math.round(Math.random()*(innerHeight / getParticleHeight())),
                speed: Math.random()* getSpeed() + 1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
   
        // ITERATE particles
        function stdCout(){
            ctx.clearRect(0, 0, c.width, c.height);
            
            for(let i = 0; i < n; i++) {
   
                ctx.fillStyle = lines[i].color;
              
                ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
                    lines[i].y += lines[i].speed;
                
                if (lines[i].y > c.height) {
                    lines[i].y = 0 - lines[i].height;
                }   

                // count falled particles
               /*  if (lines[i].x < c.width) {
                    count += 1
                    counter(count)
                } */

           
 
            } requestAnimationFrame(stdCout);    
        } stdCout();

    objCircle() // !

    }());

} EXECUTE();

function objCircle(){
    let ctx = document.querySelector("canvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 90);
    // control1=(10,10) control2=(90,10) goal=(50,90)
    ctx.bezierCurveTo(10, 10, 90, 10, 50, 90);
    ctx.lineTo(90, 10);
    ctx.lineTo(10, 10);
    ctx.closePath();
    ctx.stroke();
}


