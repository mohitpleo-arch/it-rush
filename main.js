const c=document.getElementById('game');const ctx=c.getContext('2d');
let y=600,speed=2,score=0,gameOver=false;
function loop(){
 ctx.fillStyle='#111827';ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle='#22c55e';ctx.fillRect(200,y,40,40);
 ctx.fillStyle='#e2e8f0';ctx.fillText('Score:'+score,10,20);
 if(!gameOver){y-=speed;score++;if(y<0){y=600;}}
 requestAnimationFrame(loop);
}
loop();