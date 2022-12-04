let playerState='idle';
const dropdown=document.getElementById('animation');
dropdown.addEventListener('change',function(e){
    playerState=e.target.value;
} );

const canvas = document.getElementById('canvas1');
const ctx =canvas.getContext('2d'); 
const CANVAS_WIDTH = canvas.width=600;
const CANVAS_HIEGHT=canvas.height=600;
const playerImage= new Image();
playerImage.src="https://www.frankslaboratory.co.uk/downloads/shadow_dog.png";
const spriteWidth=575;
const spriteHeight=523;

//let frameX=0;
//let frameY=3;
let gameFrame=0;
const staggerFrame=8;
const spriteAnimation=[];
const animationStates=[
    {
        name:'idle',
        frames:7,
    },
    {
        name:'jump',
        frames:7,
    },
    {
        name:'fall',
        frames:7,
    },
    {
        name:'run',
        frames:9,
    },
    {
        name:'dizzy',
        frames:11,
    },
    {
        name:'sit',
        frames:5,
    },
    {
        name:'roll',
        frames:7,
    },
    {
        name:'bite',
        frames:7,
    },
    {
        name:'ko',
        frames:12,
    },
    {
        name:'getHit',
        frames:4,
    }
];
animationStates.forEach((state,index)=>{
    let frames={
        loc:[],
    }
     for(let i=0; i<state.frames;i++ ){
        let positionX=i*spriteWidth;
        let positionY=index*spriteHeight;
        frames.loc.push({positionX,positionY});
     }
     spriteAnimation[state.name]=frames;
});

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HIEGHT);
    let position=Math.floor(gameFrame/staggerFrame)%spriteAnimation
        [playerState].loc.length; //% number is number of frame 
    let frameX=spriteWidth*position;
  let frameY =spriteAnimation[playerState].loc[position].positionY;
    //ctx.fillRect(100,50,100,100);
  /*  ctx.drawImage(playerImage,frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    if(gameFrame%staggerFrame== 0){
        if(frameX<4){
         frameX++;
        }
        else frameX=0;
    }
    */
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);

};
animate();