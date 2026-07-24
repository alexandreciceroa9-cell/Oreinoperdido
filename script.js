const titulo=document.getElementById("titulo");

let brilho=15;

let sobe=true;

setInterval(()=>{

if(sobe){

brilho++;

if(brilho>=35)sobe=false;

}else{

brilho--;

if(brilho<=10)sobe=true;

}

titulo.style.textShadow=
`0 0 ${brilho}px gold,
0 0 ${brilho*2}px orange,
0 0 ${brilho*3}px yellow`;

titulo.style.transform=
`scale(${1+brilho/300})`;

},40);

// Partículas douradas

for(let i=0;i<40;i++){

criarParticula();

}

function criarParticula(){

const p=document.createElement("div");

p.style.position="fixed";

p.style.width="6px";

p.style.height="6px";

p.style.borderRadius="50%";

p.style.background="gold";

p.style.left=Math.random()*window.innerWidth+"px";

p.style.top=window.innerHeight+"px";

p.style.opacity="0.8";

p.style.pointerEvents="none";

document.body.appendChild(p);

let y=window.innerHeight;

let vel=1+Math.random()*2;

let x=parseFloat(p.style.left);

setInterval(()=>{

y-=vel;

x+=Math.sin(y/30);

p.style.top=y+"px";

p.style.left=x+"px";

if(y<-20){

y=window.innerHeight+Math.random()*100;

x=Math.random()*window.innerWidth;

}

},20);

}