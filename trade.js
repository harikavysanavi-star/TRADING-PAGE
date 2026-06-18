function animateValue(id,start,end,duration){

let obj=document.getElementById(id);

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let stepTime=Math.abs(
Math.floor(duration/range)
);

let timer=setInterval(function(){

current+=increment;

obj.innerHTML=current;

if(current==end){

clearInterval(timer);

}

},stepTime);

}

animateValue("traders",0,2500,2000);

animateValue("signals",0,1250,2000);

animateValue("profit",0,92,2000);