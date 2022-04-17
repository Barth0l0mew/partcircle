let canvas= document.querySelector('.partcircle')
let ctx=canvas.getContext('2d');
let w=canvas.width=innerWidth;
let h=canvas.height=innerHeight;
let pi= Math.PI
let val=0.5
let part=50
let partcircle=[]
class Part {
    constructor(){
        this.x=Math.random()*w;
        this.y=Math.random()*h;
        this.valX=Math.random()*(val*2)-val
        this.valY=Math.random()*(val*2)-val
    }
    pos(){
        this.x+this.valX>w||this.x+this.valX<0?this.valX *= -1:this.valX
        this.y+this.valY>h||this.y+this.valY<0?this.valY *= -1:this.valY
        this.x+=this.valX;
        this.y+=this.valY;
    }
    graw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,5,0,2*pi)
        ctx.closePath();
        ctx.fillStyle='#ffaa55';
        ctx.fill();
    }
}
for (let i=0; i< part;i++)
partcircle.push(new Part())
function line (){
    let x1,x2,y1,y2,length,opacity;
    for (let key of partcircle){
        // console.log(key.x)
            for (let key2 of partcircle){
                x1=key.x;
                y1=key.y;
                x2=key2.x;
                y2=key2.y;
                length=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))
                // console.log (x1,x2,y1,y2,length)
                if (length<250){
                    opacity=1-length/250
                    ctx.beginPath();
                    ctx.moveTo(x1,y1);
                    ctx.lineTo(x2,y2);
                    ctx.strokeStyle='rgba(255,40,40,'+opacity+')'
                    ctx.closePath;
                    ctx.stroke();
                }
            }
        }
}
// line()
//part.graw()
function init(){
    ctx.clearRect(0,0,w,h)
    for (let key of partcircle){
    key.pos();
    key.graw()
    
    }
     line()
     requestAnimationFrame(init)
    //setInterval(init,50)
}
init();
